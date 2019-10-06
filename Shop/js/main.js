$(document).ready(function () {

    $('.scroll-to').onScrolledTo(0, function () {
        const mySVG = $('#f').drawsvg({
            duration: 4000,
            easing: 'linear'
        });
        mySVG.drawsvg('animate');

        const mySVG1 = $('#f1').drawsvg({
            duration: 4000,
            easing: 'linear'
        });
        mySVG1.drawsvg('animate');

        const mySVG2 = $('#f2').drawsvg({
            duration: 4000,
            easing: 'linear'
        });
        mySVG2.drawsvg('animate');
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });


});

