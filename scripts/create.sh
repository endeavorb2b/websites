#!/bin/bash
docker-compose run \
  --rm \
  cli create \
    --npm-org=endeavorb2b \
    $@
