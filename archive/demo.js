const questions = [
  {
    section:"Section 01 / Who are you?",
    title:"Which Pinterest board are you clicking first?",
    options:[
      option("Moonlit castles and hidden libraries", "Stargazer", "castle"),
      option("Newspaper clippings, archive folders, and unanswered questions", "Sleuth", "clippings"),
      option("Cozy cafes and handwritten letters", "Heart Collector", "cafe"),
      option("Annotated books, film photography, rainy windows, and highlighted passages", "Old Soul", "rain")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:'Your friend texts: "I have something important to tell you." What is your immediate response?',
    options:[
      option("Oh my god, tell me everything.", "Stargazer", "omg"),
      option("Are you okay?", "Heart Collector", "heart"),
      option("Wait... let me guess.", "Sleuth", "guess"),
      option("What do you think about it?", "Old Soul", "think")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"Pick a room to spend an afternoon in.",
    options:[
      option("A castle tower", "Stargazer", "tower"),
      option("A detective's office", "Sleuth", "office"),
      option("A bookstore cafe", "Heart Collector", "bookstore"),
      option("An old library while it rains outside", "Old Soul", "library")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"You find an envelope with your name on it. What is inside?",
    options:[
      option("An invitation to a magical school", "Stargazer", "spark"),
      option("A classified government document", "Sleuth", "document"),
      option("A letter from your future partner", "Heart Collector", "futurepartner"),
      option("A journal documenting your entire future", "Old Soul", "journal")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"Which TikTok rabbit hole traps you for 3 hours?",
    options:[
      option("Fantasy edits", "Stargazer", "fantasy"),
      option("True crime", "Sleuth", "crime"),
      option("Relationship analyses", "Heart Collector", "relationship"),
      option("Literary quotes and films that emotionally destroy people", "Old Soul", "film")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"If you were the protagonist, your story would be about...",
    options:[
      option("Discovering a hidden world", "Stargazer", "portal"),
      option("Solving a mystery nobody else can", "Sleuth", "mystery"),
      option("Finding your people", "Heart Collector", "people"),
      option("Understanding yourself", "Old Soul", "self")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"Which fictional object would you most want?",
    options:[
      option("A wand", "Stargazer", "wand"),
      option("A notebook containing secrets", "Sleuth", "notebook"),
      option("Cupid's arrow", "Heart Collector", "cupidarrow"),
      option("A book that answers every question you have ever had", "Old Soul", "answerbook")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"Which comment would bother you the most?",
    options:[
      option('"You are boring."', "Stargazer", "boring"),
      option('"You are wrong."', "Sleuth", "wrong"),
      option('"Nobody loves you."', "Heart Collector", "unloved"),
      option('"You will be forgotten."', "Old Soul", "forgotten")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"Pick a movie night.",
    options:[
      option("Harry Potter and the Prisoner of Azkaban", "Stargazer", "azkaban"),
      option("Knives Out", "Sleuth", "knives"),
      option("Call Me by Your Name", "Heart Collector", "callname"),
      option("Dead Poets Society", "Old Soul", "poets")
    ]
  },
  {
    section:"Section 01 / Who are you?",
    title:"What usually keeps you hooked on a story?",
    options:[
      option("The world", "Stargazer", "world"),
      option("The mystery", "Sleuth", "magnify"),
      option("The characters", "Heart Collector", "characters"),
      option("The ideas and themes", "Old Soul", "themes")
    ]
  },
  {
    section:"Section 02 / How do you read?",
    title:"You finish a movie you loved. What do you do next?",
    options:[
      styleOption("Move on to something else.", 1, "next"),
      styleOption("Watch clips and edits.", 2, "clips"),
      styleOption("Discuss it with friends.", 3, "discuss"),
      styleOption("Look up theories and analyses.", 5, "analysis")
    ]
  },
  {
    section:"Section 02 / How do you read?",
    title:"Which ending sounds most satisfying?",
    options:[
      styleOption("Everything is explained.", 1, "explained"),
      styleOption("Most questions are answered.", 2, "answered"),
      styleOption("Some things remain mysterious.", 4, "mysterious"),
      styleOption("Nobody agrees on what it means.", 5, "debate")
    ]
  },
  {
    section:"Section 02 / How do you read?",
    title:"You encounter a word you have never seen before.",
    visual:false,
    options:[
      styleOption("Skip it.", 1, "skip"),
      styleOption("Guess from context.", 2, "context"),
      styleOption("Look it up if important.", 4, "lookup"),
      styleOption("I enjoy learning unusual words.", 5, "words")
    ]
  },
  {
    section:"Section 02 / How do you read?",
    title:"You discover a story you are obsessed with.",
    visual:false,
    options:[
      styleOption("Watch a summary.", 1, "summary"),
      styleOption("Read a few excerpts.", 2, "excerpt"),
      styleOption("Read the whole book.", 4, "wholebook"),
      styleOption("Read the entire series.", 5, "series")
    ]
  },
  {
    section:"Section 02 / How do you read?",
    title:"Which article would you click?",
    options:[
      styleOption('"10 Weird Facts About Ancient Rome"', 1, "facts"),
      styleOption('"Why Ancient Rome Fell"', 2, "rome"),
      styleOption('"Historians Still Disagree About Rome\'s Collapse"', 4, "historians"),
      styleOption('"An Investigation of Competing Theories About Rome\'s Fall"', 5, "theories")
    ]
  },
  {
    section:"Section 03 / What is getting in the way?",
    title:"When someone recommends a book...",
    visual:false,
    options:[
      barrierOption("I forget about it.", "Overwhelmed Explorer", "forget"),
      barrierOption("I save it but never start.", "Overwhelmed Explorer", "save"),
      barrierOption("I start it but rarely finish.", "Slow Start", "unfinished"),
      barrierOption("I wish I had someone to discuss it with.", "Solo Reader", "chat")
    ]
  },
  {
    section:"Section 03 / What is getting in the way?",
    title:"What is hardest about reading?",
    visual:false,
    options:[
      barrierOption("Finding books.", "Mismatch", "find"),
      barrierOption("Staying interested.", "Slow Start", "interest"),
      barrierOption("Staying focused.", "Attention Wanderer", "focus"),
      barrierOption("Reading alone.", "Solo Reader", "alonebook"),
      barrierOption("Not having enough time.", "Time Crunch", "time")
    ]
  },
  {
    section:"Section 03 / What is getting in the way?",
    title:"If reading felt more like...",
    options:[
      barrierOption("Netflix.", "Slow Start", "netflix"),
      barrierOption("TikTok.", "Attention Wanderer", "tiktok"),
      barrierOption("Spotify.", "Mismatch", "spotify"),
      barrierOption("A group chat.", "Solo Reader", "groupchat")
    ]
  },
  {
    section:"Section 03 / What is getting in the way?",
    title:"You walk into a huge bookstore. Your first thought?",
    visual: false,
    options:[
      barrierOption("So many possibilities!", "Overwhelmed Explorer", "possibilities"),
      barrierOption("I don't have enough time to explore.", "Time Crunch", "exploretime"),
      barrierOption("I need recommendations.", "Mismatch", "recommend"),
      barrierOption("I will just leave and look online.", "Attention Wanderer", "online")
    ]
  }
];

const identities = {
  "Stargazer":{
    title:"The Stargazer",
    world:"Welcome to The Enchanted Library",
    description:"You are drawn to wonder. For you, stories are portals: hidden worlds, impossible possibilities, and the feeling that something extraordinary is waiting just around the corner.",
    books:["Harry Potter", "Percy Jackson", "The Night Circus", "Babel", "Piranesi"],
    colors:["rgba(126,88,190,0.54)", "rgba(96,160,210,0.42)", "#251d3e", "#12101f"],
    theme:{
      primary:"#4C5FD5",
      secondary:"#8E6BE8",
      gradient:"linear-gradient(135deg, #243B8F, #6D5DD3, #9B7CFF)",
      text:"#FFFFFF"
    }
  },
  "Sleuth":{
    title:"The Sleuth",
    world:"Welcome to The Investigation",
    description:"You are driven by curiosity. You notice details others overlook and read because uncertainty bothers you. You are not solving a crime; you are following the question nobody else can leave alone.",
    books:["The Inheritance Games", "A Good Girl's Guide to Murder", "Truly Devious", "We Were Liars", "None of This Is True"],
    colors:["rgba(140,32,42,0.48)", "rgba(178,139,84,0.36)", "#281716", "#0e0c0b"],
    theme:{
      primary:"#1E2A3A",
      secondary:"#D9B76E",
      gradient:"linear-gradient(135deg, #16202E, #27384A, #D9B76E)",
      text:"#FFF7E3"
    }
  },
  "Heart Collector":{
    title:"The Sappiest Simp",
    world:"Welcome to Threadbare Hearts",
    description:"You read for tension, longing, banter, almost-confessions, and the feeling that two characters are emotionally doomed in the most entertaining way possible.",
    books:["Better Than the Movies", "The Love Hypothesis", "People We Meet on Vacation", "The Cruel Prince", "Once Upon a Broken Heart"],
    colors:["rgba(200,111,100,0.52)", "rgba(178,139,84,0.35)", "#3a1c22", "#17100f"],
    theme:{
      primary:"#C9184A",
      secondary:"#FADADD",
      gradient:"linear-gradient(135deg, #C9184A, #FADADD)",
      text:"#4A102A"
    }
  },
  "Old Soul":{
    title:"The Old Soul",
    world:"Welcome to The Observatory",
    description:"You are drawn to stories that linger. You read for questions, memory, identity, beauty, grief, longing, and the complicated emotions that are difficult to put into words.",
    books:["A Little Life", "The Secret History", "Never Let Me Go", "Normal People", "On Earth We're Briefly Gorgeous"],
    colors:["rgba(78,86,112,0.55)", "rgba(201,177,121,0.35)", "#1b1b24", "#0d0b12"],
    theme:{
      primary:"#4A3A2A",
      secondary:"#B08A63",
      gradient:"linear-gradient(135deg, #2B2118, #8B6A4A, #F8F1E7)",
      text:"#FFF8EF"
    }
  }
};

const styles = {
  quick:{
    title:"Quick Hook Reader",
    difficulty:"Low-friction starter difficulty",
    description:"You like stories that earn your attention immediately. Strong openings, clear stakes, and steady momentum help you stay with a book."
  },
  explorer:{
    title:"Story Explorer",
    difficulty:"Immersive medium difficulty",
    description:"You enjoy sinking into a story over time. Once you are invested, you are willing to stay for the journey."
  },
  layer:{
    title:"Layer Chaser",
    difficulty:"Deep-dive challenge difficulty",
    description:"You enjoy ambiguity, complexity, and stories that reveal more every time you revisit them. You do not just consume stories; you analyze them."
  }
};

const barriers = {
  "Mismatch":{
    title:"The Mismatch",
    description:"You may not dislike reading. You may simply not have found books that genuinely reflect your interests."
  },
  "Slow Start":{
    title:"The Slow Start",
    description:"You enjoy stories, but many books lose you before they get interesting. Strong openings and immediate stakes matter most."
  },
  "Solo Reader":{
    title:"The Solo Reader",
    description:"Reading can feel isolating. You thrive when books become conversations through recommendations, discussions, fandoms, annotations, or shared reactions."
  },
  "Overwhelmed Explorer":{
    title:"The Overwhelmed Explorer",
    description:"There are so many books, genres, recommendations, and reading lists that choosing where to begin can feel overwhelming."
  },
  "Attention Wanderer":{
    title:"The Attention Wanderer",
    description:"Books are competing with a world designed to capture your attention. The right book can help create the same immersive pull that keeps you scrolling."
  },
  "Time Crunch":{
    title:"The Time Crunch",
    description:"Reading may not feel impossible because you dislike books. It may feel impossible because your day is already packed, so reading needs to become easier to start in small, low-pressure moments."
  }
};

const art = {
  castle:["#7060bf", "#7fc4d8", "#211a3e", "#0c1026", "🏰"],
  clippings:["#b74747", "#d9b56f", "#311817", "#0f0d0c", "🧵"],
  journey:["#4f9b82", "#ef9c4f", "#19392f", "#11170f", "🗺️"],
  cafe:["#c86f64", "#f0c98e", "#482024", "#17100f", "☕"],
  rain:["#697089", "#c9b178", "#20222f", "#0d0b12", "🕯️"],
  omg:["#7560c8", "#f0c98e", "#241b42", "#111027", "✨"],
  secret:["#7b1e28", "#b28b54", "#251412", "#090706", "👀"],
  heart:["#d6727f", "#ffd3ba", "#4a1f27", "#170f11", "❤️"],
  run:["#4f7462", "#ff9d42", "#1b382d", "#12130e", "🏃"],
  guess:["#7265c7", "#b5d8ff", "#211a3d", "#111025", "🤔"],
  think:["#5d6075", "#d8bd7f", "#20202b", "#0f0d12", "🕯️"],
  candle:["#5d6075", "#d8bd7f", "#20202b", "#0f0d12", "🕯️"],
  tower:["#725dbc", "#88c7da", "#241c42", "#111025", "🏰"],
  office:["#74423b", "#c3a368", "#2b1b17", "#100c0b", "🔍"],
  station:["#4b836d", "#dc8f43", "#19352c", "#10150f", "🚉"],
  bookstore:["#b9645f", "#f1c88d", "#3d1f20", "#160f0d", "📖"],
  library:["#4f566e", "#c6ad72", "#1d202b", "#0b0b10", "🌧️"],
  spark:["#8065db", "#8fd8ff", "#281b4d", "#111025", "✨"],
  document:["#7d2630", "#d6b978", "#2b1715", "#0d0b09", "🕵️"],
  map:["#4e866d", "#e1a04f", "#17382c", "#10130d", "🧭"],
  letter:["#c76f64", "#ffd1a8", "#4a2222", "#170f0c", "💌"],
  futurepartner:["#c76f64", "#ffd1a8", "#4a2222", "#170f0c", "💌"],
  journal:["#555b72", "#ccb982", "#1c1f2a", "#0d0c11", "📓"],
  fantasy:["#7560c8", "#9ed8f0", "#241b42", "#111027", "✨"],
  crime:["#8b2634", "#d4b170", "#2e1717", "#100b0b", "🔍"],
  travel:["#4f8c70", "#f0a34c", "#193a2f", "#12150e", "🌍"],
  relationship:["#d16f7b", "#ffd0ad", "#4a2029", "#17100f", "❤️"],
  film:["#555b75", "#cbb57d", "#1c202d", "#0c0c13", "🎞️"],
  portal:["#7664ce", "#83d2e8", "#211b40", "#0e1025", "🌌"],
  mystery:["#7a2630", "#caa96f", "#2a1716", "#100c0b", "🧩"],
  survival:["#52795f", "#e08b3f", "#183529", "#11120d", "⚔️"],
  people:["#cf7770", "#f6cb93", "#462423", "#17100f", "🤝"],
  self:["#62687f", "#d0bd89", "#202330", "#0d0c12", "🪞"],
  wand:["#8065d8", "#a4dcf3", "#281c4a", "#111027", "🪄"],
  notebook:["#7a3032", "#d1ad6c", "#291816", "#100b09", "🔎"],
  compass:["#54866a", "#dfa154", "#19362c", "#11150f", "🧭"],
  letters:["#c66c62", "#ffd2a4", "#472120", "#170f0c", "💌"],
  cupidarrow:["#c66c62", "#ffd2a4", "#472120", "#170f0c", "💘"],
  answerbook:["#555f7b", "#ccb57b", "#1e2230", "#0d0c12", "📖"],
  boring:["#7562c6", "#97c8ec", "#241c42", "#111027", "💤"],
  wrong:["#7d2630", "#d4af70", "#2b1716", "#0e0a09", "❌"],
  gaveup:["#577c61", "#ee9847", "#1b3529", "#11130e", "🏁"],
  alone:["#cf7470", "#f5c692", "#482322", "#170f0e", "💭"],
  unloved:["#cf7470", "#f5c692", "#482322", "#170f0e", "💔"],
  forgotten:["#596075", "#c7b37c", "#1f2230", "#0d0c12", "⌛"],
  azkaban:["#7562d2", "#9ed9f0", "#251c46", "#111027", "🎬"],
  knives:["#7d2730", "#d4af71", "#2b1715", "#100b09", "🔪"],
  mitty:["#4f8b70", "#efa047", "#18382c", "#10140e", "🌄"],
  callname:["#c66d65", "#f4c98c", "#44201f", "#160f0d", "📜"],
  poets:["#565d75", "#c9b078", "#20222e", "#0c0c12", "🕯️"],
  world:["#7360c8", "#96d2e8", "#241b42", "#101026", "🌎"],
  magnify:["#7d2830", "#d2ae70", "#291716", "#100b09", "🔍"],
  action:["#587a60", "#ee9348", "#183428", "#10130d", "⚔️"],
  characters:["#cf7470", "#f3c88f", "#482322", "#170f0e", "❤️"],
  themes:["#5b6076", "#c7b47d", "#1f2230", "#0d0c12", "🕯️"],
  exploretime:["#687a8f", "#a67c52", "#222222", "#111111", "⌛"]
};

const fallbackArt = ["#6a2e2e", "#b28b54", "#241b17", "#17110f", ""];
const generatedPalettes = [
  ["#6a2e2e", "#d19a5f", "#2b1715", "#120d0c"],
  ["#4f7462", "#d4b15f", "#18352b", "#10140f"],
  ["#3f6f91", "#9fc8d8", "#182938", "#0d1017"],
  ["#7a5fb3", "#d7b4ea", "#25193f", "#100d1b"],
  ["#c86f64", "#f0c98e", "#3d1f20", "#140f0d"]
];
const generatedIcons = ["", "", "", "", "", "", "", "", "", ""];

function option(text, score, artKey){
  return { text, scoreType:"identity", score, artKey };
}

function styleOption(text, points, artKey){
  return { text, scoreType:"style", points, artKey };
}

function barrierOption(text, score, artKey){
  return { text, scoreType:"barrier", score, artKey };
}

function shuffledOptions(options, seed){
  const shuffled = [...options];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = (seed * 17 + index * 11) % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

questions.forEach((question, index) => {
  question.options = shuffledOptions(question.options, index + 3);
});

const panels = {
  intro:document.querySelector('[data-panel="intro"]'),
  quiz:document.querySelector('[data-panel="quiz"]'),
  result:document.querySelector('[data-panel="result"]')
};
const startButton = document.querySelector("[data-start-quiz]");
const restartButton = document.querySelector("[data-restart-quiz]");
const enterWorldButton = document.querySelector("[data-enter-world]");
const enterFeedButton = document.querySelector("[data-enter-feed]");
const prevButton = document.querySelector("[data-prev-question]");
const questionTitle = document.querySelector("[data-question-title]");
const progressLabel = document.querySelector("[data-progress-label]");
const progressFill = document.querySelector("[data-progress-fill]");
const optionGrid = document.querySelector("[data-option-grid]");
const helperText = document.querySelector("[data-helper-text]");
const shelfTable = document.querySelector("[data-observatory-shelf]");
const bookDialog = document.querySelector("[data-book-dialog]");
const closeBookDialog = document.querySelector("[data-close-book-dialog]");
const bookCover = document.querySelector("[data-book-cover]");
const bookTitle = document.querySelector("[data-book-title]");
const bookSynopsis = document.querySelector("[data-book-synopsis]");
const bookReasons = document.querySelector("[data-book-reasons]");
const deskObjects = document.querySelector("[data-desk-objects]");
const deskOutput = document.querySelector("[data-reflection-output]");
const memoryBox = document.querySelector("[data-memory-box]");
const memoryOutput = document.querySelector("[data-memory-output]");
const windowQuoteButton = document.querySelector("[data-window-quote]");

let currentQuestion = 0;
let answers = [];
let windowQuoteIndex = 0;
let currentResultIdentityKey = "Old Soul";

const observatoryBooks = [
  {
    title:"A Little Life",
    mood:"devastating",
    cover:["#243227", "#d3af75"],
    synopsis:"Four college friends move through adulthood while carrying love, ambition, loyalty, and unbearable private histories. It is emotionally intense, slow-burning, and built around the kind of friendship that becomes a life.",
    reasons:[
      "You want a story that feels psychologically enormous.",
      "You like character-driven books more than fast plots.",
      "You want a book that stays with you after the last page."
    ],
    preview:""
  },
  {
    title:"Normal People",
    mood:"yearning",
    cover:["#2d4739", "#e6c98f"],
    synopsis:"Two people spend years moving toward and away from each other while trying to understand themselves. The drama lives in tiny choices, unsent feelings, and the question of whether being known can also hurt.",
    reasons:[
      "You overthink text messages.",
      "You romanticize ordinary moments.",
      "Character development matters more than plot."
    ],
    preview:""
  },
  {
    title:"The Secret History",
    mood:"intellectual",
    cover:["#172e24", "#c99b54"],
    synopsis:"A group of brilliant students become obsessed with beauty, knowledge, and each other until their world turns dangerous. It feels like a campus mystery wrapped in philosophy, privilege, and obsession.",
    reasons:[
      "You like morally complicated friend groups.",
      "You want dark academic tension without making the page feel dusty.",
      "You enjoy stories where atmosphere is part of the plot."
    ],
    preview:""
  },
  {
    title:"Intermezzo",
    mood:"reflective",
    cover:["#39434f", "#d8b77f"],
    synopsis:"Two brothers move through grief, love, and uncertainty while trying to understand what they owe themselves and each other. It is quiet, interior, and interested in the small emotional negotiations that shape a life.",
    reasons:[
      "You like books about relationships that resist easy answers.",
      "You enjoy reflective stories with emotional texture.",
      "You want something thoughtful rather than plot-heavy."
    ],
    preview:""
  },
  {
    title:"Never Let Me Go",
    mood:"bittersweet",
    cover:["#475069", "#cbbf95"],
    synopsis:"A group of students look back on a childhood that seemed ordinary until its hidden purpose becomes impossible to ignore. The book is gentle and devastating at the same time.",
    reasons:[
      "You like emotional science fiction that does not feel technical.",
      "You are drawn to memory, friendship, and quiet dread.",
      "You want a book that asks what makes a life meaningful."
    ],
    preview:""
  }
];

const windowQuotes = [
  "Stories are how we remember who we are.",
  "The person who reads lives a thousand lives before they die.",
  "A room without books is like a body without a soul.",
  "We read to know we are not alone.",
  "The books that matter most are the ones that arrive at the right moment."
];

function showPanel(name){
  Object.entries(panels).forEach(([key, panel]) => {
    if (!panel) return;
    panel.classList.toggle("is-hidden", key !== name);
  });
  window.scrollTo({ top:0, behavior:"smooth" });
}

function renderQuestion(){
  const question = questions[currentQuestion];
  questionTitle.textContent = question.title;
  progressLabel.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  prevButton.disabled = currentQuestion === 0;
  helperText.textContent = "No wrong answers. Pick the option that feels most naturally like you.";
  optionGrid.dataset.count = String(question.options.length);

  optionGrid.classList.toggle("text-only-options", question.visual === false);

  optionGrid.innerHTML = question.options.map((answer, index) => {
    const artMarkup = question.visual === false ? "" : getOptionArtMarkup(answer, index);

    return `
      <button class="option-card" type="button" data-option-index="${index}">
        ${artMarkup}
        <span class="option-copy">
          <p>${answer.text}</p>
        </span>
      </button>
    `;
  }).join("");
}

function getOptionArt(answer, index){
  if (art[answer.artKey]) return art[answer.artKey];

  const seed = [...String(answer.artKey || answer.text)].reduce((sum, char) => sum + char.charCodeAt(0), index);
  const palette = generatedPalettes[seed % generatedPalettes.length];
  const icon = generatedIcons[seed % generatedIcons.length];
  return [...palette, icon] || fallbackArt;
}

function getOptionArtMarkup(answer, index){
  const imageMap = {
    // =========================
    // Question 1
    // Which Pinterest board are you clicking first?
    // =========================
    castle: "1moonlitcastlesss.jpg",
    clippings: "1Newspaper clippings.jpg",
    cafe: "1cafe.jpg",
    rain: "1film photography.jpg",

    // =========================
    // Question 2
    // Your friend texts: "I have something important to tell you."
    // =========================
    omg: "oh my god tell me everything.png",
    secret: "2spill.jpeg",
    heart: "2hugging.jpg",
    guess: "lemme guess.JPG",
    think: "what do you think about it.png",
    candle: "2lifechanging.webp",

    // =========================
    // Question 3
    // Pick a room to spend an afternoon in.
    // =========================
    tower: "3dragoncastle tower.jpg",
    office: "3detective office.jpg",
    bookstore: "3romanticcafe.jpg",
    library: "3cafe.png",

    // =========================
    // Question 4
    // You find an envelope with your name on it. What is inside?
    // =========================
    spark: "magicalletter.avif",
    document: "true crime.jpeg",
    futurepartner: "a letter from your future partner.png",
    letter: "7. letters.jpg",
    journal: "selfjournal.jpeg",

    // =========================
    // Question 5
    // Which TikTok rabbit hole traps you for 3 hours?
    // =========================
    fantasy: "fantasy edits.webp",
    crime: "true crime.jpeg",
    relationship: "relationship analyses.webp",
    film: "sad literary .webp",

    // =========================
    // Question 6
    // If you were the protagonist, your story would be about...
    // =========================
    portal: "discovering. ahiddne world .avif",
    mystery: "solving a mystery.jpg",
    people: "found family.jpeg",
    self: "understanding yourself.jpg",

    // =========================
    // Question 7
    // Which fictional object would you most want?
    // =========================
    wand: "7. harry potter wand.jpg",
    notebook: "7. notebook.jpg",
    cupidarrow: "cupid'sarrow.jpg",
    letters: "7. letters.jpg",
    answerbook: "7. answers book.jpg",

    // =========================
    // Question 8
    // Which comment would bother you the most?
    // =========================
    boring: "you are boring.png",
    wrong: "you are wrong.webp",
    unloved: "nobody loves you.png",
    alone: "no-one-understands-me.jpg",
    forgotten: "you will be forgotten.jpg",

    // =========================
    // Question 9
    // Pick a movie night.
    // =========================
    azkaban: "harry potter and prisoner of azkaban.jpg",
    knives: "knivesout.jpg",
    callname: "call me by your name.png",
    poets: "deadpoetssociety.jpg",

    // =========================
    // Question 10
    // What usually keeps you hooked on a story?
    // =========================
    world: "10. the world.jpg",
    magnify: "10. mystery.jpg",
    characters: "10thecharacters.avif",
    themes: "10. ideas and themes.jpg",

    // =========================
    // Question 11
    // You finish a movie you loved. What do you do next?
    // =========================
    next: "11. move on to smt else.jpg",
    clips: "11.fanedits.jpg",
    discuss: "11. friends discussion.jpg",
    analysis: "11. theories.png",

    // =========================
    // Question 12
    // Which ending sounds most satisfying?
    // =========================
    explained: "12. everything is explained.jpg",
    answered: "12. most questions are answered.jpg",
    mysterious: "12. some things remain mysterious.jpg",
    debate: "12. nobody agrees.jpg",

    // =========================
    // Question 13
    // You encounter a word you have never seen before.
    // =========================
    skip: "q13-skip-placeholder.jpg",
    context: "q13-context-placeholder.jpg",
    lookup: "q13-lookup-placeholder.jpg",
    words: "q13-words-placeholder.jpg",

    // =========================
    // Question 14
    // You discover a story you are obsessed with.
    // =========================
    summary: "q14-summary-placeholder.jpg",
    excerpt: "q14-excerpt-placeholder.jpg",
    wholebook: "q14-wholebook-placeholder.jpg",
    series: "q14-series-placeholder.jpg",

    // =========================
    // Question 15
    // Which article would you click?
    // =========================
    facts: "15option1.png",
    rome: "15option2.png",
    historians: "15option3.png",
    theories: "15option4.png",

    // =========================
    // Question 16
    // When someone recommends a book...
    // =========================
    forget: "q16-forget-placeholder.jpg",
    save: "q16-save-placeholder.jpg",
    unfinished: "q16-unfinished-placeholder.jpg",
    chat: "q16-chat-placeholder.jpg",

    // =========================
    // Question 17
    // What is hardest about reading?
    // =========================
    find: "q17-find-placeholder.jpg",
    interest: "q17-interest-placeholder.jpg",
    focus: "q17-focus-placeholder.jpg",
    alonebook: "q17-alonebook-placeholder.jpg",

    // =========================
    // Question 18
    // If reading felt more like...
    // =========================
    netflix: "18netflix.webp",
    tiktok: "18tiktok.jpg",
    spotify: "18spotify.jpg",
    groupchat: "18groupchat.png",

    // =========================
    // Question 19
    // You walk into a huge bookstore. Your first thought?
    // =========================
    possibilities: "so many possibilities bookstore.png",
    exploretime: "i dont have enough time to explore.png",
    recommend: "i need recommendations.png",
    online: "i will just leave and look online.png"
  };

  const image = imageMap[answer.artKey];

  if (image) {
    return `<span class="option-art image-art"><img src="${encodeURI(`../Images/${image}`)}" alt="" loading="lazy"></span>`;
  }

  const colors = getOptionArt(answer, index);

  return `<span class="option-art" style="--accent-a:${colors[0]}; --accent-b:${colors[1]}; --accent-c:${colors[2]}; --accent-d:${colors[3]};"><span aria-hidden="true">${colors[4] || ""}</span></span>`;
}

function chooseOption(index){
  answers[currentQuestion] = questions[currentQuestion].options[index];

  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }

  currentQuestion += 1;
  renderQuestion();
}

function countScores(items){
  return items.reduce((scores, item) => {
    if (!item?.score) return scores;
    scores[item.score] = (scores[item.score] || 0) + 1;
    return scores;
  }, {});
}

function topKey(scores, fallback){
  const entries = Object.entries(scores);
  if (!entries.length) return fallback;
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function getStyleResult(points){
  if (points <= 9) return styles.quick;
  if (points <= 17) return styles.explorer;
  return styles.layer;
}

function showResults(){
  const identityScores = countScores(answers.filter((answer) => answer?.scoreType === "identity"));
  const barrierScores = countScores(answers.filter((answer) => answer?.scoreType === "barrier"));
  const stylePoints = answers
    .filter((answer) => answer?.scoreType === "style")
    .reduce((sum, answer) => sum + Number(answer.points || 0), 0);

  currentResultIdentityKey = topKey(identityScores, "Stargazer");
  const identity = identities[currentResultIdentityKey];
  const style = getStyleResult(stylePoints);
  const barrier = barriers[topKey(barrierScores, "Mismatch")];

  const resultPanel = document.querySelector('[data-panel="result"]');
  const resultWorld = document.querySelector("[data-result-world]");
  Object.entries(identity.theme).forEach(([key, value]) => {
    resultPanel.style.setProperty(`--identity-${key}`, value);
  });
  resultWorld.style.setProperty("--result-a", identity.colors[0]);
  resultWorld.style.setProperty("--result-b", identity.colors[1]);
  resultWorld.style.setProperty("--result-c", identity.colors[2]);
  resultWorld.style.setProperty("--result-d", identity.colors[3]);

  document.querySelector("[data-result-name]").textContent = identity.title;
  document.querySelector("[data-result-world-name]").textContent = identity.world;
  document.querySelector("[data-result-description]").textContent = identity.description;
  document.querySelector("[data-style-name]").textContent = `${style.title}: ${style.difficulty}`;
  document.querySelector("[data-style-description]").textContent = style.description;
  document.querySelector("[data-barrier-name]").textContent = barrier.title;
  document.querySelector("[data-barrier-description]").textContent = barrier.description;
  document.querySelector("[data-book-list]").innerHTML = identity.books.map((book) => `<span class="book-title-pill">${book}</span>`).join("");

  showPanel("result");
}

function resetQuiz(){
  currentQuestion = 0;
  answers = [];
  renderQuestion();
  showPanel("quiz");
}

function renderObservatoryShelf(){
  if (!shelfTable) return;
  shelfTable.innerHTML = observatoryBooks.map((book, index) => `
    <button class="shelf-row" type="button" data-book-index="${index}">
      <span>${book.title}</span>
      <span>${book.mood}</span>
      <b>Open</b>
    </button>
  `).join("");
}

function openBookPreview(book){
  if (!bookDialog || !book) return;
  bookCover.style.setProperty("--cover-a", book.cover[0]);
  bookCover.style.setProperty("--cover-b", book.cover[1]);
  bookCover.textContent = book.title;
  bookTitle.textContent = book.title;
  bookSynopsis.textContent = book.synopsis;
  bookReasons.innerHTML = book.reasons.map((reason) => `<li>${reason}</li>`).join("");
  if (typeof bookDialog.showModal === "function") {
    bookDialog.showModal();
  } else {
    bookDialog.setAttribute("open", "");
  }
}

function closePreview(){
  if (!bookDialog) return;
  if (typeof bookDialog.close === "function") {
    bookDialog.close();
  } else {
    bookDialog.removeAttribute("open");
  }
}

startButton.addEventListener("click", resetQuiz);
restartButton.addEventListener("click", resetQuiz);
enterWorldButton.addEventListener("click", () => {
  const worldRoutes = {
    "Stargazer":"./chronicle.html",
    "Sleuth":"./investigation.html",
    "Old Soul":"./observatory.html",
    "Heart Collector":"./romance.html"
  };
  window.location.href = worldRoutes[currentResultIdentityKey] || "./observatory.html";
});
enterFeedButton?.addEventListener("click", () => {
  enterFeedButton.textContent = "Reading Feed Coming Next";
  enterFeedButton.disabled = true;
});
prevButton.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});
optionGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-option-index]");
  if (!card) return;
  chooseOption(Number(card.dataset.optionIndex));
});
shelfTable?.addEventListener("click", (event) => {
  const row = event.target.closest("[data-book-index]");
  if (!row) return;
  openBookPreview(observatoryBooks[Number(row.dataset.bookIndex)]);
});
closeBookDialog?.addEventListener("click", closePreview);
bookDialog?.addEventListener("click", (event) => {
  if (event.target === bookDialog) closePreview();
});
deskObjects?.addEventListener("click", (event) => {
  const object = event.target.closest("[data-reflection]");
  if (!object) return;
  deskOutput.textContent = object.dataset.reflection;
});
memoryBox?.addEventListener("click", (event) => {
  const object = event.target.closest("[data-memory]");
  if (!object) return;
  memoryOutput.textContent = object.dataset.memory;
});
windowQuoteButton?.addEventListener("click", () => {
  const quote = windowQuoteButton.querySelector(".window-quote");
  windowQuoteIndex = (windowQuoteIndex + 1) % windowQuotes.length;
  quote.textContent = windowQuotes[windowQuoteIndex];
  quote.animate?.(
    [{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
    { duration:420, easing:"ease-out" }
  );
});

renderObservatoryShelf();
