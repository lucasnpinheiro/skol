#!/bin/bash

echo "Iniciando run android"

npm run clean

rm -rf www/assets/*
rm -rf .sourcemaps
rm -rf platforms/android/build/outputs/apk/*

ionic cordova build android

_VERSAO="$(cat config.xml | grep '^<widget' | sed 's|^.*version=\"\([^\"]*\)\".*|\1|')"

cp platforms/android/build/outputs/apk/android-debug.apk platforms/android/build/outputs/apk/Skol_teste_$_VERSAO.apk
cp platforms/android/build/outputs/apk/android-debug.apk /home/lucas/Dropbox/BpTech/Skol_teste_$_VERSAO.apk