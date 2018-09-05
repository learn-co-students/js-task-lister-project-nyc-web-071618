class TaskLister {
  constructor(){
    this.taskList = [];
    const createListForm = document.getElementById('create-list-form')
    createListForm.addEventListener('submit', (e) => {
      e.preventDefault()

      let name = document.getElementById("new-list-title")
      this.createNewList(name.value)
      this.render()
      name.value = ""
    })

    const createTaskForm = document.getElementById('create-task-form')
    createTaskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const parentList = document.getElementById('parent-list')
      const description = document.getElementById('new-task-description')
      const priority = document.getElementById('new-task-priority');
      // const task = new Task(parentList[parentList.selectedIndex].value, description.value, priority.value)
      const listName = parentList[parentList.selectedIndex].value
      const list = this.taskList.find(list=>list.name === listName)
      if (priority.value === ''){
        priority.value = 'low'
      }
      list.createNewTask(description.value, priority.value)
      this.render()
      description.value = ""
      priority.value = ""
    })
  }

  createNewList(name) {
    let list = new List(name)
    this.taskList.push(list)
  }

  deleteList(listTitle) {
    this.taskList = this.taskList.filter(({ name }) => listTitle !== name);
  }

  deleteTask(listTitle, taskDescription) {
    const targetList = this.taskList.find(({ name }) => name === listTitle);
    targetList.deleteTask(taskDescription);
  }


  render() {
    const lists = document.getElementById('lists')
    lists.innerHTML = ""
    const parentList = document.getElementById('parent-list')
    parentList.innerHTML = ""
    for ( let i = 0; i<this.taskList.length; i++){
      const div = document.createElement('div')
      div.innerHTML = this.taskList[i].render()
      lists.appendChild(div)
      let listName = this.taskList[i].name
      parentList.innerHTML += `<option value="${listName}">
      ${listName}
      </option>`
    }
    if (this.taskList.length > 0){
      const createTaskForm = document.getElementById('create-task-form')
      createTaskForm.style.display = 'block'
    }
  }

}
