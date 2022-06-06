const newElement = document.createElement("h1");

const nodeText = document.createTextNode("My To Do List");

newElement.appendChild(nodeText);

document.body.appendChild(newElement);

const arr = [];
const ul = document.querySelector("ul");

// The function where the clients will submit
const toDoList = (event) => {
  event.preventDefault();
  
  let userData = document.querySelector("#user-data").value;
  
  // Is it my user data empty?
  if(!userData === "") {
    
    // Step 1 creating the element
    let newLi = document.createElement("li");

    // Step 2 we published to the document
    let text = document.createTextNode(userData);

    // Step 3
    newLi.appendChild(text);
    newLi.style.backgroundAttachment = color();

    const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    doneBtn.innerHTML = "✔️";
    delBtn.innerHTML = "✖️";

    newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);

    ul.appendChild(newLi);

    // Every time someone click
    delBtn.addEventListener("click", () => newLi.remove());
    doneBtn.addEventListener("click", () => newLi.classList.add("done"));

    // When the user write something, and then the input should be clean
    document.querySelector("#user-data").value = "";

    // Message for an empty placeholder
  } else {
    document.querySelector("#user-data").placeHolder = "add your list here";
  }
};

const color = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

document.querySelector("form").addEventListener("submit", toDoList);