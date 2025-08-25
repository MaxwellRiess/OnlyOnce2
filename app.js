(() => {
  const screens = {
    home: document.getElementById('screen-home'),
    countdown: document.getElementById('screen-countdown'),
    display: document.getElementById('screen-display'),
    clueInput: document.getElementById('screen-clue-input')
  };

  const btnGetWord = document.getElementById('btn-get-word');
  const btnGiveClue = document.getElementById('btn-give-clue');
  const btnCancelCountdown = document.getElementById('btn-cancel-countdown');
  const btnBackHome = document.getElementById('btn-back-home');
  const btnCancelClue = document.getElementById('btn-cancel-clue');
  const countdownNumber = document.getElementById('countdownNumber');
  const displayText = document.getElementById('displayText');
  const clueForm = document.getElementById('clueForm');
  const clueInput = document.getElementById('clueInput');
  const difficultySelect = document.getElementById('difficultySelect');

  let countdownTimer = null;

  function setScreen(target) {
    Object.values(screens).forEach(el => el.classList.add('hidden'));
    const el = screens[target];
    if (el) el.classList.remove('hidden');
    document.body.setAttribute('data-screen', target);
  }

  function cancelCountdown() {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  }

  function startCountdown(seconds, onDone) {
    cancelCountdown();
    let remaining = seconds;
    countdownNumber.textContent = String(remaining);
    setScreen('countdown');
    countdownTimer = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        cancelCountdown();
        onDone();
        return;
      }
      countdownNumber.textContent = String(remaining);
    }, 1000);
  }

  function showFullScreenText(text) {
    displayText.textContent = text;
    setScreen('display');
    // Auto-fit text to available width/height
    requestAnimationFrame(() => fitText(displayText));
  }

  // Fit text into container by adjusting font-size
  function fitText(el) {
    const container = el.parentElement;
    if (!container) return;
    const maxIterations = 10;
    const fudge = 1.05; // breathing room
    const minSize = 16; // px
    const maxSize = Math.max(window.innerWidth, window.innerHeight); // upper bound

    let low = minSize;
    let high = maxSize;
    let best = low;

    el.style.whiteSpace = 'nowrap';

    for (let i = 0; i < maxIterations; i++) {
      const mid = Math.floor((low + high) / 2);
      el.style.fontSize = mid + 'px';
      const { scrollWidth, scrollHeight } = el;
      const { clientWidth, clientHeight } = container;
      const fits = scrollWidth <= clientWidth && scrollHeight <= clientHeight;
      if (fits) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    el.style.fontSize = Math.floor(best / fudge) + 'px';
  }

  // Actions
  btnGetWord.addEventListener('click', () => {
    startCountdown(3, () => {
      const selected = difficultySelect ? difficultySelect.value : 'Any';
      const difficulty = selected === 'Any' ? undefined : selected;
      const word = (window.pickRandomWord && window.pickRandomWord(difficulty)) || 'Word';
      showFullScreenText(word);
    });
  });

  btnGiveClue.addEventListener('click', () => {
    setScreen('clueInput');
    setTimeout(() => clueInput.focus(), 0);
  });

  btnCancelCountdown.addEventListener('click', () => {
    cancelCountdown();
    setScreen('home');
  });

  btnBackHome.addEventListener('click', () => {
    setScreen('home');
  });

  btnCancelClue.addEventListener('click', () => {
    setScreen('home');
    clueForm.reset();
  });

  clueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = clueInput.value || '';
    const cleaned = raw.trim();
    if (!cleaned) return;
    // Enforce single token (no spaces). Keep original casing.
    const singleToken = cleaned.split(/\s+/)[0];
    showFullScreenText(singleToken);
    clueForm.reset();
  });

  // Re-fit on resize/orientation changes
  window.addEventListener('resize', () => {
    if (!screens.display.classList.contains('hidden')) {
      requestAnimationFrame(() => fitText(displayText));
    }
  });
})();


