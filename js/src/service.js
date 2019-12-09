(function($){

const ap = $('.all_product')
const pb = ap.children('.productBox')
const apbtn = ap.find('button')

const service = $('#service')
const button = service.find('button')

// Product slide ==================================
apbtn.on('click',function(e){
 e.preventDefault();
 pb.stop().slideToggle();
});
// ================================================

// 서비스버튼 ======================================
button.eq(0).addClass('young');
button.on('click focus',function(e){
 e.preventDefault();
 button.removeClass('young');
 $(this).addClass('young');
});
// =================================================

})(jQuery);