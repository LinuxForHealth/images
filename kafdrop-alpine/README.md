# Linux for Health Kafdrop Image

The Linux for Health Kafdrop Image supports Obsidian Dynamic's [Kafdrop UI](https://github.com/obsidiandynamics/kafdrop) within a Red Hat UBI container.

# Build

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/kafdrop:latest .
```
