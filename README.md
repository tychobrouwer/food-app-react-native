# Install
1. Make sure node.js is installed
2. Download the expo go app in the AppStore
3. Run ```npm install```.
4. In ```node_modules/expo/AppEntry.js``` change the App import to ```'../../src/App'```.
5. Run ```npm start```.
6. Scan the QR code from the console with your phone (for IOS with the camera app).

# Project Structure
```
|-- assets
|    |-- adaptive-icon.png
|    |-- favicon.png
|    |-- icon.png
|    |-- splash.png
|-- src
|    |-- components
|    |    |-- big-btn
|    |    |-- big-text-input
|    |    |-- global-state
|    |    |-- screen-default
|    |-- screens
|    |    |-- home
|    |    |-- login
|    |    |-- signup
|    |    |-- splash
|    |-- styles
|    |-- utils
|    |    |-- authentication
|    |    |-- capitalize
|    |    |-- validate-email
|    |-- App.js
|-- app.json
|-- babel.config.js
|-- package.json
```