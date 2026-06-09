const dots = [...document.querySelectorAll('.timeline-dot')];
const dialog = document.querySelector('.timeline-dialog');
const dialogYear = dialog?.querySelector('.dialog-year');
const dialogTitle = dialog?.querySelector('h3');
const dialogDetail = dialog?.querySelector('.dialog-detail');
const closeButton = dialog?.querySelector('.dialog-close');

const setActiveDot = (dot) => {
  dots.forEach((item) => item.classList.toggle('is-active', item === dot));
};

const openDetail = (dot) => {
  setActiveDot(dot);

  if (!dialog || !dialogYear || !dialogTitle || !dialogDetail) return;

  dialogYear.textContent = dot.dataset.year || '';
  dialogTitle.textContent = dot.dataset.title || '';
  dialogDetail.textContent = dot.dataset.detail || '';

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    return;
  }

  dialog.setAttribute('open', '');
};

dots.forEach((dot) => {
  dot.addEventListener('mouseenter', () => setActiveDot(dot));
  dot.addEventListener('focus', () => setActiveDot(dot));
  dot.addEventListener('click', () => openDetail(dot));
});

closeButton?.addEventListener('click', () => dialog?.close());

dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const postcards = [...document.querySelectorAll('.postcard')];

postcards.forEach((postcard) => {
  postcard.addEventListener('click', () => {
    const willOpen = !postcard.classList.contains('is-flipped');

    postcards.forEach((item) => {
      item.classList.remove('is-flipped');
      item.setAttribute('aria-pressed', 'false');
    });

    if (willOpen) {
      postcard.classList.add('is-flipped');
      postcard.setAttribute('aria-pressed', 'true');
    }
  });
});

function rejectBook(book){
    document.getElementById("popup").style.display="flex";

    document.getElementById("popupText").innerHTML =
    `You selected <strong>${book}</strong>. 
    However, standardized curriculum systems replace your selection with assigned classics and difficult texts.`;
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

let totalHours = 0;

function addHours(hours,button){

    if(totalHours + hours > 24){

        document.getElementById("scheduleWarning").innerHTML =
        "No remaining time available for recreational reading.";

        return;
    }

    totalHours += hours;

    document.getElementById("hoursUsed").innerHTML = totalHours;

    button.disabled = true;
    button.style.opacity = "0.4";
}

function updateLiteracy(value){

    document.getElementById("difficultyStat").innerHTML =
    value + "%";

    document.getElementById("equityStat").innerHTML =
    (100 - value) + "%";
}

function showEnding(){

    document.getElementById("endingScreen").style.display =
    "block";
}

const rebuildDashboard = document.querySelector('.school-rebuild-dashboard');
const policyCards = [...document.querySelectorAll('.policy-card')];
const metricRows = [...document.querySelectorAll('.metrics-panel .metric-row')];
const baseMetrics = {
    reading: 32,
    literacy: 41,
    confidence: 29,
    teacher: 20,
    library: 15
};

const updateRebuildDashboard = () => {
    if (!rebuildDashboard) return;

    const totals = {...baseMetrics};
    const activeCards = policyCards.filter((card) => card.classList.contains('is-active'));

    activeCards.forEach((card) => {
        totals.reading += Number(card.dataset.reading || 0);
        totals.literacy += Number(card.dataset.literacy || 0);
        totals.confidence += Number(card.dataset.confidence || 0);
        totals.teacher += Number(card.dataset.teacher || 0);
        totals.library += Number(card.dataset.library || 0);
    });

    metricRows.forEach((row) => {
        const metric = row.dataset.metric;
        const value = Math.min(100, totals[metric] || 0);
        row.style.setProperty('--value', value + '%');
        row.querySelector('strong').textContent = value + '%';
    });

    rebuildDashboard.dataset.activeCount = activeCards.length;
};

policyCards.forEach((card) => {
    const toggle = card.querySelector('.policy-toggle');
    const status = card.querySelector('.policy-status');

    toggle?.addEventListener('click', () => {
        const isActive = card.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', String(isActive));
        status.textContent = isActive ? 'Active' : 'Activate';
        updateRebuildDashboard();
    });
});

document.querySelectorAll('[data-book-match]').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.classList.toggle('is-matched');
    });
});

updateRebuildDashboard();
