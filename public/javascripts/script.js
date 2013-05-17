$(function(){
  if($("#authrequired").val() == "true"){
    $("#login-error span").text("Please login first");
  }else if($("#login-error span").text().length <= 0){
    $("#login-error").hide();
  }

});
