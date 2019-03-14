  $('#header').prepend('<div id="menu-icon" class="active"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

  $("#menu-icon").on("click", function(){
    // acticveがXでなしが三
    $("nav").slideToggle();
    $(this).toggleClass("active");
});
