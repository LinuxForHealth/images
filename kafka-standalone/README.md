# Linux for Health Kafka Standalone Image

The Linux for Health Kafka Standalone Image is intended for non-production use.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/kafka-standalone:<image version> .
```

## Environment Variables

ZooKeeper and Broker connectivity is configured at runtime using environment variables. The table below
lists the supported variables, the underlying Kafka server property, and the default value.

| Variable Name | Kafka Server Property | Default Value |
| ------------- | --------------------- | ------------- |
| KAFKA_ZOOKEEPER_CONNECT | zookeeper.connect | zookeeper:2181 |
| KAFKA_LISTENERS | listeners | PLAINTEXT://:9092 |
| KAFKA_ADVERTISED_LISTENERS | advertised.listeners | PLAINTEXT://localhost:9092 |
| KAFKA_LISTENER_SECURITY_PROTOCOL_MAP | listener.security.protocol.map | PLAINTEXT:PLAINTEXT |
| KAFKA_INTER_BROKER_LISTENER_NAME | inter.broker.listener.name | PLAINTEXT |
