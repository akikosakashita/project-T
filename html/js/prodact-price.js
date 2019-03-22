$(function() {
  $('[name="btn"]:radio').change( function() {
    if($('[id=a]').prop('checked')){
      $('.total').fadeOut();
      $('.price01').fadeIn();
    } else if ($('[id=b]').prop('checked')) {
      $('.total').fadeOut();
      $('.price02').fadeIn();
    } else if ($('[id=c]').prop('checked')) {
      $('.total').fadeOut();
      $('.price03').fadeIn();
    } else if ($('[id=d]').prop('checked')) {
      $('.total').fadeOut();
      $('.price04').fadeIn();
    }
  });
});