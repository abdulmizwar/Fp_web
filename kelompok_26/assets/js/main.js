// Nav bar
  window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " card" + " animate-top" + " black";
    } else {
        navbar.className = navbar.className.replace(" card animate-top black", "");
    }
}
