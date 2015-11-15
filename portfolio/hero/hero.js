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

        appendTextToCode("var creativeCharacters = $('.creative').text().trim().split('');<br/>$('.creative').empty();<br/>$.each(creativeCharacters, function (i, el) {<br/>$('.creative').append('<span class='hide'>' + el + '</span');<br/>});");
        appendTextToCode("<br/>var developerCharacters = $('.developer').text().trim().split('');<br/>$('.developer').empty();<br/>$('.developer').append('>');<br/>$.each(developerCharacters, function (i, el) {<br/>$('.developer').append('<span class='hide'>' + el + '</span');});");
        appendTextToCode("animateItems($('.hero .creative span'), 'animated flipInX')");
        

        animateItems($('.hero .creative span'), 'animated flipInX', function(){
            setTimeout(function(){
                appendTextToCode("animateItems($('.hero .developer span'), '')");
                animateItems($('.hero .developer span'), '');        
            }, 1000);  
        });

        setTimeout(function(){
            appendTextToCode("<br/>$('.creative').addClass('animated moveUp');");
            appendTextToCode("<br/>$('.developer').addClass('animated moveDown');");

            $('.creative').addClass('animated moveUp');
            $('.developer').addClass('animated moveDown');
        }, 5000);

        setTimeout(function(){
            appendTextToCode("<br/>$('.my-pic').removeClass('hide').addClass('animated rotateInPic');");

            $('.my-pic').removeClass('hide').addClass('animated rotateInPic');  
        }, 6000);
        
    });
}