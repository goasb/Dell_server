// dell.js

(function($){
   const conBox = $('#viewBox_01').find('.viewslide_main');
   const slideUl = conBox.find('ul');
   const slideLi = slideUl.children('li');
   const slideA = slideLi.children('.indi'); //인디케이터
   const imgList = conBox.find('.slide_img_list'); // slide
   
   const mainT = conBox.find('.main_title');
   let imgSlide = imgList.children('.slide');

   mainT.hide(0);
   imgSlide.removeClass('action');
 
   imgSlide.eq(-1).clone().prependTo('.slide_img_list');
   imgSlide = imgList.find('.slide');
   // -------------------------------------
   let timed = 600;
   const SlideAni = function(index){
      imgSlide.eq(index + 1).addClass('action');
      imgSlide.eq(index + 1).siblings().removeClass('action');

      imgSlide.eq(index + 1).find(mainT).delay(timed/2*3).fadeIn(timed);
      imgSlide.eq(index + 1).siblings().find(mainT).hide();

      slideA.parent('li').eq(index).addClass('action');
      slideA.parent('li').eq(index).siblings().removeClass('action');
   };

   SlideAni(0);
   // ------------------------------------
   let i=0;
   imgLen = imgSlide.length;   
   slideA.parent('li').eq(0).addClass('action');

   slideA.on('click',function(e){
      e.preventDefault();

      let index = $(this).parent('li').index();
     
      imgList.animate({marginLeft:-100 * index + "%" },function(){
         SlideAni(index);
      });

   });

   


   // top3 호버 ==========================================================
   const top3 = $('.top3');
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