var projectshead = document.querySelector(".projectsheading");
var mycarousel = document.querySelector(".mycarousel");
var skillshead = document.querySelector(".skillsheading");
var NLang = document.querySelector(".NLang");
var PLang = document.querySelector(".PLang");

function add_animated(){
    if (window.scrollY>190||document.body>190||window.pageYOffset>190) {
        projectshead.style.visibility = "visible";
        projectshead.classList.add("myfadeIn");
    }
    if (window.scrollY>560||document.body>560||window.pageYOffset>560) {
        mycarousel.style.visibility = "visible";
        mycarousel.classList.add("myfadeIn");
    }
    if (window.scrollY>1000||document.body>1000||window.pageYOffset>1000) {
        skillshead.style.visibility = "visible";
        skillshead.classList.add("myfadeIn");
    }
    if (window.scrollY>1200||document.body>1200||window.pageYOffset>1200) {
        NLang.style.visibility = "visible";
        NLang.classList.add("myfadeIn");
    }
    if (window.scrollY>1490||document.body>1490||window.pageYOffset>1490) {
        PLang.style.visibility = "visible";
        PLang.classList.add("myfadeIn");
    }
}

window.addEventListener("load", function(){
    var loader = document.querySelector(".loader");
    loader.className += " hidden";
});