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
  const btnGlobalHome = document.getElementById('btn-global-home');
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

    // Get the actual available space within the container (accounting for padding)
    const containerStyle = getComputedStyle(container);
    const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
    const paddingTop = parseFloat(containerStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(containerStyle.paddingBottom) || 0;

    const availableWidth = container.clientWidth - paddingLeft - paddingRight;
    const availableHeight = container.clientHeight - paddingTop - paddingBottom;

    const maxIterations = 15;
    const minSize = 16; // px
    const maxSize = Math.min(availableWidth, availableHeight) * 2; // reasonable upper bound

    let low = minSize;
    let high = maxSize;
    let best = low;

    el.style.whiteSpace = 'nowrap';

    for (let i = 0; i < maxIterations; i++) {
      const mid = Math.floor((low + high) / 2);
      el.style.fontSize = mid + 'px';

      // Force a reflow to get accurate measurements
      const rect = el.getBoundingClientRect();
      const textWidth = rect.width;
      const textHeight = rect.height;

      const fits = textWidth <= availableWidth && textHeight <= availableHeight;

      if (fits) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    // Apply the best fitting size with a small safety margin
    el.style.fontSize = Math.floor(best * 0.95) + 'px';
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

  // Persistent footer Home button
  btnGlobalHome.addEventListener('click', () => {
    cancelCountdown();
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


