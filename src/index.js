import "./style.css";
import { headerDates } from "./headerDates.js";
import { addTask } from "./addTask.js";

// const addTask = (task, startTime, endTime) => {
//   // Create a new div for the task box
//   const taskBox = document.createElement("div");
//   taskBox.classList.add("task-box");

//   // Add the task details to the task box
//   const taskText = document.createElement("p");
//   taskText.textContent = task;
//   taskBox.appendChild(taskText);

//   const taskTime = document.createElement("p");
//   taskTime.textContent = `${startTime} - ${endTime}`;
//   taskBox.appendChild(taskTime);

//   // Find the corresponding time container and append the task box to it
//   const timeContainer = document.querySelector(
//     `.time-container[data-start-time="${startTime}"]`
//   );
//   timeContainer.appendChild(taskBox);
// };

headerDates();
addTask();
const addButton = document.querySelector(".plusSign");
const test = document.querySelector(".test");
const new_Task = document.querySelector(".new_Task");
addButton.addEventListener("click", function () {
  test.style.display = "none";
  new_Task.style.display = "block";
});
