$(function(){
   if($("#authrequired").val() == "true"){
      $("#login-error span").text("Please login first");
   }else if($("#login-error span").text().length <= 0){
      $("#login-error").hide();
   }

   var path = ((window.location.pathname).split("/"))[1];
   if(path != ""){
      $("ul.ncr-nav li").removeClass("active");
      $("ul.ncr-nav li.nav-" + path).addClass("active");
   }
});
