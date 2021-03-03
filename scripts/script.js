window.onscroll = function show() {
    if (window.innerWidth > 1024) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".header-logo").setAttribute("style", "display:flex");
        } else {
            document.querySelector(".header-logo").setAttribute("style", "display: none");
        }
    } else {
        document.querySelector(".header-logo").setAttribute("style", "display:flex");
    }
}