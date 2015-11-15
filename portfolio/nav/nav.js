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

}