// INPUTS
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// OUTPUT
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

// FORM ELEMENT
const form = document.querySelector("form");

// ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.style.borderColor = "red";
      parent.querySelector("small").textContent = "Este campo es obligatorio.";
      validator = false;
    } else if (parseInt(monthInp.value) > 12) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").textContent = "Debe ser un mes válido.";
      validator = false;
    } else if (parseInt(dayInp.value) > 31) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").textContent = "Debe ser un día válido.";
      validator = false;
    } else {
      input.style.borderColor = "black";
      parent.querySelector("small").textContent = "";
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (parseInt(dayInp.value) > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (parseInt(monthInp.value) > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - parseInt(dayInp.value);
    const m = month - parseInt(monthInp.value);
    const y = year - parseInt(yearInp.value);

    dayOtp.textContent = d;
    monthOtp.textContent = m;
    yearOtp.textContent = y;
  }
}

