# Linux for Health nats-server image.
#
# This image provides nats-server node for non-production use.
#
# Build arguments:
# - NATS_SERVER_REPOSITORY_URL: The nats-server git repo URL
# - NATS_SERVER_RELEASE: The nats-server git release tag
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - GOPATH: Sets the golang "workspace" for the image to the $APP_ROOT. Set in base image

FROM docker.io/linuxforhealth/golang:1.13 AS builder

ARG NATS_SERVER_REPOSITORY_URL=https://github.com/nats-io/nats-server.git
ARG NATS_SERVER_RELEASE_TAG=v2.1.7

RUN mkdir -p /tmp/nats-server
RUN mkdir -p ${GOPATH}/{bin,pkg,src}
RUN mkdir -p ${GOPATH}/src/github.com/nats-io

RUN microdnf install -y git && \
    microdnf clean all

WORKDIR ${GOPATH}/src/github.com/nats-io
RUN git clone --branch ${NATS_SERVER_RELEASE_TAG} ${NATS_SERVER_REPOSITORY_URL}

WORKDIR ${GOPATH}/src/github.com/nats-io/nats-server
RUN CGO_ENABLED=0 GO111MODULE=off go build -v -a -tags netgo -installsuffix netgo -ldflags "-s -w -X github.com/nats-io/nats-server/server.gitCommit=`git rev-parse --short HEAD`" -o /tmp/nats-server
RUN cp ${GOPATH}/src/github.com/nats-io/nats-server/docker/nats-server.conf /tmp/nats-server.conf

FROM docker.io/linuxforhealth/base:1.0.0

RUN mkdir -p ${APP_ROOT}/nats

COPY --from=builder /tmp/nats-server* ${APP_ROOT}/nats/
RUN chown -R lfh:root ${APP_ROOT}

USER lfh
WORKDIR ${APP_ROOT}/nats

# Expose client, management, cluster and gateway ports
EXPOSE 4222 8222 6222 5222

ENTRYPOINT ["./nats-server"]
CMD ["-c", "nats-server.conf"]
