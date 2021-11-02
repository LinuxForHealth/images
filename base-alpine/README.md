# LinuxForHealth Base Image
The LinuxForHealth Base Image is utilized by LinuxForHealth applications and supporting services.

Provided settings include:
- A root application directory, defined in /opt/lfh
- A non privileged user, user id 1001used to run the containerized application or service

## Build Command
```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/base:<base version>-alpine-<alpine version> .
```
