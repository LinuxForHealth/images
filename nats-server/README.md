# Linux for Health NATS Server Image

The Linux for Health NATS Server Image provides event notifications via message streaming.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x \
              -t docker.io/linuxforhealth/nats-server:<image version> .
```