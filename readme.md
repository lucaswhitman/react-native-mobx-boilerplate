### requirements
Node v10.7+
Android Studio
XCode

### setup
`npm install -g react-native-cli`
`yarn install`


### things you might need to do to build
`react-native link`

### if shit goes really south
My build stopped working with a missing bundle.js error. I restarted my mac and it fixed it. :hooray:

### Configuration
Configuragtion is managed with `react-native-config`. You should make a `.env` file for each environment or get it from another dev. There's an example that's checked in, but never check in the real things. Here's how you access the values:

JavaScript:
```
import Config from 'react-native-config'

Config.SERVER_URL;
Config.GOOGLE_API_KEY;
```

Java:
```
public HttpURLConnection getApiClient() {
    URL url = new URL(BuildConfig.SERVER_URL);
}
```

Objective-C
```
#import "ReactNativeConfig.h"

NSString *serverUrl = [ReactNativeConfig envFor:@"SERVER_URL"];
```

### install cocoapods
Install cocoa pods in the ios folder:
`cd ios; sudo gem install cocoapods`
There should be a podfile already

### run ios dev
```
yarn ios:dev
```

### run android dev
```
yarn droid:dev
```

### logging custom errors with BugSnag
```
bugsnag.notify(new Error("Test error"));
```
[Full Docs](https://docs.bugsnag.com/platforms/react-native/)

### todos
- [ ] pre-commit lint + 
- [ ] update react-native 0.58

- "Error: `fsevents` unavailable (this watcher can only be used on Darwin)"
Uninstall 
Adam fixed by:
```
npm r -g watchman
brew install watchman
```