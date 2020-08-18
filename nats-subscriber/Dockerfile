# Linux for Health NATS subscriber image.
#
# This image provides a NATS subscriber that can receive NATS messages from a local or remote
# Linux for Health instance.  
#
# Environment variables:
# - LFH_NATS_SUBSCRIBER_HOST: The NATS server hostname, IP or service name to connect to.
# - LFH_NATS_SUBSCRIBER_PORT: The NATS server port to connect to.
# - LFH_NATS_SUBSCRIBER_TOPIC: The NATS topic to subscribe to.
#
# In this image, Node.js is installed as /usr/bin/node.

FROM docker.io/linuxforhealth/base:1.0.0

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="nats-subscriber-image"
LABEL name="nats-subscriber-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health NATS Subscriber Image"
LABEL description="Provides messaging support for Linux for Health applications"

RUN microdnf update -y && \
    microdnf install -y nodejs && \
    microdnf clean all

RUN mkdir -p ${APP_ROOT}/nats-subscriber
WORKDIR ${APP_ROOT}/nats-subscriber
COPY nats-subscriber.js .
COPY package.json .
RUN npm install

ENV LFH_NATS_SUBSCRIBER_HOST=nats-server
ENV LFH_NATS_SUBSCRIBER_PORT=4222
ENV LFH_NATS_SUBSCRIBER_TOPIC=lfh-events

RUN chown -R lfh:root ${APP_ROOT}

RUN chgrp -R 0 ${APP_ROOT}/nats-subscriber && \
    chmod -R g=u ${APP_ROOT}/nats-subscriber

USER lfh

ENTRYPOINT ["node"]
CMD ["nats-subscriber"]
