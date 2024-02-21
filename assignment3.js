
function myFunction() {
  var element = document.getElementById(arguments[0].toString());
    element.parentNode.removeChild(element);
}



$(document).ready(function(){
  $('.sensors').hide();
  $('.js-open-close-bar').click(function(){
    $(this).find('.be2-open-arrow').toggleClass("be2-closed-arrow");
    $(this).next('.sensors').slideToggle();
  });
});