# Project Etch-a-Sketch

A small interactive Etch-a-Sketch sketchpad implemented with web technologies. Draw using mouse, touch, or keyboard; supports clear, changeable grid size, and simple color modes.

## Features
- Draw with mouse or touch
- Adjustable grid size
- Toggle between color, grayscale, and erase modes
- Clear canvas
- Keyboard shortcuts for common actions

## Tech stack
- HTML, CSS, JavaScript (vanilla)
- Optional: build tooling (Node.js + npm) if bundling or using dev server

## Getting started

Prerequisites
- A modern web browser
- (Optional) Node.js and npm for local dev server

Clone
```
git clone [https://github.com/<user>/Project-Etch-a-Sketch.git](https://github.com/Dev-Xanderr/Project-Etch-a-Sketch.git)
cd Project-Etch-a-Sketch
```

Run (simple)
- Open `index.html` in a browser

Run (with local server)
```
# if you have http-server installed
npx http-server . -c-1
# or
npm install
npm start
```

## Usage
- Click and drag (or touch) to draw
- Use grid size control to change resolution
- Use mode buttons to switch between drawing, grayscale, and erasing
- Click "Clear" to reset the canvas
- Optional keyboard shortcuts:
    - C: Clear
    - +/- : Increase / decrease grid size
    - M: Cycle modes

## Development
- Keep components small and modular
- Add tests for core drawing logic if using a framework
- Lint and format JavaScript (ESLint / Prettier recommended)

## Contributing
- Fork the repo, create a feature branch, open a PR with a clear description and screenshots if UI changes.
