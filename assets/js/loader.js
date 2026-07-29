async function loadComponent(
    elementId,
    filePath,
    callback
){


    const container =
        document.getElementById(elementId);


    if(!container){

        console.error(
            `${elementId} not found`
        );

        return;

    }


    try{


        const response =
            await fetch(filePath);


        const html =
            await response.text();


        container.innerHTML = html;


        // Run something after loading

        if(callback){

            callback();

        }


    }
    catch(error){


        console.error(error);


    }


}