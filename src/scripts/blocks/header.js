
function header_fix() {
  var header = document.querySelector('.header');

  document.onscroll = function () {
    showHeader();
  };

  function showHeader() {
    if (window.pageYOffset > 200) {
      header.classList.add('header_fixed');
    } else {
      header.classList.remove('header_fixed');
    }
  }
}

header_fix();