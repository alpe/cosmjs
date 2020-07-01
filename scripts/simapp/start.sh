#!/bin/sh

if test -n "$1"; then
    # need -R not -r to copy hidden files
    cp -R "$1/.simd" /root
    cp -R "$1/.simcli" /root
fi

SCRIPT_DIR="$(realpath "$(dirname "$0")")"

mkdir -p /root/log
docker run --rm \
  -p 1317:1317 \
  -p 26657:26657 \
  -p 26656:26656 \
  -v $SCRIPT_DIR/template:/root cosmwasm/simapp:latest \
  simd start --rpc.laddr tcp://0.0.0.0:26657 --trace
