$(document).ready(function () {
    const buy = $('#buy');
    const header = $("#header");
    const f = $('#f');
    const f1 = $('#f1');
    const f2 = $('#f2');
    const logo = $('#logo');
    const navBar = $('#navbar');


    const w = $(window).width();
    const h = $(window).height();

    buy.css({left: w / 2 - buy.width() / 2 + "px"});
    header.css({left: w / 2 - header.width() / 2 + "px", top: h / 2 - header.height() / 2 + 'px', display: "block",});

    adaptiveFeature(w);
    adaptiveNavBar(w);

    function adaptiveFeature(w) {
        if (w < 1050) {
            $(".svg").each(function (i, obj) {
                obj.classList.remove('col-3');
                if (!obj.classList.contains("col-6"))
                    obj.classList.toggle("col-6");
            });
            $(".w-100").each(function (i, obj) {
                obj.style.display = 'block'
            })
        } else {
            $(".svg").each(function (i, obj) {
                obj.classList.remove('col-6');
                if (!obj.classList.contains("col-3"))
                    obj.classList.toggle("col-3");
            });
            $(".w-100").each(function (i, obj) {
                obj.style.display = 'none'
            })
        }
    }

    function adaptiveNavBar(w)
    {
        const navbarToggler = $('.navbar-toggler')[0];
        const underNavBar = $('.navbar');
        const collapse = $('.collapse')[0];
        if (w < 800) {
            logo.css({display: 'none'});
            navBar.css({display: 'inline'});
            underNavBar.css({display: 'flex'});
            $('.bg-light').attr("style", "background-color :#f6d20b57 !important");
            if(collapse.classList.contains('show')) {
                collapse.classList.remove('show');
                $('.navbar-toggler').attr("aria-expanded", false)[0].classList.add(('collapsed'));
            }
        } else {

            logo.css({display: 'inline-block'});
            navBar.css({display: 'flex'});
            $('.bg-light').attr("style", "background-color : white !important");//"background-color", "white", "important");
            if(!collapse.classList.contains('show')) {
                collapse.classList.toggle('show');
                $('.navbar-toggler').attr("aria-expanded", true)[0].classList.remove(('collapsed'));
            }
            underNavBar.css({display: 'none'});
        }
    }

    f.onScrolledTo(0, function () {
        new Vivus("f", {duration: 400, type: 'sync'}).play();
    }, 0);

    f1.onScrolledTo(0, function () {
        new Vivus("f1", {duration: 400, type: 'sync'}).play(2);
    }, 0);

    f2.onScrolledTo(0, function () {
        new Vivus("f2", {duration: 400, type: 'sync'}).play();
    }, 0);


    $(window).scroll(function () {
        let st = $(this).scrollTop();

        buy.css({transform: 'translateX(0%) translateY(' + -st * 2 + '%)'});
        header.css({transform: 'translateX(0%) translateY(' + -st * 1.5 + '%)'});
    });

    $(window).resize(function () {
        const w = $(window).width();

        buy.css({left: w / 2 - buy.width() / 2 + "px"});
        header.css({left: w / 2 - header.width() / 2 + "px"});


        adaptiveFeature(w);
        adaptiveNavBar(w)

    });

    $(".feed-back").slick({
        dots: true
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });
});



