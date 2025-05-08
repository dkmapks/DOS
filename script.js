const schedule = {
  "8a": {
    "Monday": ["j.po MC 205", "j.po MC 205", "j.ni Wy 318", "wf UDa/gm1", "wf UDa/gm1", "G_dyr MC 205", "z_bez PP 206", "Rel GA 214"],
    "Tuesday": ["Geo KMy 213", "Che DJ 313", "j.an ML 102", "j.ni DWr 218", "Mat KE 314", "G_dyr KE 314", "wf UDa/gm1", "Rel GA 214"],
    "Wednesday": ["Mat KE 314", "j.po MC 205", "wos DTu 107", "Fiz CK 311", "His DTu 107", "wych AZ 318", "Rel GA 214", "Koniec"],
    "Thursday": ["j.an ML 102", "Inf PK 308", "j.an GM 202", "Che DJ 313", "Mat KE 314", "Biol HQ 220", "His DTu 107", "Fiz CK 311"],
    "Friday": ["j.po MC 205", "j.ni Wy 318", "j.an ML 102", "j.an GM 202", "wf UDa/gm1", "His DTu 107", "Fiz CK 311", "Koniec"]
  },
  "8b": {
    "Monday": ["wf UDa/gm1", "wf UDa/gm1", "wf UDa/gm1", "His DTu 107", "j.po MC 205", "Fiz CK 311", "G_dyr MC 205", "wos DTu 107"],
    "Tuesday": ["Geo KMy 213", "Che DJ 313", "j.an ML 102", "j.ni DWr 218", "Mat KE 314", "G_dyr KE 314", "wf UDa/gm1", "Rel GA 214"],
    "Wednesday": ["Mat KE 314", "j.po MC 205", "wos DTu 107", "Fiz CK 311", "His DTu 107", "wych AZ 318", "Rel GA 214", "Koniec"],
    "Thursday": ["j.an ML 102", "Inf PK 308", "j.an GM 202", "Che DJ 313", "Mat KE 314", "Biol HQ 220", "His DTu 107", "Fiz CK 311"],
    "Friday": ["j.po MC 205", "j.ni Wy 318", "j.an ML 102", "j.an GM 202", "wf UDa/gm1", "His DTu 107", "Fiz CK 311", "Koniec"]
  },
  "8c": {
    "Monday": ["wf UDa/gm1", "wf UDa/gm1", "wf UDa/gm1", "His DTu 107", "j.ni DWr 218", "Mat KE 314", "Fiz CK 311", "j.an ML 102"],
    "Tuesday": ["Geo KMy 213", "Che DJ 313", "j.an ML 102", "j.ni DWr 218", "Mat KE 314", "G_dyr KE 314", "wf UDa/gm1", "Rel GA 214"],
    "Wednesday": ["Mat KE 314", "j.po MC 205", "wos DTu 107", "Fiz CK 311", "His DTu 107", "wych AZ 318", "Rel GA 214", "Koniec"],
    "Thursday": ["j.an ML 102", "Inf PK 308", "j.an GM 202", "Che DJ 313", "Mat KE 314", "Biol HQ 220", "His DTu 107", "Fiz CK 311"],
    "Friday": ["j.po MC 205", "j.ni Wy 318", "j.an ML 102", "j.an GM 202", "wf UDa/gm1", "His DTu 107", "Fiz CK 311", "Koniec"]
  },
  "8d": {
    "Monday": ["wf UDa/gm1", "Che DJ 313", "Mat KE 314", "Rel GA 214", "His DTu 107", "G_dyr KE 314", "Fiz CK 311", "wych AZ 318"],
    "Tuesday": ["Geo KMy 213", "Che DJ 313", "j.an ML 102", "j.ni DWr 218", "Mat KE 314", "G_dyr KE 314", "wf UDa/gm1", "Rel GA 214"],
    "Wednesday": ["Mat KE 314", "j.po MC 205", "wos DTu 107", "Fiz CK 311", "His DTu 107", "wych AZ 318", "Rel GA 214", "Koniec"],
    "Thursday": ["j.an ML 102", "Inf PK 308", "j.an GM 202", "Che DJ 313", "Mat KE 314", "Biol HQ 220", "His DTu 107", "Fiz CK 311"],
    "Friday": ["j.po MC 205", "j.ni Wy 318", "j.an ML 102", "j.an GM 202", "wf UDa/gm1", "His DTu 107", "Fiz CK 311", "Koniec"]
  }
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

  const day = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const currentClass = document.getElementById('classSelect').value;
  const timeStr = now.toTimeString().slice(0, 5);

  let currentLesson = "Koniec";
  const scheduleToday = schedule[currentClass][day] || [];

  lessons.forEach((lesson, index) => {
    if (timeStr >= lesson.start && timeStr <= lesson.end && scheduleToday[index]) {
      currentLesson = scheduleToday[index];
    }
  });

  document.getElementById('lessonInfo').textContent = currentLesson;
}

setInterval(updateClock, 1000);
document.getElementById('classSelect').addEventListener('change', updateClock);
updateClock();
