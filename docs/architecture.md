# Architecture
A high level overview on how our architecture looks like.
---

## BE:
### Technologies:
- Java Spring Boot

## FE:
### Technologies:
- Typescript: superset of javascript which adds a powerful type-system on the language
- React: a reactive frontend framework
- Vite: javascript bundler
- OpenStreetMap: a free and open map database
- Leaflet, React-Leaflet: built on top of OpenStreetMap data, providing easy way to use maps
- Zustand: reactive store solution

## Structure
```
@startuml
left to right direction
skinparam packageStyle rectangle
actor "User" as a1
actor "Logged in User" as a2
rectangle "Restaurant review" {
  a1 --> (Login)
  (Login) --> a2
  a1 --> (Register)
  (Register) --> a2
  a1 --> (View Restaurants)
  a2 --> (View Restaurants)
  a1 --> (Write anonym review)
  a2 --> (Write review)
  a2 --> (Favorite restaurant)
}
@enduml
```

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
