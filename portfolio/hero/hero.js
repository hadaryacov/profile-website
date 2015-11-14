if (Meteor.isClient) {
    Template.hero.onRendered(function(){

        var creativeCharacters = $('.creative').text().trim().split("");
        $('.creative').empty();
        $.each(creativeCharacters, function (i, el) {
            $('.creative').append("<span class='hide'>" + el + "</span");
        });

        var developerCharacters = $('.developer').text().trim().split("");
        $('.developer').empty();
        $('.developer').append('>');
        $.each(developerCharacters, function (i, el) {
            $('.developer').append("<span class='hide'>" + el + "</span");
        });
        
        animateItems($('.hero .creative span'), 'animated flipInX', function(){
            setTimeout(function(){
                animateItems($('.hero .developer span'), '');        
            }, 1000);  
        });

        setTimeout(function(){
            $('.creative').addClass('animated moveUp');
            $('.developer').addClass('animated moveDown');
        }, 5000);

        setTimeout(function(){
            $('.my-pic').removeClass('hide').addClass('animated rotateInPic');  
        }, 6000);
        
    });
}