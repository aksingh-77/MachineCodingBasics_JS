const modalContainer = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", (event)=>{
    modalContainer.classList.remove("hide");
});

modalContainer.addEventListener("click", (event)=>{
    const modalButton = event.target.name;
    if(modalButton === "close"){
        modalContainer.classList.add("hide");
    }
});