function dark_theme(){

	const main_cont = document.querySelector('.mainContent');
	const logo = document.querySelector('.btn-theme');

	logo.onclick = ()=>{
		check_theme();
	}

	function check_theme(){
		if(logo.classList.contains('_active')){
			main_cont.classList.remove('_dark');
			logo.classList.remove('_active');
		}else{			
			main_cont.classList.add('_dark');
			logo.classList.add('_active');
		}
	}

	check_theme();

}
dark_theme();