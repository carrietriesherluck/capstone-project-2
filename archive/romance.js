const sweetLettersContainer = document.querySelector("[data-sweet-letters]");
const darkLettersContainer = document.querySelector("[data-dark-letters]");
const dialog = document.querySelector("[data-romance-dialog]");
const closeButton = document.querySelector("[data-close-romance]");
const openedLetter = document.querySelector("[data-opened-letter]");
const meetCute = document.querySelector("[data-meet-cute]");
const generateMeet = document.querySelector("[data-generate-meet]");
const tableScene = document.querySelector("[data-table-scene]");
const tableOutput = document.querySelector("[data-table-output]");
const stickyWall = document.querySelector("[data-sticky-wall]");
const stickyOutput = document.querySelector("[data-sticky-output]");
const romanceAiGuide = document.querySelector("[data-romance-ai-guide]");
const romanceAiToggle = document.querySelector("[data-romance-ai-toggle]");
const romanceAiClose = document.querySelector("[data-romance-ai-close]");
const romanceAiPanel = document.querySelector("#romance-ai-panel");
const simpProfile = document.querySelector("[data-simp-profile]");
const profilePass = document.querySelector("[data-profile-pass]");
const profileMatch = document.querySelector("[data-profile-match]");
const profileResponse = document.querySelector("[data-profile-response]");

const letters = [
  letter("enemies-to-lovers", "sweet", "To: the one who calls it arguing", "the one who calls it arguing", "Enemies to Lovers", "For readers who know the difference between hatred and very aggressive chemistry.", "Cupid has reviewed the evidence. You are not looking for peace. You are looking for banter, tension, and two people who swear they cannot stand each other.", [
    match("Better Than the Movies", "Lynn Painter", "YA Romance", "Enemies to Lovers / Rom-Com", "A romance-loving girl tries to create her perfect love story while clashing with the boy next door.", "Perfect if you like teen rom-com energy, banter, and characters who slowly realize they have always mattered to each other.", 4, 1, "Happy ending", "School-appropriate romantic tension.", "betterthanthemovies.jpg"),
    match("Today Tonight Tomorrow", "Rachel Lynn Solomon", "YA Romance", "Academic Rivals / One Day Romance", "Two longtime rivals spend one last day competing across Seattle before graduation.", "For readers who like smart competition, vulnerability, and banter that turns honest.", 4, 1, "Hopeful happy ending", "School-appropriate romantic tension.", "todaytonighttomorrow.jpg"),
    match("The Hating Game", "Sally Thorne", "Adult Romance", "Workplace Rivals", "Two office rivals compete for the same promotion while pretending the tension is only professional.", "For readers who want sharp banter, forced proximity, and enemies who are terrible at staying enemies.", 4, 3, "Happy ending", "Mature but not graphically described here.", "")
  ]),
  letter("fake-dating", "sweet", "To: the fake-dating expert", "the one with a fake contract", "Fake Dating", "It was supposed to be fake. Unfortunately, the feelings did not read the contract.", "Cupid has checked the paperwork. The agreement is fake, the longing is not, and the witnesses are already suspicious.", [
    match("To All the Boys I've Loved Before", "Jenny Han", "YA Romance", "Fake Dating / First Love", "A private love letter accidentally becomes the start of a very public fake relationship.", "For readers who want sweet chaos, family warmth, and feelings that sneak up softly.", 4, 1, "Happy ending", "School-appropriate romance.", ""),
    match("The Love Hypothesis", "Ali Hazelwood", "Adult Romance", "Fake Dating / Academic Romance", "A fake relationship in academia becomes exactly what neither person can rationalize away.", "For readers who like STEM stress, awkward charm, and feelings disguised as practicality.", 4, 3, "Happy ending", "Mature but not graphically described here.", "thelovehypothesis.jpg"),
    match("The Cheat Sheet", "Sarah Adams", "Adult Romance", "Fake Dating / Sports Romance", "Best friends fake a relationship in public while privately denying the obvious.", "For readers who want low-angst sweetness, friendship, and very visible feelings.", 4, 2, "Warm happy ending", "Mild intimacy.", "thecheatsheet.jpg")
  ]),
  letter("academic-rivals", "sweet", "To: the academic rival", "the one competing for first place", "Academic Rivals", "For readers who believe academic competition is flirting with citations.", "Cupid has reviewed your transcript. You claim you want the highest score. Suspiciously, you keep noticing the person right beside you.", [
    match("Today Tonight Tomorrow", "Rachel Lynn Solomon", "YA Romance", "Academic Rivals", "Two rivals turn their final school tradition into one last chance to understand each other.", "Perfect for readers who want clever competition with emotional payoff.", 4, 1, "Hopeful happy ending", "School-appropriate romance.", "todaytonighttomorrow.jpg"),
    match("Check & Mate", "Ali Hazelwood", "YA Romance", "Chess Rivals", "A reluctant chess player faces a talented rival and a life she tried to avoid.", "For readers who like strategy, ambition, and feelings hiding behind focus.", 4, 1, "Happy ending", "School-appropriate romantic tension.", "check&mate.jpg"),
    match("The Love Hypothesis", "Ali Hazelwood", "Adult Romance", "Academic Romance", "A fake-dating experiment collides with lab politics and very inconvenient feelings.", "For readers who want academic pressure, nerdy charm, and an emotionally careful love interest.", 4, 3, "Happy ending", "Mature but not graphically described here.", "thelovehypothesis.jpg")
  ]),
  letter("sports-romance", "sweet", "To: the one playing it cool", "the one pretending it is just a game", "Sports Romance", "Game face on. Feelings obvious.", "Cupid saw the scoreboard. Nobody is fooled. The competition is real, but the feelings are louder.", [
    match("Catching Jordan", "Miranda Kenneally", "YA Romance", "Football Romance", "A high school quarterback balances ambition, team pressure, and unexpected feelings.", "For readers who like sports stakes, identity, and romance that grows through respect.", 4, 1, "Hopeful ending", "School-appropriate romance.", "catchingjordan.jpg"),
    match("She Drives Me Crazy", "Kelly Quindlen", "YA Romance", "Basketball / Fake Dating", "A basketball player and cheerleader fake a relationship after a very public breakup.", "For readers who want rivalry, humor, and a romance with school spirit.", 4, 1, "Happy ending", "School-appropriate romance.", "shedrivesmecrazy.avif"),
    match("The Cheat Sheet", "Sarah Adams", "Adult Romance", "Sports / Friends to Lovers", "A dancer and NFL player become publicly linked while privately trying not to ruin their friendship.", "For readers who want sweetness, fame pressure, and obvious feelings.", 4, 2, "Warm happy ending", "Mild intimacy.", "thecheatsheet.jpg")
  ]),
  letter("friends-to-lovers", "sweet", "To: the obvious best friend", "the one everyone else saw coming", "Friends to Lovers", "For readers who enjoy watching two people miss every sign except the obvious one.", "Cupid has enclosed a pair of glasses. Everyone else saw this coming three chapters ago.", [
    match("People We Meet on Vacation", "Emily Henry", "Adult Romance", "Friends to Lovers / Second Chance", "Two best friends who stopped speaking take one last trip to understand what happened.", "For readers who like inside jokes, years of history, and friends who almost missed each other.", 4, 3, "Hopeful and tender", "Mature but not graphically described here.", "peoplewemeetonvacation.jpg"),
    match("Better Than the Movies", "Lynn Painter", "YA Romance", "Neighbor Romance", "A teen tries to stage a perfect rom-com and misses what has been there all along.", "For readers who want movie references, bright banter, and emotional payoff.", 4, 1, "Warm romcom glow", "School-appropriate romantic tension.", "betterthanthemovies.jpg"),
    match("Lovelight Farms", "B.K. Borison", "Adult Romance", "Friends to Lovers / Cozy Romance", "A Christmas tree farm owner asks her best friend to fake-date her for a contest.", "For readers who want cozy community, soft humor, and friends who feel like home.", 4, 2, "Soft happy ending", "Mild intimacy.", "lovelightfarms.jpg")
  ]),
  letter("cozy-romance", "sweet", "To: the warm-lighting romantic", "the one who wants warm lighting", "Cozy Romance", "Soft lighting, emotional safety, and suspiciously perfect small towns.", "Cupid turned on the lamps for this one. Expect comfort, community, and feelings served warm.", [
    match("Lovelight Farms", "B.K. Borison", "Adult Romance", "Small Town / Cozy Romance", "A struggling Christmas tree farm becomes the setting for fake dating and soft honesty.", "For readers who want found community, warmth, and low-angst affection.", 4, 2, "Soft happy ending", "Mild intimacy.", "lovelightfarms.jpg"),
    match("Tweet Cute", "Emma Lord", "YA Romance", "Rivals / Foodie Romance", "Two teens trade jokes and rivalry online while their family businesses clash.", "For readers who want sweetness, humor, and modern rom-com energy.", 4, 1, "Happy ending", "School-appropriate romance.", ""),
    match("The Cheat Sheet", "Sarah Adams", "Adult Romance", "Friends to Lovers", "A public fake romance exposes feelings two best friends have tried to ignore.", "For readers who like tender friendship and gentle emotional payoff.", 4, 2, "Warm happy ending", "Mild intimacy.", "thecheatsheet.jpg")
  ]),
  letter("morally-grey", "dark", "To: the red-flag apologist", "the one ignoring the red flags", "Morally Grey Love Interest", "He is probably a bad idea. Unfortunately, the plot agrees.", "Cupid recommends caution. You will ignore this advice.", [
    match("The Cruel Prince", "Holly Black", "YA Fantasy Romance", "Morally Grey / Faerie Court", "A mortal girl navigates a dangerous faerie court full of power, betrayal, and impossible attraction.", "For readers who like sharp tension, ambition, and dangerous political games.", 5, 1, "Complicated but satisfying", "Fantasy violence, manipulation, betrayal, mature emotional themes.", "thecruelprince.jpg"),
    match("Once Upon a Broken Heart", "Stephanie Garber", "YA Fantasy Romance", "Bargain / Trickster Romance", "A girl makes a dangerous bargain with a charming immortal who never gives anything for free.", "For readers who want fairytale glitter, heartbreak, and beautiful bad ideas.", 4, 1, "Bittersweet cliffhanger energy", "Fantasy danger, manipulation, heartbreak.", "onceuponabrokenheart.jpg"),
    match("Shatter Me", "Tahereh Mafi", "YA Dystopian Romance", "Dangerous Attraction", "A girl with lethal power becomes central to a political and emotional conflict.", "For readers who want intense feelings, powers, and complicated loyalties.", 4, 1, "Series arc romance", "Dystopian violence, emotional intensity.", "shatterme.jpg")
  ], "Content notes: fantasy violence, manipulation, betrayal, mature emotional themes. School-appropriate but reader discretion suggested."),
  letter("dangerous-courtship", "dark", "To: the dangerous court guest", "the one invited to the dangerous court", "Dangerous Courtship", "Love, betrayal, and people making terrible choices in beautiful outfits.", "Cupid sealed this with extra wax. Court manners are polite. Court motives are not.", [
    match("The Wrath and the Dawn", "Renee Ahdieh", "YA Fantasy Romance", "Royal Court / Retelling", "A girl enters a deadly palace determined to survive, uncover secrets, and challenge a feared ruler.", "For readers who want lush atmosphere, danger, and a romance built on hidden truths.", 4, 1, "Romantic and dramatic", "Fantasy violence, grief, political danger.", "thewrath&dawn.jpg"),
    match("These Violent Delights", "Chloe Gong", "YA Historical Fantasy", "Rival Heirs / Forbidden Romance", "Two rival heirs in 1920s Shanghai confront monsters, politics, and unfinished feelings.", "For readers who like danger, history, and love tangled with loyalty.", 4, 1, "Dramatic series arc", "Violence, illness, betrayal, mature emotional themes.", "theseviolentdelights.jpg"),
    match("The Shadows Between Us", "Tricia Levenseller", "YA Fantasy Romance", "Ambition / Royal Romance", "A ruthless heroine plans to marry and kill a shadowy king, but courtship complicates everything.", "For readers who enjoy ambition, plotting, and glamorously bad decisions.", 4, 1, "Darkly playful ending", "Murder plots, manipulation, fantasy violence.", "theshadowsbetweenus.jpg")
  ], "Content notes: fantasy violence, betrayal, manipulation, mature emotional themes. School-appropriate but reader discretion suggested."),
  letter("gothic-romance", "dark", "To: the gothic romantic", "the one who heard the house whisper", "Gothic Romance", "The house has secrets. So does the love interest.", "Cupid found this letter under the floorboards. Read it near a lamp.", [
    match("House of Salt and Sorrows", "Erin A. Craig", "YA Gothic Fantasy", "Gothic Mystery / Romance", "A girl investigates tragedy in a seaside manor where grief and suspicion haunt every room.", "For readers who want atmosphere, mystery, and romance wrapped in dread.", 4, 1, "Haunting and hopeful", "Death, grief, gothic suspense.", "houseofsaltandsorrows.jpg"),
    match("Belladonna", "Adalyn Grace", "YA Gothic Fantasy Romance", "Death / Gothic Romance", "A girl who cannot die becomes entangled with Death while investigating a poisonous mystery.", "For readers who like eerie estates, secrets, and romantic danger.", 4, 1, "Gothic series arc", "Death, poisoning, murder mystery, mature emotional themes.", "belladonna.jpg"),
    match("Crimson Peak: The Official Movie Novelization", "Nancy Holder", "Gothic Romance", "Haunted House / Dangerous Marriage", "A young woman enters a beautiful, decaying house where love and danger blur.", "For readers who want haunted atmosphere, secrets, and candlelit suspense.", 4, 1, "Tragic gothic ending", "Gothic violence, ghosts, betrayal.", "crimsonpeak.jpg")
  ], "Content notes: gothic suspense, death, betrayal, fantasy or supernatural danger. School-appropriate but reader discretion suggested.")
];

const meetCutes = [
  "You both reach for the same book in a bookstore.",
  "Your train is delayed and you are stuck together for three hours.",
  "You accidentally text the wrong number and they answer too well.",
  "You become academic rivals in the same class.",
  "You both pretend not to recognize the same love song playing in the cafe.",
  "The barista swaps your coffees and neither of you corrects it fast enough."
];

const stickyNotes = [
  ['"I can fix him."', "Morally Grey Love Interest"],
  ['"They hate each other."', "Enemies to Lovers"],
  ['"They are definitely getting married."', "Friends to Lovers"],
  ['"This is just unresolved tension."', "Academic Rivals"],
  ['"It was supposed to be fake."', "Fake Dating"],
  ['"They never got over each other."', "Second Chance"]
];

function imagePath(fileName){
  return `../Images/${encodeURIComponent(fileName).replaceAll("'", "%27")}`;
}

function letter(id, section, envelopeText, readerType, trope, vibe, openingLine, books, notes = ""){
  return { id, section, envelopeText, readerType, trope, vibe, openingLine, books, notes };
}

function match(title, author, category, trope, description, why, stars, spice, ending, notes, cover){
  return { title, author, category, trope, description, why, stars, spice, ending, notes, cover };
}

function escapeHtml(value){
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStickyWall(){
  stickyWall.innerHTML = stickyNotes.map(([quote, trope], index) => `
    <button class="sticky-note" type="button" data-trope="${trope}" style="--tilt:${[-3, 2, -1, 3, -2, 1][index]}deg">${quote}</button>
  `).join("");
}

function renderLetters(){
  const sweetLetters = letters.filter((item) => item.section === "sweet");
  const darkLetters = letters.filter((item) => item.section === "dark");
  sweetLettersContainer.innerHTML = sweetLetters.map(renderEnvelope).join("");
  darkLettersContainer.innerHTML = darkLetters.map(renderEnvelope).join("");
}

function renderEnvelope(item, index){
  const stampIcons = {
    "enemies-to-lovers": "↯",
    "fake-dating": "✍",
    "academic-rivals": "✎",
    "sports-romance": "#7",
    "friends-to-lovers": "♡♡",
    "cozy-romance": "☕",
    "morally-grey": "⚑",
    "dangerous-courtship": "♛",
    "gothic-romance": "🗝"
  };
  const tilt = item.section === "dark"
    ? ["-3deg", "2deg", "-1deg"][index % 3]
    : ["-4deg", "2deg", "-1.5deg", "3deg", "-2deg", "1.5deg"][index % 6];
  return `
    <button
      class="cupid-envelope ${item.section === "dark" ? "dark-envelope" : ""}"
      type="button"
      data-letter-id="${item.id}"
      aria-label="Open letter for ${escapeHtml(item.trope)}"
      style="--tilt:${tilt}"
    >
      <span class="postage-stamp" data-stamp="${escapeHtml(stampIcons[item.id] || "♥")}" aria-hidden="true"></span>
      <span class="wax-seal" aria-hidden="true"></span>
      <span class="envelope-address">${escapeHtml(item.envelopeText)}</span>
      <span class="trope-tooltip">${escapeHtml(item.trope)}</span>
    </button>
  `;
}

function pepperRating(count){
  return "🌶️".repeat(Math.max(1, Math.min(3, count)));
}

function starRating(count){
  return "★".repeat(Math.max(1, Math.min(5, count)));
}

function renderBookCard(book, index, section){
  const coverMarkup = book.cover
    ? `<img src="${imagePath(book.cover)}" alt="${escapeHtml(book.title)} cover">`
    : `<span class="cover-fallback">${escapeHtml(book.title)}</span>`;
  return `
    <article class="letter-book-card ${section === "dark" ? "dark-book-card" : ""}" style="--card-tilt:${[-1.5, 1, -0.5][index % 3]}deg">
      <figure>
        ${coverMarkup}
        <figcaption>${escapeHtml(book.category)}</figcaption>
      </figure>
      <div>
        <h4>${escapeHtml(book.title)}</h4>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <dl>
          <div><dt>Trope</dt><dd>${escapeHtml(book.trope)}</dd></div>
          <div><dt>Description</dt><dd>${escapeHtml(book.description)}</dd></div>
          <div><dt>Why you might fall for it</dt><dd>${escapeHtml(book.why)}</dd></div>
          <div><dt>Star Rating</dt><dd>${starRating(book.stars)}</dd></div>
          <div><dt>Spicy Rating</dt><dd>${pepperRating(book.spice)}</dd></div>
          <div><dt>Ending Mood</dt><dd>${escapeHtml(book.ending)}</dd></div>
          <div><dt>Content Notes</dt><dd>${escapeHtml(book.notes)}</dd></div>
        </dl>
      </div>
    </article>
  `;
}

function openLetter(letterId){
  const item = letters.find((letterItem) => letterItem.id === letterId);
  if (!item) return;

  openedLetter.className = `opened-letter ${item.section === "dark" ? "dark-opened-letter" : ""}`;
  openedLetter.innerHTML = `
    <div class="letter-fold-mark" aria-hidden="true"></div>
    <p class="modal-kicker">${item.section === "dark" ? "restricted valentine file" : "cupid's valentine letter"}</p>
    <h2 id="romance-title">Dear ${escapeHtml(item.readerType)},</h2>
    <p class="letter-opening">${escapeHtml(item.openingLine)}</p>
    <div class="letter-meta">
      <div><span>Trope</span><b>${escapeHtml(item.trope)}</b></div>
      <div><span>Vibe</span><b>${escapeHtml(item.vibe)}</b></div>
    </div>
    ${item.notes ? `<p class="letter-content-notes">${escapeHtml(item.notes)}</p>` : ""}
    <h3>Cupid's Matches</h3>
    <div class="letter-book-grid">
      ${item.books.map((bookItem, index) => renderBookCard(bookItem, index, item.section)).join("")}
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(){
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

renderLetters();
renderStickyWall();

document.addEventListener("click", (event) => {
  const letterButton = event.target.closest("[data-letter-id]");
  if (letterButton) openLetter(letterButton.dataset.letterId);
});

generateMeet.addEventListener("click", () => {
  const next = meetCutes[Math.floor(Math.random() * meetCutes.length)];
  meetCute.textContent = next;
  meetCute.animate([{ opacity:0, transform:"translateY(8px)" }, { opacity:1, transform:"translateY(0)" }], { duration:280, easing:"ease-out" });
});

tableScene.addEventListener("click", (event) => {
  const object = event.target.closest("[data-table-note]");
  if (!object) return;
  tableOutput.textContent = object.dataset.tableNote;
});

stickyWall.addEventListener("click", (event) => {
  const note = event.target.closest("[data-trope]");
  if (!note) return;
  stickyOutput.textContent = note.dataset.trope;
});

closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) closeDialog();
  if (event.key === "Escape" && romanceAiGuide?.classList.contains("is-open")) {
    setRomanceAiGuide(false);
  }
});

function setRomanceAiGuide(open){
  if (!romanceAiGuide) return;
  romanceAiGuide.classList.toggle("is-open", open);
  romanceAiToggle?.setAttribute("aria-expanded", String(open));
  romanceAiPanel?.setAttribute("aria-hidden", String(!open));
}

romanceAiToggle?.addEventListener("click", () => setRomanceAiGuide(true));
romanceAiClose?.addEventListener("click", () => setRomanceAiGuide(false));

profilePass?.addEventListener("click", () => {
  profileResponse.textContent = "Pass registered. Cupid is dramatically taking notes.";
  simpProfile?.classList.remove("is-passing");
  void simpProfile?.offsetWidth;
  simpProfile?.classList.add("is-passing");
});

profileMatch?.addEventListener("click", () => {
  profileResponse.textContent = "It's a match. Taking you to READIT.";
  profileMatch.disabled = true;
  window.setTimeout(() => {
    window.location.href = "../readit/";
  }, 700);
});
