# Linux for Health Base Image
# Builds a base image for use by Linux for Health applications and services
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - USER_ID: The USER ID used for the non-privileged "application" account. Set in base image.
# - JAVA_HOME: The Java installation directory. Set in base image.
# - JAVA_OPTIONS: Java command line options used to configure the JVM. Set in base image.

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
ENV USER_ID=1001

RUN mkdir -p ${APP_ROOT}
RUN useradd -u ${USER_ID} -r -g 0 \
            -s /sbin/nologin \
            -c "Default LFH Application User" \
            lfh

RUN chown -R ${USER_ID}:0 ${APP_ROOT}
