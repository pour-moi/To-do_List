import "./style.css";
import { headerDates } from "./headerDates.js";
// import { addTask } from "./headerDates.js";

const addTask = (task, startTime, endTime) => {
  // Create a new div for the task box
  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");

  // Add the task details to the task box
  const taskText = document.createElement("p");
  taskText.textContent = task;
  taskBox.appendChild(taskText);

  const taskTime = document.createElement("p");
  taskTime.textContent = `${startTime} - ${endTime}`;
  taskBox.appendChild(taskTime);

  // Find the corresponding time container and append the task box to it
  const timeContainer = document.querySelector(
    `.time-container[data-start-time="${startTime}"]`
  );
  timeContainer.appendChild(taskBox);
};

const test = document.querySelector(".test");
const newTask = document.querySelector(".new_Task");

const button = document.querySelector(".add_task");

// Add an event listener to the button
button.addEventListener("click", (event) => {
  // Prevent the button from submitting the form
  event.preventDefault();

  // Get the form element
  const form = document.querySelector("#todo-form");

  // Get the task details from the form inputs
  const task = form.elements["title"].value;
  const startTime = form.elements["start"].value;
  const endTime = form.elements["end"].value;

  // Call the addTask function with the task details
  addTask(task, startTime, endTime);
  test.style.display = "block";
  newTask.style.display = "none";
});

headerDates();

const addButton = document.querySelector(".plusSign");

addButton.addEventListener("click", function () {
  test.style.display = "none";
  newTask.style.display = "block";
});
