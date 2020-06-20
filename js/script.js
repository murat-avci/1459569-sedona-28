var togBtn = document.querySelector(".search-hotel-button");
var modal = document.querySelector(".modal-container");
var form = modal.querySelector("form");
var checkIn = document.querySelector("[name=check-in]");
var checkOut = document.querySelector("[name=check-out]");
var sumAdults = document.querySelector("[name=adults]");
var sumChilds = document.querySelector("[name=childs]");

modal.classList.add("modal-hide");
togBtn.addEventListener("click", function() {
  modal.classList.toggle("modal-hide");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!checkIn.value || !checkOut.value || !sumAdults.value || !sumChilds.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
  else {
    if (isstorageSupport) {
      localStorage.setItem("checkIn", checkIn.value);
      localStorage.setItem("checkOut", checkOut.value);
      localStorage.setItem("sumAdults", sumAdults.value);
      localStorage.setItem("sumChild", sumChild.value);
    }
  }
});