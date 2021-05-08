local fs  = require "nixio.fs"
local sys = require "luci.sys"
local uci = require "luci.model.uci".cursor()
local ipc = require "luci.ip"
local button = ""
local state_msg = ""
local a,m,s,n
local running=(luci.sys.call("ps|grep 'cowbping.sh'|grep -v grep > /dev/null") == 0)
local button = ""
local state_msg = ""

if running then
        state_msg = "<b><font color=\"green\">" .. translate("正在运行") .. "</font></b>"
else
        state_msg = "<b><font color=\"red\">" .. translate("没有运行") .. "</font></b>"
end

m = Map("cowbping", translate("CowBPing"))
m.description = translate("<font style='color:green'>定期ping一个网址以检测网络是否通畅，如果网络不通就执行相关设定动作以求排除故障。</font>" .. button
        .. "<br/><br/>" .. translate("运行状态").. " : "  .. state_msg .. "<br />")

s = m:section(TypedSection, "cowbping")
s.anonymous=true
s.addremove=false
enabled = s:option(Flag, "enabled", translate("启用"), translate("启用后如再次需修改以下设定，须先禁用、再修改然后再启用。"))
enabled.default = 0
enabled.rmempty = true

delaytime =s:option(Value,"delaytime",translate("开机延迟（秒）"))
delaytime.description = translate("开机（或首次启用）延迟一段时间才会启动ping动作。")
delaytime.placeholder=60
delaytime.default=60
delaytime.datatype="port"
delaytime.rmempty=false

address =s:option(Value,"address",translate("网址(IP或域名)"))
address.description = translate("用来执行ping检测的网络地址，可以是IP或域名。")
address.placeholder="8.8.4.4"
address.default="8.8.4.4"
address.datatype="host"
address.rmempty=false

time =s:option(Value,"time",translate("检测间隔（秒）"))
time.description = translate("检测网络情况时间间隔，如果使用环境比较恶劣可以适当缩短。")
time.placeholder=60
time.default=60
time.datatype="port"
time.rmempty=false

pkglost =s:option(Value,"pkglost",translate("丢包比率（%）"))
pkglost.description = translate("丢包比率达到此设定值就会视为网络不通，比率越低越灵敏。")
pkglost.placeholder=100
pkglost.default=100
pkglost.datatype="port"
pkglost.rmempty=false

sum =s:option(Value,"sum",translate("失败次数（次）"))
sum.description = translate("当网络不通时会连续ping n次，n次都不通的话就会执行命令。")
sum.placeholder=1
sum.default=1
sum.datatype="port"
sum.rmempty=false

enabled = s:option(ListValue, "work_mode", translate("执行命令"))
enabled.description = translate("随机改无线中继MAC地址为仅对只有一个无线模块的路由有效。")
enabled:value("1", translate("1.重启系统"))
enabled:value("2", translate("2.重新拨号"))
enabled:value("3", translate("3.重启WIFI"))
enabled:value("6", translate("4.改中继MAC"))
enabled:value("4", translate("5.重启网络"))
enabled:value("7", translate("6.关机睡觉"))
enabled:value("5", translate("7.自设命令"))
enabled.default = 2

command = s:option(TextValue, "/etc/config/cbp_cmd", translate("自设命令"), translate("可使用shell命令脚本，须仔细检查，如其中有错误，可能导致所有命令无法执行。"))
command:depends("work_mode", 5)
command.rows = 10
command.wrap = "off"
function command.cfgvalue(self, section)
    return fs.readfile("/etc/config/cbp_cmd") or ""
end
function command.write(self, section, value)
    if value then
        value = value:gsub("\r\n?", "\n")
        fs.writefile("/tmp/cbp_cmd", value)
        if (luci.sys.call("cmp -s /tmp/cbp_cmd /etc/config/cbp_cmd") == 1) then
            fs.writefile("/etc/config/cbp_cmd", value)
        end
        fs.remove("/tmp/cbp_cmd")
    end
end

return m



