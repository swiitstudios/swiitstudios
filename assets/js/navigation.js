// ==========================================
// SWEET STUDIOS NAVIGATION
// ==========================================


function setupNavigation(){


    console.log("🍒 Navigation loaded");


    const menuButton = document.querySelector(
        ".menu-button"
    );


    const navMenu = document.querySelector(
        ".nav-links"
    );


    // Mobile menu

    if(menuButton && navMenu){


        menuButton.addEventListener(
            "click",
            function(){


                navMenu.classList.toggle(
                    "active"
                );


                menuButton.classList.toggle(
                    "open"
                );


            }
        );


    }



    // Smooth scrolling

    const links = document.querySelectorAll(
        "a[href^='#']"
    );


    links.forEach(function(link){


        link.addEventListener(
            "click",
            function(event){


                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if(target){


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }


            }
        );


    });


}
