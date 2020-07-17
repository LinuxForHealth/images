# Linux for Health Base Image
# Builds a base image for use by Linux for Health applications and services
#
# Environment variables:
# - APP_ROOT: The root application directory.

FROM registry.access.redhat.com/ubi8/ubi-minimal:latest
LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="base-image"
LABEL name="base-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health Base Image"
LABEL description="RHEL UBI 8 Minimal Image Used for LFH Base Image"

RUN microdnf update -y && \
    microdnf install -y shadow-utils \
    ca-certificates && \
    microdnf clean all

ENV APP_ROOT=/opt/lfh

RUN mkdir -p ${APP_ROOT}
RUN useradd -u 1001 -r -g 0 \
            -s /sbin/nologin \
            -c "Linux for Health Application User" \
            lfh

RUN chown -R lfh:0 ${APP_ROOT}
