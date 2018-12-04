document.querySelector("#activate-flight").addEventListener("click", function() {
    const flightHandlerFunction = document.querySelector("#flight") 
    flightHandlerFunction.classList.replace("disabled","enabled");
        console.log(flightHandlerFunction)
}
)

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    const mindreadingHandlerFunction = document.querySelector("#mindreading") 
    mindreadingHandlerFunction.classList.replace("disabled","enabled");
        console.log(mindreadingHandlerFunction)
}
)

document.querySelector("#activate-xray").addEventListener("click", function() {
    const xrayHandlerFunction = document.querySelector("#xray") 
    xrayHandlerFunction.classList.replace("disabled","enabled");
        console.log(xrayHandlerFunction)
}
)
    document.querySelector("#activate-all").addEventListener('click', () => { 
        const buttons = document.querySelectorAll(".power")
        buttons.forEach((button) => {
        button.classList.replace("disabled","enabled");
            console.log("forEach worked");
        });
    })


    document.querySelector("#deactivate-all").addEventListener('click', () => { 
        const buttons = document.querySelectorAll(".power")
        buttons.forEach((button) => {
        button.classList.replace("enabled","disabled");
            console.log("forEach worked");
        });
    })




    





