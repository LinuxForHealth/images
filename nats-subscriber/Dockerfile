# Linux for Health NATS subsciber image.
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
USER lfh

ENTRYPOINT ["node"]
CMD ["nats-subscriber"]
