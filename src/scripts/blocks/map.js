function map(){
	const map = document.querySelector('.map');
	const zones = map.querySelectorAll('.map-zone__el');
	const images = map.querySelectorAll('img._fix');



	zones.forEach((el, i)=>{
		let point = el.parentNode.parentNode.querySelector(`.map-points__point._${i+1}`);

		point.onclick = (e)=> {
				if(data_lore) map_modal(data_lore.lore[i].id, e);
			}

		if(window.innerWidth > 800){
			el.onmouseover = ()=> add_class(el, i);
			el.onmouseout = ()=> remove_class(el, i);
			add_names_zone(el, i);

			el.onclick = (e)=> {
				if(data_lore) map_modal(data_lore.lore[i].id, e);
			};
		}else{			
			el.ontouchstart = ()=> add_class(el, i);
			el.ontouchend = ()=> remove_class(el, i);
		}
	})


	function add_class(item, index){
		images[index].classList.add('_active');
		item.classList.add('_active');
		return false
	}

	function remove_class(item, index){
		images.forEach(el=> el.classList.remove('_active'));
		item.classList.remove('_active');
		return false
	}

	function add_names_zone(el, i){

		let check_lore_get = setInterval(()=>{
			if(data_lore){
				let lang = window.localStorage.pandemonium_lang;
				let name = el.querySelector('.map-zone__name');

				name.textContent = data_lore.lore[i][lang].title;

				clearInterval(check_lore_get);
			}
		},100)
	}


}

map();



function  map_modal(id, event){
	if(id){
		const modal = document.querySelector('.map-modal');
		const overlay = modal.querySelector('.map-modal__overlay');
		const btn = modal.querySelector('.btn-more');
		const remove_btn = modal.querySelector('.remove');

		remove_btn.onclick = ()=>{
			modal.classList.remove('_active');
		}

		let lang = window.localStorage.pandemonium_lang;

		let m_title = modal.querySelector('.title');
		let m_text = modal.querySelector('.lore-text');

		let title = '';
		let text = '';

		data_lore.lore.forEach(el=>{
			if(el.id == id){
				title = el[lang].title;
				text = el[lang].text[0];
			}
		} )



		m_title.textContent = title;
		m_text.textContent = text;


		modal.classList.add('_active');

		btn.onclick = (e)=> {
			modal.classList.remove('_active');

			let all_h = document.querySelector('.lore').offsetHeight;
			let pos_1 = event.pageY;
			let pos_2 = document.querySelector(`#${id}`).offsetTop;

			let center = event.clientY - (window.innerHeight/2);
			
			let up = (window.innerHeight*36)/100;


			let scroll = ((pos_2 - pos_1) + center)+up;
			window.scrollBy({
				top: scroll,
				left:0,
				behavior: "smooth"
			});

		};
		overlay.onclick = ()=> {modal.classList.remove('_active')};
	}	

}