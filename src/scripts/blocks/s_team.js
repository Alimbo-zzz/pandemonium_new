
var team_slider = new Splide('.team', {
  perPage: 4,
  perMove: 1,
  pagination: true,
}).mount();





function team_add(data){
  const team_list = document.querySelector('.team');
  const team_el = team_list.querySelectorAll('.splide__slide');

  let _lang = '';
  f_check_lang();

  team_el.forEach(el => el.remove())


  data.forEach((el) => { add(el)})

  function add(el){
    team_slider.add(
      `<li class="splide__slide team__el">
        <div class="team__el">
          <div class="team__box">
            <img src="./assets/images/team/${el.img}.png" class="img_b"/>
            <img src="./assets/images/team/${el.img}_w.png" class="img_w"/>
            <div class="info">
              <div class="name">${el[_lang].name}</div>
              <div class="work">${el[_lang].work}</div>
              <div class="text scroll_1">${el[_lang].about}</div>
            </div>
            <button class="more"></button>
          </div>
        </div>
      </li>`
    )
  }
  team_btns();


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


function team_btns() {
  var btns = document.querySelectorAll('.more');
  btns.forEach(function (btn) {
    btn.onclick = function () {
      btn.parentNode.classList.toggle('_active');
    };
  });
}


function remove_team(elms){
  elms.forEach( el => remove())
}


