document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "訊息已送出！（這是示範表單，尚未連接後端）";
  this.reset();
});
