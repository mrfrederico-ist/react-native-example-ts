# React Native Expo for Web, Desktop, Android and IOS

## Overview

An easy and simple way to configure `react-native` for `web, desktop, android and ios`.

## Quick start
```
git clone --depth 1 https://github.com/mrfrederico-ist/starter-react-native-expo-all-ts.git
cd starter-react-native-expo-all-ts
yarn install
```

### Required only for Web and Desktop
```
install react@16.0.0-alpha.6 manually in the folder node_modules/react-native-web/node_modules
```

### Web
```
yarn tsc-watch
# in another terminal
yarn web
```
Open `http://localhost:3000/`

### Desktop with electron

```
yarn tsc-watch
# in another terminal
yarn web
# in another terminal
cd electron
yarn install
yarn start
```

### Android

```
yarn start
# in another terminal
yarn android (simulator)
```

### IOS

```
yarn start
# in another terminal
yarn ios (simulator)
```

## CONTRIBUTING

PR, stars ✭ and issue reporting, welcome!

## LICENSE

MIT
