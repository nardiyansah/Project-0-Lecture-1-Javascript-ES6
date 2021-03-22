let count = 0
let unchecked = 0

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let new_task = prompt("What's your new task ?")
  if (new_task === null || new_task === '') {

  } else {
    let node = document.createElement("li")
    let textnode = document.createTextNode(new_task)
    node.appendChild(textnode)
    list.appendChild(node)

    // change count and unchecked
    count += 1
    unchecked += 1
    itemCountSpan.innerHTML = count
    uncheckedCountSpan.innerHTML = unchecked
  }
}
