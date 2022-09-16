This is a project for the course Engineering Design - group 172. Instructions on how to use GitHub and React Native app are below.

# Installation
1. Make a GitHub account.
2. Fork the repository at ```https://github.com/TychoBrouwer/Food_App_React_Native.git```.
   - In the top right click **Fork**.
   - Leave the default settings and **Create fork**.
3. Install git (download current [here](https://git-scm.com/downloads)).
   - Make sure during installation **add to path** is checked.
   - After installation run ```git config --global user.name "Your GitHub name here"```.
   - An run                 ```git config --global user.email "Your GitHub email here"```.
4. Install node.js (download current [here](https://nodejs.org/en/)).
   - Select **64-bit Git for Windows Setup** under **Standalone Installer**.
5. Download the **Expo Go** app in the AppStore or PlayStore.
6. Make a folder for the project on your pc (no spaces to make it easier).
7. Run ```cd path/project/directory```.
8. Run ```git init```.
9. Run ```git remote add origin https://github.com/"Your GitHub username"/Food_App_React_Native.git```.
10. Run ```git remote add upstream https://github.com/TychoBrouwer/Food_App_React_Native.git```.
11. Run ```git pull origin main```.
12. Run ```npm install```.
13. In ```node_modules/expo/AppEntry.js``` change the App import to ```'../../src/App'```.
14. Run ```npm start``` to start the Expo server.
15. Scan the QR code from the console with your phone (for IOS with the camera app).

## To push updates to your fork repository
1. Run ```git add .```.
2. Run ```git commit -m "message about what is changed"```.
2. Run ```git git push origin main```.

## To pull updates from the original repository
11. Run ```git pull upstream main```.

## To push updates to the original repository
1. Go to ```https://github.com/"Your GitHub username"/Food_App_React_Native.git```.
2. Navigate to **Pull requests**.
3. Press on **New pull request**.
4. You can leave the default settings and press **Create pull request**. 
5. Give the request a title and maybe a comment and press **Create pull request**. 

# App
The app is written in [React Native](https://reactnative.dev/docs/getting-started) using [Expo Go](https://docs.expo.dev/). React Native uses [React](https://reactjs.org/docs/getting-started.html), which is a framework for JavaScript. The links are to their documentation, if something is unclear just search Google for **React Native "thing you want to do"** and you will probably find some guide or forum. Other resources that are useful are [W3schools](https://www.w3schools.com/js/), [Stack Overflow](https://stackoverflow.com/), the [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript), and for specific npm packages [npm](https://www.npmjs.com/).

Expo Go is used to run the project on your own device, without having to submit the app to the AppStore or PlayStore. Expo Go can also hot reload the app as soon as changes where made to the code.

## TO DO's (and thoughts)
- Make REST API (express js?) with database (SQLite?).
- Make authentication via REST API.
- Program sign up logic.
- Reset password logic.
- Change password logic.
- Link user database to household database.

## Folder Explanation
The **assets** folder is designated for images or fonts used in the app like the icon of the app in different sizes. The **src** folder contains the main part of the code. The **App.js** file is the entry file, here the app starts, it contains the part of the code that switches between the screens. Within the **src** folder there are multiple folders, the most important of which is the **screens** folder. This folder contains the different screens (or pages) of the app. Furthermore the components folder contains, as the name implies, React components. The most important reason for separating these components is so they can be easily reused in multiple places and pages. The **utils** folder contains smaller parts of the code that have one function to perform, such as the **validate-email**, which validates if the inputted string is a valid email. Finally the styles folder contains more general style sheets for the app. The **app.json** file in the root directory contains information about the app for the operating system, such as its name, version, and icon. The remaining files in the root directory are supporting files for building and running.

## Project Structure
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