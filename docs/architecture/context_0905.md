# Context Diagram (V1)

**Scope**: React Web (PWA) ↔ Spring Boot API ↔ PostgreSQL, Web Push (FCM), OAuth2 (Google/Kakao/Naver), future Android packaging.

```mermaid
flowchart LR
  U[사용자 (모바일/PC 브라우저)]
  CDN[정적 호스팅/CDN]
  FE[웹앱: React (PWA)]
  API[백엔드 API: Java (Spring Boot)]
  DB[(PostgreSQL)]
  AUTH[OAuth2 Providers\nGoogle / Kakao / Naver]
  FCM[Firebase Cloud Messaging]
  SW[Service Worker\n(PWA 구성요소)]
  GM[지도/지오코딩 API (옵션)]
  subgraph ANDROID[향후: 안드로이드 앱]
    TWA[TWA (Trusted Web Activity)]
    CAP[Capacitor (웹+네이티브 브릿지)]
  end
  U --> FE
  CDN --> FE
  FE <--> API
  API <--> DB
  FE -. 소셜 로그인 시작 .-> AUTH
  AUTH -. 콜백 .-> API
  FE <-. 웹푸시 .-> SW
  API --> FCM
  FE -. 지도/지오코딩 .-> GM
  ANDROID -.웹을 포장해 스토어 배포.-> FE
