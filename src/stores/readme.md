# MobX Stores

## Best practices
### The stores represent the ui state
Alway keep in mind that the stores represent your application’s ui state. That means, when you save your stores’ state to a file, close your program and relaunch it with the loaded state, you will have the same program and will see the same things, like you have seen before closing your program. Stores are not meant to be ‘local databases’. They also hold information about what button is visible, disabled, the current text of an input filed, etc..

### Separate your rest calls from the stores
Do not call your rest interface from within your stores. This makes them hard to test. Instead put these rest calls into extra classes (agent.js). When you write test, you can easily fake these api calls and pass your fake api instance to each store.

### Keep your business logic in stores
Don’t ever write business logic in your components. When you write your business logic in components, you have no chance to reuse it, your business logic gets spread over many components, what makes it hard to refactor or reuse the code. Write the business logic with methods in the stores and call these methods from your components.

### Only the store is allowed to change its properties
Never change a store’s property directly in a component. Only the store is allowed to change its own properties. Always call a method from the store, that changes the store’s property. Otherwise your applications state (stores = application state) is updated from everywhere and you are slowly loosing control. That makes it very hard to debug.

### Always annotate each component with @ observer
Annotating each component with @ observer allows each component to update on store prop changes. Otherwise the parent component annotated with @ component needs to rerender, to update its child component. So less components need to be rerendered.

### Use @ computed
Let’s say you want your button disabled when a user doesn’t have the admin role and the application is not in “admin mode”. A single property like isAdmin in one store is not enough for this. You will need a computed property in your store.