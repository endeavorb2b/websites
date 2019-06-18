#!/bin/bash
set -e
[[ $RANCHER_CLUSTERID = "c-rc5kp" ]] && ENVIRONMENT="staging" || ENVIRONMENT="production"

payload="{
  \"attachments\": [{
    \"color\": \"#1d9bd1\",
    \"text\": \"Deployment of \`$TRAVIS_REPO_SLUG\` @ \`$TRAVIS_TAG\` to \`$ENVIRONMENT\` has started.\"
  }]
}"
curl -f -X POST --data "$payload" \
  -H 'Content-type: application/json' \
  https://hooks.slack.com/services/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

payload="{
  \"deployment\": {
    \"revision\": \"\`$TRAVIS_TAG\`\",
    \"user\": \"TravisCD\"
  }
}"
curl -f -X POST --data "$payload" \
  -H 'Content-type: application/json' \
  -H "X-Api-Key:$NR_APIKEY" \
  https://api.newrelic.com/v2/applications/222873263/deployments.json
