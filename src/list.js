class List {
  // your code here
  constructor(name){
    this.tasks = []
    this.name = name
  }

  createNewTask(description, priority){
    let task = new Task(this.name, description, priority)
    this.tasks.push(task)
  }

  deleteTask(taskDescription){
    this.tasks = this.tasks.filter(task=>task.description !==  taskDescription )
  }

  render(){
    let str = `<h2>${this.name}
          <button data-title="${this.name}" class="delete-list">
            X
          </button>
          </h2>
            <ul>`
    for(let i = 0; i<this.tasks.length; i++){
      str += this.tasks[i].render()
    }
    str += "</ul>"
    return str
  }
}
