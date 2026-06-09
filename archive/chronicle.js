const fantasyBooks = [
  {
    title:"One Dark Window",
    cover:"one dark window.png",
    popupCover:"one dark window cover.jpg",
    spine:["#2b3326", "#6d7b45"],
    synopsis:"A misty gothic fantasy about a girl, a monster in her mind, and a kingdom ruled by cards, secrets, and dangerous bargains.",
    reasons:["You like eerie magic systems.", "You want atmosphere with sharp stakes.", "You enjoy cursed bargains and hidden power."]
  },
  {
    title:"Two Twisted Crowns",
    cover:"two twisted crowns.png",
    popupCover:"two twisted crowns cover.jpg",
    spine:["#2f1d23", "#8e2420"],
    synopsis:"The Shepherd King story deepens into war, sacrifice, and the cost of choosing love inside a realm built on old magic.",
    reasons:["You want the sequel to raise the stakes.", "You like found family under pressure.", "You enjoy magic with consequences."]
  },
  {
    title:"The Will of the Many",
    cover:"the will of the many.png",
    popupCover:"the will of the many cover.jpg",
    spine:["#1d2730", "#91713b"],
    synopsis:"A political fantasy about power, empire, education, and one boy trying to survive inside a system designed to consume him.",
    reasons:["You like academy intrigue.", "You want clever world-building.", "You enjoy ambitious, twisty plots."]
  },
  {
    title:"Six of Crows",
    cover:"six of crows.png",
    popupCover:"six of crows cover.jpg",
    spine:["#151515", "#7b1f1a"],
    synopsis:"A crew of dangerous outcasts takes on an impossible heist in a city of crime, loyalty, and knives in the dark.",
    reasons:["You want found family.", "You like morally gray characters.", "You enjoy clever plans going wrong."]
  },
  {
    title:"Lord of the Rings",
    cover:"the lord of thye rings.png",
    popupCover:"the lord of the rings cover.jpg",
    spine:["#1f4a31", "#b88a3a"],
    synopsis:"The classic epic journey through Middle-earth, full of fellowship, myth, sacrifice, and the long road into legend.",
    reasons:["You want grand scale.", "You love maps and quests.", "You want the blueprint for epic fantasy."]
  },
  {
    title:"Harry Potter",
    cover:"harry potter.png",
    popupCover:"harry potter cover.jpg",
    spine:["#452115", "#9b742c"],
    synopsis:"A magical school story about friendship, danger, and discovering that another world has been waiting for you.",
    reasons:["You want comfort fantasy.", "You like school settings.", "You enjoy spells, houses, and secret corridors."]
  },
  {
    title:"The House in the Cerulean Sea",
    cover:"house in the cerulean sea.jpg",
    popupCover:"house in the cerulean sea.jpg",
    spine:["#2b6680", "#d6a851"],
    synopsis:"A warm fantasy about magical children, unexpected tenderness, and finding home where you least expect it.",
    reasons:["You want cozy magic.", "You like emotional healing.", "You enjoy gentle found family."]
  },
  {
    title:"Alchemised",
    cover:"alchemised.png",
    popupCover:"alchemised cover.jpg",
    spine:["#2a1b12", "#a47c42"],
    synopsis:"A dark, intricate fantasy of transformation, obsession, and power, built for readers who want their magic systems dangerous.",
    reasons:["You want intensity.", "You like morally complicated worlds.", "You enjoy magic with teeth."]
  },
  {
    title:"Once Upon a Broken Heart",
    cover:"once upon a broken heart.png",
    popupCover:"once upon a broken heart cover.jpg",
    spine:["#7f2b4d", "#c08a35"],
    synopsis:"A romantic fairy-tale fantasy full of bargains, fate, heartbreak, and the glittering danger of wanting too much.",
    reasons:["You like enchanted romance.", "You want dramatic curses.", "You enjoy beautiful, painful choices."]
  },
  {
    title:"The Folk of the Air",
    cover:"the folk of the air series.png",
    popupCover:"the folk of the air cover.jpg",
    spine:["#182d20", "#b88a3a"],
    synopsis:"A sharp faerie court fantasy about ambition, betrayal, power, and surviving among people who want you weak.",
    reasons:["You want political intrigue.", "You like enemies-to-lovers tension.", "You enjoy ruthless court games."]
  },
  {
    title:"The City of Brass",
    cover:"the city of brass.png",
    popupCover:"the city of brass cover.jpeg",
    spine:["#6d2f18", "#d39c3b"],
    synopsis:"A richly imagined fantasy of djinn, lost heritage, and a glittering city full of politics and danger.",
    reasons:["You love immersive settings.", "You want layered mythology.", "You enjoy palace intrigue."]
  },
  {
    title:"Babel",
    cover:"babel.png",
    popupCover:"babel cover.jpg",
    spine:["#2c2b2a", "#a88948"],
    synopsis:"A fantasy of language, empire, translation, and resistance, where scholarship itself becomes a form of magic.",
    reasons:["You like ideas and themes.", "You want academic fantasy with bite.", "You enjoy world-building with politics."]
  }
];

const bookshelf = document.querySelector("[data-bookshelf]");
const tomeDialog = document.querySelector("[data-tome-dialog]");
const closeTome = document.querySelector("[data-close-tome]");
const tomeCover = document.querySelector("[data-tome-cover]");
const tomeImage = document.querySelector("[data-tome-image]");
const tomeTitle = document.querySelector("[data-tome-title]");
const tomeSynopsis = document.querySelector("[data-tome-synopsis]");
const tomeReasons = document.querySelector("[data-tome-reasons]");
const artifactDesk = document.querySelector("[data-artifact-desk]");
const loreOutput = document.querySelector("[data-lore-output]");
const aiGuide = document.querySelector("[data-ai-guide]");
const aiGuideToggle = document.querySelector("[data-ai-guide-toggle]");
const aiGuideClose = document.querySelector("[data-ai-guide-close]");
const aiGuidePanel = document.querySelector("[id='ai-guide-panel']");

function imagePath(fileName){
  return `../Images/${encodeURIComponent(fileName).replaceAll("'", "%27")}`;
}

function renderBookshelf(){
  bookshelf.innerHTML = fantasyBooks.map((book, index) => {
    const heights = [260, 300, 280, 245, 320, 275, 250, 305, 265, 295, 240, 285];
    const tilts = ["-2deg", "1deg", "-1deg", "2deg", "-2deg", "1deg", "-1deg", "2deg", "-1deg", "1deg", "-2deg", "2deg"];
    return `
      <button
        class="tome-button"
        type="button"
        aria-label="Open ${book.title}"
        data-tome="${index}"
        style="--tome-a:${book.spine[0]}; --tome-b:${book.spine[1]}; --height:${heights[index]}px; --tilt:${tilts[index]}; --cover-image:url('${imagePath(book.cover)}');"
      ></button>
    `;
  }).join("");
}

function openTome(book){
  tomeImage.src = imagePath(book.popupCover || book.cover);
  tomeImage.alt = `${book.title} cover`;
  tomeCover.textContent = book.title;
  tomeTitle.textContent = book.title;
  tomeSynopsis.textContent = book.synopsis;
  tomeReasons.innerHTML = book.reasons.map((reason) => `<li>${reason}</li>`).join("");

  if (typeof tomeDialog.showModal === "function") {
    tomeDialog.showModal();
  } else {
    tomeDialog.setAttribute("open", "");
  }
}

function closeTomeDialog(){
  if (typeof tomeDialog.close === "function") {
    tomeDialog.close();
  } else {
    tomeDialog.removeAttribute("open");
  }
}

bookshelf.addEventListener("click", (event) => {
  const tome = event.target.closest("[data-tome]");
  if (!tome) return;
  openTome(fantasyBooks[Number(tome.dataset.tome)]);
});

closeTome.addEventListener("click", closeTomeDialog);
tomeDialog.addEventListener("click", (event) => {
  if (event.target === tomeDialog) closeTomeDialog();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && tomeDialog.open) closeTomeDialog();
});

artifactDesk.addEventListener("click", (event) => {
  const artifact = event.target.closest("[data-lore]");
  if (!artifact) return;
  loreOutput.textContent = artifact.dataset.lore;
  loreOutput.animate(
    [{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
    { duration:360, easing:"ease-out" }
  );
});

renderBookshelf();

function setAiGuide(open){
  if (!aiGuide) return;
  aiGuide.classList.toggle("is-open", open);
  aiGuideToggle?.setAttribute("aria-expanded", String(open));
  aiGuidePanel?.setAttribute("aria-hidden", String(!open));
}

aiGuideToggle?.addEventListener("click", () => setAiGuide(true));
aiGuideClose?.addEventListener("click", () => setAiGuide(false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && aiGuide?.classList.contains("is-open")) {
    setAiGuide(false);
  }
});
