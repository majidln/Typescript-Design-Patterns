# Observer Pattern
The **Observer Pattern** defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

The **Observer Pattern** defines a one-to-many relationship between a set of objects. When the state of one object changes, all of its dependents are notified.

## Parts of pattern
An observable object usually contains 3 important parts:
+ **observers:**: an array of observers that will get notified whenever a specific event occurs
+ **subscribe():** a method in order to add observers to the observers list
+ **unsubscribe():** a method in order to remove observers from the observers list
+ **notify():** a method to notify all observers whenever a specific event occurs