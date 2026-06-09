const caseFiles = [
  {
    title:"The Inheritance Games",
    number:"CASE #001",
    cover:"the inheritance game cover.webp",
    evidence:"A locked mansion. A dead billionaire. A stranger named in the will before the family even knows her name.",
    questions:["Why her?", "Who is lying?", "What did the will hide?"],
    recommendation:"People who need answers, puzzles, inheritance drama, and family secrets with a rich-person maze attached.",
    note:"A fortune appears in the wrong hands, and every heir suddenly remembers something they forgot to mention."
  },
  {
    title:"A Good Girl's Guide to Murder",
    number:"CASE #002",
    cover:"a good girls guide to murder cover.jpg",
    evidence:"The town calls the case solved. One student reads the file and notices the story has too many convenient silences.",
    questions:["What did the town miss?", "Who benefits from silence?", "Can a solved case still be wrong?"],
    recommendation:"Readers who love amateur investigation, interviews, documents, and stories that reward attention.",
    note:"A school project becomes an investigation when the official answer starts sounding rehearsed."
  },
  {
    title:"Truly Devious",
    number:"CASE #003",
    cover:"truly devious cover.jpg",
    evidence:"A famous old kidnapping at an elite academy returns through a new message, a new student, and a pattern nobody has finished reading.",
    questions:["Why did the old case never settle?", "Who is copying the past?", "What does the academy protect?"],
    recommendation:"Readers who like cold cases, campus atmosphere, riddles, and mysteries that unfold across timelines.",
    note:"An old academy case wakes up when someone starts writing like the original criminal."
  },
  {
    title:"We Were Liars",
    number:"CASE #004",
    cover:"we were liars cover.jpg",
    evidence:"A private island. A fractured summer. A narrator who remembers feelings clearly and facts only in pieces.",
    questions:["What happened that summer?", "Why does everyone speak around it?", "Can memory protect you from the truth?"],
    recommendation:"Readers who like unreliable memory, family secrets, beautiful settings, and endings that rearrange the whole file.",
    note:"A summer story keeps skipping the part everyone is afraid to say out loud."
  },
  {
    title:"None of This Is True",
    number:"CASE #005",
    cover:"none of this is true cover.jpg",
    evidence:"A podcast host meets a woman with a strange life story, then realizes the interview may be less confession than trap.",
    questions:["Who is using the microphone?", "Which version of the story is performance?", "Can attention become dangerous?"],
    recommendation:"Readers who like psychological suspense, media framing, obsession, and stories where the narrator is part of the evidence.",
    note:"A recorded story starts behaving like evidence before anyone agrees a crime has happened."
  }
];

const openCaseThoughts = [
  {
    id:"case-001",
    theory:"Theory #001: the locked room is a distraction. Everyone is staring at the door because doors are dramatic, but paper moves more quietly than people. Check the copier log, the teacher's trash bin, and the student who acted relieved before anyone announced the exam was gone."
  },
  {
    id:"case-002",
    theory:"Theory #002: the message is not proof the missing person is alive. It is proof someone wants the case reopened now. Listen for background noise, not the voice. A train announcement, cafeteria bell, or rainstorm can date a lie better than a confession."
  },
  {
    id:"case-003",
    theory:"Theory #003: contradiction is not failure. It is evidence. People remember what threatened them, embarrassed them, or gave them something to hide. The truth may be the one detail nobody describes the same way twice."
  },
  {
    id:"case-004",
    theory:"Theory #004: the note was meant for a very specific reader. The book matters less than its checkout history. Whoever wrote the warning knew who would borrow it next, which means the library has become a delivery system."
  },
  {
    id:"case-005",
    theory:"Theory #005: audio feels permanent, but transcripts are written by someone. If the words changed, ask who had access, who noticed first, and which sentence disappeared. The edited line is usually closer to the truth than the recording itself."
  }
];

const nightLines = [
  "Every answer creates another question.",
  "The truth is rarely hidden. It is usually ignored.",
  "The best mysteries are really about people.",
  "Every story leaves fingerprints.",
  "Someone always knows more than they say."
];

const caseFilesContainer = document.querySelector("[data-case-files]");
const caseDialog = document.querySelector("[data-case-dialog]");
const closeCase = document.querySelector("[data-close-case]");
const caseFolder = document.querySelector("[data-case-folder]");
const caseCover = document.querySelector("[data-case-cover]");
const caseFolderLabel = document.querySelector("[data-case-folder-label]");
const caseTitle = document.querySelector("[data-case-title]");
const caseEvidence = document.querySelector("[data-case-evidence]");
const caseQuestions = document.querySelector("[data-case-questions]");
const caseRecommendation = document.querySelector("[data-case-recommendation]");
const evidenceDesk = document.querySelector("[data-evidence-desk]");
const evidenceOutput = document.querySelector("[data-evidence-output]");
const caseTabs = document.querySelector("[data-case-tabs]");
const tabOutput = document.querySelector("[data-tab-output]");
const nightObservation = document.querySelector("[data-night-observation]");
const mysteryAiGuide = document.querySelector("[data-mystery-ai-guide]");
const mysteryAiToggle = document.querySelector("[data-mystery-ai-toggle]");
const mysteryAiClose = document.querySelector("[data-mystery-ai-close]");
const mysteryAiPanel = document.querySelector("#mystery-ai-panel");

function renderCases(){
  const tilts = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg"];
  const positions = [
    "left:0;bottom:6%;--lift:0px",
    "left:18%;bottom:18%;--lift:-14px",
    "left:38%;bottom:4%;--lift:8px",
    "right:18%;bottom:15%;--lift:-8px",
    "right:0;bottom:7%;--lift:4px"
  ];
  caseFilesContainer.innerHTML = caseFiles.map((file, index) => `
    <button class="case-file" type="button" data-case="${index}" style="--tilt:${tilts[index]};${positions[index]}" aria-label="Open ${file.title} case file">
      <span class="case-tab">${file.number}</span>
      <span class="cover-pin" aria-hidden="true"></span>
      <img src="../Images/${encodeURIComponent(file.cover)}" alt="${file.title} cover">
      <span>${file.number}</span>
      <strong>${file.title}</strong>
      <em>${file.note}</em>
      <small>click open to see more</small>
    </button>
  `).join("");
}

function openCase(index){
  const file = caseFiles[index];
  caseFolder.dataset.caseNumber = file.number;
  caseFolder.dataset.caseBook = file.title;
  caseCover.src = `../Images/${encodeURIComponent(file.cover)}`;
  caseCover.alt = `${file.title} cover`;
  caseFolderLabel.textContent = `${file.number} / ${file.title}`;
  caseTitle.textContent = file.title;
  caseEvidence.textContent = file.evidence;
  caseQuestions.innerHTML = file.questions.map((question) => `<li>${question}</li>`).join("");
  caseRecommendation.textContent = file.recommendation;

  if (typeof caseDialog.showModal === "function") {
    caseDialog.showModal();
  } else {
    caseDialog.setAttribute("open", "");
  }
}

function closeCaseDialog(){
  if (typeof caseDialog.close === "function") {
    caseDialog.close();
  } else {
    caseDialog.removeAttribute("open");
  }
}

renderCases();

caseFilesContainer.addEventListener("click", (event) => {
  const file = event.target.closest("[data-case]");
  if (!file) return;
  openCase(Number(file.dataset.case));
});

closeCase.addEventListener("click", closeCaseDialog);
caseDialog.addEventListener("click", (event) => {
  if (event.target === caseDialog) closeCaseDialog();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseDialog.open) closeCaseDialog();
  if (event.key === "Escape" && mysteryAiGuide?.classList.contains("is-open")) {
    setMysteryAiGuide(false);
  }
});

evidenceDesk.addEventListener("click", (event) => {
  const item = event.target.closest("[data-observation]");
  if (!item) return;
  evidenceOutput.textContent = item.dataset.observation;
  evidenceOutput.animate(
    [{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }],
    { duration:320, easing:"ease-out" }
  );
});

caseTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-open-case]");
  if (!tab) return;
  const selectedCase = openCaseThoughts.find((caseItem) => caseItem.id === tab.dataset.openCase);
  tabOutput.textContent = selectedCase?.theory || `Open case: ${tab.textContent}`;
  caseTabs.querySelectorAll("[data-open-case]").forEach((caseTab) => {
    caseTab.classList.toggle("is-active", caseTab === tab);
  });
});

let nightIndex = 0;
window.setInterval(() => {
  nightIndex = (nightIndex + 1) % nightLines.length;
  nightObservation.textContent = nightLines[nightIndex];
}, 3200);

function setMysteryAiGuide(open){
  if (!mysteryAiGuide) return;
  mysteryAiGuide.classList.toggle("is-open", open);
  mysteryAiToggle?.setAttribute("aria-expanded", String(open));
  mysteryAiPanel?.setAttribute("aria-hidden", String(!open));
}

mysteryAiToggle?.addEventListener("click", () => setMysteryAiGuide(true));
mysteryAiClose?.addEventListener("click", () => setMysteryAiGuide(false));
