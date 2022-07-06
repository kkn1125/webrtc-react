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

<div id="app" class="p-2 border rounded-3 display-board">
  <div class="parsed-data" style="font-size: 16px">
    └┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">webrtc-react/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">client/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">public/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">src/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">containers/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││├─
    <span style="font-size: 16px">
      📄
      <span class="">HomePage.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││└─
    <span style="font-size: 16px">
      📄
      <span class="">RoomPage.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">reducers/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││├─
    <span style="font-size: 16px">
      📄
      <span class="">index.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││└─
    <span style="font-size: 16px">
      📄
      <span class="">roomReducer.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">store/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││└─
    <span style="font-size: 16px">
      📄
      <span class="">store.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├┬
    <span style="font-size: 16px">
      📂
      <span style="border-bottom: 1px solid gray; font-weight: 600">
        <span class="">styles/</span>
      </span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│││└─
    <span style="font-size: 16px">
      📄
      <span class="">common.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">App.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">App.test.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">index.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">logo.svg</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">reportWebVitals.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││├─
    <span style="font-size: 16px">
      📄
      <span class="">setupProxy.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　││└─
    <span style="font-size: 16px">
      📄
      <span class="">setupTests.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">.env</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">.gitignore</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">localhost-key.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">localhost.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">package.json</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">README.md</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">rootca.crt</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">rootca.csr</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">rootca.key</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">rtc-video-room-cert.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│├─
    <span style="font-size: 16px">
      📄
      <span class="">rtc-video-room-key.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　│└─
    <span style="font-size: 16px">
      📄
      <span class="">yarn.lock</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">.env</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">.gitignore</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">package.json</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">README.md</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">rtc-video-room-cert.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">rtc-video-room-key.pem</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　├─
    <span style="font-size: 16px">
      📄
      <span class="">server.js</span>
    </span>
  </div>
  <div class="parsed-data" style="font-size: 16px">
    　└─
    <span style="font-size: 16px">
      📄
      <span class="">yarn.lock</span>
    </span>
  </div>
</div>

## Licence

MIT Licence

## author

[devkimson::blog](https://kkn1125.github.io)

[chaplet01@gmail.com](mailto:chaplet01@gmail.com)
