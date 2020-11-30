# Linux for Health Orthanc DICOM Server image.
#
# Orthanc is a DICOM server, developed and maintained by Sébastien Jodogne. Full 
# documentation is available in the Orthanc Book: https://book.orthanc-server.com
#
# Orthanc is installed in /usr/sbin.
#

FROM ubuntu:18.04

LABEL maintainer="Linux for Health"
LABEL com.linuxforhealth.component="orthanc image"
LABEL name="orthanc-image"
LABEL com.linuxforhealth.license_terms="https://www.apache.org/licenses/LICENSE-2.0"
LABEL summary="Linux For Health Orthanc DICOM Image"
LABEL description="Orthanc, free cross-platform DICOM server"
LABEL vendor="The Orthanc project"
LABEL maintainer2="Sebastien Jodogne"

RUN apt -y clean && \
    apt -y update && \
    apt -y upgrade && \
    apt -y install orthanc

COPY ./orthanc.json /etc/orthanc
COPY ./orthanc-server.pem /etc/orthanc

RUN useradd -u 1001 -r -g 0 \
            -s /sbin/nologin \
            -c "Linux for Health Application User" \
            lfh

RUN mkdir -p /var/lib/orthanc/db-v6            

RUN chown -R lfh:0 /etc/orthanc && \
    chown -R lfh:0 /var/lib/orthanc/db-v6

RUN chgrp -R 0 /etc/orthanc && \
    chmod -R g=u /etc/orthanc 

RUN chgrp -R 0 /var/lib/orthanc/db-v6 && \
    chmod -R g=u /var/lib/orthanc/db-v6

USER lfh

VOLUME [ "/var/lib/orthanc/db-v6" ]

EXPOSE 4242 8042

ENV TZ=America/New_York

ENTRYPOINT [ "Orthanc" ]
CMD [ "/etc/orthanc/" ]
