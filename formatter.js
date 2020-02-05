
if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {

    document.getElementById("nav-header").remove();
    document.getElementById("nav").classList = "teal-background";
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
}
else {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
}