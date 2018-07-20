$(document).ready(function(){

    $(".title").click(function(){
        $(".title p").addClass("animation");
        $(".title p").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("animation");
        }).addClass("animation");
    });
    
});
