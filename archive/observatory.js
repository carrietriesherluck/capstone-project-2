const books = [
  {
    title:"A Little Life",
    mood:"devastating",
    cover:["#243227", "#d3af75"],
    image:"a little life.jpg",
    synopsis:"Four college friends move through adulthood while carrying love, ambition, loyalty, and unbearable private histories. It is emotionally intense, slow-burning, and built around the kind of friendship that becomes a life.",
    reasons:[
      "You want a story that feels psychologically enormous.",
      "You like character-driven books more than fast plots.",
      "You want a book that stays with you after the last page."
    ]
  },
  {
    title:"Normal People",
    mood:"yearning",
    cover:["#2d4739", "#e6c98f"],
    image:"normal people.jpg",
    synopsis:"Two people spend years moving toward and away from each other while trying to understand themselves. The drama lives in tiny choices, unsent feelings, and whether being known can also hurt.",
    reasons:[
      "You overthink text messages.",
      "You romanticize ordinary moments.",
      "Character development matters more than plot."
    ]
  },
  {
    title:"The Secret History",
    mood:"intellectual",
    cover:["#172e24", "#c99b54"],
    image:"the secret history.jpg",
    synopsis:"A group of brilliant students become obsessed with beauty, knowledge, and each other until their world turns dangerous. It feels like a campus mystery wrapped in philosophy, privilege, and obsession.",
    reasons:[
      "You like morally complicated friend groups.",
      "You want dark academic tension without making the page feel dusty.",
      "You enjoy stories where atmosphere is part of the plot."
    ]
  },
  {
    title:"Intermezzo",
    mood:"reflective",
    cover:["#39434f", "#d8b77f"],
    image:"intermezzo.jpg",
    synopsis:"Two brothers move through grief, love, and uncertainty while trying to understand what they owe themselves and each other. It is quiet, interior, and interested in the small emotional negotiations that shape a life.",
    reasons:[
      "You like books about relationships that resist easy answers.",
      "You enjoy reflective stories with emotional texture.",
      "You want something thoughtful rather than plot-heavy."
    ]
  },
  {
    title:"Never Let Me Go",
    mood:"bittersweet",
    cover:["#475069", "#cbbf95"],
    image:"never let me go.jpg",
    synopsis:"A group of students look back on a childhood that seemed ordinary until its hidden purpose becomes impossible to ignore. The book is gentle and devastating at the same time.",
    reasons:[
      "You like emotional science fiction that does not feel technical.",
      "You are drawn to memory, friendship, and quiet dread.",
      "You want a book that asks what makes a life meaningful."
    ]
  }
];

const windowQuotes = [
  "Some books arrive exactly when you need them.",
  "The right sentence can change the weather of a day.",
  "Maybe reading is just borrowing someone else's thoughts for a while.",
  "Stories don't replace real life. They make it larger.",
  "Some chapters feel like places you can go back to."
];

const thinkingNotes = [
  "how some people become part of your internal monologue long after they leave",
  "why rainy days make every song sound more expensive",
  "the specific loneliness of almost texting someone",
  "how a sentence can feel more honest than a conversation",
  "why leaving a place makes it easier to understand"
];

const shelf = document.querySelector("[data-shelf]");
const dialog = document.querySelector("[data-book-dialog]");
const closeDialog = document.querySelector("[data-close-dialog]");
const cover = document.querySelector("[data-book-cover]");
const title = document.querySelector("[data-book-title]");
const synopsis = document.querySelector("[data-book-synopsis]");
const reasons = document.querySelector("[data-book-reasons]");
const windowButton = document.querySelector("[data-window-quote]");
const desk = document.querySelector("[data-desk]");
const deskOutput = document.querySelector("[data-reflection-output]");
const rainCanvas = document.querySelector("[data-rain-canvas]");
const thinkingNote = document.querySelector("[data-thinking-note] p");
const observatoryAiGuide = document.querySelector("[data-observatory-ai-guide]");
const observatoryAiToggle = document.querySelector("[data-observatory-ai-toggle]");
const observatoryAiClose = document.querySelector("[data-observatory-ai-close]");
const observatoryAiPanel = document.querySelector("#observatory-ai-panel");

let quoteIndex = 0;
let thinkingIndex = 0;

function renderShelf(){
  shelf.innerHTML = books.map((book, index) => {
    const tilt = ["-8deg", "5deg", "-3deg", "7deg", "-5deg"][index];
    return `
      <button
        class="book-cover-button book-${index + 1}"
        type="button"
        data-book="${index}"
        style="--cover-a:${book.cover[0]}; --cover-b:${book.cover[1]}; --tilt:${tilt}; --cover-image:url('${encodeURI(`../Images/${book.image}`)}');"
      >
        <img src="${encodeURI(`../Images/${book.image}`)}" alt="${book.title} cover" loading="lazy">
        <span>${book.mood}</span>
      </button>
    `;
  }).join("");
}

function openBook(book){
  cover.style.setProperty("--cover-a", book.cover[0]);
  cover.style.setProperty("--cover-b", book.cover[1]);
  cover.style.backgroundImage = `url('${encodeURI(`../Images/${book.image}`)}')`;
  cover.textContent = "";
  title.textContent = book.title;
  synopsis.textContent = book.synopsis;
  reasons.innerHTML = book.reasons.map((reason) => `<li>${reason}</li>`).join("");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeBook(){
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

shelf.addEventListener("click", (event) => {
  const row = event.target.closest("[data-book]");
  if (!row) return;
  openBook(books[Number(row.dataset.book)]);
});

closeDialog.addEventListener("click", closeBook);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeBook();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) closeBook();
  if (event.key === "Escape" && observatoryAiGuide?.classList.contains("is-open")) {
    setObservatoryAiGuide(false);
  }
});

windowButton.addEventListener("click", () => {
  const quote = windowButton.querySelector(".window-quote");
  quoteIndex = (quoteIndex + 1) % windowQuotes.length;
  quote.textContent = windowQuotes[quoteIndex];
  quote.animate(
    [{ opacity:0, transform:"translateY(12px)" }, { opacity:1, transform:"translateY(0)" }],
    { duration:450, easing:"ease-out" }
  );
});

desk.addEventListener("click", (event) => {
  const object = event.target.closest("[data-reflection]");
  if (!object) return;
  deskOutput.textContent = object.dataset.reflection;
  deskOutput.animate(
    [{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
    { duration:360, easing:"ease-out" }
  );
});

function rotateThinkingNote(){
  if (!thinkingNote) return;
  window.setInterval(() => {
    thinkingIndex = (thinkingIndex + 1) % thinkingNotes.length;
    thinkingNote.textContent = thinkingNotes[thinkingIndex];
    thinkingNote.animate(
      [{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
      { duration:520, easing:"ease-out" }
    );
  }, 4200);
}

function startRain(){
  if (!rainCanvas || typeof rainCanvas.getContext !== "function") return;
  const context = rainCanvas.getContext("2d");
  const drops = [];
  const dropCount = 150;

  function resize(){
    rainCanvas.width = window.innerWidth * window.devicePixelRatio;
    rainCanvas.height = window.innerHeight * window.devicePixelRatio;
    rainCanvas.style.width = `${window.innerWidth}px`;
    rainCanvas.style.height = `${window.innerHeight}px`;
  }

  function resetDrop(drop){
    drop.x = Math.random() * rainCanvas.width;
    drop.y = Math.random() * rainCanvas.height;
    drop.length = 28 + Math.random() * 72;
    drop.speed = 7 + Math.random() * 11;
    drop.opacity = .08 + Math.random() * .22;
  }

  resize();
  for (let index = 0; index < dropCount; index += 1) {
    const drop = {};
    resetDrop(drop);
    drops.push(drop);
  }

  function draw(){
    context.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    context.lineWidth = Math.max(1, window.devicePixelRatio);
    drops.forEach((drop) => {
      context.strokeStyle = `rgba(226, 238, 236, ${drop.opacity})`;
      context.beginPath();
      context.moveTo(drop.x, drop.y);
      context.lineTo(drop.x - drop.length * .16, drop.y + drop.length);
      context.stroke();
      drop.y += drop.speed * window.devicePixelRatio;
      drop.x -= drop.speed * .12 * window.devicePixelRatio;
      if (drop.y > rainCanvas.height + drop.length) resetDrop(drop);
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  draw();
}

renderShelf();
rotateThinkingNote();
startRain();

function setObservatoryAiGuide(open){
  if (!observatoryAiGuide) return;
  observatoryAiGuide.classList.toggle("is-open", open);
  observatoryAiToggle?.setAttribute("aria-expanded", String(open));
  observatoryAiPanel?.setAttribute("aria-hidden", String(!open));
}

observatoryAiToggle?.addEventListener("click", () => setObservatoryAiGuide(true));
observatoryAiClose?.addEventListener("click", () => setObservatoryAiGuide(false));
