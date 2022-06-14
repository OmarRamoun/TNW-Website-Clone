window.onscroll = function show() {
    if (window.innerWidth > 1024) {
        if (document.body.scrollTop > 0 ||  document.documentElement.scrollTop > 0) {
            document.querySelector(".header-logo").setAttribute("style", "display:flex");
            document.querySelector(".sub-header").setAttribute("style", "display:none");
        } else {
            document.querySelector(".header-logo").setAttribute("style", "display: none");
            document.querySelector(".sub-header").setAttribute("style", "display:flex");
        }
    } else {
        document.querySelector(".header-logo").setAttribute("style", "display:flex");
        document.querySelector(".sub-header").setAttribute("style", "display:none");
    }
}