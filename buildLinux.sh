#!/bin/bash

cp ./src/entry.js ${APP_PATH}
cp ./src/package.json ${APP_PATH}


electron-packager \
    ${APP_PATH} FTScratch3 \
    --electronVersion=4.1.5 \
    --overwrite \
    --out=./dist
