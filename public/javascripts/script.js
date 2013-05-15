$(function(){
  if($("#authrequired").val() == "true"){
    $("#login-error span").text("Please login first");
  }else{
    $("#login-error").hide();
  }

});
