package hu.unideb.inf.restaurant.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiKeyConfig {
    private static final Dotenv dotenv = Dotenv.configure().load();
    public static String getJwtKey() {
        return dotenv.get("JWT_KEY");
    }
}
