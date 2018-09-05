class Task {
  // your code here
  constructor(listName, description, priority){
    this.listName = listName
    this.description = description
    this.priority = priority
  }

  render(){
    return `<li>
        Task: ${this.description}
        <button data-list-title="${this.listName}" data-task-name="${this.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`
  }
}
