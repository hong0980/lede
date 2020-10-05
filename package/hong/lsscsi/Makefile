#
# Copyright (C) 2019 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

PKG_NAME:=lsscsi
PKG_VERSION:=3.1
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/lsscsi-$(PKG_VERSION)
PKG_SOURCE:=lsscsi-$(PKG_VERSION).tar.xz
PKG_SOURCE_URL:=http://sg.danny.cz/scsi/
PKG_MD5SUM:=b9720d44f33a4bc58cc6c69d4485db8a

include $(INCLUDE_DIR)/package.mk
define Package/lsscsi
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=lsscsi Partition editor
  http://sg.danny.cz/scsi/lsscsi.html
  DEPENDS:= 
endef

define Package/lsscsi/description
	lsscsi Partition editor
	http://sg.danny.cz/scsi/lsscsi.html
endef

define Package/lsscsi/install
	$(INSTALL_DIR) $(1)/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/lsscsi $(1)/bin
endef

$(eval $(call BuildPackage,lsscsi))