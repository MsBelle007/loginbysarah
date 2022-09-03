const Summitbtn = document.querySelector("#sign_up");
const link = document.querySelector(".login-link");
const loginEL = document.querySelector("#login");
const SignUpEL = document.querySelector(".sign-up-form");
const LoginBtn = document.querySelector(".login__btn");
const userName = document.querySelector(".username_for");
const userEmail = document.querySelector(".email_address_for");
const userPassword = document.querySelector(".password-for");
const userLgEmail = document.querySelector(".username_for_login_up");
const userLgPassword = document.querySelector(".Login__password");

function signUpProcess() {
  // const phoneNumber =
  var phone = document.getElementById("phone");
  console.log(phone.value);

  // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
  // const regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
  // const regName = /\d+$/g;
  // if (username === "") {
  //   document.getElementsByClassName("usernameSNerror")[0];
  //   // username.focus();
  //   return false;
  // }
  // }
}
function register(e) {
  e.preventDefault();
  console.log(userName);
  console.log(userEmail);
  console.log(userPassword);
  localStorage.setItem("userEmail", userEmail.value);
  localStorage.setItem("userPassword", userPassword.value);
  localStorage.setItem("userName", userName.value);

  // signUpProcess();
  if (userName.value === "") {
    alert("please enter your name!");
  }

  if (userEmail.value === "") {
    alert("please add your email!");
  }
  if (userPassword.value === "" || userPassword.value.length < 8) {
    alert("Please input an 8 digit password!");
  } else {
    SignUpEL.classList.toggle("open");
    loginEL.classList.toggle("closed");
  }
}

function loginInProcess(e) {
  e.preventDefault();
  const userEmailLog = userLgEmail.value;
  const userPasswordLog = userLgPassword.value;
  const storedEmail = localStorage.getItem("userEmail");
  const storedUsername = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("userPassword");

  if (userEmailLog === storedEmail && userPasswordLog === storedPassword) {
    window.location.href = "/indexafterlogin.html";
  } else if (
    userEmailLog === storedUsername &&
    userPasswordLog === storedPassword
  ) {
    window.location.href = "/indexafterlogin.html";
  } else {
    alert("Please input your correct login details");
  }
}

Summitbtn.addEventListener("click", register);

link.addEventListener("click", function (e) {
  e.preventDefault();
  SignUpEL.classList.toggle("open");
  loginEL.classList.toggle("closed");
  // sectionEl.scrollIntoView({ behavior: "smooth" });
});

// function pleaseLogin(e) {
//   e.preventDefault();
//   window.location.href = "/indexafterlogin.html";
// }
LoginBtn.addEventListener("click", loginInProcess);
// const userNameLC = localStorage.getItem("userName");
// console.log(userNameLC);

// // function pleaseLogin() {
// // getElementById("loginBtne").onclick = function () {
// window.location.replace("/indexafterlogin.html");
// // };
// // console.log(pleaseLogin);
// e.preventDefault();
// }
// });
