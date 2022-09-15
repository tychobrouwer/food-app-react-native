# Install
1. Make sure node.js is installed
2. Download the expo go app in the AppStore
3. Run ```npm install```.
4. In ```node_modules/expo/AppEntry.js``` change the App import to ```'../../src/App'```.
5. Run ```npm start```.
6. Scan the QR code from the console with your phone (for IOS with the camera app).

# Structure
|-- src\
|    |-- components\
|    |    |-- big-btn\
|    |    |    |-- index.js\
|    |    |-- big-text-input\
|    |    |    |-- index.js\
|    |    |-- global-state\
|    |    |    |-- index.js\
|    |    |-- screen-default\
|    |    |    |-- index.js\
|    |-- screens\
|    |    |-- home\
|    |    |    |-- index.js\
|    |    |    |-- styles.js\
|    |    |-- login\
|    |    |    |-- index.js\
|    |    |    |-- styles.js\
|    |    |-- signup\
|    |    |    |-- index.js\
|    |    |    |-- styles.js\
|    |    |-- splash\
|    |    |    |-- index.js\
|    |    |    |-- styles.js\
|    |-- styles\
|    |    |-- index.js\
|    |-- utils\
|    |    |-- authentication\
|    |    |    |-- index.js\
|    |    |-- capitalize\
|    |    |    |-- index.js\
|    |    |-- validate-email\
|    |    |    |-- index.js\
|    |-- App.js\

├── cats_vs_dogs\
│   ├── test_cat_dog\
│   ├── testing\
│   │   ├── cats\
│   │   └── dogs\
│   └── training\
│       ├── cats\
│       └── dogs\
└── PetImages\
    ├── Cat\
    └── Dog\