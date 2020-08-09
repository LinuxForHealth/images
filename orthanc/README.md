# Linux for Health Orthanc DICOM Server Image

The Linux for Health Orthanc DICOM Server Image includes Orthanc, a DICOM server developed and maintained by Sébastien Jodogne. Full documentation is available in the Orthanc Book: https://book.orthanc-server.com.

## Build Command

```
docker buildx build \
              --pull \
              --push \
              --platform linux/amd64,linux/s390x,linux/arm64 \
              -t docker.io/linuxforhealth/orthanc:<image version> .
```
