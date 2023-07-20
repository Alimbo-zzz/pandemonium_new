
function hover_bg_img() {
  var slide_box = document.querySelector('.hover-img-bg');

  slide_box.onmousedown = ()=> {
    slide_box.onmousemove = function (e) {
      var x = e.offsetX;
      document.querySelector('.hover-img-bg__box').style.width = x + 'px';
    };
  };

  slide_box.addEventListener("touchstart", function (e_1) {
    document.querySelector('.hover-img-bg__box').style.width = e_1.touches[0].pageX + 'px';
    slide_box.addEventListener("touchmove", function (e_2) {
      var x = e_2.touches[0].pageX;
      document.querySelector('.hover-img-bg__box').style.width = x + 'px';
    });
  });

  slide_box.onmouseup = function () {
    slide_box.onmousemove = null;
  };

  slide_box.onmouseleave = function () {
    slide_box.onmousemove = null;
  };
}

hover_bg_img();
;
