# Linux for Health OpenJDK Image
# Builds an image for use  by OpenJDK applications
#
# Build arguments:
# - JDK_PACKAGE_NAME: The JDK package name. Defaults to "Java 11 OpenJDK"
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - JAVA_HOME: The Java installation directory
# - JAVA_OPTIONS: Java command line options used to configure the JVM. Defaults to include the UseContainerSupport options

FROM docker.io/linuxforhealth/base:1.0.0

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="jdk-image"
LABEL name="jdk-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health JDK Image"
LABEL description="Provides support for Linux for HealthJDK based applications"

ENV JAVA_HOME=/usr/lib/jvm/jre
ENV JAVA_OPTIONS="-XX:+UseContainerSupport"

ARG JDK_PACKAGE_NAME=java-11-openjdk
RUN microdnf install -y ${JDK_PACKAGE_NAME} && \
    microdnf clean all
