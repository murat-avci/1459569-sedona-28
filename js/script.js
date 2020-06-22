var togBtn = document.querySelector(".search-hotel-button");
var modal = document.querySelector(".hotel-search");
var form = modal.querySelector("form");
var checkIn = modal.querySelector("[name=check-in]");
var checkOut = modal.querySelector("[name=check-out]");
var sumAdults = modal.querySelector("[name=adults]");
var sumChilds = modal.querySelector("[name=childs]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("sumChilds");
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if(!checkIn.value || !checkOut.value || !sumAdults.value || !sumChilds.value) {
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

togBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
    if (storage) {
      sumChilds.value = storage;
      sumAdults.focus();
    } else {
      sumChilds.focus();
    }
  });