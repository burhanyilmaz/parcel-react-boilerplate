## Parcel React Boilerplate

Parceljs ile react boilerplate. Bu boilerplate ile küçük ve orta düzey projelerinizin alt yapısını oluşturabilirsiniz. 

Hızlı Kurulum
-------------

```sh
$ git clone https://github.com/burhanyilmaz/parcel-react-boilerplate
$ cd parcel-react-boilerplate
$ npm install || yarn install
$ npm start || yarn start

Server running at http://localhost:1234

```
Komutlar
--------

|Script|Tanım|
|---|---|
|`npm start`| `localhost:1234` adresinde geliştirme server'ını başlatır.|
|`npm run build`| Uygulamanın production'a hazır halini `./dist`'e çıkarır.|
|`npm run test`| Testleri çalıştırmayı sağlar.|

### Demo
[https://burhanyilmaz.github.io/projects/parcel-react-boilerplate/](https://burhanyilmaz.github.io/projects/parcel-react-boilerplate/)

### Test
Testler daha da genişleticek.

### Dizin Yapısı 
```sh
.
├── package.json
├── public
│   ├── App.js
│   └── index.html
├── readme.md
├── src
│   ├── modules
│   │   └── Counter
│   │       ├── actions
│   │       │   └── CounterActions.js
│   │       ├── constants.js
│   │       ├── container
│   │       │   └── CounterHome
│   │       │       ├── CounterHome.js
│   │       │       └── index.js
│   │       ├── index.js
│   │       ├── reducer
│   │       │   └── CounterReducer.js
│   │       ├── style
│   │       │   └── style.scss
│   │       └── __test__
│   │           └── container
│   │               ├── ParcelHome.test.js
│   │               └── __snapshots__
│   │                   └── ParcelHome.test.js.snap
│   ├── redux
│   │   ├── reducers.js
│   │   └── store.js
│   └── route
│       └── route.js
└── test
    └── bootstrapTests.js

15 directories, 17 files

```