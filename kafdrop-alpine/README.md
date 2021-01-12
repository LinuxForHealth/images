# Linux for Health Kafdrop Image

The Linux for Health Kafdrop Alpine Image supports Obsidian Dynamic's [Kafdrop UI](https://github.com/obsidiandynamics/kafdrop) within an Alpine container.

# Build

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/kafdrop-alpine:latest .
```
