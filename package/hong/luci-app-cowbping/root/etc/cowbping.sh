#!/bin/sh
# Author: wulishui <wulishui@gmail.com>

echo "-----Author: wulishui , 2020627 v1.7-----" > /tmp/log/cowbping.log
time=$(uci get cowbping.cowbping.time 2>/dev/null)
delaytime=$(uci get cowbping.cowbping.delaytime 2>/dev/null)
sleep "$delaytime"

while :
do
work_mode=$(uci get cowbping.cowbping.work_mode 2>/dev/null)
sum=$(uci get cowbping.cowbping.sum 2>/dev/null)
address=$(uci get cowbping.cowbping.address 2>/dev/null)
pkglost=$(uci get cowbping.cowbping.pkglost 2>/dev/null)

ping=`ping -c 1 "$address"|grep -o -E "([0-9]|[1-9][0-9]|100)"% | awk -F '%' '{print $1}'`
if [ "$ping" -ge "$pkglost" ]; then
 sum0=1
 for i in $(seq 1 $((sum-1)))
 do
   ping=`ping -c 1 "$address"|grep -o -E "([0-9]|[1-9][0-9]|100)"% | awk -F '%' '{print $1}'`
   [ "$ping" -ge "$pkglost" ] && sum0=$((sum0+1))
 done
else
 sum0=0
fi

if [ "$sum0" -ge "$sum" ]; then
echo "20"$(date +"%y-%m-%d %H:%M:%S")"----断网啦!!!" >> /tmp/log/cowbping.log
case "$work_mode" in
"1")
reboot
;;
"2")
killall -q pppd && pppd file /tmp/ppp/options.wan0 2>/dev/null
;;
"3")
wifi down && wifi up 2>/dev/null
;;
"4")
/etc/init.d/network restart
;;
"5")
command=$(uci get cowbping.cowbping.command 2>/dev/null)
eval ${command} 2>/dev/null
;;
"6")
MAC=`dd if=/dev/urandom bs=1 count=32 2>/dev/null | md5sum | cut -b 0-12 | sed 's/\(..\)/\1:/g; s/.$//'`
uci set wireless.@wifi-iface[0].macaddr="$MAC"
uci commit wireless
wifi down
wifi up
;;
"7")
poweroff 2>/dev/null
;;
esac
fi

sleep "$time"
done



