# Module Pattern
Split up your code into smaller, reusable pieces.

### ES2015 Modules
ES2015 introduced built-in JavaScript modules. A module is a file containing JavaScript code, with some difference in behavior compared to a normal script.

A great benefit of having modules, is that we only have access to the values that we explicitly exported using the export keyword. Values that we didn't explicitly export using the export keyword, are only available within that module.

### Dynamic import
When importing all modules on the top of a le, all modules get loaded before the rest of the le. In some cases, we only need to import a module based on a certain condition. With a dynamic import, we can import modules on demand.

By dynamically importing modules, we can reduce the page load time. We only have to load, parse, and compile the code that the user really needs, when the user needs it.