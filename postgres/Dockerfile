# Linux for Health PostgreSQL image.
#
# This image serves PostgreSQL within a Red Hat UBI container.
# Sample PostgreSQL Dockerfile: https://docs.docker.com/engine/examples/postgresql_service/
#
# Environment variables:
# - PGDATA: The PostgreSQL data directory.

FROM registry.access.redhat.com/ubi8/ubi-init:latest

ENV PGDATA=/var/lib/pgsql/data/

# Install PostgreSQL 12
RUN dnf -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
RUN dnf -y install postgresql12-server

# Run the following as postgres user
USER postgres

# Initialize data directory - e.g. /var/lib/pgsql/data/
RUN /usr/pgsql-12/bin/initdb ${PGDATA}

# Allow remote connections to database
RUN echo "host  all  all 0.0.0.0/0  trust" >> /var/lib/pgsql/data/pg_hba.conf

# Listen on all IP addresses
RUN echo "listen_addresses='*'" >> /var/lib/pgsql/data/postgresql.conf

# Expose PostgreSQL port
EXPOSE 5432

# Start PostgreSQL when the container starts
CMD ["/usr/pgsql-12/bin/postgres", "-D", "${PGDATA}", "-c", "config_file=/var/lib/pgsql/data/postgresql.conf"]
