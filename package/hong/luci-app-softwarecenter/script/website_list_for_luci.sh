#!/bin/sh
#本脚本服务于Luci，负责执行Luci下发的查询任务

# Copyright (C) 2019 Jianpeng Xiang (1505020109@mail.hnust.edu.cn)
# This is free software, licensed under the GNU General Public License v3.

	# 获取路由器IP
	localhost=$(ifconfig | awk '/inet addr/{print $2}' | awk -F: 'NR==1{print $2}')
	[ "$localhost" ] || localhost="你的路由器IP"
	if [ "1" == "$1" ]; then
		if [ "`ls /opt/etc/nginx/vhost/ 2> /dev/null | wc -l`" -gt 0 ]; then
			for conf in /opt/etc/nginx/vhost/*; do
				name=`echo $conf | awk -F"[/ .]" '{print $(NF-1)}'`
				port=`grep listen $conf | awk '{print $2}' | sed 's/;//'`
				echo -n "$name $localhost:$port "
			done
		fi
	else
		echo -n `ls /opt/etc/nginx/vhost | wc -l`
	fi
