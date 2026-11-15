# Character Palette Architect

Explainable colour palette recommendations for fictional characters, based on seasonal colour analysis.

## Run
Open `index.html` in a browser. No build step or dependencies.

## Files
- `index.html`: page structure and inputs
- `css/style.css`: layout, theme (light and dark) and responsive rules
- `js/app.js`: season data, trait scoring, palette generation, SVG diagrams, Canvas recolouring, local storage

## How it works
Final palette = season score (trait points + undertone bonus) + skin depth modifiers + age modifiers.
Eight colours come from the primary season and four from the secondary. Sliders then adjust hue, value and chroma.

## Features
Sketch upload and Canvas flood-fill recolouring, season wheels, value-chroma SVG diagram, 60/30/10 roles, saved inputs (localStorage), PNG and SVG export.
