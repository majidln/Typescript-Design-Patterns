# Provider Pattern
In some cases, we want to make available data to many (if not all) components in an application. Although we can pass data to components using props, this can be difficult to do if almost all components in your application need access to the value of the props.


# Prop Drilling
We often end up with something called prop drilling, which is the case when we pass props far down the component tree. Refactoring the code that relies on the props becomes almost impossible, and knowing where certain data comes from is difficult.