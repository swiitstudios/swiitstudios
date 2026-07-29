// ==========================================
// SWEET STUDIOS VISUAL EFFECTS
// ==========================================


function setupEffects(){


    console.log("🍒 Effects loaded");



    // Navbar changes when scrolling

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if(navbar){


        window.addEventListener(
            "scroll",
            function(){


                if(window.scrollY > 50){


                    navbar.classList.add(
                        "scrolled"
                    );


                }
                else{


                    navbar.classList.remove(
                        "scrolled"
                    );


                }


            }
        );


    }



    // Button hover sound preparation
    // (we can add audio later)

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(
        function(button){


            button.addEventListener(
                "mouseenter",
                function(){


                    button.classList.add(
                        "hovered"
                    );


                }
            );


            button.addEventListener(
                "mouseleave",
                function(){


                    button.classList.remove(
                        "hovered"
                    );


                }
            );


        }
    );


}