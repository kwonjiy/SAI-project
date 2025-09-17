package app.sai.user.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserCreateReq(
        @NotBlank String name,
        @Email @NotBlank String email,
        @NotBlank String role
) {}
