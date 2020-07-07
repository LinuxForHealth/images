# Linux for Health Base Image
The Linux for Health Base Image provides a minimal OS with an application directory and non-privileged user.

## Build Command
```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x \
              -t docker.io/linuxforhealth/base:<image version> .
```