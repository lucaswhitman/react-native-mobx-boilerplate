This directory aligns with our goals of Maximum Code Reuse and Minimize Component State. In this directory we’ll be writing mostly functional components that can be used in multiple places throughout our app.

A little explanation as to what’s going on here. The index.js files manages what is exported from that directory, it’s the only thing we require from outside of that directory. Component.js is the actual component (it’s a functional component) that displays our data. Lastly is the styles.js file — this keeps the styles for the component directory.

Now this may seem overkill for such simple items but I’ve found that as a project grows following this structure keeps things easy to understand and consistent.

Why keep styles outside of the component file? The purpose there is that as you break a larger component into smaller ones  you’ll reuse a lot of the same styling. And remember, we want to maximize code reuse.

### Touchable Elements

https://facebook.github.io/react-native/docs/touchablehighlight

<TouchableHighlight /> is useful in most places we'd use links or buttons on the web, if we don't want to use <Button>, itself.
