# Linux for Health Kafka "stand-alone" iamge.
#
# This image provides a "stand-alone" bundled Kafka/ZooKeeper implementation for non-production use.
#
# Build arguments:
# - KAFKA_RELEASE_URL: The URL for the target Kafka release
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - USER_ID: The USER ID used for the non-privileged "application" account. Set in base image.
# - JAVA_HOME: The Java installation directory. Set in base image.
# - STARTUP_INTERVAL: The number of seconds to wait between starting ZooKeeper and Kafka. Defaults to 5 seconds.

FROM registry.access.redhat.com/ubi8/ubi-minimal:latest AS builder

ARG KAFKA_RELEASE_URL=https://apache.osuosl.org/kafka/2.5.0/kafka_2.12-2.5.0.tgz

RUN microdnf install -y wget tar gzip && \
    microdnf clean all

USER 1001

RUN mkdir -p /tmp/kafka
WORKDIR /tmp
RUN wget ${KAFKA_RELEASE_URL} -O /tmp/kafka.tgz && \
    tar -xzf kafka.tgz -C kafka --strip-components 1

FROM docker.io/linuxforhealth/openjdk:11

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="kafka-standalone"
LABEL name="kafka-standalone"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Kafka Standalone Deployment for Linux For Health"
LABEL description="Provides a standalone deployment for non-production use"

ENV APP_ROOT=${APP_ROOT}
ENV USER_ID=${USER_ID}
ENV JAVA_HOME=${JAVA_HOME}
ENV STARTUP_INTERVAL=5

USER 1001

RUN mkdir -p /opt/lfh/kafka
COPY --from=builder tmp/kafka /opt/lfh/kafka

# zookeeper
EXPOSE 2181

# kafka broker
EXPOSE 9092

WORKDIR ${APP_ROOT}/kafka

CMD ["sh", "-c", "bin/zookeeper-server-start.sh -daemon config/zookeeper.properties && sleep ${STARTUP_INTERVAL} && bin/kafka-server-start.sh config/server.properties"]
