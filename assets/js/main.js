document.addEventListener(
"DOMContentLoaded",
function(){


    console.log(
        "🍒 Sweet Studios is starting..."
    );


    loadComponent(
        "navbar",
        "components/navbar.html"
    );


    loadComponent(
        "hero",
        "components/hero.html"
    );


    loadComponent(
        "featured-project",
        "components/featured-project.html"
    );


    loadComponent(
        "about",
        "components/about.html"
    );


    loadComponent(
        "projects",
        "components/projects.html"
    );


    loadComponent(
        "roadmap",
        "components/roadmap.html"
    );


    loadComponent(
        "footer",
        "components/footer.html"
    );


    setupNavigation();


});