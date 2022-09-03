const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

const item = document.querySelectorAll("li");

function inputLength() {
    return input.Value.length;
}


function createListElement() {
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener('click', crossOut);

// Create Delete Button

const deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);

// createListElement(); 

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

enterBtn.onclick = () => addListAfterClick();

input.addEventListener('keypress', () => {
    if(inputLength() > 0 && event.which === 13) {
        createListElement();
    }
})