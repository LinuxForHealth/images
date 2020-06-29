FROM registry.redhat.io/ubi8/ubi-minimal:8.2

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="base-image"
LABEL name="base-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health Base Image"
LABEL description="Linux for Health Base Image Based on UBI 8 Minimal Image"

RUN microdnf update -y && \
    microdnf install -y shadow-utils \
    ca-certificates && \
    microdnf clean all
