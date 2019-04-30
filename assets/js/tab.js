$(function(){
    $('ul.tabbox > li').on('click',function(){
        var index = $('ul.tabbox > li').index(this);
    $('ul.tabbox > li').removeClass('selected'); //
    $(this).addClass('selected'); //
    $('ul.textbox > li').removeClass('hide'); //
    $('ul.textbox > li').eq(index).addClass('hide'); //
    });
});