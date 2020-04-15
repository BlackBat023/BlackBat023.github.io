$(document).ready(function () {
    var slides = [$("#slide1"), $("#slide2"), $("#slide3")];
    var i = 0;

    $("#loader")
        .delay(5000)
        .hide();

    setInterval(function () {
        slides[i]
            .fadeIn(3000)
            .delay(1000)
            .fadeOut(3000)
            .delay(1000);
        i++;
        if (i == slides.length) {
            i = 0;
        }
    }, 8000);

    function rollBar() {
        var $elem = $(".skills");
        $elem.eq(0).animate({
                width: "95%"
            },
            2500
        );
        $elem.eq(1).animate({
                width: "90%"
            },
            2500
        );
        $elem.eq(2).animate({
                width: "85%"
            },
            2500
        );
        $elem.eq(3).animate({
                width: "90%"
            },
            2500
        );
        $elem.eq(4).animate({
                width: "75%"
            },
            2500
        );
        $elem.eq(5).animate({
                width: "88%"
            },
            2500
        );
        $elem.eq(6).animate({
                width: "65%"
            },
            2500
        );
    }
    //Scroll activation for progress bars
    $(window).scroll(function () {
        var elemTop = $("#skills").offset().top,
            elemHeight = $("#skills").outerHeight(),
            winHeight = $(window).height(),
            winSize = $(this).scrollTop();

        if (winSize < elemTop + elemHeight - winHeight) {
            rollBar();
        }
    });

    $('.sidenav').sidenav();

});