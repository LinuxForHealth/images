# Linux for Health Container Images
Container images for Linux for Health applications and supporting services.

Containers include:

- Base image built from [Red Hat's UBI image](https://developers.redhat.com/products/rhel/ubi/)
- [OpenJDK](https://openjdk.java.net/) image to support Java based applications
- [Golang](https://golang.org/) image to support Golang based applications
- [Kafka](https://kafka.apache.org/) and [Zookeeper](https://zookeeper.apache.org/) for real time streaming and durable message persistence
- [NATS](https://docs.nats.io/nats-streaming-concepts/intro) and a NATS subscriber for data streaming and events notifications
 
## Multi-Architecture Build Process
The build process leverages the multi-architecture features of build kit as provided through Docker's [buildx](https://docs.docker.com/buildx/working-with-buildx/) CLI.

Architectures supported include:
- linux/amd64
- linux/s390x
- linux/arm64

Images are built using a command similar to:

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/<image name>:<image version> .
```

Specific build commands are documented in the README for each image.
