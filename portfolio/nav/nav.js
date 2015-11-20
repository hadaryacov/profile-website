if ( Meteor.isClient ) {

	Template.nav.onRendered ( function () {

		setTimeout(function(){

			$('.nav-wrapper.left-top').removeClass('hide').addClass('animated rotateInDownRight');
			$('.nav-wrapper.right-top').removeClass('hide').addClass('animated rotateInDownLeft');
			$('.nav-wrapper.right-bottom').removeClass('hide').addClass('animated rotateInUpLeft');
			$('.nav-wrapper.left-bottom').removeClass('hide').addClass('animated rotateInUpRight');	

			appendTextToCode("$('.nav-wrapper.left-top').removeClass('hide').addClass('animated rotateInDownRight');<br/>$('.nav-wrapper.right-top').removeClass('hide').addClass('animated rotateInDownLeft');<br/>$('.nav-wrapper.right-bottom').removeClass('hide').addClass('animated rotateInUpLeft');<br/>$('.nav-wrapper.left-bottom').removeClass('hide').addClass('animated rotateInUpRight');");
			
		}, 8000);

	});

	Template.nav.events({
		'click .nav-wrapper.left-top' : function (event, template) {
			if($('body').attr('data-item') !== 'page-left-top'){
				$('body').attr('data-item','page-left-top');
				$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');
				// $('.nav-wrapper').css('z-index','9999');
				// $('.nav-wrapper.left-top').css('z-index','9998');

				animateItems($('.skills ul.first li'),'animated fadeInDown');	
				animateItems($('.skills ul.second li'),'animated fadeInDown');	

				appendTextToCode("$('body').attr('data-item','page-left-top');");
				appendTextToCode("$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');");
				appendTextToCode("$('.nav-wrapper').css('z-index','9999');");
				appendTextToCode("$('.nav-wrapper.left-top').css('z-index','9998');");
				appendTextToCode("animateItems($('.skills ul li'),'animated fadeInDown');");
			}else{
				$('body').removeAttr('data-item');
			}	
  		},
  		'click .nav-wrapper.right-top' : function (event, template) {
  			if($('body').attr('data-item') !== 'page-right-top'){
    			$('body').attr('data-item','page-right-top');
    			$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');
    			// $('.nav-wrapper').css('z-index','9999');
    			// $('.nav-wrapper.right-top').css('z-index','9998');

				animateItems($('.about ul li'),'animated fadeInDown');	
    			
    			appendTextToCode("$('body').attr('data-item','page-right-top');");
    			appendTextToCode("$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');");	
    			appendTextToCode("$('.nav-wrapper').css('z-index','9999');");
    			appendTextToCode("$('.nav-wrapper.right-top').css('z-index','9998');");
    		}else{
    			$('body').removeAttr('data-item');
    		}
  		},
  		'click .nav-wrapper.right-bottom' : function (event, template) {
  			if($('body').attr('data-item') !== 'page-right-bottom'){
  				$('body').attr('data-item','page-right-bottom');
  				$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');
  				$('.nav-wrapper').css('z-index','9999');
    			$('.nav-wrapper.right-bottom').css('z-index','9998');

				animateItems($('.work ul li'),'animated fadeInDown');	

  				appendTextToCode("$('body').attr('data-item','page-right-bottom');");
  				appendTextToCode("$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');");
  				appendTextToCode("$('.nav-wrapper').css('z-index','9999');");
  				appendTextToCode("$('.nav-wrapper.right-bottom').css('z-index','9998');");	
  			}else{
  				$('body').removeAttr('data-item');
  			}
  		},
  		'click .nav-wrapper.left-bottom' : function (event, template) {
  			if($('body').attr('data-item') !== 'page-left-bottom'){
    			$('body').attr('data-item','page-left-bottom');
    			$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');
    			$('.nav-wrapper').css('z-index','9999');
    			$('.nav-wrapper.left-bottom').css('z-index','9998');

				animateItems($('.contact ul li'),'animated fadeInDown');	

    			appendTextToCode("$('body').attr('data-item','page-left-bottom');");
    			appendTextToCode("$('.nav-content ul li').addClass('hide').removeClass('fadeInDown');");	
    			appendTextToCode("$('.nav-wrapper').css('z-index','9999');");	
    			appendTextToCode("$('.nav-wrapper.left-bottom').css('z-index','9998');");	
    		}else{
    			$('body').removeAttr('data-item');
    		}
  		},
	})

}