# Linux for Health Golang Image

The Linux for Health OpenJDK Image is used to support golang based applications and services.

## Build Commannd

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x \
              -t docker.io/linuxforhealth/golang:<image version> .
```

