#
# Copyright (C) 2008 David Cooper
# Copyright (C) 2008-2014 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=lsscsi
PKG_VERSION:=0.31
PKG_RELEASE:=1

 PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)
 PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tgz
 PKG_SOURCE_URL:=http://sg.danny.cz/scsi
 PKG_MD5SUM:=efb68946f51860e8eedc18d6784afdae
 
 PKG_INSTALL:=1

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=Shell pipeline element to meter data passing through
  URL:=http://sg.danny.cz/scsi/lsscsi.html
endef

define Package/lsscsi/description
	The lsscsi command lists information about SCSI devices in Linux.
	http://sg.danny.cz/scsi/lsscsi.html
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/$(PKG_NAME) $(1)/usr/bin/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
