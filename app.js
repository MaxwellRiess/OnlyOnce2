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

  function selectedDifficulty() {
    const checked = document.querySelector('input[name="difficulty"]:checked');
    return checked ? checked.value : 'Any';
  }

  // Set the text on an overprinted element and replay its registration animation
  function printText(el, text, animClass) {
    el.textContent = text;
    el.setAttribute('data-text', text);
    el.classList.remove(animClass);
    void el.offsetWidth;
    el.classList.add(animClass);
  }

  // Like a compositor picking a fount: short words set wide, long words set condensed.
  // In portrait the width is the limit, so everything goes narrower and prints bigger.
  function stretchFor(text) {
    const n = text.length;
    const portrait = window.innerHeight > window.innerWidth;
    let stretch;
    if (n <= 3) stretch = 125;
    else if (n <= 5) stretch = 108;
    else if (n <= 7) stretch = 92;
    else if (n <= 9) stretch = 78;
    else stretch = 62;
    return portrait ? Math.max(62, stretch - 30) : stretch;
  }

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
    setScreen('countdown');
    printText(countdownNumber, String(remaining), 'tick');
    countdownTimer = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        cancelCountdown();
        onDone();
        return;
      }
      printText(countdownNumber, String(remaining), 'tick');
    }, 1000);
  }

  function showFullScreenText(text) {
    displayText.style.fontStretch = stretchFor(text) + '%';
    setScreen('display');
    printText(displayText, text, 'reveal');
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
      const selected = selectedDifficulty();
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

  // How to play: a sheet of panels you swipe across
  const howto = document.getElementById('howto');
  const howtoSlides = document.getElementById('howtoSlides');
  const slides = Array.from(howtoSlides.querySelectorAll('.slide'));
  const pagerBars = Array.from(howto.querySelectorAll('.pager span'));
  const btnHowtoPrev = document.getElementById('btn-howto-prev');
  const btnHowtoNext = document.getElementById('btn-howto-next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentSlide = 0;

  // Always start from the first panel. The scroll position only sticks once the dialog is showing.
  function openHowto() {
    howto.showModal();
    howtoSlides.scrollTo({ left: 0, behavior: 'auto' });
    updateSlides();
    howtoSlides.focus();
  }

  function closeHowto() {
    if (!howto.open || howto.classList.contains('closing')) return;
    if (reduceMotion.matches) {
      howto.close();
      return;
    }
    howto.classList.add('closing');
    howto.addEventListener('animationend', () => {
      howto.classList.remove('closing');
      howto.close();
    }, { once: true });
  }

  function goToSlide(i) {
    const target = slides[Math.max(0, Math.min(slides.length - 1, i))];
    howtoSlides.scrollTo({ left: target.offsetLeft, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }

  // Each panel's distance from centre, in panel widths, drives the pink drum's lag
  function updateSlides() {
    const width = howtoSlides.clientWidth || 1;
    const pos = howtoSlides.scrollLeft / width;
    slides.forEach((slide, i) => slide.style.setProperty('--drift', (i - pos).toFixed(3)));

    const index = Math.round(pos);
    if (index === currentSlide && btnHowtoNext.dataset.ready) return;
    currentSlide = index;
    btnHowtoNext.dataset.ready = '1';
    pagerBars.forEach((bar, i) => bar.classList.toggle('is-current', i === index));
    btnHowtoPrev.classList.toggle('is-hidden', index === 0);
    const last = index === slides.length - 1;
    btnHowtoNext.querySelector('.btn-label').textContent = last ? 'Start playing' : 'Next';
    slides.forEach((slide, i) => slide.toggleAttribute('inert', i !== index));
  }

  howtoSlides.addEventListener('scroll', () => requestAnimationFrame(updateSlides), { passive: true });
  document.getElementById('btn-howto').addEventListener('click', openHowto);
  document.getElementById('btn-howto-close').addEventListener('click', closeHowto);
  btnHowtoPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
  btnHowtoNext.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) closeHowto();
    else goToSlide(currentSlide + 1);
  });

  // Escape and backdrop taps slide the sheet out rather than snapping it shut
  howto.addEventListener('cancel', (e) => {
    e.preventDefault();
    closeHowto();
  });
  howto.addEventListener('click', (e) => {
    if (e.target === howto) closeHowto();
  });
  howto.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    goToSlide(currentSlide + (e.key === 'ArrowRight' ? 1 : -1));
  });

  // Show it once on a first visit
  try {
    if (!localStorage.getItem('oneword.seenHowto')) {
      localStorage.setItem('oneword.seenHowto', '1');
      openHowto();
    }
  } catch (_) {}

  // Re-fit on resize/orientation changes
  window.addEventListener('resize', () => {
    if (howto.open) updateSlides();
    if (!screens.display.classList.contains('hidden')) {
      displayText.style.fontStretch = stretchFor(displayText.textContent) + '%';
      requestAnimationFrame(() => fitText(displayText));
    }
  });
})();


