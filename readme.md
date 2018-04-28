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
|`npm run build`| Uygulamanun production'a hazır halini `./dist`'e çıkarır.|
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
└── src
    ├── redux
    │   ├── reducers.js
    │   └── store.js
    ├── route
    │   └── route.js
    └── scenes
        └── Parcel
            ├── actions
            │   └── ParcelActions.js
            ├── constants.js
            ├── container
            │   └── ParcelHome
            │       ├── index.js
            │       └── ParcelHome.js
            ├── index.js
            ├── reducer
            │   └── ParcelReducer.js
            └── style
                └── style.css

```