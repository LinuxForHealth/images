# LinuxForHealth Kafka image.
#
# The LinuxForHealth Kafka Image provides data storage for LinuxForHealth connect nodes.
# 
# Zookeeper (not bundled) is configured using the KAFKA_ZOOKEEPER_CONNECT environment variable.
#
# Build arguments:
# - KAFKA_RELEASE_URL: The URL for the target Kafka release
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - JAVA_HOME: The Java installation directory. Set in base image.
# - KAFKA_ZOOKEEPER_CONNECT: Specifies the Zookeeper host and port (maps to zookeeper.connect property)
# - KAFKA_LISTENERS: Broker listening addresses (maps to listeners property)
# - KAFKA_ADVERTISED_LISTENERS:  The Kafka listener metadata passed back to clients (maps to advertised.listeners)
# - KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: Specifies the protocol used for each listener (maps to listener.security.protocol.map)
# - KAFKA_INTER_BROKER_LISTENER_NAME:  The listener used for internal connections (inter.broker.listener.name)

FROM docker.io/linuxforhealth/base:1.0.0-alpine-3.14.2  AS builder

ARG KAFKA_RELEASE_URL=https://apache.osuosl.org/kafka/3.0.0/kafka_2.13-3.0.0.tgz

RUN apk add -U wget tar gzip && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /tmp/kafka
WORKDIR /tmp
RUN wget ${KAFKA_RELEASE_URL} -O /tmp/kafka.tgz && \
    tar -xzf kafka.tgz -C kafka --strip-components 1
COPY lfh-kafka-start.sh /tmp/kafka/bin

FROM docker.io/linuxforhealth/openjdk:11-alpine-3.14.2

LABEL maintainer="LinuxForHealth"
LABEL com.linuxforhealth.component="kafka"
LABEL name="LinuxForHealth Kafka Alpine"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="LinuxForHealth Kafka Alpine Image"
LABEL description="Provides data storage for LinuxForHealth connect nodes"

ENV KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
ENV KAFKA_LISTENERS=PLAINTEXT://:9092
ENV KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
ENV KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=PLAINTEXT:PLAINTEXT
ENV KAFKA_INTER_BROKER_LISTENER_NAME=PLAINTEXT

RUN mkdir -p ${APP_ROOT}/kafka
COPY --from=builder tmp/kafka ${APP_ROOT}/kafka
RUN chmod u+x ${APP_ROOT}/kafka/bin/lfh-kafka-start.sh && \
    chown lfh:root -R ${APP_ROOT}/kafka && \
    chgrp -R 0 ${APP_ROOT}/kafka && \
    chmod -R g=u ${APP_ROOT}/kafka    

USER lfh

# kafka brokers
EXPOSE 9092 9094

WORKDIR ${APP_ROOT}

CMD ["sh", "-c", "${APP_ROOT}/kafka/bin/lfh-kafka-start.sh"]
