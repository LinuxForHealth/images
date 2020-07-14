#!/bin/sh
# lfh-kafka-start.sh
# runs the Kafka Standalone server

${APP_ROOT}/kafka/bin/kafka-server-start.sh ${APP_ROOT}/kafka/config/server.properties \
    --override zookeeper.connect=${KAFKA_ZOOKEEPER_CONNECT} \
    --override listeners=${KAFKA_LISTENERS} \
    --override advertised.listeners=${KAFKA_ADVERTISED_LISTENERS} \
    --override listener.security.protocol.map=${KAFKA_LISTENER_SECURITY_PROTOCOL_MAP} \
    --override inter.broker.listener.name=${KAFKA_INTER_BROKER_LISTENER_NAME}