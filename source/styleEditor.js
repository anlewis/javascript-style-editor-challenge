$(document).ready(function(){
  $(".style_it").click(function (event) {
    event.preventDefault()
    let selector = $("input#selector").val()
    let property = $("input#property").val()
    let value = $("input#value").val()
    $(selector).css(property, value)
  });
});