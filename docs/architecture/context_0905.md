```mermaid
flowchart LR
  user[사용자 (모바일/PC 브라우저)]
  cdn[정적 호스팅/CDN]
  fe[웹앱: React (PWA)]
  api[백엔드 API: Java (Spring Boot)]
  db[(PostgreSQL)]
  auth[OAuth2 Providers<br/>Google / Kakao / Naver]
  fcm[Firebase Cloud Messaging]
  sw[Service Worker (PWA 구성요소)]
  gm[지도/지오코딩 API (옵션)]

  subgraph android[향후: 안드로이드 앱]
    twa[TWA (Trusted Web Activity)]
    cap[Capacitor (웹+네이티브 브릿지)]
  end

  user --> fe
  cdn --> fe
  fe <--> api
  api <--> db
  fe -. 소셜 로그인 시작 .-> auth
  auth -. 콜백 .-> api
  fe <-. 웹푸시 .-> sw
  api --> fcm
  fe -. 지도/지오코딩 .-> gm
  android -.웹을 포장해 스토어 배포.-> fe
