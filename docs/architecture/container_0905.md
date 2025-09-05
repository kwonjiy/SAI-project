# 02-container.md
```markdown
# Container Diagram (V1, Full Names)

```mermaid
flowchart TB
  subgraph Frontend [React Web (PWA)]
    UI[User Interface & Router]
    STATE[State Management]
    SERVICE_WORKER[Service Worker (오프라인 캐시 & 푸시 알림)]
    INDEXED_DB[IndexedDB / CacheStorage]
    UI-->STATE
    STATE<-->INDEXED_DB
    UI<-->SERVICE_WORKER
  end

  subgraph Backend [Spring Boot 3 API]
    CONTROLLER[REST Controller]
    SECURITY[Spring Security (JWT / OAuth2)]
    SERVICE_LAYER[Business Services]
    REPOSITORY[Repository (JPA / QueryDSL)]
    FILE_SERVICE[File Handling Service]
    NOTIFICATION_SERVICE[Notification Service]
    CONTROLLER-->SECURITY-->SERVICE_LAYER-->REPOSITORY
    CONTROLLER-->FILE_SERVICE
    SERVICE_LAYER-->NOTIFICATION_SERVICE
  end

  DATABASE[(PostgreSQL Database)]
  CACHE[(Redis Cache)]
  OBJECT_STORAGE[(S3 or MinIO)]
  PUSH_SERVICE[(Firebase Cloud Messaging)]
  MAPS[(Google Maps API)]

  STATE<-->CONTROLLER
  Backend<-->DATABASE
  Backend<-->CACHE
  FILE_SERVICE<-->OBJECT_STORAGE
  NOTIFICATION_SERVICE-->PUSH_SERVICE
  UI-.지도 요청.->MAPS
