# Linux for Health OpenJDK Image

The Linux for Health OpenJDK Image supports java-based applications and services.

## Build Command

The OpenJDK image supports a single build argument, `JDK_PACKAGE_NAME`. This argument specifies the name of the Alpine package used to install OpenJDK. Supported values include:
- openjdk8-jre
- openjdk11-jre-headless (default)

To build for JDK 1.8:
```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              --build-arg JDK_PACKAGE_NAME=openjdk8-jre \
              -t docker.io/linuxforhealth/openjdk-alpine:<image version> .
```

To build for Java 11:
```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/openjdk-alpine:<image version> .
```
