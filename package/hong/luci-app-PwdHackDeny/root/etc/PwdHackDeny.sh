#!/bin/bash
# wulishui 20200120-20200130 v4.1.0
# Author: wulishui <wulishui@gmail.com>

time=$(uci get PwdHackDeny.PwdHackDeny.time 2>/dev/null)

while :
do
/usr/bin/PwdHackDeny
sleep "$time"
done


