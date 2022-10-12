function ToggleNavbar() {
    $(".segment-1").toggleClass("segment-1-closed");
    $(".segment-2").toggleClass("segment-2-closed");
    $(".segment-3").toggleClass("segment-3-closed");
    $(".hamburger-button").toggleClass("hamburger-button-closed");
    $(".hideable-content-nav").toggleClass("toggle-display");

    $(".nav-background").toggleClass("nav-toggle-background");
}

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 50) {
        $(".hamburger-button").addClass("hamburger-button-black");
        $("nav").addClass("decrease-text-after-scroll");
        $(".nav-text").addClass("black-text");
        $(".selected").addClass("black-text");
    } else {
        $(".hamburger-button").removeClass("hamburger-button-black");
        $(".nav-text").removeClass("black-text");
        $(".selected").removeClass("black-text");
        $("nav").removeClass("decrease-text-after-scroll")
    }
});

function ScrollToWindow(id) {
    var element = document.getElementById(id);
    element.scrollIntoView(true);
}
