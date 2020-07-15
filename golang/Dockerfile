# Linux for Health Golang Image
# Builds an image for use by golang applications
#
# Environment variables:
# - APP_ROOT: The root application directory. Set in base image.
# - USER_ID: The USER ID used for the non-privileged "application" account. Set in base image.
# - GOPATH: Sets the golang "workspace" for the image to the $APP_ROOT

FROM docker.io/linuxforhealth/base:1.0.0 AS builder

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="golang-image"
LABEL name="golang-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health Golang Image"
LABEL description="Provides support for Linux for Health Golang based applications"

ENV APP_ROOT=$APP_ROOT
ENV GOPATH=$APP_ROOT/gocode

RUN mkdir -p ${GOPATH}/{bin,pkg,src} && \
    chown -R lfh:root ${APP_ROOT}

RUN microdnf install -y golang && \
    microdnf clean all