#!/usr/bin/env bash
cd server
kill -9 $(lsof -t -i:1919)
yarn start