$(document).ready(function () {
    const buy = $('#buy');
    const header = $("#header");
    const scroll_to = $('.scroll-to');

    const w = $(window).width();
    const h = $(window).height();

    buy.css({left: w / 2 - buy.width() / 2 + "px"});
    header.css({left: w / 2 - header.width() / 2 + "px", top: h / 2 - header.height() / 2 + 'px', display: "block"});


    function adaptiveFeature(w){
        if(w < 1050){
            $(".svg").each(function (i, obj) {
                obj.classList.remove('col-3');
                if(!obj.classList.contains("col-6"))
                    obj.classList.toggle("col-6");
            });
            $(".w-100").each(function (i, obj) {
                obj.style.display = 'block'
            })
        }
        else{
            $(".svg").each(function (i, obj) {
                obj.classList.remove('col-6');
                if(!obj.classList.contains("col-3"))
                    obj.classList.toggle("col-3");
            });
            $(".w-100").each(function (i, obj) {
                obj.style.display = 'none'
            })
        }

    }
    
    scroll_to.onScrolledTo(0, function () {
        new Vivus("f", {duration : 400, type: 'sync'}).play();
        new Vivus("f1", {duration : 400, type: 'sync'}).play(2);
        new Vivus("f2", {duration : 400, type: 'sync'}).play();
    }, 0);


    $(window).scroll(function () {
        let st = $(this).scrollTop();

        buy.css({transform: 'translateX(0%) translateY(' + -st * 2 + '%)'});
        header.css({transform: 'translateX(0%) translateY(' + -st * 1.5 + '%)'});
    });

    $(window).resize(function () {
        const w = $(window).width();

        buy.css({left: w / 2 - buy.width() / 2 + "px"});

        adaptiveFeature(w);

    });

    $(".feed-back").slick({
        dots: true
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });
});



