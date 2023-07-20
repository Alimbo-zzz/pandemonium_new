function add_lore_zone(){
	const list = document.querySelector('.lore-history__list');
	const old_zones = list.querySelectorAll('li');
	const zones = data_lore.lore;

	let lang = window.localStorage.pandemonium_lang;


	old_zones.forEach(el => el.remove());

	zones.forEach((el, i)=>{
		let html = '';

		let first = `<li class="lore-history__el" id="${el.id}">
			<h3 class="title _grad">${el[lang].title}</h3>
			<div class="lore-history__block">
				<img src="./assets/images/map/${el.img}.png">	`


		let text = '';
		let placeholder = '';

		el[lang].text.forEach(p=> text+= `<p class="lore-text">${p}</p>`)

		if(el[lang].placeholder){
			placeholder = `<p class="lore-placeholder">${el[lang].placeholder}</p>`
		}

		let end = `
			</div>
		</li>`

		html = first+text+placeholder+end;

		list.insertAdjacentHTML('beforeEnd', html);
	})	

}