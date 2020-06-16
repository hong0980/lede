#!/bin/bash


check_1() {
EXT1=`uci get firewall.@defaults[0].SWOBL_INPUT 2>/dev/null` || EXT1=0
EXT2=`uci get firewall.@defaults[0].SWOBL_FORWARD 2>/dev/null` || EXT2=0
if [ "$EXT1" == 0 -a "$EXT2" == 0 ]; then
uci set firewall.@defaults[0].SWOBL_FORWARD=1
uci commit firewall
/etc/init.d/firewall reload >/dev/null 2>&1
fi
}

check_2() {
sleep 2
iptables -C SWOBL -j cowbbonding 2>/dev/null || iptables -A SWOBL -j cowbbonding 2>/dev/null
}

while :
do
sleep 10
check_1
iptables -C SWOBL -j cowbbonding 2>/dev/null || check_2
done


