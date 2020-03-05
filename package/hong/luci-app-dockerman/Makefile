include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-dockerman
PKG_VERSION:=v0.3.3
PKG_RELEASE:=beta
PKG_MAINTAINER:=lisaac <https://github.com/lisaac/luci-app-dockerman>
PKG_LICENSE:=AGPL-3.0

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
	SECTION:=luci
	CATEGORY:=LuCI
	SUBMENU:=3. Applications
	TITLE:=Docker Manager interface for LuCI
	PKGARCH:=all
	DEPENDS:=+luci-lib-docker +docker-ce +e2fsprogs +fdisk
endef


define Build/Compile
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/dockerman
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
rm -rf /tmp/luci-indexcache /tmp/luci-modulecache
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./root/etc/config/dockerman $(1)/etc/config
	$(INSTALL_DIR) $(1)/etc
	$(INSTALL_BIN) ./root/etc/docker-init $(1)/etc
#	$(INSTALL_DIR) $(1)/etc/init.d
#	$(INSTALL_BIN) ./root/etc/init.d/* $(1)/etc/init.d/
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci
	$(CP) ./luasrc/* $(1)/usr/lib/lua/luci
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/i18n
	po2lmo ./po/zh-cn/dockerman.po $(1)/usr/lib/lua/luci/i18n/dockerman.zh-cn.lmo
endef

$(eval $(call BuildPackage,$(PKG_NAME)))