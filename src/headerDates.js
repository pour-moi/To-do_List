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
};
