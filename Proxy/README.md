# Proxy Pattern
Share a single global instance throughout our application

With get and set prop of Proxy object we can add validation rules to object. The proxy makes sure that we weren't modifying the person object with faulty values, which helps us keep our data pure!

Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases: it can help with validation, formatting, notifcations, or debugging.


Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code

## Reflect
JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.