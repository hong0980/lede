local fs = require "nixio.fs"
local cronfile = "/etc/crontabs/root" 

f = SimpleForm("crontab", translate(""),
	translate("系统 crontab 文件中的要执行定时任务。<br>这里也可直接编辑或添加命令。"))

t = f:field(TextValue, "crons")
t.rmempty = true
t.rows = 10
function t.cfgvalue()
	return fs.readfile(cronfile) or ""
end

function f.handle(self, state, data)
	if state == FORM_VALID then
		if data.crons then
			fs.writefile(cronfile, data.crons:gsub("\r\n", "\n"))
			luci.sys.call("/usr/bin/crontab %q" % cronfile)
		else
			fs.writefile(cronfile, "")
		end
	end
	return true
end

return f