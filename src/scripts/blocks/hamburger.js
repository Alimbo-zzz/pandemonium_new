
function hamburger() {
  var hamburger = document.querySelector('.hamburger');
  var hamburger_menu = document.querySelector('.header__block');
  var link_elems = document.querySelectorAll('.nav__link');
  var header = document.querySelector('.header');

  var body = document.querySelector('body');
  var preloader = document.querySelector('.preloading');

  hamburger.onclick = function () {
    hamburger.classList.toggle('_active');
  };

  setInterval(function () {
    if(preloader.classList.contains('_active')){
      body.style.overflow = 'hidden';      
    }
    else if(hamburger.classList.contains("_active")) {
      header.classList.add('header-bg-none');
      hamburger_menu.classList.add('hamburger-menu_active');
      body.style.overflow = 'hidden';
    } else {
      header.classList.remove('header-bg-none');
      hamburger_menu.classList.remove('hamburger-menu_active');
      body.style.overflow = 'auto';
    }
  }, 100);


  link_elems.forEach(function (item, i) {
    item.onclick = function () {
      hamburger.classList.remove("_active");
      window.location.hash = ''
    };
  });
}

hamburger();

