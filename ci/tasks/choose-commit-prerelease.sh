#!/bin/bash

set -eu

[[ "$(cat ./built-dev-apk/url)" =~ dev/android/galoy-mobile-.+-v(.+)/apk ]]
APK_COMMIT=${BASH_REMATCH[1]}

[[ "$(cat ./built-dev-ipa/url)" =~ dev/ios/galoy-mobile-.+-v(.+)/Bitcoin ]]
IPA_COMMIT=${BASH_REMATCH[1]}

if [[ $APK_COMMIT != $IPA_COMMIT ]]; then
  echo "Both APK and IPA are not from same commit!"
  exit 1
fi

pushd repo

git checkout $IPA_COMMIT

CHOSEN_COMMITID=$(git rev-parse --short HEAD)
echo "Using Commit: $CHOSEN_COMMITID"

popd

mv built-dev-apk/app-universal-release.apk built-dev-apk/BitcoinBeach-pre-$CHOSEN_COMMITID.apk
mv built-dev-ipa/Bitcoin\ Beach.ipa built-dev-ipa/BitcoinBeach-pre-$CHOSEN_COMMITID.ipa
