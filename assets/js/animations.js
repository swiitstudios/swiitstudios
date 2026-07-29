// ==========================================
// SWEET STUDIOS ANIMATIONS
// ==========================================


function setupAnimations(){


    console.log("🍒 Animations loaded");


    const animatedElements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            function(entries){


                entries.forEach(
                    function(entry){


                        if(entry.isIntersecting){


                            entry.target.classList.add(
                                "visible"
                            );


                        }


                    }
                );


            },
            {

                threshold: 0.15

            }
        );



    animatedElements.forEach(
        function(element){


            observer.observe(
                element
            );


        }
    );


}