import {
  addComment,
  createPost,
  createTable,
  getPosts,
  getTables,
  resetDemoData,
  savePost,
  upvotePost
} from "./readit-data.js";

const state = {
  selectedTableId: null,
  activeFilter: "all",
  sortBy: "newest",
  tables: [],
  posts: [],
  activePostId: null
};

const postTypes = [
  "Ask for recommendations",
  "Start a discussion",
  "Emotional damage report",
  "Defend a character",
  "Share a quote",
  "Create a tiny book club",
  "Hot take"
];

const filters = [
  { id: "all", label: "All tables" },
  { id: "recommendations", label: "Recommendations" },
  { id: "discussions", label: "Discussions" },
  { id: "emotional", label: "Emotional damage" },
  { id: "hot", label: "Hot takes" },
  { id: "spoilers", label: "Spoilers" },
  { id: "bookclubs", label: "Book clubs" }
];

const placeholders = {
  "Ask for recommendations": {
    title: "I need a book that feels like...",
    body: "Tell us the mood, trope, genre, or oddly specific feeling you want."
  },
  "Emotional damage report": {
    title: "I finished [book] and I am not okay",
    body: "What happened? Do you need comfort, chaos, or both?"
  },
  "Defend a character": {
    title: "In defense of...",
    body: "State the accusation. Then defend your problematic fictional client."
  },
  "Share a quote": {
    title: "A line that hit too hard",
    body: "Share the quote and why it stayed with you."
  },
  "Create a tiny book club": {
    title: "Tiny book club for [book title]",
    body: "What are you reading, what pace, and what kind of discussion do you want?"
  },
  "Hot take": {
    title: "My hot take is...",
    body: "Say the thing your book club would debate for twenty minutes."
  },
  "Start a discussion": {
    title: "Can we talk about...",
    body: "Start the conversation. The library is listening."
  }
};

const els = {
  tableGrid: document.querySelector("[data-table-grid]"),
  postFeed: document.querySelector("[data-post-feed]"),
  filterChips: document.querySelector("[data-filter-chips]"),
  sortSelect: document.querySelector("[data-sort-select]"),
  teaCard: document.querySelector("[data-tea-card]"),
  selectedTable: document.querySelector("[data-selected-table]"),
  chairBanner: document.querySelector("[data-chair-banner]"),
  onlineCount: document.querySelector("[data-online-count]"),
  toast: document.querySelector("[data-toast]"),
  threadModal: document.querySelector("[data-thread-modal]"),
  threadDetail: document.querySelector("[data-thread-detail]"),
  createThreadModal: document.querySelector("[data-create-thread-modal]"),
  createTableModal: document.querySelector("[data-create-table-modal]"),
  createThreadForm: document.querySelector("[data-create-thread-form]"),
  createTableForm: document.querySelector("[data-create-table-form]"),
  threadTableSelect: document.querySelector("[data-thread-table-select]"),
  postTypeSelect: document.querySelector("[data-post-type-select]"),
  threadTitle: document.querySelector("[data-thread-title]"),
  threadBody: document.querySelector("[data-thread-body]")
};

function refreshData() {
  state.tables = getTables();
  state.posts = getPosts();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseTags(value) {
  return value.split(",").map((tag) => tag.trim()).filter(Boolean);
}

function formatTime(isoDate) {
  const delta = Date.now() - new Date(isoDate).getTime();
  const minutes = Math.max(1, Math.floor(delta / 60000));
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function matchesFilter(post) {
  const haystack = `${post.type} ${post.tags.join(" ")} ${post.title}`.toLowerCase();
  if (state.activeFilter === "all") return true;
  if (state.activeFilter === "recommendations") return haystack.includes("recommendation") || haystack.includes("book search");
  if (state.activeFilter === "discussions") return haystack.includes("discussion") || haystack.includes("theory") || haystack.includes("analysis");
  if (state.activeFilter === "emotional") return haystack.includes("emotional") || haystack.includes("unwell") || haystack.includes("comfort");
  if (state.activeFilter === "hot") return haystack.includes("hot take");
  if (state.activeFilter === "spoilers") return post.spoiler || haystack.includes("spoiler");
  if (state.activeFilter === "bookclubs") return haystack.includes("book club");
  return true;
}

function visiblePosts() {
  let posts = [...state.posts];
  if (state.selectedTableId) {
    posts = posts.filter((post) => post.tableId === state.selectedTableId);
  }
  posts = posts.filter(matchesFilter);

  if (state.sortBy === "tea") {
    posts.sort((a, b) => b.teaCount - a.teaCount);
  } else if (state.sortBy === "replies") {
    posts.sort((a, b) => b.comments.length - a.comments.length);
  } else {
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return posts;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function renderTables() {
  els.tableGrid.innerHTML = state.tables.map((table) => {
    const selected = table.id === state.selectedTableId;
    return `
      <article class="table-card ${selected ? "selected" : ""}" data-table-id="${table.id}">
        <div class="table-card-top">
          <span class="table-icon" aria-hidden="true">${escapeHtml(table.icon)}</span>
          <span class="online-dot">${table.readersOnline} readers online</span>
        </div>
        <h3>${escapeHtml(table.name)}</h3>
        <p>${escapeHtml(table.description)}</p>
        <div class="tag-row">${table.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <p class="latest-thread"><b>Latest thread:</b> ${escapeHtml(table.latestThread)}</p>
        <button type="button" class="chair-button" data-select-table="${table.id}">Pull up a chair</button>
      </article>
    `;
  }).join("");
}

function renderSelectedTable() {
  const table = state.tables.find((item) => item.id === state.selectedTableId);
  if (!table) {
    els.selectedTable.innerHTML = `
      <p class="tiny-label">current chair</p>
      <h3>All tables</h3>
      <p>Browse the whole library, from theories to emotional damage reports.</p>
    `;
    els.chairBanner.hidden = true;
    return;
  }

  els.selectedTable.innerHTML = `
    <p class="tiny-label">current chair</p>
    <h3>${escapeHtml(table.name)}</h3>
    <p>${escapeHtml(table.vibe || table.description)}</p>
    <button type="button" class="clear-table" data-clear-table>Return to all tables</button>
  `;
  els.chairBanner.textContent = `You pulled up a chair at ${table.name}.`;
  els.chairBanner.hidden = false;
}

function renderFilters() {
  els.filterChips.innerHTML = filters.map((filter) => `
    <button type="button" class="${filter.id === state.activeFilter ? "active" : ""}" data-filter="${filter.id}">
      ${filter.label}
    </button>
  `).join("");
}

function renderTeaCard() {
  const topPost = [...state.posts].sort((a, b) => b.teaCount - a.teaCount)[0];
  if (!topPost) return;

  els.teaCard.innerHTML = `
    <p class="tiny-label">Tea of the Day</p>
    <h3>${escapeHtml(topPost.title)}</h3>
    <blockquote>${escapeHtml(topPost.body)}</blockquote>
    <div class="post-meta-row">
      <span>🍵 ${topPost.teaCount}</span>
      <span>💬 ${topPost.comments.length}</span>
      <button type="button" data-open-post="${topPost.id}">Open thread</button>
    </div>
  `;
}

function renderPosts() {
  const posts = visiblePosts();
  if (!posts.length) {
    els.postFeed.innerHTML = `
      <div class="empty-state">
        <h3>This table is quiet.</h3>
        <p>Start the first thread. Someone else is probably waiting for it.</p>
        <button class="primary-action compact" type="button" data-open-thread>Start a thread</button>
      </div>
    `;
    return;
  }

  els.postFeed.innerHTML = posts.map((post) => `
    <article class="post-card" tabindex="0" data-post-card="${post.id}">
      <div class="post-pins" aria-hidden="true"></div>
      <div class="post-kickers">
        <span>${escapeHtml(post.tableName)}</span>
        <span>${escapeHtml(post.type)}</span>
        ${post.spoiler ? '<strong class="spoiler-label">Spoilers inside</strong>' : ""}
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(post.body)}</p>
      <div class="tag-row">${post.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <p class="byline">posted by ${escapeHtml(post.username)} · ${formatTime(post.createdAt)}</p>
      <div class="post-actions">
        <button type="button" data-tea="${post.id}">🍵 ${post.teaCount}</button>
        <button type="button" data-open-post="${post.id}">💬 ${post.comments.length} replies</button>
        <button type="button" class="${post.saved ? "saved" : ""}" data-save="${post.id}">🔖 ${post.saved ? "saved" : "save"}</button>
        <button type="button" data-open-post="${post.id}">Open thread</button>
      </div>
    </article>
  `).join("");
}

function renderFormOptions() {
  els.threadTableSelect.innerHTML = state.tables.map((table) => (
    `<option value="${table.id}">${escapeHtml(table.name)}</option>`
  )).join("");

  els.postTypeSelect.innerHTML = postTypes.map((type) => (
    `<option value="${type}">${escapeHtml(type)}</option>`
  )).join("");

  if (state.selectedTableId) {
    els.threadTableSelect.value = state.selectedTableId;
  }
  updatePlaceholders();
}

function renderOnlineCount() {
  els.onlineCount.textContent = state.tables.reduce((sum, table) => sum + table.readersOnline, 0).toLocaleString();
}

function renderAll() {
  refreshData();
  renderTables();
  renderSelectedTable();
  renderFilters();
  renderTeaCard();
  renderPosts();
  renderFormOptions();
  renderOnlineCount();
}

function updatePlaceholders() {
  const copy = placeholders[els.postTypeSelect.value] || placeholders["Start a discussion"];
  els.threadTitle.placeholder = copy.title;
  els.threadBody.placeholder = copy.body;
}

function openModal(modal) {
  modal.showModal();
  const firstInput = modal.querySelector("input, select, textarea, button");
  if (firstInput) firstInput.focus();
}

function closeModals() {
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
}

function openThread(postId) {
  state.activePostId = postId;
  const post = state.posts.find((item) => item.id === postId);
  if (!post) return;

  els.threadDetail.innerHTML = `
    <div class="thread-detail">
      <p class="tiny-label">${escapeHtml(post.tableName)} / ${escapeHtml(post.type)}</p>
      <h2 id="thread-modal-title">${escapeHtml(post.title)}</h2>
      ${post.spoiler ? '<strong class="spoiler-label">Spoilers inside</strong>' : ""}
      <p>${escapeHtml(post.body)}</p>
      <div class="tag-row">${post.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <p class="byline">posted by ${escapeHtml(post.username)} · ${formatTime(post.createdAt)}</p>
      <div class="post-actions modal-actions">
        <button type="button" data-tea="${post.id}">🍵 ${post.teaCount}</button>
        <button type="button" data-save="${post.id}">🔖 ${post.saved ? "saved" : "save"}</button>
      </div>
      <section class="comments" aria-label="Comments">
        <h3>${post.comments.length} replies</h3>
        <div class="comment-list">
          ${post.comments.map((comment) => `
            <article class="comment-card">
              <b>${escapeHtml(comment.username)}</b>
              <p>${escapeHtml(comment.body)}</p>
              <span>${formatTime(comment.createdAt)}</span>
            </article>
          `).join("") || "<p class=\"quiet-comment\">No replies yet. The chair beside you is open.</p>"}
        </div>
        <form class="comment-form" data-comment-form>
          <label for="comment-body">Add a reply</label>
          <textarea id="comment-body" name="body" rows="3" required placeholder="Offer comfort, chaos, or a suspiciously specific recommendation."></textarea>
          <button class="primary-action compact" type="submit">Add comment</button>
        </form>
      </section>
    </div>
  `;
  if (!els.threadModal.open) {
    openModal(els.threadModal);
  }
}

function handleTableClick(event) {
  const button = event.target.closest("[data-select-table]");
  if (!button) return;
  state.selectedTableId = button.dataset.selectTable;
  const table = state.tables.find((item) => item.id === state.selectedTableId);
  renderAll();
  document.querySelector("#threads").scrollIntoView({ behavior: "smooth" });
  showToast(`You pulled up a chair at ${table.name}.`);
}

function handleFeedClick(event) {
  const openButton = event.target.closest("[data-open-post]");
  const teaButton = event.target.closest("[data-tea]");
  const saveButton = event.target.closest("[data-save]");
  const filterButton = event.target.closest("[data-filter]");
  const clearButton = event.target.closest("[data-clear-table]");

  if (openButton) {
    openThread(openButton.dataset.openPost);
  } else if (teaButton) {
    upvotePost(teaButton.dataset.tea);
    renderAll();
    if (els.threadModal.open) openThread(teaButton.dataset.tea);
    showToast("Tea spilled.");
  } else if (saveButton) {
    savePost(saveButton.dataset.save);
    renderAll();
    if (els.threadModal.open) openThread(saveButton.dataset.save);
    showToast("Saved to your shelf.");
  } else if (filterButton) {
    state.activeFilter = filterButton.dataset.filter;
    renderAll();
  } else if (clearButton) {
    state.selectedTableId = null;
    renderAll();
  }
}

function handleKeyboardOpen(event) {
  const card = event.target.closest("[data-post-card]");
  if (!card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openThread(card.dataset.postCard);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-open-thread]")) openModal(els.createThreadModal);
    if (event.target.matches("[data-open-table]")) openModal(els.createTableModal);
    if (event.target.matches("[data-close-modal]")) closeModals();
  });

  document.querySelectorAll(".readit-modal").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModals();
  });

  els.tableGrid.addEventListener("click", handleTableClick);
  document.addEventListener("click", handleFeedClick);
  document.addEventListener("keydown", handleKeyboardOpen);
  els.sortSelect.addEventListener("change", () => {
    state.sortBy = els.sortSelect.value;
    renderAll();
  });
  els.postTypeSelect.addEventListener("change", updatePlaceholders);

  els.createThreadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(els.createThreadForm);
    createPost({
      tableId: form.get("tableId"),
      type: form.get("type"),
      title: form.get("title").trim(),
      body: form.get("body").trim(),
      tags: parseTags(form.get("tags") || ""),
      spoiler: form.get("spoiler") === "on"
    });
    els.createThreadForm.reset();
    closeModals();
    renderAll();
    showToast("Your thread is live. Someone else just found a place to land.");
  });

  els.createTableForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(els.createTableForm);
    const table = createTable({
      name: form.get("name").trim(),
      description: form.get("description").trim(),
      vibe: form.get("vibe").trim(),
      rules: form.get("rules").trim(),
      tags: parseTags(form.get("tags") || ""),
      icon: (form.get("icon") || "").trim()
    });
    state.selectedTableId = table.id;
    els.createTableForm.reset();
    closeModals();
    renderAll();
    showToast("Your table is open. Pull up a chair.");
  });

  els.threadDetail.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-comment-form]");
    if (!form) return;
    event.preventDefault();
    const body = new FormData(form).get("body").trim();
    if (!body) return;
    addComment(state.activePostId, { body });
    refreshData();
    openThread(state.activePostId);
  });

  document.querySelector("[data-reset-demo]").addEventListener("click", () => {
    if (!window.confirm("Reset READIT demo data? This clears created tables, posts, comments, tea counts, and saves.")) return;
    resetDemoData();
    state.selectedTableId = null;
    state.activeFilter = "all";
    state.sortBy = "newest";
    els.sortSelect.value = "newest";
    renderAll();
    showToast("Demo data reset.");
  });
}

bindEvents();
renderAll();
