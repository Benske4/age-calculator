let ddInput = document.getElementById("dd");
let days = document.getElementById("days");
let yyyyInput = document.getElementById("yyyy");
let years = document.getElementById("years");
let mmInput = document.getElementById("mm");
let months = document.getElementById("month");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    days.textContent = daysOld();
    months.textContent = monthsOld();
    years.textContent = workoutBirthYear();
  }
});

let workoutBirthYear = function () {
  let currentYear = new Date().getFullYear();
  let birhtYear = currentYear - yyyyInput.value;
  return birhtYear;
};

let daysOld = function () {
  let d1 = document.getElementById("dd").value;
  let d2 = new Date().getDate();
  let m2 = 1 + new Date().getMonth();
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + months[m2 - 2];

    let d = d2 - d1;
    return d;
  } else {
    let d = d2 - d1;
    return d;
  }
};

let monthsOld = function () {
  let m1 = document.getElementById("mm").value;
  let m2 = 1 + new Date().getMonth();

  if (m1 > m2) {
    let m = m2 + 12 - m1;

    return m;
  } else {
    let m = m2 - m1 - 1;
    console.log(m);
    return m;
  }
};

//   if (m1 < m2) {
//     let m = m2 - m1 - 1;
//     console.log(m);
//     return m;
//   } else {
//     m2 + 12;
//     let m = m2 - m1;
//     return m;
//   }
// };

// Output: "June"
//months with 31 days = jan,march, may, july, august, oct, dec
//months with 30 days = april, june, sep, nov
//28 days= feb. leap years = 2020, 2016 and every 4 year//
