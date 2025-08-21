# only once

A tiny static web app to facilitate playing the party game "Just One". It offers two modes: reveal a random word after a short countdown, or enter a one-word clue and display it full-screen.

## Features

- Get a word: 3-second countdown, then shows a random word in bold, full-screen.
- Give a clue: enter a single word; it displays full-screen, scaled to fit one line.
- Responsive, auto-sized text that fills available space.
- Simple, mobile-friendly UI.

## Quick start

Serve the static files with any HTTP server. For example, using Python:

```bash
python3 -m http.server 5173
```

Open:

```text
http://localhost:5173
```

## Project structure

- `index.html`: UI screens and buttons.
- `styles.css`: Styling and layout.
- `app.js`: Screen transitions, countdown logic, and text autosize.
- `words.js`: Built-in word list and `pickRandomWord()` helper.

## Customizing the word list

Edit `words.js` and modify `window.JUST_ONE_WORDS`. You can add or remove entries, or wire it up to your own data source if you prefer.

## Accessibility

- Countdown and reveal use `aria-live` for updates.
- Respects reduced motion preferences.

## License

MIT
