$('a.intro').click(function() {
  $(this).parent('section').toggleClass('active');
  $(this).next('article').slideToggle(300);
  
  if ( $(this).parent('section').hasClass('active') ) {
    $(this).parent('section').siblings('section.active').children('article').slideUp(300);
    $(this).parent('section').siblings('section').removeClass('active');
    $('html, body').animate({
      scrollTop: $(this).next('article').offset().top - 120
    }, 500);
  }
});