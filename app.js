var projectshead = document.querySelector(".projectsheading");
var mycarousel = document.querySelector(".mycarousel");
var skillshead = document.querySelector(".skillsheading");

function add_animated(){
    if (window.scrollY>190||document.body>190||window.pageYOffset>190) {
        projectshead.style.visibility = "visible";
        projectshead.classList.add("myfadeIn");
    }
    if (window.scrollY>560||document.body>560||window.pageYOffset>560) {
        mycarousel.style.visibility = "visible";
        mycarousel.classList.add("myfadeIn");
    }
    if (window.scrollY>1100||document.body>1100||window.pageYOffset>1100) {
        skillshead.style.visibility = "visible";
        skillshead.classList.add("myfadeIn");
    }

}