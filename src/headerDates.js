import { format, addDays } from "date-fns";

export const headerDates = () => {
  const listDate = document.querySelector(".days");
  const CurrentDate = document.querySelector(".theDate");
  let currentDate = new Date();
  CurrentDate.textContent = format(currentDate, "MMMM do, yyyy");
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
