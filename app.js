let buttonAddToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let buttonClearToDo = document.getElementById("clearToDo")


buttonAddToDo.addEventListener("click", () =>{
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value="";

    paragraph.addEventListener("click", ()=>{
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick", () =>{
        toDoContainer.removeChild(paragraph);
    })

})

buttonClearToDo.addEventListener("click", () =>{
    inputText.value ="";
})

