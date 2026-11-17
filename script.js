// Persönlicher Adventskalender für Hayatimin Anlmai
// Inhalte lassen sich unten im Array "surprises" ganz einfach bearbeiten.
const YEAR = 2026;
const STORAGE_KEY = "hayat-advent-opened-v1";

const surprises = [
  { title: "Ein kleiner Anfang", type: "letter", content: "Meine Hayatimin Anlmai,\n\nheute beginnt dein kleiner Adventskalender. Ich wollte dir 24 Tage lang zeigen, wie viel du mir bedeutest. Nicht nur mit großen Geschenken, sondern mit kleinen Momenten, Gedanken und einem Lächeln.\n\nSchön, dass es dich gibt. ❤️" },
  { title: "Die Frage der Fragen", type: "letter", content: "Die Frage der Fragen, die ich mich frage, ist … wie du es schaffst, dass ich sogar mitten in einer ganz normalen Minute an dich denken muss. Und ob du eigentlich weißt, wie unfassbar lieb ich dich habe. ❤️" },
  { title: "Coco & Nami wissen es", type: "game", content: "Zwei kleine Fellnasen, die offenbar ein geheimes Passwort mit dir teilen. Was ist unser Codewort? 🐾", game: "cats" },
  { title: "Drei kleine Wahrheiten", type: "letter", content: "Drei Dinge, die ich an dir liebe:\n\n✦ Deine ganz eigene Art.\n✦ Wie du meine Welt heller machst.\n✦ Dass du einfach du bist.\n\nUnd das ist längst nicht alles." },
  { title: "Ein Kuss auf die Stirn", type: "letter", content: "Stell dir vor, ich wäre gerade bei dir. Ich würde dich in den Arm nehmen, dir einen Kuss auf die Stirn geben und dir sagen: Du bist genau richtig, so wie du bist. ❤️" },
  { title: "Ein kleines Spiel", type: "game", content: "Wähle das Herz, das heute für dich bestimmt ist.", game: "heart" },
  { title: "Mein Lieblingsgefühl", type: "letter", content: "Mein Lieblingsgefühl? Mit dir Zeit zu verbringen – sogar wenn wir gerade nur quatschen, lachen oder zusammen Valorant spielen. Jede Runde, jede Sekunde und jede Minute mit dir ist irgendwie besonders. ❤️" },
  { title: "Ein Wunsch für dich", type: "letter", content: "Ich wünsche dir heute einen ruhigen Moment, etwas zum Lachen und ganz viel Wärme. Und wenn der Tag mal nicht perfekt ist, hoffe ich, dass du weißt, wie sehr du geliebt wirst." },
  { title: "Kleine Erinnerung", type: "letter", content: "Denk heute an einen Moment, in dem du richtig glücklich warst. Ich hoffe, dass wir noch ganz viele solcher Erinnerungen sammeln – eine schöner als die andere." },
  { title: "Valorant-Statistik", type: "game", content: "Wie viele unserer Runden werden wohl irgendwann zu einer eigenen lustigen Erinnerung? Wähle deine Antwort.", game: "valorant" },
  { title: "Ein Versprechen", type: "letter", content: "Ich verspreche dir, deine kleinen und großen Geschichten hören zu wollen, mit dir zu lachen und auch an stillen Tagen an deiner Seite zu sein. Nicht nur heute." },
  { title: "Du bist besonders", type: "letter", content: "Es gibt viele schöne Dinge auf dieser Welt. Aber nichts davon ist genau wie du. Deine Art, dein Lachen und deine Nähe sind unverwechselbar." },
  { title: "Halbzeit-Küsschen", type: "letter", content: "Einmal kurz Pause vom Alltag: Hier kommt ein extra langer virtueller Kuss. 💋 Wenn du magst, fordere deinen echten später bei mir ein." },
  { title: "Die Frage aller Fragen", type: "game", content: "Die Frage der Fragen, die ich mich frage, ist: Was machen wir als Nächstes zusammen?", game: "date" },
  { title: "Wenn du das hier liest", type: "letter", content: "…dann hoffe ich, dass du gerade lächelst. Und falls nicht: Hiermit bekommst du die offizielle Erlaubnis, dir etwas Schönes zu gönnen. Du hast es verdient." },
  { title: "Mein Lieblingsmensch", type: "letter", content: "Unter all den Menschen, Orten und Möglichkeiten bist du jemand, zu dem meine Gedanken immer wieder gerne zurückkehren. Du bist mein Lieblingsmensch." },
  { title: "Ein Mini-Kompliment", type: "game", content: "Tippe auf das Geschenk und hol dir dein heutiges Kompliment ab.", game: "compliment" },
  { title: "Für später", type: "letter", content: "Ich freue mich auf all die kleinen Dinge, die noch vor uns liegen: spontane Ideen, lange Gespräche, gemeinsame Abenteuer und gemütliche Abende. Das Schönste ist, dass noch so viel kommt." },
  { title: "Ein Herzenswunsch", type: "letter", content: "Ich wünsche mir, dass du dich nie kleiner machst, als du bist. Du verdienst Liebe, Respekt, Leichtigkeit und Menschen, bei denen du ganz du selbst sein kannst." },
  { title: "Coco, Nami & du", type: "letter", content: "Ich hoffe, Coco und Nami passen gut auf dich auf, wenn ich gerade nicht da bin. Aber sag ihnen bitte, dass ich bei der Kuschel-Konkurrenz zumindest eine faire Chance verdient habe. 🐾❤️" },
  { title: "Der 28. Dezember", type: "letter", content: "Noch ein kleines bisschen Geduld, mein Herz. Am 28.12. sehen wir uns. Und ich glaube, kein Bildschirm, kein Spiel und kein noch so schöner Kalender kann mit dem Moment mithalten, in dem ich dich endlich wieder in den Arm nehmen kann. Ich freue mich auf dich. ❤️" },
  { title: "Nur noch zwei Tage", type: "letter", content: "Bald ist Weihnachten. Ich hoffe, dieser Kalender hat dir jeden Tag einen kleinen Grund zum Lächeln gegeben. Du bist mein schönstes Geschenk – ganz ohne Schleife." },
  { title: "Ein Brief für dich", type: "letter", content: "Meine Liebe,\n\nich wollte dir mit diesem Kalender nicht einfach nur 24 Türchen schenken. Ich wollte dir 24 kleine Erinnerungen daran geben, dass du gesehen wirst, dass du geschätzt wirst und dass du einen ganz besonderen Platz in meinem Herzen hast.\n\nDanke für dich. ❤️" },
  { title: "Bis zum 28.12. – und noch viel weiter", type: "letter", content: "Meine Hayatimin Anlmai, ❤️\n\n24 Türchen. 24 kleine Überraschungen. Und trotzdem gibt es etwas, das ich dir mit keinem Kalender der Welt vollständig zeigen kann: wie viel du mir bedeutest.\n\nIch liebe unsere ganz normalen Momente genauso wie die besonderen. Sogar unsere Valorant-Runden – wirklich jede Runde, jede Sekunde und jede Minute – gehören zu den Erinnerungen, bei denen ich lächeln muss. Und natürlich gehören Coco und Nami irgendwie mit zu unserer kleinen Welt. 🐾\n\nUnd weißt du was? Unser schönster Moment muss vielleicht noch gar nicht hinter uns liegen. Am 28.12. sehen wir uns. Ich freue mich darauf, dich nicht nur durch einen Bildschirm anzulächeln, sondern dich endlich in den Arm zu nehmen. Vielleicht wird genau dieser Tag eine Erinnerung, die wir für immer behalten.\n\nDie Frage der Fragen, die ich mich frage, ist … wie ich so viel Glück haben konnte, dich in meinem Leben zu haben.\n\nFrohe Weihnachten, mein Herz. Das hier ist nicht das Ende unserer Geschichte – nur ein wunderschönes kleines Kapitel.\n\nIn Liebe, dein Schatz. ❤️" }
];

const grid = document.getElementById("calendarGrid");
const backdrop = document.getElementById("modalBackdrop");
const opened = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let audioContext = null, musicTimer = null, noteIndex = 0;

function todayAtMidnight() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function unlockDate(day) { return new Date(YEAR, 11, day); }
function isUnlocked(day) { return todayAtMidnight() >= unlockDate(day); }
function renderCalendar() {
  grid.innerHTML = "";
  for (let day = 1; day <= 24; day++) {
    const available = isUnlocked(day);
    const wasOpened = opened.has(day);
    const button = document.createElement("button");
    button.className = `door ${available ? (wasOpened ? "opened" : "available") : "locked"}`;
    button.disabled = !available;
    button.setAttribute("aria-label", available ? `Türchen ${day} ${wasOpened ? "erneut öffnen" : "öffnen"}` : `Türchen ${day} ist noch geschlossen`);
    button.innerHTML = `<span class="door-number">${String(day).padStart(2,"0")}</span><span class="door-symbol">${!available ? "✧" : wasOpened ? "♥" : "❀"}</span><span class="door-label">${!available ? "Noch geheim" : wasOpened ? "Nochmal lesen" : "Öffnen"}</span>`;
    if (available) button.addEventListener("click", () => openSurprise(day));
    grid.appendChild(button);
  }
  const count = opened.size;
  document.getElementById("progressText").textContent = `${count} von 24 geöffnet`;
  document.getElementById("progressFill").style.width = `${count / 24 * 100}%`;
}
function openSurprise(day) {
  if (!isUnlocked(day)) return;
  const doorButton = [...grid.children][day - 1];
  if (doorButton && !doorButton.classList.contains("opening")) {
    doorButton.classList.add("opening");
    setTimeout(() => showSurprise(day), 720);
    return;
  }
  showSurprise(day);
}
function showSurprise(day) {
  const item = surprises[day - 1];
  document.getElementById("modalDate").textContent = `${day}. DEZEMBER ${YEAR}`;
  document.getElementById("modalTitle").textContent = item.title;
  const content = document.getElementById("modalContent");
  content.textContent = item.content;
  if (item.type === "game") addGame(content, item.game);
  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
  document.getElementById("modalClose").focus();
  opened.add(day);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...opened]));
  renderCalendar();
}
function addGame(container, kind) {
  const games = {
    riddle: { options: ["Liebe", "Schokolade", "Ein Geheimnis"], answer: "Liebe", success: "Ganz genau. Liebe wächst, wenn man sie teilt. ❤️" },
    cats: { options: ["coconami", "valorant", "weihnachten"], answer: "coconami", success: "Richtig! Coco & Nami sind unsere kleinen Passwort-Wächter. 🐾❤️" },
    valorant: { options: ["Nur ein paar", "Gefühlt unendlich viele", "Ich zähle nicht mehr"], answer: "Gefühlt unendlich viele", success: "Korrekt. Und irgendwie ist jede einzelne mit dir eine Erinnerung wert. 🎮❤️" },
    heart: { options: ["💛", "💗", "💜"], answer: "💗", success: "Dieses Herz ist heute deins. Einmal ganz fest gedrückt! ❤️" },
    word: { options: ["Zufall", "Lieblingsmenschen", "Montag"], answer: "Lieblingsmenschen", success: "Richtig! Und du bist mein Lieblingsmensch. ❤️" },
    date: { options: ["Filmabend 🍿", "Spaziergang ✨", "Kuscheln 🥰"], answer: null, success: "Abgemacht! Das heben wir uns für einen gemeinsamen Moment auf. ❤️" },
    compliment: { options: ["Geschenk öffnen 🎁"], answer: null, success: "Dein Lächeln könnte selbst den dunkelsten Wintertag heller machen. ❤️" },
    adventure: { options: ["Ein Ausflug 🚗", "Zusammen kochen 🍝", "Ein gemütlicher Tag 🧸"], answer: null, success: "Das kommt auf unsere gemeinsame Wunschliste! ❤️" }
  };
  const game = games[kind];
  const box = document.createElement("div"); box.className = "game-box";
  game.options.forEach(option => {
    const button = document.createElement("button"); button.type = "button"; button.textContent = option;
    button.addEventListener("click", () => {
      const feedback = box.querySelector(".game-feedback");
      if (game.answer && option !== game.answer) { feedback.textContent = "Fast … versuch es noch einmal. ❤️"; return; }
      feedback.textContent = game.success;
      box.querySelectorAll("button").forEach(b => b.disabled = true);
    });
    box.appendChild(button);
  });
  const feedback = document.createElement("div"); feedback.className = "game-feedback"; feedback.setAttribute("aria-live", "polite");
  box.appendChild(feedback); container.appendChild(box);
}
function closeModal() { backdrop.classList.remove("show"); backdrop.setAttribute("aria-hidden", "true"); }
document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function updateCountdown() {
  const now = new Date();
  const start = new Date(YEAR, 11, 1, 0, 0, 0);
  const end = new Date(YEAR, 11, 25, 0, 0, 0);
  let target = start;
  if (now >= end) {
    document.getElementById("countdownLabel").textContent = "Die Weihnachtszeit mit dir war wundervoll";
    document.getElementById("countdown").innerHTML = "<div><strong>♥</strong><span>FÜR IMMER</span></div>";
    return;
  }
  if (now >= start) {
    document.getElementById("countdownLabel").textContent = "Weihnachten ist ganz nah";
    target = end;
  }
  const diff = Math.max(0, target - now);
  document.getElementById("days").textContent = Math.floor(diff / 86400000);
  document.getElementById("hours").textContent = Math.floor(diff % 86400000 / 3600000);
  document.getElementById("minutes").textContent = Math.floor(diff % 3600000 / 60000);
}
function createSnow() {
  const snow = document.querySelector(".snow");
  for (let i = 0; i < 34; i++) {
    const flake = document.createElement("span"); flake.className = "snowflake";
    flake.textContent = ["✦", "•", "❄"][i % 3];
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.fontSize = `${7 + Math.random() * 10}px`;
    flake.style.animationDuration = `${9 + Math.random() * 13}s`;
    flake.style.animationDelay = `${-Math.random() * 20}s`;
    flake.style.setProperty("--drift", `${-45 + Math.random() * 90}px`);
    snow.appendChild(flake);
  }
}

// Kleine eigens erzeugte Klangfolge (keine externe Musikdatei).
function playNote() {
  if (!audioContext) return;
  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46];
  const osc = audioContext.createOscillator(), gain = audioContext.createGain();
  osc.type = "sine"; osc.frequency.value = notes[noteIndex++ % notes.length];
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.035, audioContext.currentTime + .08);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + .75);
  osc.connect(gain); gain.connect(audioContext.destination);
  osc.start(); osc.stop(audioContext.currentTime + .8);
}
document.getElementById("musicToggle").addEventListener("click", async () => {
  const button = document.getElementById("musicToggle");
  const label = document.getElementById("musicLabel");
  if (musicTimer) {
    clearInterval(musicTimer); musicTimer = null;
    if (audioContext) await audioContext.suspend();
    button.setAttribute("aria-pressed", "false"); label.textContent = "Musik einschalten";
  } else {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    await audioContext.resume(); playNote();
    musicTimer = setInterval(playNote, 1050);
    button.setAttribute("aria-pressed", "true"); label.textContent = "Musik ausschalten";
  }
});

// Passwort-Eingang: nur eine kleine private Hürde, kein echter Zugriffsschutz.
const ACCESS_PASSWORD = "coconami";
const gateScreen = document.getElementById("gateScreen");
const siteContent = document.getElementById("siteContent");
document.getElementById("passwordForm").addEventListener("submit", event => {
  event.preventDefault();
  const entered = document.getElementById("passwordInput").value.trim().toLowerCase();
  const error = document.getElementById("passwordError");
  if (entered === ACCESS_PASSWORD) {
    gateScreen.classList.add("gate-leaving");
    gateScreen.style.transition = "opacity .8s ease, transform .8s ease";
    gateScreen.style.opacity = "0";
    gateScreen.style.transform = "scale(1.04)";
    setTimeout(() => {
      gateScreen.style.display = "none";
      siteContent.classList.remove("is-locked");
      siteContent.classList.add("is-unlocked");
    }, 780);
  } else {
    error.textContent = "Fast … Coco und Nami würden dich bestimmt erinnern. 🐾";
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput").focus();
  }
});

createSnow();
renderCalendar();
updateCountdown();
setInterval(() => { updateCountdown(); renderCalendar(); }, 60000);
