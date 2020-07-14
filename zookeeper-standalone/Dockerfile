# Linux for Health ZooKeeper "stand-alone" iamge.
#
# This image provides a "stand-alone" ZooKeeper implementation for non-production use.
#
# Build arguments:
# - ZOOKEEPER_RELEASE_URL: The URL for the target ZooKeeper release
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - JAVA_HOME: The Java installation directory. Set in base image.

FROM docker.io/linuxforhealth/base:1.0.0  AS builder

ARG ZOOKEEPER_RELEASE_URL=http://mirrors.ibiblio.org/apache/zookeeper/zookeeper-3.6.1/apache-zookeeper-3.6.1-bin.tar.gz

RUN microdnf install -y wget tar gzip && \
    microdnf clean all

USER lfh

RUN mkdir -p /tmp/zookeeper
WORKDIR /tmp
RUN wget ${ZOOKEEPER_RELEASE_URL} -O /tmp/zookeeper.tgz && \
    tar -xzf zookeeper.tgz -C zookeeper --strip-components 1
COPY zoo.cfg /tmp/zookeeper/conf/

FROM docker.io/linuxforhealth/openjdk:11

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="zookeeper-standalone"
LABEL name="zookeeper-standalone"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="ZooKeeper Standalone Deployment for Linux For Health"
LABEL description="Provides a standalone ZooKeeper deployment for non-production use"

ENV APP_ROOT=${APP_ROOT}
ENV JAVA_HOME=${JAVA_HOME}

USER lfh

RUN mkdir -p /opt/lfh/zookeeper
COPY --from=builder tmp/zookeeper /opt/lfh/zookeeper

# zookeeper
EXPOSE 2181

WORKDIR ${APP_ROOT}/zookeeper

CMD ["sh", "-c", "bin/zkServer.sh start-foreground conf/zoo.cfg"]
