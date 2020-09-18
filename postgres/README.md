# Linux for Health PostgreSQL Server

The Linux for Health PostgreSQL server is intended for non-production use.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64 \
              -t docker.io/linuxforhealth/postgresql:<image version> .
```

## Environment Variables

PostgreSQL is configured at runtime using environment variables. The table below
lists the supported variables and the default value.

| Variable Name | Default Value        |
| ------------- | -------------------- |
| PGDATA        | /var/lib/pgsql/data/ |

## Container Build ARGs

This container supports the following ARGs to customize PostgreSQL version installed therein.

| Name | Description | Default Value        |
| ---- | ---- | ---- |
| POSTGRES_RELEASE_URL | Url of the PostgreSQL rpm to install. | https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm |
| POSTGRES_PACKAGE | The PostgreSQL package name to install. | postgresql12-server |
| POSTGRES_ENCODING | The character set or encoding, used in database server | UTF8 |
