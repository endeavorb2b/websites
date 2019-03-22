#!/bin/bash
set -e

curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl

K8S_NAMESPACE=$1
IMAGE=endeavorb2b/website-$1:$2

./kubectl \
  --server $K8S_SERVER \
  --token $K8S_TOKEN \
  --namespace $K8S_NAMESPACE \
  set image deployment.apps/website \
  website=$IMAGE
