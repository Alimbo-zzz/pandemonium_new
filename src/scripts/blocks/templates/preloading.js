function preloading(){
  let preloader = document.querySelector('.preloading');

  preloader.classList.add('_active');

  setTimeout(()=>{
    preloader.classList.remove('_active');
  }, 4000)

}


preloading();