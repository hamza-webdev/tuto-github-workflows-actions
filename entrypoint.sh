#!/bin/sh -l

cd /
npm ci
node script.js $*
