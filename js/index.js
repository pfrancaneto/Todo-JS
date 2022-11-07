const listElement = document.querySelector(".list");
const textElement = document.querySelector("input");
const buttonElement = document.querySelector(".btn");
document.querySelector('#todo').focus();

const arrList = [];

function renderTodo() {
  listElement.innerHTML = "";

  arrList.forEach((item, index) => {
    const liElement = document.createElement("li");
    const liText = document.createTextNode(item);

    const linkLi = document.createElement("a");
    const textLink = document.createTextNode("excluir");

    linkLi.setAttribute("href", "#");
    linkLi.setAttribute("onclick", "deleteTodo(" + index + ")");

    linkLi.appendChild(textLink);

    liElement.appendChild(liText);
    liElement.appendChild(linkLi);
    listElement.appendChild(liElement);
  });
}
renderTodo();

buttonElement.addEventListener("click", addItem);

function addItem() {
  const newTodo = textElement.value.toUpperCase();
  const messageElement = document.querySelector("span");

  if (textElement.value.length === 0) {
    messageElement.classList.add('message');
    document.querySelector('#todo').focus();
  } else {
    messageElement.classList.remove('message')
    document.querySelector('#todo').focus();
    arrList.push(newTodo);
    textElement.value = "";

    renderTodo();
  }
}

textElement.addEventListener('keyup', (event) => {
  const key = event.which || event.key;
  if(key === 13) {
    addItem();
  }
})

function deleteTodo(pos) {
  arrList.splice(pos, 1);
  renderTodo();
}
