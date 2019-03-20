$(function(){
  $('#gnav li a').each(function(){
  var $href = $(this).attr('href');
  if(location.href.match($href)) {
   $(this).addClass('current');
  } else {
   $(this).removeClass('current');
  }
  });
});
