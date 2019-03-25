$(function(){
    $('ul.tabbox > li').on('click',function(){
        var index = $('ul.tabbox > li').index(this);
    $('ul.tabbox > li').removeClass('selected'); //②
    $(this).addClass('selected'); //③
    $('ul.textbox > li').removeClass('hide'); //④
    $('ul.textbox > li').eq(index).addClass('hide'); //⑤
    });
});