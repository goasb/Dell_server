(function($){
 // top3 호버 ==========================================================
 const line_01 = $('.line_01');
 const line_02 = $('.line_02');
 const div = line_01.find('div');
 const div_02 = line_02.find('div');

 div.on('mouseenter',function(e){
    e.preventDefault();
    $(this).find('a').stop().animate({'backgroundColor':'rgba(0,0,0,0.5)'});
 });

 div.on('mouseleave',function(e){
    e.preventDefault();
    $(this).find('a').stop().animate({'backgroundColor':'transparent'});
 });

 div_02.on('mouseenter',function(e){
   e.preventDefault();
   $(this).find('a').stop().animate({'backgroundColor':'rgba(0,0,0,0.5)'});
});

 div_02.on('mouseleave',function(e){
   e.preventDefault();
   $(this).find('a').stop().animate({'backgroundColor':'transparent'});
});

 // top3 호버 ====================================================================
})(jQuery);