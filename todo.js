//Adding items to the todo list:
var addTask = document.querySelector(".add-task");

addTask.addEventListener("click", function(){
	var newTask = prompt("What needs doing?");

	if (newTask === ""){
		return undefined;
	} else {
		const todoList = document.querySelector("ol");

		const newTodo = document.createElement("li");
		newTodo.textContent = newTask;

		todoList.appendChild(newTodo);
	}
});


//IDEAS:
// 1. Use jQuery to alter class of dynamically created lis?

// 2. Find way of adding a label/input: checkbox to the page and using :checked pseudoclass to strikethrough completed tasks.

// 3. Fix bug: empty prompt box currently = blank new li when live but wasn't happening in beta




//Colour effects on existing todo list:
//var lis = document.querySelectorAll("li");

//for(var i=0; i <lis.length; i++){
//	lis[i].addEventListener("mouseover", function (){
//		this.classList.add("selected");
//	});
//	lis[i].addEventListener("mouseout", function (){
//		this.classList.remove("selected");
//	});
//	lis[i].addEventListener("click", function(){
//		this.classList.toggle("done");
//	});
//}








