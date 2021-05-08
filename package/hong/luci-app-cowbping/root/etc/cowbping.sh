#!/bin/sh
# Author: wulishui <wulishui@gmail.com>

log_limit() {
logsize=`du /tmp/log/cowbping.log 2>/dev/null|awk '{print $1}'`
[ "$logsize" -gt 80 ] || return
cat /tmp/log/cowbping.log >> /tmp/log/cowbping.log_
echo ">"$(date +"%Y-%m-%d %H:%M:%S")" ：日志文件过大，旧的记录已暂时经转移到/tmp/log/cowbping.log_。" > /tmp/log/cowbping.log 2>/dev/null
}

CMDS() {
log_limit
echo ""$(date +"%Y-%m-%d %H:%M:%S")"----断网啦!!!" >> /tmp/log/cowbping.log
case "$work_mode" in
"1")
reboot
;;
"2")
killall -q pppd && sleep 5 && pppd file /tmp/ppp/options.wan 2>/dev/null
;;
"3")
wifi down && wifi up 2>/dev/null
;;
"4")
/etc/init.d/network restart
;;
"5")
kill -9 $(busybox ps -w | grep 'cbp_cmd' | grep -v 'grep' | awk '{print $1}') >/dev/null 2>&1
[ -s /etc/config/cbp_cmd ] || return
bash /etc/config/cbp_cmd 2>/dev/null &
;;
"6")
MAC=`dd if=/dev/urandom bs=1 count=32 2>/dev/null | md5sum | cut -b 0-12 | sed 's/\(..\)/\1:/g; s/.$//'`
wifi down
uci set wireless.@wifi-iface[0].macaddr="$MAC"
uci commit wireless
wifi up
;;
"7")
poweroff 2>/dev/null
;;
esac
}

echo "-----Author: wulishui , 20190805->20210416-----" >> /tmp/log/cowbping.log
delaytime=$(uci get cowbping.cowbping.delaytime 2>/dev/null)
sleep "$delaytime"
time=$(uci get cowbping.cowbping.time 2>/dev/null)
work_mode=$(uci get cowbping.cowbping.work_mode 2>/dev/null)
sum=$(uci get cowbping.cowbping.sum 2>/dev/null)
address=$(uci get cowbping.cowbping.address 2>/dev/null)
pkglost=$(uci get cowbping.cowbping.pkglost 2>/dev/null)
while :
do
ping=`ping -c 1 "$address"|grep -o -E "([0-9]|[1-9][0-9]|100)"% | awk -F '%' '{print $1}'`
if [ "$ping" -ge "$pkglost" ]; then
 sum0=1
 for i in $(seq 1 $((sum-1)))
 do
   ping=`ping -c 1 "$address"|grep -o -E "([0-9]|[1-9][0-9]|100)"% | awk -F '%' '{print $1}'` ; [ "$ping" -ge "$pkglost" ] && sum0=$((sum0+1))
  [ "$sum0" -ge "$sum" ] && CMDS
 done
 [ "$sum" == 1 ] && CMDS
fi
sleep "$time"
done


