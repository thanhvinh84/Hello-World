document.addEventListener("DOMContentLoaded", function () {
    const pressBtn = document.getElementById("pressBtn");
    const resultDiv = document.getElementById("result");
  
    pressBtn.addEventListener("click", function () {
      resultDiv.innerHTML = "<p class='my-name'>Nguyễn Thành Vinh</p>";
    });
  });