// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

setStartDate();
setEndDate();
// 得到今天的日子，並讓開始日不能在此之前
function setStartDate() {
  const Today = new Date();
  let yyyy = Today.getFullYear();
  let mm = Today.getMonth();
  let dd = Today.getDate();
  mm += 1;
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (dd < 10) {
    dd = "0" + dd;
  }
  let minDate = yyyy + "-" + mm + "-" + dd;
  const startPicker = document.getElementById("startDate");
  startPicker.setAttribute("min", minDate);
}
function setEndDate() {
  const startPicker = document.getElementById("startDate");
  const endPicker = document.getElementById("endDate");
  endPicker.setAttribute("disabled", true);
  startPicker.addEventListener("change", () => {
    if (startPicker.value != "") {
      endPicker.removeAttribute("disabled");
    }
    endPicker.setAttribute("min", startPicker.value);
    //TO DO : 照理來說還要做一個檢查 end date 是不是晚於 start date
  });
}
