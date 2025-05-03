let wheel1 = [
  "sex", "jedzenie", "drapanie", "nic",
  "nic ale nie obok siebie", "lodzik", "nic"
];

let wheel2 = [
  "sex", "jedzenie", "minetka", "nic",
  "buziaczki", "coś słodkiego", "nic", "nic ale nie obok siebie"
];

let customWheel = null;
let forcedResult = null;

const wheelSelect = document.getElementById("wheel-select");
const resultDiv = document.getElementById("result");
const spinButton = document.getElementById("spin");
const settingsBtn = document.getElementById("settings-btn");
const settingsModal = document.getElementById("settings-modal");
const submitCodeBtn = document.getElementById("submit-code");
const codeInput = document.getElementById("code-input");
const modOptions = document.getElementById("mod-options");
const forcedResultInput = document.getElementById("forced-result");
const themeSelect = document.getElementById("theme-select");
const customOptionsInput = document.getElementById("custom-options");
const saveOptionsBtn = document.getElementById("save-options");

spinButton.addEventListener("click", () => {
  let selectedWheel;

  if (customWheel) {
    selectedWheel = customWheel;
  } else {
    selectedWheel = wheelSelect.value === "wheel1" ? wheel1 : wheel2;
  }

  let result;
  if (forcedResult && selectedWheel.includes(forcedResult)) {
    result = forcedResult;
  } else {
    const index = Math.floor(Math.random() * selectedWheel.length);
    result = selectedWheel[index];
  }

  resultDiv.textContent = `Wynik: ${result}`;
});

settingsBtn.addEventListener("click", () => {
  settingsModal.classList.toggle("hidden");
});

submitCodeBtn.addEventListener("click", () => {
  if (codeInput.value === "7432") {
    modOptions.classList.remove("hidden");
  } else {
    alert("Niepoprawny kod");
  }
});

themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value === "dark" ? "dark" : "";
});

saveOptionsBtn.addEventListener("click", () => {
  const options = customOptionsInput.value
    .split("\n")
    .map(opt => opt.trim())
    .filter(opt => opt.length > 0);

  if (options.length > 0) {
    customWheel = options;
    alert("Zapisano nowe opcje koła.");
  }
});

forcedResultInput.addEventListener("input", () => {
  forcedResult = forcedResultInput.value.trim();
});
