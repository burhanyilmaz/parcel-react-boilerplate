## Parcel React Boilerplate

Parceljs ile React Boilerplate

### Kurulum

```sh
$ git clone https://github.com/burhanyilmaz/parcel-react-boilerplate
$ cd parcel-react-boilerplate
$ npm install || yarn install
$ npm start || yarn start
```

### Dosya Yapısı 
```
.
├── package.json
├── public
│   ├── App.js
│   └── index.html
├── readme.md
└── src
    ├── config
    │   ├── redux
    │   │   ├── reducers.js
    │   │   └── store.js
    │   └── route
    │       └── route.js
    └── scenes
        └── Parcel
            ├── actions
            │   └── ParcelActions.js
            ├── constants.js
            ├── container
            │   └── ParcelHome
            │       └── ParcelHome.js
            ├── index.js
            ├── reducer
            │   └── ParcelReducer.js
            └── style
                └── style.css

```