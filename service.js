const Personal = document.getElementById("PersonalOption");
const Interview = document.getElementById("InterviewOption");
const Mv = document.getElementById("MvOption");

$(Personal).click(function () {
  clearAllFocus();
  Personal.classList.add("text-light");
});

$(Interview).click(function () {
  clearAllFocus();
  Interview.classList.add("text-light");
});

$(Mv).click(function () {
  clearAllFocus();
  Mv.classList.add("text-light");
});

function clearAllFocus() {
  Personal.classList.remove("text-light");
  Interview.classList.remove("text-light");
  Mv.classList.remove("text-light");
}

$(Personal).click();
