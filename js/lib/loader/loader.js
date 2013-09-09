$(window).load(function() {       
             
    $('#loading').toggleClass("animated").toggleClass("flipOutY").hide().toggleClass("flex", function(){        
    $('#container').toggleClass("flex").toggleClass("flex-vert").toggleClass("animated").toggleClass("rotateInDownLeft").show("slow", function(){
    	$("#stickyfooter").toggleClass("animated").toggleClass("rotateInDownRight").show("slow");
    }); 
    $('.wizards').toggleClass("openpage");
  });
}); 