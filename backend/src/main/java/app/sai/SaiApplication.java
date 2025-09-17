package app.sai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SaiApplication {
    public static void main(String[] args) {
        SpringApplication.run(SaiApplication.class, args);
    }
}
