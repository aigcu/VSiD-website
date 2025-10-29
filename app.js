particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 800,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


