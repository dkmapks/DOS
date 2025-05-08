const schedule = {
  // (tutaj wklej cały blok `schedule` z poprzedniej wiadomości — jest za duży, żeby powtarzać cały tutaj)
};

const lessons = [
  { start: "08:00", end: "08:45" },
  { start: "08:50", end: "09:35" },
  { start: "09:45", end: "10:30" },
  { start: "10:40", end: "11:25" },
  { start: "11:45", end: "12:30" },
  { start: "12:50", end: "13:35" },
  { start: "13:40", end: "14:25" },
  { start: "14:30", end: "15:15" }
];

function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();

  const selectedClass = document.getElementById('classSelect').value;
  const dayName = now.toLocaleDateString('pl-PL', { weekday: 'long' });
  const today = capitalize(dayName);

  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

  const lessonIndex = lessons.findIndex(l => time >= l.start && time <= l.end);

  const infoDiv = document.getElementById('lessonInfo');

  if (lessonIndex === -1) {
    infoDiv.textContent = "Koniec lekcji";
  } else {
    const classSchedule = schedule[selectedClass][today];
    if (!classSchedule || !classSchedule[lessonIndex]) {
      infoDiv.textContent = "Brak danych";
    } else {
      infoDiv.textContent = `Lekcja ${lessonIndex + 1}: ${classSchedule[lessonIndex]}`;
    }
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

setInterval(updateClock, 1000);
