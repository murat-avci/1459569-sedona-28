var togBtn = document.querySelector(".search-hotel-button");
var modal = document.querySelector(".modal-container");
var form = modal.querySelector("form");
var checkIn = modal.querySelector("[name=check-in]");
var checkOut = modal.querySelector("[name=check-out]");
var sumAdults = modal.querySelector("[name=adults]");
var sumChilds = modal.querySelector("[name=childs]");

modal.classList.add("modal-hide");

togBtn.addEventListener("click", function() {
  form.classList.toggle("modal-hide");
  form.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if(!checkIn.value || !checkOut.value || !sumAdults.value || !sumChilds.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
    
  } else {
      if (isStorageSupport) {
      localStorage.setItem("sumAdults", sumAdults.value);
      localStorage.setItem("sumChilds", sumChilds.value);
    }
  }
});