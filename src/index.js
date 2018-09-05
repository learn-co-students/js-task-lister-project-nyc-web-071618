document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  // const app = new TaskLister();

  const listDiv = document.getElementById("app-content");
  const listForm = document.getElementById('create-list-form')
  const listTitle = document.getElementById('new-list-title')
  const lists = []

  listForm.addEventListener('submit', function(event) {
      event.preventDefault()
      if (lists.length < 1) {
        lists.push(listTitle.value)
        listDiv.innerHTML +=

        `<form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">
          <option value="${lists[0]}" selected>
            ${lists[0]}
          </option>
          </select>

          <label for="new-task-description">Task description:</label>
          <input required type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">
        </form>`
    } else {
      lists.push(listTitle.value)
      document.getElementById('parent-list').innerHTML +=
        `<option value="${lists[lists.length-1]}" selected>
          ${lists[lists.length-1]}
        </option>`
    }
  })
});
