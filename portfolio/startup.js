if(Meteor.isClient){
	Meteor.startup(function () {
	    /*$("body").mousemove(function(e){
	    	var screenSize = {
	    		width : $(window).width(),
	    		height : $(window).height()
	    	}
	        var xPos;
	        if ( e.clientX <= screenSize.width*0.25 ) xPos = 'left';
	        if ( e.clientX > screenSize.width*0.25 && e.clientX <= screenSize.width*0.6) xPos = 'middle';
	        if ( e.clientX > screenSize.width*0.6 && e.clientX <= screenSize.width) xPos = 'right';

	        var yPos;
	        if ( e.clientY <= screenSize.height*0.5) yPos = 'top';
	        if ( e.clientY > screenSize.height*0.5) yPos = 'bottom';

	        if (xPos === 'left' && yPos === 'top'){
	        	$('.my-pic').css('backgroundImage', 'url("left-top.jpg")');

	        }else if (xPos === 'left' && yPos === 'bottom'){
	        	$('.my-pic').css('background-image','url("left-bottom.jpg")');

	        }else if (xPos === 'right' && yPos === 'top'){
	        	$('.my-pic').css('background-image','url("right-top.jpg")');

	        }else if (xPos === 'right' && yPos === 'bottom'){
	        	$('.my-pic').css('background-image','url("right-bottom.jpg")');

	        }else{
	        	$('.my-pic').css('background-image','url("front.jpg")');
	        }
	    });*/
	});
}