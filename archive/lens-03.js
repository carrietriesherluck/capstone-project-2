const feedExperience = document.querySelector("[data-feed-experience]");
const feedStream = document.querySelector("[data-feed-stream]");
const distractionLayer = document.querySelector("[data-distraction-layer]");
const energyLabel = document.querySelector("[data-energy-label]");
const energyFill = document.querySelector("[data-energy-fill]");
const chaosLabel = document.querySelector("[data-chaos-label]");
const failureOverlay = document.querySelector("[data-system-failure]");
const acdpCards = document.querySelectorAll("[data-acdp-grid] article");
const recoverySection = document.querySelector("[data-recovery-section]");
const recoveryEnergyLabel = document.querySelector("[data-recovery-energy-label]");
const recoveryEnergyFill = document.querySelector("[data-recovery-energy-fill]");
const endingCopy = document.querySelector("[data-ending-copy]");
const flashcards = document.querySelectorAll(".book-flashcard");

const posts = [
  ["FOR YOU", "This 9-second trick fixes your entire day", "The next clip explains it better, so keep watching."],
  ["TRENDING", "Everyone is arguing about this reading take", "Open the comments before you decide what you think."],
  ["RECOMMENDED", "Compulsive media use significantly triggers social media fatigue.", "People save this post because it feels important."],
  ["LIVE", "Someone you barely know started a broadcast", "Only 247 people are inside right now."],
  ["CAPTION", "Books require intentional continuation. Infinite scroll continues automatically.", "The system never asks whether you meant to continue."],
  ["HOT", "This harmless challenge takes only 12 seconds", "Tap three colors and discover your focus type."],
  ["NEWS", "Repeated exposure to highly stimulating content may weaken sustained attention for slower tasks like reading.", "Swipe for the full breakdown."],
  ["COMMENTS", "Infinite scroll reduces self-awareness and sense of time.", "New replies keep loading."],
  ["AUTOPLAY", "Watch next: the most chaotic study setup ever", "The next video starts before you choose it."],
  ["ALERT", "Notifications can interrupt cognitive processing for approximately 7 seconds.", "Now check why someone mentioned you."]
];

const distractions = [
  ["FOMO Alerts", "You missed 12 new updates", "Many users reported feeling unable to disconnect despite exhaustion.", "alert", "#dfff31"],
  ["Emotional Headlines", "This opinion made everyone furious", "Ragebait accelerates reaction before reflection.", "headline", "#ff7a1f"],
  ["Autoplay Reels", "Next reel begins in 0.3 seconds", "Compulsive media use significantly triggers social media fatigue.", "reel", "#1de8ff"],
  ["Infinite Comments Scroll", "New comments are still loading", "Infinite scroll reduces self-awareness and sense of time.", "comments", "#ff2aa3"],
  ["Engagement Notifications", "84 people liked your reply", "Notifications can interrupt cognitive processing for approximately 7 seconds.", "engagement", "#ffffff"],
  ["Time-Wasting Challenge", "Pick a door to reveal your brain type", "Pointless micro-decisions still consume energy.", "challenge", "#b8ff63"],
  ["Recommended For You", "Because you paused for 0.8 seconds", "Platforms foster compulsive engagement patterns structurally similar to gambling.", "recommend", "#9cf4ff"],
  ["Fake Message", "Are you ignoring this?", "Many users reported feeling unable to disconnect despite exhaustion.", "message", "#ffd1f1"],
  ["Moving Headline", "Nobody can stop talking about this", "Emotional novelty keeps the platform's path louder than your own goal.", "banner", "#ffc04d"],
  ["Autoplay Caption", "Wait for the twist", "Books require intentional continuation. Infinite scroll continues automatically.", "reel", "#d8c2ff"],
  ["ACDP Loop", "The algorithm is testing another hook", "ACDPs and Multi-Armed Bandit loops pull people away from their own goals.", "alert", "#ff9aa8"],
  ["Social Proof", "12 classmates are active now", "FOMO makes leaving feel like losing information.", "engagement", "#a8ffc4"],
  ["Pop-up Ad", "Your focus score is expiring", "Scarcity language turns attention into urgency.", "challenge", "#fffd8d"],
  ["Comment Popup", "Someone replied: 'actually...'", "New disagreement reopens the loop.", "comments", "#8ee8ff"]
];

let energy = 100;
let postCount = 0;
let distractionCount = 0;
let spawnTimer = null;
let drainTimer = null;
let finalTriggered = false;
let recoveryEnergy = 0;
let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function clamp(value, min, max){
  return Math.max(min, Math.min(max, value));
}

function setEnergy(value){
  energy = clamp(value, 0, 100);
  energyLabel.textContent = `${Math.round(energy)}%`;
  energyFill.style.width = `${energy}%`;

  if (energy < 34) {
    chaosLabel.textContent = "cognitive overload";
  } else if (energy < 68) {
    chaosLabel.textContent = "overwhelming feed";
  } else {
    chaosLabel.textContent = "manageable feed";
  }
}

function drain(amount){
  if (finalTriggered) return;
  setEnergy(energy - amount);
}

function createPost(){
  const source = posts[postCount % posts.length];
  const article = document.createElement("article");
  article.className = "feed-post";
  article.style.setProperty("--chaos", postCount);
  article.innerHTML = `
    <header>
      <span>${source[0]}</span>
      <strong>${Math.max(1, 99 - postCount)}s ago</strong>
    </header>
    <h3>${source[1]}</h3>
    <p>${source[2]}</p>
    <div class="post-media" aria-hidden="true"></div>
    <div class="post-actions" aria-hidden="true">
      <span>${120 + postCount * 7}k likes</span>
      <span>${42 + postCount} comments</span>
      <span>share</span>
    </div>
  `;
  feedStream.append(article);
  postCount += 1;

  if (postCount > 7 && postCount % 5 === 0) {
    placeStartReading();
  }
}

function placeStartReading(){
  const oldButton = feedStream.querySelector(".start-reading-card");
  if (oldButton) oldButton.remove();

  const card = document.createElement("article");
  card.className = "start-reading-card";
  card.innerHTML = `<button class="start-reading-button" type="button" data-start-reading>START READING</button>`;
  feedStream.append(card);

  const button = card.querySelector("[data-start-reading]");
  button.addEventListener("click", triggerFailure);

  if (distractionCount > 5) {
    window.setTimeout(() => spawnDistraction(true), 280);
  }
}

function fillFeed(amount = 8){
  for (let i = 0; i < amount; i += 1) createPost();
}

function spawnDistraction(overStart = false){
  if (finalTriggered || !feedExperience || !feedExperience.classList.contains("is-active")) return;

  const data = distractions[distractionCount % distractions.length];
  const notice = document.createElement("article");
  notice.className = `distraction ${data[3]}`;
  notice.style.setProperty("--d-bg", data[4]);
  notice.style.setProperty("--tilt", `${(Math.random() * 10 - 5).toFixed(1)}deg`);
  notice.style.setProperty("--speed", `${(1.3 + Math.random() * 1.8).toFixed(2)}s`);

  const width = Math.min(330, window.innerWidth - 16);
  let left = Math.random() * Math.max(1, window.innerWidth - width - 8);
  let top = 100 + Math.random() * Math.max(1, window.innerHeight - 250);

  if (overStart) {
    const startButton = document.querySelector("[data-start-reading]");
    if (startButton) {
      const rect = startButton.getBoundingClientRect();
      left = clamp(rect.left - 80 + Math.random() * 120, 8, window.innerWidth - width - 8);
      top = clamp(rect.top - 45 + Math.random() * 80, 86, window.innerHeight - 160);
    }
  }

  notice.style.left = `${left}px`;
  notice.style.top = `${top}px`;
  notice.innerHTML = `
    <header>
      <span>${data[0]}</span>
      <button type="button" aria-label="Close distraction">x</button>
    </header>
    <h3>${data[1]}</h3>
    <p>${data[2]}</p>
  `;

  notice.addEventListener("pointerdown", startDrag);
  notice.querySelector("button").addEventListener("click", (event) => {
    event.stopPropagation();
    notice.remove();
    drain(3.4);
  });

  distractionLayer.append(notice);
  distractionCount += 1;
  drain(1.6);
}

function startDrag(event){
  const closeButton = event.target.closest("button");
  if (closeButton) return;

  draggedWindow = event.currentTarget;
  const rect = draggedWindow.getBoundingClientRect();
  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;
  draggedWindow.setPointerCapture(event.pointerId);
  drain(2.2);
}

window.addEventListener("pointermove", (event) => {
  if (!draggedWindow) return;
  const width = draggedWindow.offsetWidth;
  const height = draggedWindow.offsetHeight;
  draggedWindow.style.left = `${clamp(event.clientX - dragOffsetX, 4, window.innerWidth - width - 4)}px`;
  draggedWindow.style.top = `${clamp(event.clientY - dragOffsetY, 78, window.innerHeight - height - 4)}px`;
});

window.addEventListener("pointerup", () => {
  draggedWindow = null;
});

function startFeedSystems(){
  if (spawnTimer) return;

  spawnDistraction();
  spawnTimer = window.setInterval(() => {
    const overStart = distractionCount % 4 === 0;
    spawnDistraction(overStart);
    if (distractionCount % 3 === 0) fillFeed(2);
  }, 1700);

  drainTimer = window.setInterval(() => drain(0.9), 1000);
}

function stopFeedSystems(){
  window.clearInterval(spawnTimer);
  window.clearInterval(drainTimer);
  spawnTimer = null;
  drainTimer = null;
  draggedWindow = null;
  distractionLayer.innerHTML = "";
}

function triggerFailure(){
  if (finalTriggered) return;
  finalTriggered = true;
  setEnergy(0);
  stopFeedSystems();
  feedExperience.classList.add("is-paused");
  failureOverlay.classList.add("is-visible");
  failureOverlay.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    failureOverlay.classList.remove("is-visible");
    const survey = document.querySelector("#survey-reveal");
    const index = window.lensPagerSections?.indexOf(survey);
    if (typeof window.lensPagerGoTo === "function" && index >= 0) {
      window.lensPagerGoTo(index);
    }
  }, 4700);
}

function revealAcdpCards(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      acdpCards.forEach((card, index) => {
        window.setTimeout(() => card.classList.add("is-visible"), index * 280);
      });
      observer.disconnect();
    });
  }, { threshold:0.25 });

  const grid = document.querySelector("[data-acdp-grid]");
  if (grid) observer.observe(grid);
}

function setRecoveryEnergy(value){
  recoveryEnergy = clamp(value, 0, 100);
  recoveryEnergyLabel.textContent = `${recoveryEnergy}%`;
  recoveryEnergyFill.style.width = `${recoveryEnergy}%`;
  recoverySection.style.filter = `saturate(${1 - recoveryEnergy / 360})`;

  document.documentElement.style.setProperty("--recovery-speed", `${1 + recoveryEnergy / 28}s`);
  if (recoveryEnergy >= 100) {
    endingCopy.classList.add("is-visible");
  }
}
const viewedCards = new Set();

function handleFlashcard(card){
  const currentRotation = Number(card.dataset.rotation || 0);
  const nextRotation = currentRotation - 180;
  card.dataset.rotation = String(nextRotation);
  card.style.setProperty("--flip-rotation", `${nextRotation}deg`);
  const isBackVisible = Math.abs(nextRotation /180) % 2 == 1;
  card.classList.toggle("is-flipped", isBackVisible);
  card.setAttribute("aria-pressed", String(isBackVisible));
  viewedCards.add(card);
  const nextEnergy = Math.round((viewedCards.size/flashcards.length) * 100);
  setRecoveryEnergy(nextEnergy);
}

function init(){
  setEnergy(100);
  setRecoveryEnergy(0);
  fillFeed(10);

  feedStream.addEventListener("scroll", () => {
    const remaining = feedStream.scrollHeight - feedStream.scrollTop - feedStream.clientHeight;
    drain(0.5);
    if (remaining < 520) fillFeed(5);
    if (postCount > 15 && !feedStream.querySelector(".start-reading-card")) placeStartReading();
  }, { passive:true });

  document.addEventListener("lenspagechange", (event) => {
    const isFeedActive = event.detail.activeSection === feedExperience;
    feedExperience.classList.toggle("is-active", isFeedActive && !finalTriggered);
    recoverySection.classList.toggle("is-recovering", event.detail.activeSection === recoverySection);

    if (isFeedActive && !finalTriggered) {
      startFeedSystems();
    } else {
      stopFeedSystems();
    }
  });

  flashcards.forEach((card) => {
    card.addEventListener("click", () => handleFlashcard(card));
  });

  revealAcdpCards();
}

init();
