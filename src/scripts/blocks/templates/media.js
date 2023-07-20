
function media(slider_1, slider_2, slider_team){

  // options;
    let large = false; let lar_slides = 4;
    let desktop = true; let d_slides = 3;
    let laptop = false;  let l_slides = 2;
    let tablet = false; let t_slides = 1;
    let phone = false; let p_slides = 1;

    var slidesToShow = 0;

  var mediaLarge = window.matchMedia('(min-width: 1280px)')
  var mediaDesktop = window.matchMedia('(max-width: 1280px)')
  var mediaLaptop = window.matchMedia('(max-width: 1024px)')
  var mediaTablet = window.matchMedia('(max-width: 820px)')
  var mediaPhone = window.matchMedia('(max-width: 480px)')

  if (mediaLarge.matches) {
    tablet = false; laptop = false; phone = false; desktop = false;
    large = true;
  }
  if (mediaDesktop.matches) {
    tablet = false; laptop = false; phone = false; large = false;
    desktop = true;
  }
  if (mediaLaptop.matches) {
    desktop = false; tablet = false; phone = false; large = false;
    laptop = true;
  }
  if (mediaTablet.matches) {
    desktop = false; laptop = false; phone = false; large = false;
    tablet = true;
  }
  if (mediaPhone.matches) {
      tablet = false; laptop = false; desktop = false; large = false;
      phone = true;
  }

  if(large){slidesToShow = lar_slides}
  if(desktop){slidesToShow = d_slides}
  if(laptop){slidesToShow = l_slides}
  if(tablet){slidesToShow = t_slides}
  if(phone){slidesToShow = p_slides}

  slider_1.options = { perPage: slidesToShow };
  slider_2.options = { perPage: slidesToShow };
  slider_team.options = { perPage: slidesToShow };

}




/*_______________media______*/


media(slider_1, slider_2, team_slider);


window.onresize = function () {
  media(slider_1, slider_2, team_slider);

  img_w_rez();
};

/*img_bg*/
function img_w_rez() {
  var slide_box = document.querySelector('.hover-img-bg');
  var imgs = slide_box.querySelectorAll('img');
  var box_w = slide_box.clientWidth;
  imgs.forEach(function (el) {
    el.style.width = `${box_w}px`;
  });
}

setInterval(()=>{img_w_rez()}, 500)

