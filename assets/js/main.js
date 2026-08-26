document.addEventListener(
"DOMContentLoaded",
function(){


    console.log(
        "🍒 Sweet Studios is starting..."
    );


    loadComponent(
    "navbar",
    "components/navbar.html",
    setupNavigation
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





});

//LOADER
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');
  const loaderOverlay = document.getElementById('loader-overlay');

  let currentProgress = 0;

  // Simulate smooth progress loading
  const interval = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 15) + 5;

    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(interval);

      // Brief pause at 100% before fading out
      setTimeout(() => {
        loaderOverlay.classList.add('hidden');
      }, 300);
    }

    progressBar.style.width = `${currentProgress}%`;
  }, 100);
});

// Fallback: Ensure loader hides once window completely loads
window.addEventListener('load', () => {
  const loaderOverlay = document.getElementById('loader-overlay');
  const progressBar = document.getElementById('progress-bar');
  
  progressBar.style.width = '100%';
  setTimeout(() => {
    loaderOverlay.classList.add('hidden');
  }, 300);
});
