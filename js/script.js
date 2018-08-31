$(document).ready(function(){

    $(".title").click(function(){
        $(".title h3").addClass("animation");
        $(".title h3").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("animation");
        }).addClass("animation");
    });
    
});