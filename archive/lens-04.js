const slides = [...document.querySelectorAll(".social-slide")];
const prevButton = document.querySelector("[data-prev-slide]");
const nextButton = document.querySelector("[data-next-slide]");
const dotsWrap = document.querySelector("[data-slide-dots]");
const pressureSlider = document.querySelector("[data-pressure-slider]");
const boyStage = document.querySelector("[data-boy-stage]");
const boyLabel = document.querySelector("[data-boy-label]");
const pressureNote = document.querySelector("[data-pressure-note]");
const pressureTakeaway = document.querySelector("[data-pressure-takeaway]");
const socialPan = document.querySelector("[data-social-pan]");
const scaleBeam = document.querySelector("[data-scale-beam]");
const scaleNote = document.querySelector("[data-scale-note]");
const readingInsight = document.querySelector("[data-reading-insight]");
const identityForm = document.querySelector("[data-identity-form]");
const identityResult = document.querySelector("[data-identity-result]");
const shelf = document.querySelector("[data-classroom-shelf]");
const rebuildShelf = document.querySelector("[data-rebuild-shelf]");
const genreBank = document.querySelector("[data-genre-bank]");
const shelfNote = document.querySelector("[data-shelf-note]");
const bookMatch = document.querySelector("[data-book-match]");

let currentSlide = 0;
let socialWeightCount = 0;

function showSlide(index){
  currentSlide = Math.max(0, Math.min(slides.length - 1, index));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });

  [...dotsWrap.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentSlide);
    dot.setAttribute("aria-current", dotIndex === currentSlide ? "step" : "false");
  });

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
  document.body.classList.toggle("is-final-slide", currentSlide === slides.length - 1);
}

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsWrap.append(dot);
});

prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
});

function updatePressure(){
  const value = Number(pressureSlider.value);
  boyStage.classList.toggle("is-books", value > 66);
  boyStage.classList.toggle("is-sports", value < 34);

  if (value > 72) {
    boyLabel.textContent = "Nerd";
    pressureNote.textContent = "The same activity now carries a social label. The boy looks more isolated as books become the visible choice.";
    pressureTakeaway.classList.add("is-visible");
  } else if (value < 28) {
    boyLabel.textContent = "Included";
    pressureNote.textContent = "Sports signals physical social participation, so friends gather around him.";
    pressureTakeaway.classList.remove("is-visible");
  } else {
    boyLabel.textContent = "Balanced";
    pressureNote.textContent = "Move the slider to see how peer belonging changes the meaning of the same free-time choice.";
    pressureTakeaway.classList.remove("is-visible");
  }
}

pressureSlider.addEventListener("input", updatePressure);

document.querySelectorAll(".weight").forEach((weight) => {
  weight.addEventListener("dragstart", (event) => {
    if (weight.classList.contains("is-used")) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.setData("text/plain", weight.dataset.weight);
  });

  weight.addEventListener("click", () => {
    if (!weight.classList.contains("is-used")) addWeight(weight);
  });
});

socialPan.addEventListener("dragover", (event) => event.preventDefault());
socialPan.addEventListener("drop", (event) => {
  event.preventDefault();
  const label = event.dataTransfer.getData("text/plain");
  const weight = [...document.querySelectorAll(".weight")].find((item) => item.dataset.weight === label);
  if (weight) addWeight(weight);
});

function addWeight(weight){
  weight.classList.add("is-used");
  const clone = weight.cloneNode(true);
  clone.removeAttribute("draggable");
  clone.classList.remove("is-used");
  socialPan.append(clone);
  socialWeightCount += 1;

  if (socialWeightCount >= 2) {
    scaleBeam.classList.add("is-tipped");
    scaleNote.textContent = "Adolescence is a time for social expansion. When forced to choose between solitary reading and building a community, the community wins almost every time.";
  } else {
    scaleNote.textContent = "The social side is already getting heavier. Add another priority.";
  }
}

document.querySelectorAll("[data-reading-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    readingInsight.textContent = "Research insight: many students do read constantly, but do not identify as readers because home and school often treat print books as the only legitimate reading.";
  });
});

identityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  identityResult.classList.add("is-visible");
});

rebuildShelf.addEventListener("click", () => {
  genreBank.classList.add("is-visible");
  shelfNote.textContent = "Choose categories that reflect actual student interests.";
});

genreBank.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const current = [...shelf.children];
    const replacement = document.createElement("span");
    replacement.textContent = button.textContent;
    replacement.style.background = "linear-gradient(145deg, #3f6f91, #4f7462)";
    const target = current.find((item) => item.textContent === "Classics") || current[current.length - 1];
    target.replaceWith(replacement);

    if (![...shelf.children].some((item) => item.textContent === "Classics")) {
      shelfNote.textContent = "Students are more likely to read when they have meaningful choices and can find books that reflect their interests.";
    }
  });
});

document.querySelectorAll("[data-wall-book]").forEach((button) => {
  button.addEventListener("click", () => {
    bookMatch.textContent = button.dataset.wallBook;
  });
});

document.querySelectorAll(".community-card").forEach((card) => {
  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  });
});

showSlide(0);
updatePressure();
