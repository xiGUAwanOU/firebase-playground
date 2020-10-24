#!/usr/bin/env bash
cd webapp
npm run build
cd ..
firebase deploy --only hosting