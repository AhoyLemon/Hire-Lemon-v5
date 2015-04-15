$('a.intro').click(function() {
  $(this).parent('section').toggleClass('active');
  $(this).next('article').slideToggle(300);
});