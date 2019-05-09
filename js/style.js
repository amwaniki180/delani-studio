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
 var workIds = ['work1','work2','work3','work4','work5','work6','work7','work8'];
    workIds.forEach(function(id){
        $("#"+id).mouseover(function () {
            $("."+id+"-div").show();
        });
        $("#"+id).mouseout(function () {
            $("."+id+"-div").hide();
        });
    });
    $("button").click(function(event){
           $(".message")[0].reset();
       });
       $(".message").bind("#submit",function(){
         var name = $("#name").val;
       }
