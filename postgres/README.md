# Linux for Health PostgreSQL Server

The Linux for Health PostgreSQL server is intended for non-production use.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/postgresql:<image version> .
```

## Environment Variables

PostgreSQL is configured at runtime using environment variables. The table below
lists the supported variables and the default value.

| Variable Name | Default Value        |
| ------------- | -------------------- |
| PGDATA        | /var/lib/pgsql/data/ |
