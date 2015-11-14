animateItems = function animateItems($items,animationName,callback){

	$items.each(function(i,el) {
	    var $this = $(this);
	    setTimeout(function() {
	    	$this.removeClass('hide');
            $this.addClass(animationName);

            if( i === $items.length-1 && callback && typeof(callback) === "function"){
            	callback();
            }

		}, i * 200);
	});	
	

};