package app.sai.user.api.dto;

public record UserRes(
        Long id, String name, String email, String role, Boolean active
) {}
