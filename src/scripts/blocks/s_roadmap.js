function add_roadmap(){

	const roadmap_cont = document.querySelector('#roadmap_cont');

	let _lang = '';
 	f_check_lang();


	data_roadmap.roadmap.forEach((el, i)=>{
		let html = '';

		let first =  `<div class="road" data-aos>
			<div class="road__block">
				<h3 class="date">${el[_lang].date}</h3>
				<h5 class="name">${el[_lang].title}</h5>
				<ul class="road__list">`;

		let list = '';

		let end = `</ul>
			</div>
			<div class="point" style="background: linear-gradient(125deg, ${el.colors._1} 0%, ${el.colors._2} 100%);">
				<svg><use xlink:href="./assets/icons/svg/sprite.svg#arrows"></use></svg>
			</div>
		</div>`


		if(el[_lang].list) el[_lang].list.forEach(item => list += `<li class="road__el">${item}</li>`)

		html = first+list+end;

		roadmap_cont.insertAdjacentHTML('beforeEnd', html)
	})


	function f_check_lang(){
	  let ls = window.localStorage;

	  if(!ls.pandemonium_lang){
	    ls.setItem('pandemonium_lang', 'en');
	    _lang = ls.pandemonium_lang;
	  }else{
	    _lang = ls.pandemonium_lang;
	  }

	}

	AOS.refresh;

}
