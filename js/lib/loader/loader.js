$(window).load(function() {       
             
    $('#loading').toggleClass("animated").toggleClass("flipOutY").hide().toggleClass("flex", function(){
    $('#container').toggleClass("flex").toggleClass("flex-vert").toggleClass("animated").toggleClass("bounceIn").show("slow", function(){
    	$("#stickyfooter").toggleClass("animated").toggleClass("bounceIn").show("slow");
    }); 
    $('.wizards').toggleClass("openpage");
  });
}); 