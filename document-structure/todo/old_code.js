const addTask = document.getElementById("tasks__add")
const taskInput = document.getElementById("task__input")
const taskList = document.getElementById("tasks__list")



function repeatedCode(key) {
    taskList.innerHTML += `<div class="task">
    <div class="task__title">${localStorage.getItem(key)}</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`
}


// restore all messages that are in localStorage
document.addEventListener('DOMContentLoaded', function() {
    for(let key in localStorage) {
        valueCheck = localStorage.getItem(key)

        if (valueCheck != null) {

        repeatedCode(key)
    //     taskList.innerHTML += `<div class="task">
    //     <div class="task__title">${localStorage.getItem(key)}</div>
    //     <a href="#" class="task__remove">&times;</a>
    //   </div>`

      }

    }

      deleteFromStorage()

}, false);


addTask.addEventListener("click", (e) => {
    e.preventDefault()
    if (taskInput.value.trim() !== "") {
        console.log(taskInput.value)
        
        let time = Date().toLocaleString();
        localStorage.setItem(time, taskInput.value);

        taskList.innerHTML += `<div class="task">
       <div class="task__title">${taskInput.value}</div>
       <a href="#" class="task__remove">&times;</a>
     </div>`
        taskInput.value = ""
    }

    deleteFromStorage()
})


// delete from storage and div
function deleteFromStorage() {

    const taskRemove = Array.from(document.querySelectorAll(".task__remove"))
    for (let item of taskRemove) {
        item.addEventListener("click", (e) => {          
            e.preventDefault()
            
            // get value of pressed item
            let deleteParent = item.closest(".task")
            let deleteItem = deleteParent.childNodes[1].textContent

            for(let key in localStorage) {
                if (localStorage.getItem(key) == deleteItem){
                    localStorage.removeItem(key)
                }
              }

              deleteParent.remove()
        })
    }
}
