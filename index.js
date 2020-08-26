function rainbowframes(options) {
    let images = document.querySelectorAll('.rainbowframes');

    //global variables
	let newArr = [];
	let size = ""; 
    let sun = "";
    
	//holiday arrays
	oceanArr = ['linear-gradient(290deg, rgb(56, 56, 138), rgb(56, 56, 138), rgb(119, 187, 216), rgb(119, 187, 216)) 100', 'linear-gradient(290deg,  rgb(62, 128, 147), rgb(62, 128, 147), rgb(56, 56, 138), rgb(56, 56, 138)) 100','linear-gradient(290deg, rgb(119, 187, 216), rgb(119, 187, 216), rgb(62, 128, 147), rgb(62, 128, 147)) 100' ];
	easterEggArr = ['linear-gradient(290deg, rgb(254, 255, 166), rgb(254, 255, 166), rgb(172, 255, 184), rgb(172, 255, 184)) 100','linear-gradient(290deg, rgb(133, 229, 255), rgb(133, 229, 255), rgb(254, 255, 166), rgb(254, 255, 166)) 100','linear-gradient(290deg, rgb(172, 255, 184), rgb(172, 255, 184), rgb(133, 229, 255), rgb(133, 229, 255)) 100' ];
	christmasArr = ['linear-gradient(290deg, rgb(255, 0, 0), rgb(255, 0, 0), rgb(11, 99, 25), rgb(11, 99, 25)) 100','linear-gradient(290deg, rgb(114, 233, 124), rgb(114, 233, 124), rgb(255, 0, 0), rgb(255, 0, 0)) 100','linear-gradient(290deg, rgb(11, 99, 25), rgb(11, 99, 25), rgb(114, 233, 124), rgb(114, 233, 124)) 100'];
	valentineArr = ['linear-gradient(290deg, rgb(255, 149, 149), rgb(255, 149, 149), rgb(204, 46, 46), rgb(204, 46, 46)) 100', 'linear-gradient(290deg, rgb(196, 36, 89), rgb(196, 36, 89), rgb(255, 149, 149), rgb(255, 149, 149)) 100', 'linear-gradient(290deg, rgb(204, 46, 46), rgb(204, 46, 46), rgb(196, 36, 89), rgb(196, 36, 89)) 100'];
	halloweenArr = ['linear-gradient(290deg, rgb(27, 25, 25), rgb(27, 25, 25), rgb(255, 139, 30), rgb(255, 139, 30)) 100','linear-gradient(290deg, rgb(133, 71, 12), rgb(133, 71, 12), rgb(27, 25, 25), rgb(27, 25, 25)) 100','linear-gradient(290deg, rgb(255, 139, 30), rgb(255, 139, 30), rgb(133, 71, 12),rgb(133, 71, 12)) 100'];
	newyearArr = ['linear-gradient(290deg, rgb(123, 211, 255), rgb(123, 211, 255), rgb(228, 255, 252),rgb(228, 255, 252)) 100','linear-gradient(290deg, rgb(255, 188, 124), rgb(255, 188, 124), rgb(123, 211, 255), rgb(123, 211, 255)) 100','linear-gradient(290deg, rgb(228, 255, 252), rgb(228, 255, 252), rgb(255, 188, 124),rgb(255, 188, 124)) 100'];

	//attaching the array to the correct option
	if(options.theme_border === 'ocean') {
		newArr = oceanArr;
	}
	if(options.theme_border === 'eastereggs') {
		newArr = easterEggArr;
	}
	if(options.theme_border === 'christmas') {
		newArr = christmasArr;
	}
	if(options.theme_border === 'valentine') {
		newArr = valentineArr;
	}
	if(options.theme_border === 'halloween') {
		newArr = halloweenArr;
	}
	if(options.theme_border === 'newyear') {
		newArr = newyearArr;
	}
	
	// size options
	if (options.size === 'x-small') {
		size = '3px';
	} else if (options.size === 'small') {
		size = '10px';
	} else if (options.size === 'large') {
		size = '30px';
	} else if (options.size === 'x-large') {
		size = '40px';
	} else {
		size = '20px';
	} 
	
	//sundial shadows
	if (options.sundial === 'noon') {
		sun = '0px 20px 10px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'evening') {
		sun = '-40px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'afternoon') {
		sun = '-10px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'morning') {
		sun = '10px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'sunrise') {
		sun = '40px 20px 20px rgba(0, 0, 0, 0.292)'
	} else {
		sun = 'none'
	}
	
	//determine if want padding
	if(options.padding) { 
		images[i].style.padding = '2em';
	}	
	
	// pass parameters through array
	for(i = 0; i < images.length; i++ ){
		images[i].style.border =  size + ' solid';
		if(i%3 == 0){
			images[i].style.borderImage = newArr[0];
		}
		if(i%3 == 1) {
			images[i].style.borderImage = newArr[1];
		}
		if(i%3 === 2) {
			images[i].style.borderImage = newArr[2];
		}
		images[i].style.boxShadow = sun;
	}
}

module.exports.rainbowframes = rainbowframes;