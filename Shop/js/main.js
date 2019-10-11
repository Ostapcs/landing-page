$(document).ready(function () {
    const buy = $('#buy');
    const header = $("#header");
    const scroll_to = $('.scroll-to');

    const w = $(window).width();
    const h = $(window).height();
    buy.css({left: w / 2 - buy.width() / 2 + "px"});
    header.css({left: w / 2 - header.width() / 2 + "px", top: h / 2 - header.height() / 2 + 'px', display: "block"});

    
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
        console.log(w + buy.width());

        buy.css({left: w / 2 - buy.width() / 2 + "px"});

    });

    $(".feed-back").slick({

        dots: true
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });
});

document.querySelector('.feed-back-text').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);

};


