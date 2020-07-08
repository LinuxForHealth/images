# Linux for Health OpenJDK Image
The Linux for Health OpenJDK Image is used to support java based applications and services.

## Build Command
The OpenJDK image supports a single build argument, `JDK_PACKAGE_NAME`. This argument specifies the name of the RHEL 8 package
used to install the OpenJDK. Supported values include:
- java-1.8.0-openjdk
- java-11-openjdk (default)

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x \
              --build-arg JDK_PACKAGE_NAME=java-1.8.0-openjdk
              -t docker.io/linuxforhealth/openjdk:<image version> .
```
