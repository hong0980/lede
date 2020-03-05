#
# Copyright (C) 2019 Jianpeng Xiang (1505020109@mail.hnust.edu.cn)
# Copyright (C) 2019 Openwrt.org
#
# This is free software, licensed under the Apache License, Version 2.0 .
#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-softwarecenter
PKG_VERSION=1.0
PKG_RELEASE:=2

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  SUBMENU:=3. Applications
  TITLE:=LuCI Support for Software Center
  PKGARCH:=all
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/softwarecenter
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
rm -f /tmp/luci-indexcache /tmp/luci-modulecache
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci
	cp -pR ./luasrc/* $(1)/usr/lib/lua/luci
	
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./root/etc/init.d/* $(1)/etc/init.d/
	
	$(INSTALL_DIR) $(1)/etc/uci-defaults
	$(INSTALL_BIN) ./root/etc/uci-defaults/* $(1)/etc/uci-defaults/
	
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./root/etc/config/softwarecenter $(1)/etc/config/softwarecenter
	
	$(INSTALL_DIR) $(1)/usr/bin/softwarecenter
	$(INSTALL_BIN) ./script/* $(1)/usr/bin/softwarecenter/
	
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/i18n
	po2lmo ./po/zh-cn/softwarecenter.po $(1)/usr/lib/lua/luci/i18n/softwarecenter.zh-cn.lmo
endef

$(eval $(call BuildPackage,$(PKG_NAME)))