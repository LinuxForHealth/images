# Linux for Health Base Image
# Builds a base image for use by Linux for Health applications and services
#
# Environment variables:
# - APP_ROOT: The root application directory.

FROM alpine:3.12.1
LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="base-image"
LABEL name="base-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health Base Image"
LABEL description="Alpine Image Used for LFH Base Image"

RUN apk update && \
    apk add bash

ENV APP_ROOT=/opt/lfh

RUN mkdir -p ${APP_ROOT}
RUN adduser -D --uid 1001 \
            --system \
            --shell /sbin/nologin \
            --ingroup root \
            lfh

RUN chgrp -R 0 ${APP_ROOT} && \
    chmod -R g=u ${APP_ROOT}
