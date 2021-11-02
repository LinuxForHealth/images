# LinuxForHealth ZooKeeper Alpine image.
#
# The LinuxForHealth Zookeeper Alpine image provides LinuxForHealth Kafka with metadata support.
#
# Build arguments:
# - ZOOKEEPER_RELEASE_URL: The URL for the target ZooKeeper release
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - JAVA_HOME: The Java installation directory. Set in base image.

FROM docker.io/linuxforhealth/base:1.0.0-alpine-3.14.2  AS builder

ARG ZOOKEEPER_RELEASE_URL=http://mirrors.ibiblio.org/apache/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz

RUN apk add -U wget tar gzip && \
    rm -rf /var/lib/apt/lists/*

USER lfh

RUN mkdir -p /tmp/zookeeper
WORKDIR /tmp
RUN wget ${ZOOKEEPER_RELEASE_URL} -O /tmp/zookeeper.tgz && \
    tar -xzf zookeeper.tgz -C zookeeper --strip-components 1
COPY zoo.cfg /tmp/zookeeper/conf/

FROM docker.io/linuxforhealth/openjdk:11-alpine-3.14.2

LABEL maintainer="LinuxForHealth"
LABEL com.linuxforhealth.component="zookeeper"
LABEL name="LinuxForHealth Zookeeper Alpine"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="LinuxForHealth Zookeeper Alpine Image"
LABEL description="Supports the LinuxForHealth Kafka Alpine image"

RUN mkdir -p ${APP_ROOT}/zookeeper
COPY --from=builder tmp/zookeeper ${APP_ROOT}/zookeeper
RUN chgrp -R 0 ${APP_ROOT}/zookeeper && \
    chmod -R g=u ${APP_ROOT}/zookeeper    

USER lfh

# zookeeper
EXPOSE 2181

WORKDIR ${APP_ROOT}/zookeeper

CMD ["sh", "-c", "bin/zkServer.sh start-foreground conf/zoo.cfg"]
