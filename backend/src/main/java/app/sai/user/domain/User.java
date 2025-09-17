package app.sai.user.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
@Entity
@Table(
        name = "users",
        uniqueConstraints = @UniqueConstraint(name="uk_users_email", columnNames="email"),
        indexes = @Index(name="idx_users_email", columnList="email")
)
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, length=120)
    private String name;

    @Column(nullable=false, length=190)
    private String email;

    @Column(nullable=false, length=60)
    private String role;      // USER/ADMIN 등

    @Column(nullable=false)
    private Boolean active;
}
