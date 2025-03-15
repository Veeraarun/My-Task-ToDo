const todo = [];
const dateList = [];
const timeList = [];


function addToDo() {
  const inputElement = document.querySelector(".js-input");
  const inputValue = inputElement.value;

  if (inputValue === "") {
    alert("Please Enter The ToDo Name ");
  } else {
    todo.push(inputValue);
    inputElement.value = "";
    addDate();
  }
}

function addDate() {
  const dateElement = document.querySelector(".js-date");
  const dateValue = dateElement.value;

  if (dateValue === "") {
    dateList.push("-");
  } else {
    const date = new Date(dateValue);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}:${String(date.getMonth() + 1).padStart(2, "0")}:${date.getFullYear()}`;
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
    dateList.push(`${formattedDate} (${dayOfWeek})`);
    dateElement.value = "";
  }

  addTime();
}

function addTime() {
  const timeElement = document.querySelector(".js-time");
  let timeValue = timeElement.value;

  if (timeValue === "") {
    timeList.push("-");
  } else {
    const [hours, minutes] = timeValue.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    timeValue = `${formattedHours}:${minutes} ${period}`;
    timeList.push(timeValue);
    timeElement.value = "";

  }
  updateDisplay();
}

function deleteTodo(index) {
  todo.splice(index, 1);
  dateList.splice(index, 1);
  timeList.splice(index, 1);
  updateDisplay();
}

function updateDisplay() {
  let displayInput = [];
  let displayDate = [];
  let displayTime = [];
  let buttonList = [];

  for (let i = 0; i < todo.length; i++) {
    displayInput += `<p>${todo[i]} </p>`;
    displayDate += `<p>${dateList[i]} </p>`;
    displayTime += `<p>${timeList[i]}</p>`;
    buttonList += `<button onclick="deleteTodo(${i});">Delete</button>`;
  }

  document.querySelector(".js-displayInput").innerHTML = displayInput;
  document.querySelector(".js-displayDate").innerHTML = displayDate;
  document.querySelector(".js-displayTime").innerHTML = displayTime;
  document.querySelector(".button").innerHTML = buttonList;
}
