// jQuery(document).ready(function($) {
//
//       $('#myCarousel').carousel({
//               interval: 5000
//       });
//
//       $('#carousel-text').html($('#slide-content-0').html());
//
//       //Handles the carousel thumbnails
//      $('[id^=carousel-selector-]').click( function(){
//           var id = this.id.substr(this.id.lastIndexOf("-") + 1);
//           var id = parseInt(id);
//           $('#myCarousel').carousel(id);
//       });
//
//
//       // When the carousel slides, auto update the text
//       $('#myCarousel').on('slid.bs.carousel', function (e) {
//                var id = $('.item.active').data('slide-number');
//               $('#carousel-text').html($('#slide-content-'+id).html());
//       });
// });











// map
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}





var time = 2;
$('#counter').each(function(){
  $('div').each(function(){
    var
    i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        clearInterval(int);
      }
      i++;
    },step);
  });
});


$(".secondImage").hide();
$(".thirdImage").hide();

$(".dotFirst").click(function(event){
	$(".dotFirst").css("background","#42a4ff");
	$(".secondImage").fadeOut(500);
	$(".thirdImage").fadeOut(500);
	$(".firstImage").fadeIn(500);
})
$(".dotSecond").click(function(event){
	$(".dotSecond").css("background","#42a4ff");
	$(".firstImage").fadeOut(500);
	$(".thirdImage").fadeOut(500);
	$(".secondImage").fadeIn(500);
})
$(".dotThird").click(function(event){
	$(".dotThird").css("background","#42a4ff");
	$(".firstImage").fadeOut(500);
	$(".secondImage").fadeOut(500);
	$(".thirdImage").fadeIn(500);
})
