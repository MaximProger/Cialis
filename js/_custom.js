$(function() {

    // Slider
    $('#slider__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      });

    // Counter
    let counter = $('.counter').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.message').html('Time = 0')
            }
        }
    });

    const targetDate = 'Feb 24 2020 00:00:00'
    let targetDateInMs = (new Date(targetDate) - Date.now()) / 1000;

    counter.setTime(targetDateInMs);
    counter.setCountdown(true);
    counter.start();

     // Smooth scroll 
     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    // Tooltips
    $('[data-toggle="tooltip"]').tooltip()

});