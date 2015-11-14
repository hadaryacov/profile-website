if (Meteor.isClient) {
    Template.hero.onRendered(function(){
        $('.developer').html('d');
        setTimeout(function(){
            $('.developer').html('de');
        }, 1000);
        setTimeout(function(){
            $('.developer').html('dev');
        }, 1350);
        setTimeout(function(){
            $('.developer').html('deve');
        }, 1500);
        setTimeout(function(){
            $('.developer').html('devel');
        }, 1700);
        setTimeout(function(){
            $('.developer').html('develo');
        }, 1750);
        setTimeout(function(){
            $('.developer').html('develop');
        }, 2000);
        setTimeout(function(){
            $('.developer').html('develope');
        }, 2500);
        setTimeout(function(){
            $('.developer').html('developer');
        }, 2700);

        setTimeout(function(){
            $('.creative').addClass('animated moveUp');
            $('.developer').addClass('animated moveDown');
        }, 5000);

        setTimeout(function(){
            $('.my-pic').removeClass('hide').addClass('animated rotateInPic');  
        }, 6000);

    });
}