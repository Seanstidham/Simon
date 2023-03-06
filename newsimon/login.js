function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "play.html";
}
//login function puts the value of name to the input then stores it in the local storage as userName then redirects the ser to play.html