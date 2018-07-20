function unhide(){
    var x = document.getElementsByClassName("meme");
    var i;
    for (i=0; i<x.length;i++) {
        
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}   
