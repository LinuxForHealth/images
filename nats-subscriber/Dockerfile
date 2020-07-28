FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

ENV LFH_NATS_SUBSCRIBER_HOST=nats-server
ENV LFH_NATS_SUBSCRIBER_PORT=4222
ENV LFH_NATS_SUBSCRIBER_TOPIC=lfh-events

CMD node nats-subscriber
