include $(TOPDIR)/rules.mk

PKG_NAME:=luci-lib-docker
PKG_VERSION:=v0.3.2
PKG_RELEASE:=beta
PKG_MAINTAINER:=lisaac <https://github.com/lisaac/luci-lib-docker>
PKG_LICENSE:=AGPL-3.0

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
	SECTION:=luci
	CATEGORY:=LuCI
	SUBMENU:=6. Libraries
	TITLE:=Docker Engine API for LuCI
	PKGARCH:=all
	DEPENDS:=+luci-lib-jsonc
endef

define Package/$(PKG_NAME)/description
  Docker Engine API for LuCI
endef

define Build/Configure
endef

define Build/Compile
endef

define Build/Install
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci
	$(CP) ./luasrc/*.lua $(1)/usr/lib/lua/luci	
endef

$(eval $(call BuildPackage,$(PKG_NAME)))