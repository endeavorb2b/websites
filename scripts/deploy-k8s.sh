#!/bin/bash
set -e

IMAGE=parameter1/website-$1:$2
yarn global add @endeavorb2b/rancher2cli
r2 dl basecms-website $1 $IMAGE --namespace=$3
