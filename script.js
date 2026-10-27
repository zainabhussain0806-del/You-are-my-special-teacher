
const totalPages = 6;

const notes = [
  "Your kindness may seem like a small thing in an ordinary day, but the little things You do with a good heart can stay with someone for a long, long time. ♡",
  "Thank you for your patience and for giving students room to learn, make mistakes, and try again. 🌷",
  "A teacher's guidance can mean so much more than a lesson in a book. Thank you for sharing what you know awaring us of the reality from ur prsnl experiences or knowledge and helping others grow. ⭐",
  "Sometimes a little encouragement can make a difficult day feel easier. I hope you receive the same encouragement and kindness you give to others. 🦋",
  "Your presence in someone's learning journey can become a memory they carry with them. I hope you know that your work is appreciated. 🌙",
  "You are more than a name on a timetable. You are a teacher I genuinely appreciate, and I'm grateful to have you in my life. 🎀"
];

function goTo(number) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById("page" + number);
  if (!target) return;

  target.classList.add("active");

  document.querySelectorAll(".page-nav button").forEach((button, index) => {
    if (index === number - 1) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openNote(index) {
  const box = document.getElementById("noteBox");
  const text = document.getElementById("noteText");

  if (!notes[index]) return;

  text.textContent = notes[index];
  box.animate(
    [
      { opacity: 0.35, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 400, easing: "ease-out" }
  );
}

let celebrationRunning = false;

function celebrate() {
  if (celebrationRunning) return;
  celebrationRunning = true;

  const message = document.getElementById("celebrateText");
  message.textContent = "A sky full of little wishes, just for you... ✨";

  const symbols = ["✦", "✧", "♡", "❀", "⋆"];

  for (let i = 0; i < 36; i++) {
    setTimeout(() => {
      const spark = document.createElement("span");
      spark.className = "falling-petal";
      spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      spark.style.left = Math.random() * 100 + "vw";
      spark.style.fontSize = (12 + Math.random() * 15) + "px";
      spark.style.animationDuration = (3 + Math.random() * 3) + "s";

      document.getElementById("petals").appendChild(spark);

      spark.addEventListener("animationend", () => spark.remove(), {
        once: true
      });
    }, i * 90);
  }

  setTimeout(() => {
    message.textContent = "May all your beautiful wishes find their way to you. ♡";
    celebrationRunning = false;
  }, 3800);
}

let finalRevealed = false;

function revealFinal() {
  if (finalRevealed) return;
  finalRevealed = true;

  const message = document.getElementById("finalMessage");
  const button = document.getElementById("starBox");

  message.classList.add("show");
  button.innerHTML =
    '<span class="big-star">✦</span>' +
    '<span>Your little surprise is revealed ♡</span>';

  message.scrollIntoView({ behavior: "smooth", block: "nearest" });

  for (let i = 0; i < 18; i++) {
    const spark = document.createElement("span");
    spark.className = "falling-petal";
    spark.textContent = i % 2 === 0 ? "✦" : "♡";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.getElementById("petals").appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), {
      once: true
    });
  }
}

// Create a gentle, twinkling starry sky.
const sky = document.getElementById("sky");

for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");
  star.className = "star-dot";
  star.textContent = i % 5 === 0 ? "✧" : "·";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (8 + Math.random() * 11) + "px";
  star.style.animationDelay = Math.random() * 4 + "s";
  star.style.animationDuration = (2 + Math.random() * 4) + "s";
  sky.appendChild(star);
}

// Keep the falling petals gentle and occasional.
function makePetal() {
  if (document.hidden) return;

  const container = document.getElementById("petals");
  if (container.childElementCount > 20) return;

  const petal = document.createElement("span");
  petal.className = "falling-petal";
  petal.textContent = Math.random() > 0.5 ? "✿" : "❀";
  petal.style.left = Math.random() * 100 + "%";
  petal.style.fontSize = (10 + Math.random() * 10) + "px";
  petal.style.animationDuration = (8 + Math.random() * 6) + "s";

  container.appendChild(petal);
  petal.addEventListener("animationend", () => petal.remove(), {
    once: true
  });
}

setInterval(makePetal, 1500);

goTo(1);
