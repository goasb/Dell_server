// dell.js

(function($){
   const conBox = $('#contentsBox');
   const slideUl = conBox.find('ul');
   const slideLi = slideUl.children('li');
   const slideA = slideLi.children('.indi'); //인디케이터
      console.log(slideA);
   const imgList = conBox.find('.slide_img_list');
   let imgSlide = imgList.find('.slide');

   imgSlide.eq(-1).clone().prependTo('.slide_img_list');
   imgSlide = imgList.find('.slide');

   // ------------------------------------
   i=0;
   imgLen = imgSlide.length;

   
   slideA.parent('li').eq(0).addClass('action');
   slideA.on('click',function(){
      let index = $(this).parent('li').index();
      imgList.animate({marginLeft:-100 * index + "%" });
      $(this).parent('li').addClass('action');
      $(this).parent('li').siblings().removeClass('action');
      console.log(index);
   });


})(jQuery);