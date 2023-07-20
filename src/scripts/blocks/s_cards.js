



  var slider_1 = new Splide('#slider-cards_1', {
    perPage: 4,
    perMove: 1,
    arrows: false,
    type: 'loop',
    pagination: true,
    autoplay: true
  }).mount();
  /*____________________________________*/

  var slider_2 = new Splide('#slider-cards_2', {
    perPage: 4,
    perMove: 1,
    arrows: false,
    type: 'loop',
    pagination: true,
    autoplay: true
  }).mount();




function addCard(slider_splide, slider_id, pack_name, pack){
  const slider = slider_splide;
  const slider_list = document.querySelector(slider_id).querySelector('.splide__list');
  const slider_slides = slider_list.querySelectorAll('.splide__slide');
  slider_slides.forEach(el=> el.remove())

  let _lang = '';

  f_check_lang();

  pack.forEach((el)=>{
    slider.add(
      `<li class="splide__slide">
        <div class="card">
          <button class="flip">
            <svg><use xlink:href="./assets/icons/svg/sprite.svg#flip"></use></svg>
          </button>
          <div class="front">
            <img src="./assets/images/${pack_name}/${el.img}.png"/>
          </div>
          <div class="back">
            <img src="./assets/images/${pack_name}/${el.img}.png"/>
            <div class="back__block">
              <h5 class="title">${el[_lang].title}</h5>
              <p class="text scroll_1">${el[_lang].text}</p>
            </div>
          </div>
        </div>
      </li>>`
      )
  })


  btn_flip();

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


/*____card_flip*/

function btn_flip(){
  const btns = document.querySelectorAll('.flip');

  btns.forEach((btn)=>{
    btn.onclick = ()=>{
      let card = btn.parentNode;
      card.classList.toggle('_active');
    }
  })
}
