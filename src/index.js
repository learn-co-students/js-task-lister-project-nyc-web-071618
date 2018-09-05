document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.getElementById("app-content");
  const createListForm = document.getElementById('create-list-form')
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
