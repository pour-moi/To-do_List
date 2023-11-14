export const addTask = () => {
  const button = document.querySelector(".add_task");
  const test = document.querySelector(".test");
  const new_Task = document.querySelector(".new_Task");
  button.addEventListener("click", function () {
    test.style.dislay = "block";
    new_Task.style.display = "none";
  });
};
