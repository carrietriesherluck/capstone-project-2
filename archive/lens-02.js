const startButton = document.querySelector('[data-start-lab]');
const introPanel = document.querySelector('[data-panel="intro"]');
const readingPanel = document.querySelector('[data-panel="reading"]');
const quizPanel = document.querySelector('[data-panel="quiz"]');
const timerDisplay = document.querySelector('[data-timer]');
const timerTrack = document.querySelector('.timer-track');
const notificationLayer = document.querySelector('[data-notification-layer]');
const espressoAudio = document.querySelector('[data-espresso-audio]');
const quizContainer = document.querySelector('[data-quiz]');
const resultPanel = document.querySelector('[data-result]');

const quizQuestions = [
  {
    question: 'What did Milo find inside the borrowed library book?',
    answers: ['A tiny silver key', 'A torn photograph', 'A glass compass'],
    correct: 0
  },
  {
    question: 'Where did the note tell Milo to return the object?',
    answers: ['The clock tower', 'The bookstore window', 'The school basement'],
    correct: 0
  },
  {
    question: 'What grew in the courtyard by morning?',
    answers: ['A tree with whispering leaves', 'A fountain full of coins', 'A ladder made of vines'],
    correct: 0
  }
];

const notifications = [
  {
    type: 'bookstore',
    title: 'Booked & Busy Books',
    body: 'Flash sale: buy 2 paperbacks, get 1 mysterious classic free.'
  },
  {
    type: 'instagram',
    title: 'Instagram',
    body: '3 people liked your story. Someone tagged you in a post.'
  },
  {
    type: 'music',
    title: 'Now Playing',
    body: 'Espresso - Sabrina Carpenter'
  },
  {
    type: 'instagram',
    title: 'Instagram',
    body: 'New reel from your favorite creator. It is only 12 seconds.'
  },
  {
    type: 'bookstore',
    title: 'Cart Reminder',
    body: 'That hardcover you looked at is almost sold out.'
  },
  {
    type: 'music',
    title: 'Music',
    body: 'Your playlist just switched tracks.'
  },
  {
    type: 'instagram',
    title: 'Instagram Live',
    body: 'A friend started a live video.'
  }
];

let countdownId;
let notificationId;
let secondsRemaining = 15;
let answeredCount = 0;
let correctCount = 0;
const espressoStartTime = 8;

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const clearExperimentTimers = () => {
  window.clearInterval(countdownId);
  window.clearInterval(notificationId);
};

const playEspresso = () => {
  if (!espressoAudio) return;

  const seekToStart = () => {
    try {
      espressoAudio.currentTime = espressoStartTime;
    } catch (error) {
      // If metadata is not ready yet, the canplay listener below will try again.
    }
  };

  espressoAudio.volume = 0.38;
  espressoAudio.pause();
  seekToStart();

  espressoAudio.addEventListener('loadedmetadata', seekToStart, { once: true });
  espressoAudio.addEventListener('canplay', seekToStart, { once: true });
  espressoAudio.load();

  espressoAudio.play().catch(() => {
    // Some browsers may block audio if the click gesture is interrupted.
  });
};

const stopEspresso = () => {
  if (!espressoAudio) return;

  espressoAudio.pause();
  espressoAudio.currentTime = 0;
};

const showNotification = () => {
  if (!notificationLayer) return;

  const item = notifications[randomBetween(0, notifications.length - 1)];
  const notice = document.createElement('div');
  notice.className = `fake-notification ${item.type}`;
  notice.style.left = `${randomBetween(8, 72)}vw`;
  notice.style.top = `${randomBetween(13, 76)}vh`;
  notice.innerHTML = `<strong>${item.title}</strong><span>${item.body}</span>`;

  notificationLayer.appendChild(notice);
  window.setTimeout(() => notice.remove(), 1700);
};

const renderQuiz = () => {
  if (!quizContainer) return;

  quizContainer.innerHTML = quizQuestions.map((item, questionIndex) => `
    <article class="question-card" data-question="${questionIndex}">
      <h3>${item.question}</h3>
      <div class="answer-list">
        ${item.answers.map((answer, answerIndex) => `
          <button type="button" data-answer="${answerIndex}">${answer}</button>
        `).join('')}
      </div>
    </article>
  `).join('');
};

const showResult = () => {
  if (!resultPanel) return;

  const gotAllCorrect = correctCount === quizQuestions.length;
  resultPanel.classList.remove('is-hidden');
  resultPanel.innerHTML = gotAllCorrect
    ? `
      <h3>You can read even with distractions!</h3>
      <p>So whats stopping you from picking up a book~!</p>
    `
    : `
      <h3>Still wondering why you can't seem to focus long enough to read a book?</h3>
      <p>Because notifications!</p>
    `;
};

const handleAnswer = (event) => {
  const button = event.target.closest('[data-answer]');
  if (!button) return;

  const card = button.closest('[data-question]');
  const questionIndex = Number(card?.dataset.question);
  const answerIndex = Number(button.dataset.answer);
  const question = quizQuestions[questionIndex];

  if (!question || card.dataset.answered === 'true') return;

  card.dataset.answered = 'true';
  answeredCount += 1;

  const answerButtons = [...card.querySelectorAll('[data-answer]')];
  answerButtons.forEach((answerButton) => {
    const currentAnswerIndex = Number(answerButton.dataset.answer);
    answerButton.disabled = true;

    if (currentAnswerIndex === question.correct) {
      answerButton.classList.add('is-correct');
    }
  });

  if (answerIndex === question.correct) {
    correctCount += 1;
  } else {
    button.classList.add('is-wrong');
  }

  if (answeredCount === quizQuestions.length) {
    showResult();
  }
};

const finishReading = () => {
  clearExperimentTimers();
  stopEspresso();
  readingPanel?.classList.add('is-hidden');
  notificationLayer?.replaceChildren();
  quizPanel?.classList.remove('is-hidden');
  renderQuiz();
};

const startExperiment = () => {
  secondsRemaining = 15;
  answeredCount = 0;
  correctCount = 0;

  introPanel?.classList.add('is-hidden');
  quizPanel?.classList.add('is-hidden');
  resultPanel?.classList.add('is-hidden');
  readingPanel?.classList.remove('is-hidden');
  notificationLayer?.replaceChildren();

  if (timerDisplay) timerDisplay.textContent = String(secondsRemaining);
  timerTrack?.classList.remove('is-running');
  void timerTrack?.offsetWidth;
  timerTrack?.classList.add('is-running');

  clearExperimentTimers();
  playEspresso();
  showNotification();
  notificationId = window.setInterval(showNotification, 430);

  countdownId = window.setInterval(() => {
    secondsRemaining -= 1;
    if (timerDisplay) timerDisplay.textContent = String(Math.max(secondsRemaining, 0));

    if (secondsRemaining <= 0) {
      finishReading();
    }
  }, 1000);
};

startButton?.addEventListener('click', startExperiment);
quizContainer?.addEventListener('click', handleAnswer);

const eyeDemo = document.querySelector('[data-eye-demo]');
const eyePanels = [...document.querySelectorAll('[data-eye-side]')];
const replayEyeButton = document.querySelector('[data-replay-eye]');
const comparisonPanel = document.querySelector('[data-comparison-panel]');
const finalTakeaway = document.querySelector('[data-final-takeaway]');
const eyeReportDelay = 6500;
let eyeDemoStarted = false;
let ghostScrollQueued = false;

const resetEyeDemo = () => {
  ghostScrollQueued = false;
  comparisonPanel?.classList.remove('is-visible');
  finalTakeaway?.classList.remove('is-visible');

  eyePanels.forEach((panel) => {
    panel.classList.remove('is-analyzing');
    panel.querySelector('[data-eye-report]')?.setAttribute('aria-hidden', 'true');
  });
};

const revealComparison = () => {
  comparisonPanel?.classList.add('is-visible');

  window.setTimeout(() => {
    finalTakeaway?.classList.add('is-visible');
  }, 1300);

  if (ghostScrollQueued) return;
  ghostScrollQueued = true;

  window.setTimeout(() => {
    const loadSection = document.querySelector('.load-section');
    const sectionIndex = window.lensPagerSections?.indexOf(loadSection);
    if (typeof window.lensPagerGoTo === 'function' && sectionIndex >= 0) {
      window.lensPagerGoTo(sectionIndex);
    }
  }, 9800);
};

const revealEyeReports = () => {
  eyePanels.forEach((panel) => {
    panel.classList.add('is-analyzing');
    panel.querySelector('[data-eye-report]')?.setAttribute('aria-hidden', 'false');
  });

  window.setTimeout(revealComparison, 7200);
};

const startEyeDemo = () => {
  if (eyeDemoStarted) return;

  eyeDemoStarted = true;
  resetEyeDemo();
  window.setTimeout(revealEyeReports, eyeReportDelay);
};

replayEyeButton?.addEventListener('click', () => {
  eyeDemoStarted = false;
  resetEyeDemo();
  startEyeDemo();
});

if (eyeDemo && 'IntersectionObserver' in window) {
  const eyeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startEyeDemo();
        eyeObserver.disconnect();
      }
    });
  }, { threshold: 0.45 });

  eyeObserver.observe(eyeDemo);
} else {
  startEyeDemo();
}

const dopamineLab = document.querySelector('[data-dopamine-lab]');
const dopamineFeed = document.querySelector('[data-dopamine-feed]');
const feedFragments = document.querySelector('[data-feed-fragments]');
const dopamineStatus = document.querySelector('[data-dopamine-status]');
const rewardPanel = document.querySelector('[data-reward-panel]');
const thresholdBar = document.querySelector('[data-threshold-bar]');
const thresholdCopy = document.querySelector('[data-threshold-copy]');
const fragmentWords = [
  'FOR YOU',
  'WATCH NEXT',
  'NEW',
  'TRENDING',
  'TOP 10',
  'POV',
  'LOADING',
  'ONE MORE',
  'STUDY HACK',
  '3 SEC',
  'ALMOST',
  'WAIT'
];
let dopamineStarted = false;
let dopamineScrollTimer;
let thresholdValue = 22;

const createFeedFragment = () => {
  if (!feedFragments) return;

  const fragment = document.createElement('span');
  fragment.className = 'feed-fragment';
  fragment.textContent = fragmentWords[randomBetween(0, fragmentWords.length - 1)];
  fragment.style.left = `${randomBetween(4, 82)}%`;
  fragment.style.top = `${randomBetween(8, 82)}%`;
  fragment.style.setProperty('--fragment-size', `${randomBetween(58, 126) / 100}rem`);
  fragment.style.setProperty('--fragment-speed', `${randomBetween(900, 2100)}ms`);
  feedFragments.appendChild(fragment);
  window.setTimeout(() => fragment.remove(), 2300);
};

const startDopamineLab = () => {
  if (!dopamineLab || dopamineStarted) return;

  dopamineStarted = true;
  dopamineLab.classList.add('is-ready');
};

if (dopamineLab && 'IntersectionObserver' in window) {
  const dopamineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startDopamineLab();
        dopamineObserver.disconnect();
      }
    });
  }, { threshold: 0.28 });

  dopamineObserver.observe(dopamineLab);
} else {
  startDopamineLab();
}

dopamineFeed?.addEventListener('scroll', () => {
  if (!dopamineLab) return;

  dopamineLab.classList.add('is-feed', 'is-scrolling', 'is-hyperaroused');
  if (dopamineStatus) dopamineStatus.textContent = 'spiking during scroll';
  const burstCount = dopamineFeed.scrollTop > 90 ? randomBetween(2, 5) : randomBetween(1, 2);

  for (let i = 0; i < burstCount; i += 1) {
    window.setTimeout(createFeedFragment, i * randomBetween(50, 130));
  }

  window.clearTimeout(dopamineScrollTimer);
  dopamineScrollTimer = window.setTimeout(() => {
    dopamineLab.classList.remove('is-scrolling');
    dopamineLab.classList.add('is-silent', 'is-focus');
    if (dopamineStatus) dopamineStatus.textContent = 'still elevated after scrolling stops';
  }, 850);
});

rewardPanel?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-reward-button]');
  if (!button) return;

  if (button.dataset.rewardButton === 'fast') {
    thresholdValue = Math.min(100, thresholdValue + 18);
  } else {
    thresholdValue = Math.max(8, thresholdValue - 6);
  }

  rewardPanel.dataset.threshold = thresholdValue > 62 ? 'high' : 'low';
  rewardPanel.style.setProperty('--threshold', `${thresholdValue}%`);
  if (thresholdBar) thresholdBar.style.width = `${thresholdValue}%`;

  if (thresholdCopy) {
    thresholdCopy.textContent = thresholdValue > 62
      ? 'Slower activities begin to feel unrewarding because the reward threshold has risen.'
      : 'Slower biological tasks can still feel rewarding.';
  }
});

const audioReadingSection = document.querySelector('[data-audio-reading-section]');
const audioReadingLab = document.querySelector('.audio-reading-lab');
const audioPlayButton = document.querySelector('[data-audio-play]');
const audioText = document.querySelector('[data-audio-text]');
let audioFallbackTimer;

const finishAudioReading = () => {
  audioReadingLab?.classList.remove('is-playing');
  audioReadingLab?.classList.add('is-finished');
};

audioPlayButton?.addEventListener('click', () => {
  const text = audioText?.textContent?.trim();
  if (!text || !audioReadingLab) return;

  audioReadingLab.classList.add('is-playing');
  window.clearTimeout(audioFallbackTimer);

  if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => {
      window.clearTimeout(audioFallbackTimer);
      finishAudioReading();
    };
    window.speechSynthesis.speak(utterance);
    audioFallbackTimer = window.setTimeout(finishAudioReading, Math.max(9000, text.length * 70));
    return;
  }

  audioFallbackTimer = window.setTimeout(finishAudioReading, 9000);
});
