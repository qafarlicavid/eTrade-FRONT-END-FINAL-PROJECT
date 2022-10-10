
// Dropdown1
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

  optionMenu.classList.remove("active");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// Dropdown2
const optionMenu1 = document.querySelector(".select-menu1"),
  selectBtn1 = optionMenu1.querySelector(".select-btn1"),
  options1 = optionMenu1.querySelectorAll(".option1"),
  sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

  optionMenu1.classList.remove("active1");

selectBtn1.addEventListener("click", () =>
  optionMenu1.classList.toggle("active1")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text1").innerText;
    sBtn_text1.innerText = selectedOption;

    optionMenu1.classList.remove("active1");
  });
});
