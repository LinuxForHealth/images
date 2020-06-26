# Linux for Health OpenJDK Image
# Builds an image for use  by OpenJDK applications
#
# Build arguments:
# - JDK_PACKAGE_NAME: The JDK package name. Defaults to "Java 11 OpenJDK"
#
# Environment variables:
# - APP_ROOT: The root application directory. Defaults to /opt/lfh.
# - JAVA_HOME: The Java installation directory
# - JAVA_OPTIONS: Java command line options used to configure the JVM. Defaults to include the UseContainerSupport options
# - USER_ID: The USER ID used for the non-privileged "application" account. Defaults to 1001.

FROM registry.redhat.io/ubi8/ubi-minimal:8.2

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="jdk-image"
LABEL name="jdk-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health JDK Image"
LABEL description="Provides support for Linux for HealthJDK based applications"

ARG JDK_PACKAGE_NAME=java-11-openjdk

RUN microdnf update -y && \
    microdnf install -y shadow-utils \
    ca-certificates \
    ${JDK_PACKAGE_NAME} && \
    microdnf clean all

ENV JAVA_HOME=/usr/lib/jvm/jre

ENV APP_ROOT=/opt/lfh
ENV JAVA_OPTIONS="-XX:+UseContainerSupport"
ENV USER_ID=1001

RUN mkdir -p ${APP_ROOT}

RUN useradd -u ${USER_ID} -r -g 0 \
            -s /sbin/nologin \
            -c "Default Application User" default

RUN chown -R ${USER_ID}:0 ${APP_ROOT}
