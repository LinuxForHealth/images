FROM docker.io/linuxforhealth/golang:1.13 AS builder

ARG NATS_SERVER_REPOSITORY_URL=https://github.com/nats-io/nats-server.git
ARG NATS_SERVER_RELEASE_TAG=v2.1.7

ENV APP_ROOT=${APP_ROOT}
ENV GOPATH=${GOPATH}

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

COPY --from=builder /tmp/nats-server* /opt/lfh/nats/
RUN chown -R lfh:root ${APP_ROOT}

USER lfh
WORKDIR /opt/lfh/nats

# Expose client, management, cluster and gateway ports
EXPOSE 4222 8222 6222 5222

ENTRYPOINT ["./nats-server"]
CMD ["-c", "nats-server.conf"]
