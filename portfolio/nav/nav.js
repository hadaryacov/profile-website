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
    		$('body').attr('data-item','page-left-top');
    		appendTextToCode("$('body').attr('data-item','page-left-top');");
  		},
  		'click .nav-wrapper.right-top' : function (event, template) {
    		$('body').attr('data-item','page-right-top');
    		appendTextToCode("$('body').attr('data-item','page-right-top');");	
  		},
  		'click .nav-wrapper.right-bottom' : function (event, template) {
    		$('body').attr('data-item','page-right-bottom');
    		appendTextToCode("$('body').attr('data-item','page-right-bottom');");	
  		},
  		'click .nav-wrapper.left-bottom' : function (event, template) {
    		$('body').attr('data-item','page-left-bottom');
    		appendTextToCode("$('body').attr('data-item','page-left-bottom');");	
  		},
	})

}