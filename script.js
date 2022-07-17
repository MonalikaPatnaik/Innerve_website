// Navbar Toggling starts

//NavBar
$(document).ready(function () {
    $('ul.navbar-nav a').click(function (e) {
      $('ul.navbar-nav a').removeClass('active')
      $(this).addClass('active')
    })
  })
  
  // Navbar Toggling end
  
  // scroll to top starts
  
  var scrolltop = $('#scroll-top')
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      scrolltop.addClass('active')
    } else {
      scrolltop.removeClass('active')
    }
  })
  
  scrolltop.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '200')
  })
  
  // scroll to top ends