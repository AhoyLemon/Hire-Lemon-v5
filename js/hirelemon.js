// jshint -W117
$('a.intro').click(function() {
  $t = $(this);
  $(this).parent('section').toggleClass('active');
  $(this).next('article').slideToggle(500);
  
  if ( $(this).parent('section').hasClass('active') ) {
    $(this).parent('section').siblings('section.active').children('article').slideUp(500);
    $(this).parent('section').siblings('section').removeClass('active');
    setTimeout(function(){ 
      $('html, body').animate({
        scrollTop: $t.next('article').offset().top
      }, 300);
    }, 502);
  }
});