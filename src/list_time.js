// Example: Generate a list of times from the current time to 12:00 PM with a 1-hour interval
// const startTime = new Date(
//   currentDate.getFullYear(),
//   currentDate.getMonth(),
//   currentDate.getDate(),
//   0,
//   0
// ); // Current day, 12:00 AM
// const endTime = new Date(
//   currentDate.getFullYear(),
//   currentDate.getMonth(),
//   currentDate.getDate(),
//   12,
//   0
// ); // Current day, 12:00 PM
// const interval = 1; // 1-hour interval

// const timeList = generateTimeList(startTime, endTime, interval);

// // Assuming you have an element to display the time list, update it accordingly
// const timeListContainer = document.querySelector(".time-list");

// // Clear existing content in case the function is called multiple times
// timeListContainer.innerHTML = "";

// timeList.forEach((time) => {
//   // Create a new div as a container
//   const timeContainer = document.createElement("div");
//   timeContainer.classList.add("time-container");

//   // Set the data-start-time attribute
//   timeContainer.setAttribute("data-start-time", time);

//   const timeItem = document.createElement("div");
//   timeItem.classList.add("time-item");
//   timeItem.textContent = time;
//   timeContainer.appendChild(timeItem); // Append to the container

//   const dashedLine = document.createElement("div");
//   dashedLine.classList.add("dashed-line");
//   timeContainer.appendChild(dashedLine); // Append to the container

//   timeListContainer.appendChild(timeContainer); // Append the container
// });
