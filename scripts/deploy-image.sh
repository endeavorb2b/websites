#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

mv sites ../
mkdir sites
mv ../sites/$1 sites/

docker build -q -t "$1:$2" --build-arg SITE=$1 .

mv ../sites/* sites/
rm -rf ../sites

docker tag "$1:$2" "endeavorb2b/website-$1:$2"
docker push "endeavorb2b/website-$1:$2"
docker image rm "$1:$2"
