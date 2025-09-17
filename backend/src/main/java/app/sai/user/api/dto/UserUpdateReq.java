package app.sai.user.api.dto;

// 부분 수정용 → null이면 미변경
public record UserUpdateReq(
        String name,
        String email,
        String role,
        Boolean active
) {}
