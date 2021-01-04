# Linux for Health Base Image

The Linux for Health Base Image provides a minimal OS with an application directory and non-privileged user.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/base:<image version> .
```
