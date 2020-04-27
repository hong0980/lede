local fs  = require "nixio.fs"
local sys = require "luci.sys"
local uci = require "luci.model.uci".cursor()
local ipc = require "luci.ip"
local button = ""
local state_msg = ""
local m,s,n
local running=(luci.sys.call("pidof PwdHackDeny.sh > /dev/null") == 0)
local button = ""
local state_msg = ""

if running then
        state_msg = "<b><font color=\"green\">" .. translate("正在运行") .. "</font></b>"
else
        state_msg = "<b><font color=\"red\">" .. translate("没有运行") .. "</font></b>"
end

m = Map("PwdHackDeny", translate("PwdHackDeny"))
m.description = translate("<font style='color:green'>监控SSH及WEB异常登录，密码错误达到设定次数的内外网客户端都禁止连接SSH以及WEB登录端口，直到手动删除相应的IP或MAC名单为止。</font>" .. button
        .. "<br/><br/>" .. translate("运行状态").. " : "  .. state_msg .. "<br />")

s = m:section(TypedSection, "PwdHackDeny")
s.anonymous=true
s.addremove=false
enabled = s:option(Flag, "enabled", translate("启用"), translate("启用或禁用功能。要先禁用、再去更改相关功能的端口、再启用。"))
enabled.default = 0
enabled.rmempty = true

setport =s:option(Value,"time",translate("巡查时间（秒）"))
setport.description = translate("循环查询日志时间间隔，如果使用环境比较恶劣可以适当缩短。")
setport.placeholder=5
setport.default=5
setport.datatype="port"
setport.rmempty=false

setport =s:option(Value,"sum",translate("失败次数（次）"))
setport.description = translate("登入密码错误次数达到此数值的IP就会被永久加入禁止名单。")
setport.placeholder=5
setport.default=5
setport.datatype="port"
setport.rmempty=false


s = m:section(TypedSection, "PwdHackDeny")

s:tab("config1", translate("<font style='color:gray'>SSH登录日志</font>"))
conf = s:taboption("config1", Value, "editconf1", nil, translate("<font style='color:red'>新的信息需要刷新页面才会有所显示。</font>"))
conf.template = "cbi/tvalue"
conf.rows = 25
conf.wrap = "off"
conf.readonly="readonly"
--conf:depends("enabled", 1)
function conf.cfgvalue()
	return fs.readfile("/tmp/PwdHackDeny/badip.log.ssh", value) or ""
end

s:tab("config2", translate("<font style='color:gray'>WEB登录日志</font>"))
conf = s:taboption("config2", Value, "editconf2", nil, translate("<font style='color:red'>新的信息需要刷新页面才会有所显示。</font>"))
conf.template = "cbi/tvalue"
conf.rows = 25
conf.wrap = "off"
conf.readonly="readonly"
--conf:depends("enabled", 1)
function conf.cfgvalue()
	return fs.readfile("/tmp/PwdHackDeny/badip.log.web", value) or ""
end

s:tab("config3", translate("<font style='color:black'>SSH禁止名单</font>"))
conf = s:taboption("config3", Value, "editconf3")
conf.template = "cbi/tvalue"
conf.rows = 25
conf.wrap = "off"
function conf.cfgvalue(self, section)
    return fs.readfile("/etc/SSHbadip.log") or ""
end
function conf.write(self, section, value)
    if value then
        value = value:gsub("\r\n?", "\n")
        fs.writefile("/tmp/SSHbadip.log", value)
        if (luci.sys.call("cmp -s /tmp/SSHbadip.log /etc/SSHbadip.log") == 1) then
            fs.writefile("/etc/SSHbadip.log", value)
        end
        fs.remove("/tmp/SSHbadip.log")
    end
end

s:tab("config4", translate("<font style='color:black'>WEB禁止名单</font>"))
conf = s:taboption("config4", Value, "editconf4")
conf.template = "cbi/tvalue"
conf.rows = 25
conf.wrap = "off"
function conf.cfgvalue(self, section)
    return fs.readfile("/etc/WEBbadip.log") or ""
end
function conf.write(self, section, value)
    if value then
        value = value:gsub("\r\n?", "\n")
        fs.writefile("/tmp/WEBbadip.log", value)
        if (luci.sys.call("cmp -s /tmp/WEBbadip.log /etc/WEBbadip.log") == 1) then
            fs.writefile("/etc/WEBbadip.log", value)
        end
        fs.remove("/tmp/WEBbadip.log")
    end
end

e = luci.http.formvalue("cbi.apply")
if e then
  io.popen("/etc/init.d/PwdHackDeny start")
end

return m

