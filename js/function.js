$(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.first-list').offset().top - ($(window).height() / 1.2 )){

	$('.first-list .thumb').each(function(i){
		
		setTimeout(function(){
			$('.first-list .thumb').eq(i).addClass('is-visible');
		},150 * (i+1));

	});


}

});
$(document).ready(function(){


	function articleTada(){
  var randNum = Math.floor(Math.random() * $('.first-list .thumb').length) +1
  $('.first-list .thumb').eq(randNum).addClass('animating')
    .siblings().removeClass('animating');
}

setInterval(function(){articleTada()}, 3000);

   $("#toPortfolio").click(function (e){
   	e.preventDefault();
                $('html, body').animate({
                    scrollTop: $("#forScroll").offset().top

                }, 1500);
 $("#toPortfolio").attr("href",$("a").attr("href").replace(/#/, "")); 
            }); // end of scroll function

}); // end of document ready

