#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -t "$1:$2" --build-arg SITE=$1 .

docker tag "$1:$2" "parameter1/website-$1:$2"
docker push "parameter1/website-$1:$2"
docker image rm "$1:$2"
