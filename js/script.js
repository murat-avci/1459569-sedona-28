var togBtn = document.querySelector(".search-hotel-button");
var modal = document.querySelector(".modal-container");
var form = modal.querySelector("form");
var checkIn = document.querySelector("[name=check-in]");
var checkOut = document.querySelector("[name=check-out]");
var sumAdults = document.querySelector("[name=adults]");
var sumChilds = document.querySelector("[name=childs]");

var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("adults");
   storage = localStorage.getItem("childs");
} catch (err) {
   isStorageSupport = false;
}

modal.classList.add("modal-hide");

togBtn.addEventListener("click", function() {
  evt.preventDefault();
  if (modal.classList.contains("modal-hide") || modal.classList.contains("modal-close")) {
    modal.classList.remove("modal-hide");
    modal.classList.remove("modal-close");
  } else {
    modal.classList.remove("modal-error");
    modal.classList.add("modal-close");
  }
});
});

modal.addEventListener("submit", function(evt) {
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