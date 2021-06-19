local sys = require "luci.sys"
--Author: wulishui <wulishui@gmail.com>
local button = ""
local state_msg = ""
local m,s,n
local running=(luci.sys.call("[ `(tc qdisc show dev br-lan|head -1) 2>/dev/null|grep -c 'default' 2>/dev/null` -gt 0 ] > /dev/null") == 0)

if running then
        state_msg = "<b><font color=\"green\">" .. translate("已运行") .. "</font></b>"
else
        state_msg = "<b><font color=\"red\">" .. translate("未运行") .. "</font></b>"
end

m = Map("speedlimit", translate("用户限速"))
m.description = translate("可以通过MAC或IP或IP段限制用户网速。").. button .. "<br/><br/>" .. translate("运行状态 ：") .. state_msg .. "<br />"

s = m:section(TypedSection, "usrlimit", translate(""), translate("速度单位为<font color=\"red\"><b> MB/秒 </b></font>。<br>如某速率填 0 并将该规则移动到顶端则该项不限速，上下都填 0 则该用户不限速（排除与IP范围重叠用）。<br>按 --自定义--（在MAC列表底部）可输入IP或IP段或IP范围或IP加掩码。"))
s.template = "cbi/tblsection"
s.anonymous = true
s.addremove = true
s.sortable  = true

e = s:option(Flag, "enable", translate("Enable"))
e.rmempty = false

usr = s:option(Value, "usr",translate("MAC/IP/IP范围<font color=\"green\">（MAC支持 : 或 - 分割）</font>"))
sys.net.mac_hints(function(mac, name)
	usr:value(mac, "%s (%s)" %{ mac, name })
end)
usr.size = 8

dl = s:option(Value, "download", translate("下载速度"))
dl.rmempty = false
dl.size = 8

ul = s:option(Value, "upload", translate("上传速度"))
ul.rmempty = false
ul.size = 8

comment = s:option(Value, "comment", translate("备注"))
ul.rmempty = false
comment.size = 8

return m
