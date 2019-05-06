$(document).ready(function () {
  $("#image1").click(function () {
    $("#design").show();
    $("#image1").hide();
  });
  $("#design").click(function(){
    $("#image1").show();
    $("#design").hide();
  });

  $("#image2").click(function () {
    $("#devel").show();
    $("#image2").hide();
  });
    $("#devel").click(function(){
      $("#image2").show();
      $("#devel").hide();
  
  });

  $("#image3").click(function () {
    $("#product").show();
    $("#image3").hide();
  });
  $("#product").click(function(){
    $("#image3").show();
    $("#product").hide();  
  });

})