import 'dotenv/config';

export default {
  "expo": {
    "name": "ChatApp",
    "slug": "ChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyAKOvEGx3oUKmvffMLbo7dpVqwJ5oY9Saw",
  authDomain: "chat-app-636fa.firebaseapp.com",
  projectId: "chat-app-636fa",
  storageBucket: "chat-app-636fa.appspot.com",
  messagingSenderId: "741907176493",
  appId: "1:741907176493:web:f5f4345a8b1f44cf42aca4",
  measurementId: "G-ZK64Q3B9N7"
    }
  }
}