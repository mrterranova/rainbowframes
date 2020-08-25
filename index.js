function rainbowframes(options) {
	let images = document.querySelectorAll('.rainbowoutline');
	
	//holiday arrays
	oceanArr = ['border-image: linear-gradient(290deg, rgb(56, 56, 138), rgb(56, 56, 138), rgb(119, 187, 216), rgb(119, 187, 216)) 100', 'border-image: linear-gradient(290deg,  rgb(62, 128, 147), rgb(62, 128, 147), rgb(56, 56, 138), rgb(56, 56, 138)) 100','border-image: linear-gradient(290deg, rgb(119, 187, 216), rgb(119, 187, 216), rgb(62, 128, 147), rgb(62, 128, 147)) 100' ];
	easterEggArr = ['border-image: linear-gradient(290deg, rgb(254, 255, 166), rgb(254, 255, 166), rgb(172, 255, 184), rgb(172, 255, 184)) 100','border-image: linear-gradient(290deg, rgb(133, 229, 255), rgb(133, 229, 255), rgb(254, 255, 166), rgb(254, 255, 166)) 100','border-image: linear-gradient(290deg, rgb(172, 255, 184), rgb(172, 255, 184), rgb(133, 229, 255), rgb(133, 229, 255)) 100' ];
	christmasArr = ['border-image: linear-gradient(290deg, rgb(255, 0, 0), rgb(255, 0, 0), rgb(11, 99, 25), rgb(11, 99, 25)) 100;','border-image: linear-gradient(290deg, rgb(114, 233, 124), rgb(114, 233, 124), rgb(255, 0, 0), rgb(255, 0, 0)) 100','border-image: linear-gradient(290deg, rgb(11, 99, 25), rgb(11, 99, 25), rgb(114, 233, 124), rgb(114, 233, 124)) 100'];
	valentineArr = ['border-image: linear-gradient(290deg, rgb(255, 149, 149), rgb(255, 149, 149), rgb(204, 46, 46), rgb(204, 46, 46)) 100', 'border-image: linear-gradient(290deg, rgb(196, 36, 89), rgb(196, 36, 89), rgb(255, 149, 149), rgb(255, 149, 149)) 100', 'border-image: linear-gradient(290deg, rgb(204, 46, 46), rgb(204, 46, 46), rgb(196, 36, 89), rgb(196, 36, 89)) 100'];
	halloweenArr = ['border-image: linear-gradient(290deg, rgb(27, 25, 25), rgb(27, 25, 25), rgb(255, 139, 30), rgb(255, 139, 30)) 100','border-image: linear-gradient(290deg, rgb(133, 71, 12), rgb(133, 71, 12), rgb(27, 25, 25), rgb(27, 25, 25)) 100','border-image: linear-gradient(290deg, rgb(255, 139, 30), rgb(255, 139, 30), rgb(133, 71, 12),rgb(133, 71, 12)) 100'];
	newyearArr = ['border-image: linear-gradient(290deg, rgb(123, 211, 255), rgb(123, 211, 255), rgb(228, 255, 252),rgb(228, 255, 252)) 100','border-image: linear-gradient(290deg, rgb(255, 188, 124), rgb(255, 188, 124), rgb(123, 211, 255), rgb(123, 211, 255)) 100','border-image: linear-gradient(290deg, rgb(228, 255, 252), rgb(228, 255, 252), rgb(255, 188, 124),rgb(255, 188, 124)) 100'];

	//attaching the array to the correct option
	if(options.theme_border === 'ocean') {
		options.theme_border = oceanArr;
	}
	if(options.theme_border === 'eastereggs') {
		options.theme_border = easterEggArr;
	}
	if(options.theme_border === 'christmas') {
		options.theme_border = christmasArr;
	}
	if(options.theme_border === 'valentine') {
		options.theme_border = valentineArr;
	}
	if(options.theme_border === 'halloween') {
		options.theme_border = halloweenArr;
	}
	if(options.theme_border === 'newyear') {
		options.theme_border = newyearArr;
	}
	
	// size options
	if (options.size === 'x-small') {
		options.size = '3px';
	} else if (options.size === 'small') {
		options.size = '10px';
	} else if (options.size === 'large') {
		options.size = '30px';
	} else if (options.size === 'x-large') {
		options.size = '40px';
	} else {
		options.size = '20px';
	} 
	
	//sundial shadows
	if (options.sundial === 'noon') {
		options.sundial = 'box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.292);'
	} else if (options.sundial === 'evening') {
		options.sundial = 'box-shadow: -40px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'afternoon') {
		options.sundial = 'box-shadow: -10px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'morning') {
		options.sundial = 'box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.292)'
	} else if (options.sundial === 'sunrise') {
		options.sundial = 'box-shadow: 40px 20px 20px rgba(0, 0, 0, 0.292)'
	} else {
		options.sundial = 'none'
	}
	
	//determine if want padding
	if(options.padding) { 
		images.style.padding = '2em';
	}
	
	// pass parameters through array
	images.forEach( img => {
		if(images[img]%3 === 0){
			img.style.borderImage = options.theme_border[0];
		}
		if(images[img]%3 === 1) {
			img.style.borderImage = options.theme_border[1];
		}
		if(images[img]%3 === 2) {
			img.style.borderImage = options.theme_border[2];
		}
		
		img.style.border = `${weight} solid;`;
		img.style.boxShadow = options.sundial;
    });
}

module.exports.rainbowframes = rainbowframes;