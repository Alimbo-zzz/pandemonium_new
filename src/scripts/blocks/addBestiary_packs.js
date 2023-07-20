

function addBestiary_pack(pack, pack_name, list_id){

	const list = document.querySelector(list_id);
  let elems = list.querySelectorAll('li');

  let _lang = '';

  f_check_lang();

  elems.forEach(el=>el.remove())

    
  pack.forEach((el, i)=>{

    let HTML = '';

    let first = `<li class="bestiary-list__el">
    <div class="bestiary-list__block">
      <img src="./assets/images/${pack_name}/${el.img}.png"> 
      <div class="bestiary-list__box">`

    let title = '<h3 class="title">no name</h3>';

    if(el[_lang].bestiary.title === "" || !el[_lang].bestiary.title){
      title = `<h3 class="title _grad">${el[_lang].title}</h3>`;
    }else{
      title = `<h3 class="title _grad">${el[_lang].bestiary.title}</h3>`;
    }

    let end = `
      <p class="text scroll_1">${el[_lang].bestiary.text}</p>
      </div>
    </div>
    <div class="hr"></div>
    </li>`

    HTML = first+title+end;    

  	list.insertAdjacentHTML('beforeEnd', HTML	);
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


}