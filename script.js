//your code here
const img = document.querySelector("#user-img");
const title = document.querySelector("#user-title");
const value = document.querySelector("#user-value");
const btns = document.querySelectorAll(".btn");
const additionalInfo = document.querySelector("#additional-info");
const getUserBtn = document.querySelector("#getUser");

let user = {};

async function getUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  user = data.results[0];
  displayUser();
}

function displayUser() {
  img.src = user.picture.large;
  title.textContent = `${user.name.first} ${user.name.last}`;
  value.textContent = "Click a button for more info";
  additionalInfo.innerHTML = "";
}

function displayInfo(attr) {
  let infoValue = "";
  switch (attr) {
    case "age":
      infoValue = user.dob.age;
      break;
    case "email":
      infoValue = user.email;
      break;
    case "phone":
      infoValue = user.phone;
      break;
    default:
      break;
  }
  value.textContent = infoValue;
}

getUser();

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const attr = e.currentTarget.dataset.attr;
    displayInfo(attr);
  });
});

getUserBtn.addEventListener("click", function () {
  getUser();
});
