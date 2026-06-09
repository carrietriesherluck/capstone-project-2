const STORAGE_KEY = "readit-demo-state-v1";

export const defaultTables = [
  {
    id: "romance-table",
    name: "Romance Table",
    description: "For yearning, banter, fictional crushes, and people who know the red flags but kept reading anyway.",
    tags: ["romance", "tropes", "fictional crushes", "yearning"],
    readersOnline: 128,
    latestThread: "Enemies to lovers only works when both of them are insane about each other.",
    icon: "♥"
  },
  {
    id: "fantasy-escapists",
    name: "Fantasy Escapists",
    description: "For readers who would absolutely leave real life for a kingdom with dragons, curses, and political betrayal.",
    tags: ["fantasy", "worldbuilding", "magic", "morally grey"],
    readersOnline: 96,
    latestThread: "Which fictional kingdom would actually survive one week of real politics?",
    icon: "✦"
  },
  {
    id: "literary-overthinkers",
    name: "Literary Overthinkers",
    description: "For books that alter your brain chemistry and make you stare at a wall after finishing.",
    tags: ["literary fiction", "quotes", "analysis", "feelings"],
    readersOnline: 84,
    latestThread: "What book made you feel understood in a way you could not explain?",
    icon: "¶"
  },
  {
    id: "mystery-theory-board",
    name: "Mystery Theory Board",
    description: "For clues, suspects, unreliable narrators, and people who say \"I knew it\" after absolutely not knowing it.",
    tags: ["mystery", "thriller", "theories", "plot twists"],
    readersOnline: 73,
    latestThread: "Drop your most unhinged theory before the final chapter.",
    icon: "?"
  },
  {
    id: "just-finished-and-unwell",
    name: "Just Finished and Unwell",
    description: "For readers who closed the book and immediately needed emotional support.",
    tags: ["reactions", "emotional damage", "comfort", "rant"],
    readersOnline: 141,
    latestThread: "I finished this book ten minutes ago and I am not acting normal.",
    icon: "!"
  },
  {
    id: "need-a-book-like-this",
    name: "Need a Book Like This",
    description: "For hyper-specific recommendation requests.",
    tags: ["recommendations", "mood", "tropes", "book search"],
    readersOnline: 118,
    latestThread: "I need a book that feels like rainy windows, academic pressure, and emotional repression.",
    icon: "→"
  },
  {
    id: "reading-slump-rescue",
    name: "Reading Slump Rescue",
    description: "For people who want to read but their attention span has left the building.",
    tags: ["reading slump", "motivation", "short books", "audiobooks"],
    readersOnline: 67,
    latestThread: "Give me a book that can resurrect my dead attention span.",
    icon: "↻"
  },
  {
    id: "character-defense-court",
    name: "Character Defense Court",
    description: "For defending, prosecuting, and overanalyzing fictional people who made questionable choices.",
    tags: ["characters", "debate", "hot takes", "defense"],
    readersOnline: 104,
    latestThread: "Your honor, my client was emotionally unavailable, not evil.",
    icon: "§"
  },
  {
    id: "spoiler-table",
    name: "Spoiler Table",
    description: "For full-spoiler discussions. Enter only when emotionally prepared.",
    tags: ["spoilers", "endings", "plot twists", "discussion"],
    readersOnline: 42,
    latestThread: "That ending was either genius or a crime. I cannot decide.",
    icon: "!"
  },
  {
    id: "quote-wall",
    name: "Quote Wall",
    description: "For lines that hit too hard and deserve to be dramatically displayed.",
    tags: ["quotes", "annotations", "favorite lines", "meaning"],
    readersOnline: 59,
    latestThread: "Drop a quote that permanently changed your personality.",
    icon: "\""
  }
];

export const defaultPosts = [
  {
    id: "post-1",
    tableId: "just-finished-and-unwell",
    type: "Emotional damage",
    title: "I finished The Cruel Prince and need to scream",
    body: "I understand the red flags. I have chosen blindness. Someone please tell me I am not the only one who enjoys morally grey chaos a little too much.",
    tags: ["fantasy", "morally grey", "romance", "no spoilers"],
    username: "shelf.gremlin",
    createdAt: "2026-06-05T10:00:00",
    teaCount: 47,
    saved: false,
    spoiler: false,
    comments: [
      { id: "comment-1", username: "paperback.meltdown", body: "You are among friends. Some characters are red flags with excellent dialogue.", createdAt: "2026-06-05T10:05:00" }
    ]
  },
  {
    id: "post-2",
    tableId: "need-a-book-like-this",
    type: "Recommendation request",
    title: "I need a book that feels like academic pressure and rainy windows",
    body: "Preferably something emotional, slightly pretentious, and likely to make me underline half the page.",
    tags: ["literary fiction", "school stress", "rainy vibes"],
    username: "annotated.chaos",
    createdAt: "2026-06-05T09:20:00",
    teaCount: 31,
    saved: false,
    spoiler: false,
    comments: []
  },
  {
    id: "post-3",
    tableId: "romance-table",
    type: "Hot take",
    title: "Enemies to lovers only works if the banter is actually good",
    body: "If they are just being mean to each other with no chemistry, that is not enemies to lovers. That is a group project gone wrong.",
    tags: ["romance", "enemies to lovers", "hot take"],
    username: "yearning.department",
    createdAt: "2026-06-05T08:45:00",
    teaCount: 64,
    saved: false,
    spoiler: false,
    comments: [
      { id: "comment-2", username: "trope.audit", body: "Exactly. Enemies to lovers needs tension, not just two people violating workplace conduct policies.", createdAt: "2026-06-05T08:54:00" },
      { id: "comment-3", username: "banter.required", body: "Banter is the whole engine. Without banter it is just arguing.", createdAt: "2026-06-05T09:03:00" }
    ]
  },
  {
    id: "post-4",
    tableId: "character-defense-court",
    type: "Character defense",
    title: "Your honor, my client was emotionally unavailable, not evil",
    body: "I am not saying he made good choices. I am saying the childhood trauma explains the terrible communication skills.",
    tags: ["characters", "debate", "morally grey"],
    username: "defense.attorney",
    createdAt: "2026-06-04T21:10:00",
    teaCount: 52,
    saved: false,
    spoiler: false,
    comments: []
  },
  {
    id: "post-5",
    tableId: "reading-slump-rescue",
    type: "Help request",
    title: "My attention span has fully left the building",
    body: "I want to read again but my brain keeps asking for a 12-second video instead. Please recommend something addictive but not intimidating.",
    tags: ["reading slump", "short books", "attention"],
    username: "chapter.zero",
    createdAt: "2026-06-04T18:25:00",
    teaCount: 39,
    saved: false,
    spoiler: false,
    comments: [
      { id: "comment-4", username: "short.chapter", body: "Try a short, fast-paced book first. Do not restart with a 700-page fantasy brick.", createdAt: "2026-06-04T18:41:00" },
      { id: "comment-5", username: "audio.allowed", body: "Audiobooks count. Your attention span deserves accommodations.", createdAt: "2026-06-04T19:02:00" }
    ]
  },
  {
    id: "post-6",
    tableId: "mystery-theory-board",
    type: "Theory",
    title: "The quiet character is always suspicious",
    body: "I have no evidence. Only vibes. Unfortunately, the vibes have solved several mysteries before.",
    tags: ["mystery", "theories", "suspicious behavior"],
    username: "plot.twister",
    createdAt: "2026-06-04T15:00:00",
    teaCount: 28,
    saved: false,
    spoiler: false,
    comments: []
  }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function initialState() {
  return {
    tables: clone(defaultTables),
    posts: clone(defaultPosts)
  };
}

function readState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const fresh = initialState();
    writeState(fresh);
    return fresh;
  }

  try {
    return JSON.parse(stored);
  } catch {
    const fresh = initialState();
    writeState(fresh);
    return fresh;
  }
}

function writeState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function tableNameFor(state, tableId) {
  return state.tables.find((table) => table.id === tableId)?.name || "READIT";
}

export function getTables() {
  return readState().tables;
}

export function createTable(tableData) {
  const state = readState();
  const idBase = slugify(tableData.name) || "reader-table";
  const table = {
    id: `${idBase}-${Date.now()}`,
    name: tableData.name,
    description: tableData.description,
    vibe: tableData.vibe,
    rules: tableData.rules,
    tags: tableData.tags,
    readersOnline: Math.floor(18 + Math.random() * 96),
    latestThread: "This table is open. Start the first thread.",
    icon: tableData.icon || "¤"
  };

  state.tables.unshift(table);
  writeState(state);
  return table;
}

export function getPosts() {
  const state = readState();
  return state.posts.map((post) => ({
    ...post,
    tableName: tableNameFor(state, post.tableId)
  }));
}

export function getPostsByTable(tableId) {
  return getPosts().filter((post) => post.tableId === tableId);
}

export function createPost(postData) {
  const state = readState();
  const post = {
    id: `post-${Date.now()}`,
    tableId: postData.tableId,
    type: postData.type,
    title: postData.title,
    body: postData.body,
    tags: postData.tags,
    username: "guest.reader",
    createdAt: new Date().toISOString(),
    teaCount: 0,
    saved: false,
    spoiler: postData.spoiler,
    comments: []
  };

  state.posts.unshift(post);
  const table = state.tables.find((item) => item.id === post.tableId);
  if (table) {
    table.latestThread = post.title;
  }
  writeState(state);
  return { ...post, tableName: tableNameFor(state, post.tableId) };
}

export function addComment(postId, commentData) {
  const state = readState();
  const post = state.posts.find((item) => item.id === postId);
  if (!post) return null;

  const comment = {
    id: `comment-${Date.now()}`,
    username: commentData.username || "guest.reader",
    body: commentData.body,
    createdAt: new Date().toISOString()
  };

  post.comments.push(comment);
  writeState(state);
  return comment;
}

export function upvotePost(postId) {
  const state = readState();
  const post = state.posts.find((item) => item.id === postId);
  if (!post) return null;
  post.teaCount += 1;
  writeState(state);
  return post.teaCount;
}

export function savePost(postId) {
  const state = readState();
  const post = state.posts.find((item) => item.id === postId);
  if (!post) return null;
  post.saved = !post.saved;
  writeState(state);
  return post.saved;
}

export function resetDemoData() {
  const fresh = initialState();
  writeState(fresh);
  return fresh;
}
