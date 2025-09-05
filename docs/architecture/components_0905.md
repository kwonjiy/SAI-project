# 03-components.md
```markdown
# Component Diagram (Spring Boot Internals, V1)

```mermaid
flowchart TB
  subgraph Web[API Web Layer]
    AUTH_CTRL[AuthController]
    USER_CTRL[UserController]
    ROUTINE_CTRL[RoutineController]
    PLACE_CTRL[PlaceController]
    CAL_CTRL[CalendarController]
    SHARE_CTRL[ShareController]
    FILE_CTRL[FileController]
  end

  subgraph Security[Security Layer]
    SPRING_SECURITY[Spring Security Config]
    TOKEN_PROVIDER[JwtProvider]
    AUTH_SUCCESS_HANDLER[OAuth2SuccessHandler]
  end

  subgraph Service[Domain Service Layer]
    AUTH_SVC[AuthService]
    USER_SVC[UserService]
    ROUTINE_SVC[RoutineService]
    PLACE_SVC[PlaceService]
    CAL_SVC[CalendarService]
    SHARE_SVC[ShareService]
    NOTI_SVC[NotificationService]
    FILE_SVC[FileService]
  end

  subgraph Persistence[Persistence Layer]
    USER_REPO[UserRepository]
    COUPLE_REPO[CoupleRepository]
    ROUTINE_REPO[RoutineRepository]
    ROUTINE_LOG_REPO[RoutineLogRepository]
    FOLDER_REPO[FolderRepository]
    PLACE_REPO[PlaceRepository]
    PLACE_LOG_REPO[PlaceLogRepository]
    CAL_EVENT_REPO[CalendarEventRepository]
    CYCLE_PROFILE_REPO[CycleProfileRepository]
    CYCLE_LOG_REPO[CycleLogRepository]
  end

  subgraph Infra[Infra Clients]
    DB[(PostgreSQL)]
    REDIS[(Redis)]
    S3[S3/MinIO Client]
    FCM[FCM Client]
    OAUTH_PROVIDERS[OAuth2 Providers]
  end
