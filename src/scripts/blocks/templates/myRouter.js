const pages = {
	base: {value: false, class: '_page-base'},
	bestiary: {value: false, class: '_page-bestiary'},
	lore: {value: false, class: '_page-lore'},
	game: {value: false, class: '_page-game'},
	FAQ: {value: true, class: '_page-FAQ'}
};



function myRouter(){

	// hash watcher

	window.onhashchange = ()=>{
		setTimeout(()=>{
			checkHash();
		}, 100)
	}



	/*_________funcs_____*/


	function checkHash(){
		const location = window.location.hash;
		const main = document.querySelector('.mainContent');
		let name = location.substring(2, location.length);
		if(name == '') name = 'base';
		check_obj(name);

		for(let item in pages){ //clear_classes
			main.classList.remove(pages[item].class)
		}

		for(let item in pages){
			let page = document.querySelector(`.${item}`);
			if(pages[item].value){
				main.classList.add(pages[item].class);
				page.classList.add('_activePage');
			}else{
				page.classList.remove('_activePage');
			}
		}

		function check_obj(page){
			for(let item in pages){
				if(item == page){	pages[item].value = true;}
				else{pages[item].value = false;}
			}
		}

	}
	checkHash();


}


myRouter();





function btns(){
	let home = document.querySelectorAll('.page-btns_home');
	let bestiary = document.querySelectorAll('.page-btns_bestiary');
	let lore = document.querySelectorAll('.page-btns_lore');
	let game = document.querySelectorAll('.page-btns_game');
	let faq = document.querySelectorAll('.raq');


	home.forEach(el=> el.addEventListener('click', ()=>{
		window.location.hash = '#/';
	}))
	bestiary.forEach(el=> el.addEventListener('click', ()=>{
		window.location.hash = '#/bestiary';
	}))
	lore.forEach(el=> el.addEventListener('click', ()=>{
		window.location.hash = '#/lore';
	}))
	game.forEach(el=> el.addEventListener('click', ()=>{
		window.location.hash = '#/game';
	}))
	faq.forEach(el => el.addEventListener('click', ()=>{
		window.location.hash = '#/FAQ';
	}));



}
btns();
