document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("lock-screen").style.display = "flex";
  }, 2000);

  const swipeZone = document.getElementById("swipe-zone");
  let startY = 0;

  swipeZone.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  swipeZone.addEventListener("touchend", (e) => {
    let endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) {
      document.getElementById("lock-screen").style.display = "none";
      document.getElementById("pin-screen").style.display = "block";
    }
  });
});

function verifyPin() {
  const pin = document.getElementById("pin-input").value;
  if (pin === "743202") {
    document.getElementById("pin-screen").style.display = "none";
    document.getElementById("home-screen").style.display = "block";
  } else {
    document.getElementById("pin-error").textContent = "Nieprawidłowy kod!";
  }
}

function openApp(name) {
  document.getElementById("app-window").style.display = "block";
  document.getElementById("app-content").innerHTML = "<h2>" + name + "</h2><p>Aplikacja nie została zainstalowana.</p>";
}

function closeApp() {
  document.getElementById("app-window").style.display = "none";
}
