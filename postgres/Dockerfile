# Linux for Health PostgreSQL image.
#
# This image serves PostgreSQL within a Red Hat UBI container.
# Sample PostgreSQL Dockerfile: https://docs.docker.com/engine/examples/postgresql_service/
#
# Build arguments:
# - POSTGRES_RELEASE_URL: The URL to the PostgreSQL RPM repo. 
#   Defaults to "latest" repo.
#
# - POSTGRES_PACKAGE: The PostgreSQL RPM package name.
#   Defaults to postgresql12-server.
#
# - POSGRES_ENCODING: The character set used in the PostgreSQL databases.
#   Defaults to UTF8.
#
# Environment variables:
# - PGDATA: The PostgreSQL data directory. 
# Defaults to /var/lib/pgsql/data/.

FROM docker.io/linuxforhealth/base:1.0.0

ARG POSTGRES_RELEASE_URL=https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
ARG POSTGRES_PACKAGE=postgresql12-server
ARG POSTGRES_ENCODING=UTF8

ENV PGDATA=/var/lib/pgsql/data/

# Install PostgreSQL
RUN rpm -ivh ${POSTGRES_RELEASE_URL} && \
  microdnf -y install ${POSTGRES_PACKAGE} && \
  microdnf clean all

# Run the following as postgres user
USER postgres

# Initialize data directory - e.g. /var/lib/pgsql/data/
RUN $(ls -d /usr/pgsql*/bin)/initdb ${PGDATA} --encoding ${POSTGRES_ENCODING}

# Allow remote connections to database
RUN echo "host  all  all 0.0.0.0/0  trust" >> /var/lib/pgsql/data/pg_hba.conf

# Listen on all IP addresses
RUN echo "listen_addresses='*'" >> /var/lib/pgsql/data/postgresql.conf

# Expose PostgreSQL port
EXPOSE 5432

# Start PostgreSQL when the container starts
CMD ["sh", "-c", "$(ls -d /usr/pgsql*/bin)/postgres", "-c", "config_file=/var/lib/pgsql/data/postgresql.conf"]
