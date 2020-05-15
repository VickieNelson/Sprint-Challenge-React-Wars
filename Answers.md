# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

REact makes it easier for developer sto manage state changes by building a virtual DOM. this virtual DOM we can reconcile state changes to the real DOM. This helps us manage complex and frequent changes in state.

1. Describe component state.

State holds information as well as influences the output of the render

1. Describe props.

A way to pass information between components

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

anything that affects something outside the scope of the function being executed. By using useEffects(), it puts the effect function inside the scope of the component. useEffects() also allows for conditional changes to be made, based on state changes initiated by the user, for example: a user clicks a “read more” button and the corresponding paragraph of text expands to its full length. By placing a dependency in the array at the end of a useEffect(), the virtual DOM watches for any changes related to that dependency array.
