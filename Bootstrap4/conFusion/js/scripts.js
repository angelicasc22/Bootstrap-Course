$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 })
      $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').carousel({ interval: false })
          $('#mycarousel').carousel('pause')
          console.log('carousel paused');
          $('#carouselButton').children('span').removeClass('fa-pause')
          $('#carouselButton').children('span').addClass('fa-play')
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#mycarousel').carousel('cycle')
          console.log('carousel play');
          $('#carouselButton').children('span').removeClass('fa-play')
          $('#carouselButton').children('span').addClass('fa-pause')
        }
    })
    $('#loginButton').click(function () {
      $('#loginModal').modal('show')
    })
    $('#reservationButton').click(function () {
      $('#reservationModal').modal('show')
    })
})