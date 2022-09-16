This is a project for the course Engineering Design - group 172. To use the app follow the instructions below.

# Install
1. Make a GitHub account
1. Install git (download current [here](https://git-scm.com/downloads)).
   - Make sure during installation ```add to path``` is checked.
   - After installation run ```git config --global user.name "Your GitHub name here"```
   - An run ```git config --global user.email "Your GitHub email here"```
2. Install node.js (download current [here](https://nodejs.org/en/)).
3. Download the expo go app in the AppStore or PlayStore.
4. Make a folder for the project on your pc (if no spaces it is easier).
4. Run ```cd path/project/directory```.
5. Run ```git init```.
5. Run ```git clone https://github.com/TychoBrouwer/Food_App_React_Native.git```.
5. Run ```npm install```.
6. In ```node_modules/expo/AppEntry.js``` change the App import to ```'../../src/App'```.
7. Run ```npm start```.
8. Scan the QR code from the console with your phone (for IOS with the camera app).

# TO DO's (and thoughts)
- Make database with REST API (express js?) (with mongodb?)
- Make authentication via REST API
- Program sign up logic
- Reset password logic
- Change password logic
- Link user database to household database

# Folder Explanation
The "assets" folder is designated for images or fonts used in the app like the icon of the app in different sizes. The "src" folder contains the main part of the code. The "App.js" file is the entry file, here the app starts, it contains the part of the code that switches between the screens. Within the "src" folder there are multiple folders, the most important of which is the "screens" folder. This folder contains the different screens or pages of the app. Furthermore the components folder contains, as the name implies, React components. The most important reason for separating these components is so they can be easily reused in multiple places and pages. The "utils" folder contains smaller parts of the code that have one function to perform, such as the "validate-email", which validates if the inputted string is a valid email. Finally the styles folder contains more general style sheets for the app. The "app.json" file in the root directory contains information about the app for the operating system, such as its name, version, and icon. The remaining files in the root directory are supporting files for building and running.

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
|    |    |-- loader
|    |    |-- screen-wrapper
|    |-- screens
|    |    |-- home
|    |    |-- signin
|    |    |-- signup
|    |    |-- splash
|    |-- styles
|    |-- utils
|    |    |-- capitalize
|    |    |-- secure-store
|    |    |-- validate-email
|    |-- App.js
|-- app.json
|-- babel.config.js
|-- package-lock.json
|-- package.json
```