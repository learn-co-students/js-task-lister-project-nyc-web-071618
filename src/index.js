document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");


  const app = new TaskLister();


  listDiv.addEventListener("click", e => {
    if (e.target.className === "delete-list") {
      app.deleteList(e.target.dataset.title);
      app.render()
    } else if (e.target.className === "delete-task") {
      app.deleteTask(e.target.dataset.listTitle, e.target.dataset.taskName);
      app.render()
    }
  });

});
