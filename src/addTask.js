export const addTask = () => {
  const Title = document.getElementById("#title");
  const startTime = document.getElementById("#start");
  const endTime = document.getElementById("#end");

  function Lists(task, strTime, edTime) {
    this.task = task;
    this.strTime = strTime;
    this.edTime = edTime;
  }

  Lists.prototype.info = function () {
    return this.task + "\n" + this.strTime + " - " + this.edTime;
  };

  function addTask(task, strTime, edTime) {
    const newTask = new Lists(task, strTime, edTime);
    myTask.push(newTask);
    return newTask;
  }

  let todo = document.getElementById("#todo");

  const myTask = [];
  const button = document.querySelector(".add_task");
  const test = document.querySelector(".test");
  const new_Task = document.querySelector(".new_Task");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    test.style.display = "block";
    new_Task.style.display = "none";

    const task = Title.value;
    const strTime = startTime.value;
    const edTime = endTime.value;

    const newTask = addTask(task, strTime, edTime);
    todo.innerHTML = "";

    for (let i = 0; i < myTask.length; i++) {
      let div = document.createElement("div");
      div.className = "content";
      div.innerText = myTask[i].info();
      todo.appendChild(div);
    }
  });
};
