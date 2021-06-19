module("luci.controller.rebootschedule", package.seeall)
function index()
	if not nixio.fs.access("/etc/config/rebootschedule") then return end
	entry({"admin", "services", "rebootschedule"},
		alias("admin", "services", "rebootschedule", "general"),
		_("定时任务 Plus+"), 10)

	entry({"admin", "services", "rebootschedule", "general"},
		cbi("rebootschedule/general"),
		_("时间设置"), 20).leaf = true

	entry({"admin", "services", "rebootschedule", "crontab"},
		cbi("rebootschedule/crontab"),
		_("crontab文件"), 30).leaf = true
end
