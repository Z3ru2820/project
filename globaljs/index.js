// For Navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.transition = "1s";
    } else {
        document.getElementById("navbar").style.top = "-250px";
        document.getElementById("navbar").style.transition = "1s";
    }
    prevScrollpos = currentScrollPos;
}
// For Navbar