# Architecture
A high level overview on how our architecture looks like.
---

## BE:

## FE:
### Technologies:
- Typescript: superset of javascript which adds a powerful type-system on the language
- React: a reactive frontend framework
- Vite: javascript bundler
- OpenStreetMap: a free and open map database
- Leaflet, React-Leaflet: built on top of OpenStreetMap data, providing easy way to use maps
- Zustand: reactive store solution

### Structure
- `api`: all api requests we can make to the BE
- `pages`: individual pages on the website
- `components`: composable smaller units
- `svg-loader`: a vite plugin to load in svgs as raw strings
- `app.tsx`: the application entry point
- `main.tsx`: react entry point
- `index.html`: first page loaded by the browser