#!/bin/bash

[ -s /tmp/log/COWB_BND_SUM ] || exit 0
BNDSUM=$(cat /tmp/log/COWB_BND_SUM 2>/dev/null|awk '{print $1+1}')

check_1() {
sleep 1
iptables -w -C FORWARD -j cowbbonding 2>/dev/null && return
iptables -w -D FORWARD -j cowbbonding 2>/dev/null
iptables -w -I FORWARD -j cowbbonding 2>/dev/null
}

chk_ipts() {
sleep 1
SUM=`iptables -w -L cowbbonding 2>/dev/null |grep -c 'cowb_bonding'` ; [ "$SUM" -lt "$BNDSUM" ] && /etc/init.d/cowbbonding restart
}

while :
do
sleep 3
iptables -w -C FORWARD -j cowbbonding 2>/dev/null || check_1
sleep 3
SUM=`iptables -w -L cowbbonding 2>/dev/null |grep -c 'cowb_bonding'` ; [ "$SUM" -lt "$BNDSUM" ] && chk_ipts
done



