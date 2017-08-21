// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

// back to top
$('#toTop a').click(function () {
  $('body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

// Parallaxing + add class active on scroll
$(document).scroll(function () {
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $('.portion').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  // $('nav a').each(function () {
      $('.navtitle').each(function () {

    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("selected");
      currLink.addClass("selected");
    }
  });
  
  // changing padding of nav a on scroll
    if (scrollPos > 100) {
      $('nav a').addClass('navTitleChange');
      $('nav img').addClass('navMove');
      // $('.navname').addClass('navImgMove');
      $('nav span').addClass('navMove');
    } else {
      $('nav a').removeClass('navTitleChange');
      $('nav img').removeClass('navMove');
      // $('.navname').removeClass('navImgMove');

      $('nav span').removeClass('navMove');
    }
  
});

