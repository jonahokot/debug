const paragraph = document.createElement('p');
paragraph.textContent = "I'm a brand new paragraph";
paragraph.style.border ="2px dotted purple";
console.log(paragraph);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "I'm a second paragraph";
paragraph2.style.border ="5px solid red";
console.log(paragraph2);

//paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";
//paragraph;


const div = document.querySelector('div')
div.appendChild(paragraph2)
div.appendChild(paragraph)

const todo_list = document.querySelector('ul');
const new_todo_list = document.createElement('li');
new_todo_list.textContent = "do homework";
todo_list.appendChild(new_todo_list);

const new_todo_list1 = document.createElement('li');
new_todo_list1.textContent = "read poetry";
todo_list.appendChild(new_todo_list1);

const new_todo_list2 = document.createElement('li');
new_todo_list2.textContent = "exercise";
todo_list.appendChild(new_todo_list2);

const new_todo_list3 = document.createElement('li');
new_todo_list3.textContent = "serato studio";
todo_list.appendChild(new_todo_list3);

const another_todo = document.createElement('li');
another_todo.textContent = 'pay bills';
todo_list.insertBefore(another_todo,todo_list.ElementChild);