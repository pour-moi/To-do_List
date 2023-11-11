import { format, addDays, addHours } from "date-fns";

const generateTimeList = (startTime, endTime, interval) => {
  const timeList = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeList.push(format(currentTime, "h a"));
    currentTime = addHours(currentTime, interval);
  }

  return timeList;
};

export const headerDates = () => {
  const listDate = document.querySelector(".days");
  const CurrentDate = document.querySelector(".theDate");
  let currentDate = new Date();
  CurrentDate.textContent = format(currentDate, "MMM d, yyyy");
  let dateNumber = format(currentDate, "dd");

  for (let i = 0; i < 7; i++) {
    let newDate = addDays(currentDate, i);
    let dateElement = document.createElement("div");
    dateElement.classList.add("day");
    dateElement.textContent = format(newDate, "eee");
    listDate.appendChild(dateElement);

    let dateNumberElement = document.createElement("div");
    dateNumberElement.classList.add("dates");
    dateNumberElement.textContent = format(newDate, "dd");
    dateElement.appendChild(dateNumberElement);

    if (dateNumber == dateNumberElement.textContent) {
      dateNumberElement.style.color = "white";
      dateNumberElement.style.background =
        "linear-gradient(to right, #6b2cf5, #d450e6)";
      dateNumberElement.style.borderRadius = "50%";
    }

    listDate.appendChild(dateElement);
  }

  // Example: Generate a list of times from the current time to 12:00 PM with a 1-hour interval
  const startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0); // Current day, 12:00 AM
  const endTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0); // Current day, 12:00 PM
  const interval = 1; // 1-hour interval

  const timeList = generateTimeList(startTime, endTime, interval);

  // Assuming you have an element to display the time list, update it accordingly
  const timeListContainer = document.querySelector(".time-list");

  // Clear existing content in case the function is called multiple times
  timeListContainer.innerHTML = "";

  timeList.forEach((time) => {
    const timeItem = document.createElement("div");
    timeItem.classList.add("time-item");
    timeItem.textContent = time;
    timeListContainer.appendChild(timeItem);
  });
};
