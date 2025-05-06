function selectTicket() {
  document.getElementById("screen-ticket").classList.remove("active");
  document.getElementById("screen-payment").classList.add("active");
  document.getElementById("header-title").textContent = "Akceptacja płatności";
}

function goBack() {
  if (document.getElementById("screen-payment").classList.contains("active")) {
    document.getElementById("screen-payment").classList.remove("active");
    document.getElementById("screen-ticket").classList.add("active");
    document.getElementById("header-title").textContent = "GoPay";
  }
}
