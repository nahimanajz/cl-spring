FROM openjdk:8-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} springInit-0.0.1-SNAPSHOT-plain.jar
ENTRYPOINT ["java", "-jar", "springInitApplication.jar"]