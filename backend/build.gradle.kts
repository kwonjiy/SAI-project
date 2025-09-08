//plugins {
//    id("java")
//}
//
//group = "org.example"
//version = "1.0-SNAPSHOT"
//
//repositories {
//    mavenCentral()
//}
//
//dependencies {
//    testImplementation(platform("org.junit:junit-bom:5.10.0"))
//    testImplementation("org.junit.jupiter:junit-jupiter")
//    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
//}
//
//tasks.test {
//    useJUnitPlatform()
//}
plugins {
    id("org.springframework.boot") version "3.3.4"
    id("io.spring.dependency-management") version "1.1.6"
    java
}

group = "app.sai"
version = "0.1.0"

java { toolchain { languageVersion.set(JavaLanguageVersion.of(21)) } }

repositories { mavenCentral() }

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.test { useJUnitPlatform() }
