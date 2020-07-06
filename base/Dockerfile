FROM registry.redhat.io/ubi8/ubi-minimal:latest

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
