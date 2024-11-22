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

### Example Observable
```
@startuml
interface Observee<MessageType> {
  +default void subscribe(Observer<MessageType> o) { observers.add(o); }
  +default void unsubscribe(Observer<MessageType> o) { observers.remove(o); }
  +default void notify(MessageType msg) { for(Observer<MessageType> o : observers) o.receive(MessageType msg) }
}

interface Observer<MessageType> {
  +abstract void receive(MessageType msg);
  +abstract void onError(String errorMessage);
  +abstract void end();
}

Observee "0..1" o-right-> "0..n" Observer : -observers

RestaurantFilterek .up.|> Observee
RestaurantLekero .up.|> Observer
FilterGomb .up.|> Observer

Main ..> RestaurnatFilterek : 1: <<create>> RestaurnatFilterDb; 4: <<subscribe>> restaurnatLekero; 5: <<subscribe>> filterGomb
Main ..> ResturantLekero : 2: <<create>> restaurnatLekero
Main ..> FilterGomb : 3: <<create>> filterGomb
@enduml
```
