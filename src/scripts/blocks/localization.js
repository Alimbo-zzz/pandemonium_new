

function localization(){

	let ls = window.localStorage;

	if(!ls.pandemonium_lang){
		ls.setItem('pandemonium_lang', 'en');
		check_lang();
	}else{
		check_lang();
	}



	function check_lang(){
		let _lang = ls.pandemonium_lang;

		for(let key in content){
			let elems = document.querySelectorAll(`.lng-${key}`);

			elems.forEach(el=>{
				if(el && content[key][_lang]) el.innerHTML = content[key][_lang];
				else console.log('err', content[key]);
			})
		}

		lng_roadmap(_lang);
		lng_train_roadmap(_lang);
		lng_packs(_lang);
		lng_team(_lang);
		lng_bestiary(_lang);
		lng_lore(_lang)
		lng_map_zone(_lang);

	}



/*_________funcs______________*/


	function lng_roadmap(lang){
			if(m_roadmap){
				let roads = m_roadmap;
				let data = data_roadmap.roadmap;

				roads.forEach((road, i)=>{
					let road_date = road.querySelector('.date');
					let road_name = road.querySelector('.name');
					let road_list = road.querySelectorAll('li');

					if(data[i]){
						road_date.textContent = data[i][lang].date;
						road_name.textContent = data[i][lang].title;

						road_list.forEach((el, index ) => el.textContent = data[i][lang].list[index]);
					}

				})
			}
	}

	function lng_train_roadmap(lang){
			if(m_train_roadmap){
				let roads = m_train_roadmap;
				let data = data_train_roadmap.train_roadmap;


				roads.forEach((road, i)=>{
					let texts = road.querySelectorAll('.text');

					texts.forEach((item, idx) => {
						if(data[i][lang].text[idx]){
							item.textContent = data[i][lang].text[idx];
						}
					});

				})
			}
	}

	function lng_packs(lang){
		if(m_pack_1 && m_pack_2){
			let packs = [
				{dom:m_pack_1, data:data_pack_1.pack_1},
				{dom:m_pack_2, data:data_pack_2.pack_2}
			];

			packs.forEach(el => add_lang(el))

			function add_lang(info){
				info.dom.forEach((el, i)=>{
					let title = el.querySelector('.title');
					let text = el.querySelector('.text');

					if(info.data[i]) {
						title.textContent = info.data[i][lang].title;
						text.textContent = info.data[i][lang].text;
					}

				})
			}

			slider_1.refresh();
			slider_2.refresh();
		}

	}

	function lng_team(lang){
		if(m_team){
			let team = m_team;
			let data = data_team.team;

			team.forEach((el, i)=>{
				let name = el.querySelector('.name');
				let work = el.querySelector('.work');
				let text = el.querySelector('.text');

				if(data[i]){
					name.textContent = data[i][lang].name;
					work.textContent = data[i][lang].work;
					text.innerHTML = data[i][lang].about;
				}
			})
		}
	}

	function lng_bestiary(lang){
		if(m_bestiary_pack_1 && m_bestiary_pack_2 && m_bestiary_pack_3){
			let packs = [
				{dom:m_bestiary_pack_1, data:data_pack_1.pack_1},
				{dom:m_bestiary_pack_2, data:data_pack_2.pack_2},
				{dom:m_bestiary_pack_3, data:data_pack_3.pack_3}
			];

			packs.forEach(el => add_lang(el))

			function add_lang(info){
				let list = info.dom.querySelectorAll('li');


				list.forEach((el, i)=>{
					let title = el.querySelector('.title');
					let text = el.querySelector('.text');

					if(info.data[i]) {
						let data = 	info.data[i][lang];

						text.innerHTML = data.bestiary.text;

						if(!data.bestiary.title || data.bestiary.title === ""){
							title.textContent = data.title;
						} else title.textContent = data.bestiary.title;
					}

				})
			}
		}
	}

	function lng_lore(lang){
		if(m_lore){
			let lore = m_lore;
			let data = data_lore.lore;

			lore.forEach((el, i)=>{
				let title = el.querySelector('.title');
				let placeholder = el.querySelector('.lore-placeholder');
				let text_all = el.querySelectorAll('.lore-text');

				title.textContent = data[i][lang].title;

				if(placeholder && data[i][lang].placeholder) {
					placeholder.textContent = data[i][lang].placeholder
				}

				text_all.forEach((p,idx)=>{
					let text = data[i][lang].text[idx];
					if(text) p.textContent = text;
				})

			})

		}
	}


	function lng_map_zone(){
		if(data_lore){
			let lang = window.localStorage.pandemonium_lang;
			let name_zones = document.querySelectorAll('.map-zone__name');

			name_zones.forEach((el, i)=>{
				el.textContent = data_lore.lore[i][lang].title;
			})
		}
	}






/*________btns____*/

function localization_btns(){

	const btns = document.querySelectorAll('.lng-btn');
	const select = document.querySelector('.btns-lang__select');



	select.onclick = ()=>{
		select.parentNode.classList.toggle('_active');
	}

	btns.forEach(el =>{
		el.onclick = ()=>{
			ls.pandemonium_lang = el.dataset.lang;
			//location.reload();
			check_lang();
			select.parentNode.classList.remove('_active');

			flag();
		}
	})

	function flag(){
		let svg = select.querySelector('use');
		let src = svg.getAttribute('xlink:href');

	  src = src.substr(0, src.length-2);
	  src+= ls.pandemonium_lang;

	  svg.setAttribute('xlink:href', src)
	}

	flag();

}
localization_btns();


}



localization();

setTimeout(localization, 5000);
