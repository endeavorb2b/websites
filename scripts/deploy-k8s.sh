#!/bin/bash
set -e

IMAGE=endeavorb2b/website-$1:$2
yarn global add @endeavorb2b/rancher2cli
r2 dl basecms-service website $IMAGE --namespace=$1
