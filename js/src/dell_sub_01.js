(function($){
 // top3 호버 ==========================================================
 const iCon = $('#innovation_conBox');
 const topUl = top3.find('ul');
 const topLi = topUl.children('li');
 const topA = topLi.children('a');

 topA.on('mouseenter',function(e){
    e.preventDefault();
    $(this).find('span').css({display:'block'});
    $(this).stop().animate({'backgroundColor':'rgba(0,0,0,0.5)'});
    $(this).find('dl').css({display:'none'});
 });

 topA.on('mouseleave',function(e){
    e.preventDefault();
    $(this).find('span').css({display:'none'});
    $(this).stop().animate({'backgroundColor':'transparent'});
    $(this).find('dl').css({display:'block'});
 });

 // top3 호버 ====================================================================
})(jQuery);