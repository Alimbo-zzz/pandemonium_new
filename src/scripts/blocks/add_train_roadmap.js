function add_train_roadmap(){
	const data = data_train_roadmap.train_roadmap;
	const block = document.querySelector('#train_roadmap');
	const list = block.querySelectorAll('.road');

	let _lang = '';
 	f_check_lang();

	list.forEach((el, i) => {el.remove();}); //remove
	data.forEach((el, i) => {
		let text = '';
		el[_lang].text.forEach((item, i) => {
			text+= `<p class="text">${item}</p>`
		});


		let first = `<div class="road" data-aos >`;
		let middle = `
			<div class="road__block">
				<img class="road__preview" src="./assets/images/train-roadmap/${el.img}.png"/>
				<div class="roadmap-popup-btn"><img src="./resources/icons/i.svg"/></div>
				${text}
			</div>
			<div class="point" style="background: linear-gradient(125deg, ${el.colors._1} 0%, ${el.colors._2} 100%);">
				<div class="point__index">${i+1}</div>
			</div>
			`;

		let end = `</div>`;

		let html = first+middle+end;


		block.insertAdjacentHTML('beforeend', html)
	});

	train_roadmap();



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



// train-roadmap

function train_roadmap(){
	const main_block = document.querySelector('.train-roadmap');
	const road = main_block.querySelectorAll('.road');

	road.forEach((item, i) => {
	 let btn = item.querySelector('.roadmap-popup-btn');
	 btn.onclick = ()=>{
		 item.classList.toggle('_active');
	 }
	});

}


train_roadmap();
