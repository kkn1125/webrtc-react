# webrtc-react

이 저장소는 dondido/webrtc-video-room 저장소 내용을 기반으로 작성되었으며, 기존 react v16에서 현재 일자 (2022-07-06) v18.2.0 으로 마이그레이션하여 작성되었습니다.

## 개발 환경

### Tools

- Visual Studio Code
- yarn 1.22.9
- node 16.15.0

### Server

- axios: 0.27.2
- concurrently: 7.2.2
- cors: 2.8.5
- dotenv: 16.0.1
- express: 4.18.1
- node-fetch: 3.2.6
- nodemon: 2.0.18
- request: 2.88.2
- socket.io: 4.5.1
- webrtc-adapter: 8.1.1

### Client

- @emotion/cache: 11.9.3
- @emotion/core: 11.0.0
- @emotion/css: 11.9.0
- @emotion/react: 11.9.3
- @reduxjs/toolkit: 1.8.3
- @testing-library/jest-dom: 5.16.4
- @testing-library/react: 13.3.0
- @testing-library/user-event: 13.5.0
- axios: 0.27.2
- dotenv: 16.0.1
- http-proxy-middleware: 2.0.6
- react: 18.2.0
- react-dom: 18.2.0
- react-redux: 8.0.2
- react-router-dom: 6.3.0
- react-script: 5.0.1
- redux: 4.2.0
- redux-logger: 3.0.6
- socket.io-client: 4.5.1
- styled-components: 5.3.5
- web-vitals: 2.1.4

## 파일 구조

└┬ 📂 webrtc-react/
　├┬ 📂 client/
　│├─ 📂 public/
　│├┬ 📂 src/
　││├┬ 📂 containers/
　│││├─ 📄 HomePage.js
　│││└─ 📄 RoomPage.js
　││├┬ 📂 reducers/
　│││├─ 📄 index.js
　│││└─ 📄 roomReducer.js
　││├┬ 📂 store/
　│││└─ 📄 store.js
　││├┬ 📂 styles/
　│││└─ 📄 common.js
　││├─ 📄 App.js
　││├─ 📄 App.test.js
　││├─ 📄 index.js
　││├─ 📄 logo.svg
　││├─ 📄 reportWebVitals.js
　││├─ 📄 setupProxy.js
　││└─ 📄 setupTests.js
　│├─ 📄 .env
　│├─ 📄 .gitignore
　│├─ 📄 localhost-key.pem
　│├─ 📄 localhost.pem
　│├─ 📄 package.json
　│├─ 📄 README.md
　│├─ 📄 rootca.crt
　│├─ 📄 rootca.csr
　│├─ 📄 rootca.key
　│├─ 📄 rtc-video-room-cert.pem
　│├─ 📄 rtc-video-room-key.pem
　│└─ 📄 yarn.lock
　├─ 📄 .env
　├─ 📄 .gitignore
　├─ 📄 package.json
　├─ 📄 README.md
　├─ 📄 rtc-video-room-cert.pem
　├─ 📄 rtc-video-room-key.pem
　├─ 📄 server.js
　└─ 📄 yarn.lock

## Licence

MIT Licence

## author

[devkimson::blog](https://kkn1125.github.io)

[chaplet01@gmail.com](mailto:chaplet01@gmail.com)