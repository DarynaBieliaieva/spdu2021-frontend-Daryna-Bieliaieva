let todoList = document.getElementById("todos");
let itemText = document.getElementById("itemText");
let add = document.getElementById("add");

add.addEventListener("click", function(){

  let text = itemText.value.trim();

 
  if(!text.length) return ;

  
  let item = "<li><label><input type='checkbox'> <span>"+ text+"</span></label></li>";
  todoList.insertAdjacentHTML('beforeend', item);

 
  itemText.value = "";   
});