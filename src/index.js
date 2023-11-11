import "./style.css";
import { headerDates } from "./headerDates.js";

headerDates();

const addButton = document.querySelector(".plusSign");
const test = document.querySelector(".test");
const newTask = document.querySelector(".new_Task");

addButton.addEventListener("click", function(){
    test.style.display = "none";
    newTask.style.display = "block";
})