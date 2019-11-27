// dell.js

(function($){
   const conBox = $('#slide_viewBox').find('.viewslide_main_02');
   const slideUl = conBox.find('ul');
   const slideLi = slideUl.children('li');
   const slideA = slideLi.children('.indi'); //인디케이터
   const imgList = conBox.find('.slide_img_list_02'); // slide
   
   const img = conBox.find('.tapBox_01');
   let imgSlide = imgList.children('.slide');

   // img.hide();
   imgSlide.removeClass('action');
 
   imgSlide.eq(-1).clone().prependTo('.slide_img_list_02');
   imgSlide = imgList.find('.slide');
   // -------------------------------------
   let timed = 600;
   const SlideAni = function(index){
      imgSlide.eq(index + 1).addClass('action');
      imgSlide.eq(index + 1).siblings().removeClass('action');

      imgSlide.eq(index + 1).find(img).delay(timed/2*3).fadeIn(timed);
      imgSlide.eq(index + 1).siblings().find(img).hide();

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

  
   
   

})(jQuery);