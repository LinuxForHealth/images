# Linux for Health NATS Server Image

The Linux for Health NATS Server Image provides event notifications via NATS JetStream message streaming.

## Overview
NATS JetStream is based on two dependent images, jq for JSON parsing and nats-box for CLI capabilities.  Pre-built images for JetStream, jq and nats-box are only available outside of LinuxForHealth as amd64 images.  The instructions below explain how to build all 3 of these images on all 3 LinuxForHealth-supported chip platforms (amd64, s390x & arm64).

Because `docker buildx` has problems building these images on all 3 platforms, particularly s390x, we build each image natively, then create a multi-arch image with `docker manifest`.  So to rebuild these images, you'll meed amd64, s390x & arm64 build environments.

## Build jq
On each platform (amd64, s390x, arm64), check out master and the updates required for a multi-arch build:
```
git clone https://github.com/LinuxForHealth/jq.git
cd jq
git checkout master-updates
```

Note: master-updates was originally created via:
`git checkout -b master-updates`
from the master branch & contains the changes required to build on s390x and arm64. Use master because the latest tagged version of jq uses ruby and has version compatibility problems when trying to move to a later version of debian.

Build jq:
```
docker build .
```

When the image build is complete, you will see the image id.  You can also find it at the top of the `docker images` list. Tag the image and push it:
```
docker tag <image_id> linuxforhealth/jq:latest-<arch> 
  where <arch> is amd64 | s390x | arm64
docker push linuxforhealth/jq:latest-<arch>
```

After building on each platform separately, merge with docker manifest:
```
docker manifest create \
 linuxforhealth/jq:latest \
 --amend linuxforhealth/jq:latest-s390x \
 --amend linuxforhealth/jq:latest-amd64 \
 --amend linuxforhealth/jq:latest-arm64
```

Then push to Docker Hub with docker manifest:
```
docker manifest push linuxforhealth/jq:latest --purge
```
Note: Be sure to use --purge so that future calls to `docker manifest create` for the same manifest will pick up new images.

## Build nats-box
On each platform (amd64, s390x, arm64), check out the v0.4.0 branch containing the updates required for a multi-arch build:
```
git clone https://github.com/LinuxForHealth/nats-box.git
cd nats-box
git checkout v0.4.0-updates
```

Note: v0.4.0-updates was originally created from the v0.4.0 tag via `git checkout -b v0.4.0-updates v0.4.0`.

Build nats-box:
```
docker build .
```
When the image build is complete, tag the image and push it:
```
docker tag <image_id> linuxforhealth/nats-box:v0.4.0-<arch> 
  where <arch> is amd64 | s390x | arm64
docker push linuxforhealth/nats-box:v0.4.0-<arch>
```
After building on each platform separately, merge the images:
```
docker manifest create \
 linuxforhealth/nats-box:v0.4.0 \
 --amend linuxforhealth/nats-box:v0.4.0-s390x \
 --amend linuxforhealth/nats-box:v0.4.0-amd64 \
 --amend linuxforhealth/nats-box:v0.4.0-arm64
```

Then push to Docker Hub:
```
docker manifest push linuxforhealth/nats-box:v0.4.0 --purge
```

## Build NATS JetStream
On each platform (amd64, s390x, arm64), check out the v0.0.19 branch containing the updates required for a multi-arch build:
```
git clone https://github.com/LinuxForHealth/jetstream.git
cd jetstream
git checkout v0.0.19-updates
```

Note: v0.0.19-updates was originally created from the v0.0.19 tag via `git checkout -b v0.0.19-updates v0.0.19`.

Build JetStream:
```
docker build .
```
When the image build is complete, tag the image and push it:
```
docker tag <image_id> linuxforhealth/jetstream:v0.0.19-<arch> 
  where <arch> is amd64 | s390x | arm64
docker push linuxforhealth/jetstream:v0.0.19-<arch>
```
After building on each platform separately, merge the images:
```
docker manifest create \
 linuxforhealth/jetstream:v0.0.19 \
 --amend linuxforhealth/jetstream:v0.0.19-s390x \
 --amend linuxforhealth/jetstream:v0.0.19-amd64 \
 --amend linuxforhealth/jetstream:v0.0.19-arm64
```
Then push to Docker Hub:
```
docker manifest push linuxforhealth/jetstream:v0.0.19 --purge
```
That's it.  The NATS JetStream image is used as the LinuxForHealth nats-server container image.