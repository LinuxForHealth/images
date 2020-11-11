# LinuxForHealth Kong Image

The LinuxForHealth Kong image provides API gateway capabilities.

## Overview
Kong is available on amd64 and arm64, but not s390x.  [Building Kong on s390x](https://github.com/LinuxForHealth/docs/wiki/Building-Kong-on-s390x) provides instructions for building in s390x. Those instructions are referenced below.

## Build Kong on s390x
Follow the [Building Kong on s390x](https://github.com/LinuxForHealth/docs/wiki/Building-Kong-on-s390x) instructions to build the Kong 2.1.4 s390x image.

When the docker-kong s390x image build is complete, tag and push the image.
```
docker tag <image_id> linuxforhealth/kong:2.1.4-s390x
docker push linuxforhealth/kong:2.1.4-s390x
```
## Gather amd64 and arm64 images
Because Kong 2.1.4 is supported on amd64 and arm64 platforms, we can pull those native images and push them to LinuxForHealth. On both amd64 and arm64 devices, run the following:
```
docker pull kong:2.1.4
docker tag <image_id> linuxforhealth/kong:2.1.4-<arch>
    where <arch> is amd64 | arm64
docker push linuxforhealth/kong:2.1.4-<arch>
```
## Create the multi-arch Kong image
Now we can pull all 3 images together into a single multi-arch image with `docker manifest`:
```
docker manifest create \
linuxforhealth/kong:2.1.4 \
--amend linuxforhealth/kong:2.1.4-s390x \
--amend linuxforhealth/kong:2.1.4-amd64 \
--amend linuxforhealth/kong:2.1.4-arm64
```
Then push to Docker Hub with docker manifest:
```
docker manifest push linuxforhealth/kong:2.1.4 --purge
```
Note: Be sure to use --purge so that future calls to `docker manifest create` for the same manifest will pick up new images.
