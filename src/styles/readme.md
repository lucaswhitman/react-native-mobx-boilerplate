This directory contains all of the generic styles that are used across the app and global defaults such as colors.

### Fixed Dimensions
- The simplest way to set the dimensions of a component is by adding a fixed width and height to style. All dimensions in React Native are unitless, and represent density-independent pixels.

### Buttons
<Button /> does not take a style prop. They define native-os buttons, and can only be customized to the degree possible for OS buttons, which is:
- on ios, `color` defines text color; there is no bg color on ios buttons by default
- on android `color` defines background color; all buttons have a shape defined by their color, and the text is always white

### Shadows
shadowOffset wants an object. { top: x, left: x }