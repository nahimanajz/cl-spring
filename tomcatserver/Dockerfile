FROM openjdk:11
EXPOSE 8080
VOLUME /tmp
ARG JAR_FILE=target/spring-boot-docker.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]