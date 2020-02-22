# Copyright (C) 2019 Jianpeng Xiang (1505020109@mail.hnust.edu.cn)
#
# This is free software, licensed under the GNU General Public License v3.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-softwarecenter
PKG_VERSION:=1.0.7
PKG_RELEASE:=2

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  SUBMENU:=3. Applications
  DEPENDS:=
  TITLE:=LuCI Support for Software Center
  PKGARCH:=all
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/softwarecenter
endef

define Package/$(PKG_NAME)/description
    The software center is designed for the automated and unified configuration of software applications. It provides us with a simple and friendly interactive interface, which aims to make the configuration process easier and simpler!
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
  $(INSTALL_DIR) $(1)/usr/lib/lua/luci
	$(CP) ./luasrc/* $(1)/usr/lib/lua/luci
	
	$(INSTALL_DIR) $(1)/etc/uci-defaults
	$(INSTALL_BIN) ./root/etc/uci-defaults/* $(1)/etc/uci-defaults/
	
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./root/etc/config/softwarecenter $(1)/etc/config/softwarecenter
	
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./root/etc/init.d/softwarecenter $(1)/etc/init.d/
	
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./root/usr/bin/* $(1)/usr/bin/
	
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/i18n
	po2lmo ./po/zh-cn/softwarecenter.po $(1)/usr/lib/lua/luci/i18n/softwarecenter.zh-cn.lmo
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
