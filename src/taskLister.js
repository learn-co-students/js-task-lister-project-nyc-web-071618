class TaskLister {
  // your solution here
  constructor(){
    this.taskList = []
    const createListForm = document.getElementById("create-list-form")
    createListForm.addEventListener("submit", (e)=>{
      e.preventDefault()

      let name = document.getElementById("new-list-title")
      this.createNewList(name.value)
      this.render()
      name.value = ""
    })

    const createTaskForm = document.getElementById("create-task-form")
    createTaskForm.addEventListener("submit", (e)=>{
      e.preventDefault()
      const parentList = document.getElementById("parent-list")
      const description = document.getElementById("new-task-description")
      const priority   = document.getElementById("new-task-priority")
      const listName= parentList[parentList.selectedIndex].value;
      const priorityValue = priority.value
      if( priorityValue === "" )
        priorityValue = "low"
      //const task = new Task(listName, description.value, priority.value)

      const list = this.taskList.find(list=>list.name === listName)
      list.createNewTask(description.value, priorityValue)
      this.render()
    })
  }

  createNewList(name){
    let list = new List(name)
    this.taskList.push(list)
  }

  deleteList(listTitle) {
    console.log("deleteList ", listTitle)
    this.taskList = this.taskList.filter(({ name }) => listTitle !== name);
  }

  deleteTask(listTitle, taskDescription) {
    console.log("delete task  ", listTitle, taskDescription)
    const targetList = this.taskList.find(({ name }) => name === listTitle);
    targetList.deleteTask(taskDescription);
  }

  render() {
    const lists = document.getElementById("lists")
    lists.innerHTML = ""
    const parentList = document.getElementById("parent-list")
    parentList.innerHTML = ""
    for( let i = 0; i<this.taskList.length; i++){
      const div = document.createElement("div")
      div.innerHTML = this.taskList[i].render()
      lists.appendChild(div)
      let listName = this.taskList[i].name
      parentList.innerHTML += `<option value="${listName}">
        ${listName}</option>`
    }
    const createTaskForm = document.getElementById("create-task-form")

    if( this.taskList.length > 0 ){
      createTaskForm.style.display = "block"
    }else {
      createTaskForm.style.display = "none"
    }
  }
}
