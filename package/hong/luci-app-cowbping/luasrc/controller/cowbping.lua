module("luci.controller.cowbping", package.seeall)

function index()
    if not nixio.fs.access("/etc/config/cowbping") then return end

	entry({"admin", "network", "cowbping"},alias("admin", "network", "cowbping","cowbping"),_("CowB Ping"),60).dependent = true
	entry({"admin", "network", "cowbping","cowbping"}, cbi("cowbping/cowbping"),_("设置"),10).leaf = true
	entry({"admin", "network", "cowbping","cowblog"}, form("cowbping/cowblog"),_("日志"),20).leaf = true

end

