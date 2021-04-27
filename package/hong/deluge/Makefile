#
# Copyright (C) 2011-2021 Entware
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=deluge
PKG_VERSION:=2.0.3
PKG_RELEASE:=6

PYPI_NAME:=deluge
PKG_HASH:=bd26950f417de2a5b26827d989935a30e770f880c22cb59ca69f781cdc9a14c9

include $(TOPDIR)/feeds/packages/lang/python/pypi.mk
include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/python/python3-package.mk

define Package/deluge/Default
	SUBMENU:=BitTorrent
	SECTION:=net
	CATEGORY:=Network
	TITLE:=a lightweight BitTorrent client
	URL:=https://deluge-torrent.org
	MAINTAINER:=Entware team, https://github.com/Entware/rtndev/tree/master/deluge
endef

define Package/deluge
	$(call Package/deluge/Default)
	TITLE+= (console UI & daemon)
	DEPENDS:= \
	    +python3-chardet \
	    +python3-libtorrent \
	    +python3-mako \
	    +python3-markupsafe \
	    +python3-pillow \
	    +python3-pyopenssl \
	    +python3-pyxdg \
	    +python3-rencode \
	    +python3-service-identity \
	    +python3-setproctitle \
	    +python3-twisted
endef

define Package/deluge-ui-web
	$(call Package/deluge/Default)
	TITLE+= (Web UI)
	DEPENDS:=deluge
endef

define Package/deluge/description
 BitTorrent client with a client/server model.
endef

define Package/deluge/install
	$(INSTALL_DIR) $(1)$(PYTHON3_PKG_DIR)
	$(CP) \
	    $(PKG_INSTALL_DIR)$(PYTHON3_PKG_DIR)/* \
	    $(1)$(PYTHON3_PKG_DIR)/
	rm -rf $(1)$(PYTHON3_PKG_DIR)/deluge/ui/gtk3
	rm -rf $(1)$(PYTHON3_PKG_DIR)/deluge/ui/web
	$(SED) "s,save_config_path('deluge'),'/etc/deluge'," \
		$(1)$(PYTHON3_PKG_DIR)/deluge/common.py

	$(INSTALL_DIR) $(1)/usr/bin
	$(CP) \
	    $(PKG_INSTALL_DIR)/usr/bin/* \
	    $(1)/usr/bin/
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/deluged $(1)/etc/init.d
	rm -rf $(1)/usr/bin/deluge-gtk
	rm -rf $(1)/usr/bin/deluge-web
	$(call Python3/FixShebang,$(1)/usr/bin/* \
	$(1)$(PYTHON3_PKG_DIR)/deluge/path_*.py)
endef

define Package/deluge-ui-web/install
	$(INSTALL_DIR) $(1)$(PYTHON3_PKG_DIR)/deluge/ui
	$(CP) \
	    $(PKG_INSTALL_DIR)$(PYTHON3_PKG_DIR)/deluge/ui/web \
	    $(1)$(PYTHON3_PKG_DIR)/deluge/ui/

	$(INSTALL_DIR) $(1)/usr/bin
	$(CP) \
	    $(PKG_INSTALL_DIR)/usr/bin/deluge-web \
	    $(1)/usr/bin/
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/deluge-web $(1)/etc/init.d
	$(INSTALL_BIN) ./files/deluge-web-reset_password $(1)/usr/bin
	$(INSTALL_DIR) $(1)/etc/deluge/state
	$(call Python3/FixShebang,$(1)/usr/bin/*)
endef

define Package/deluge/postinst
#!/bin/sh
if [ ! -f /etc/deluge/.configured ]; then
  echo "Setting default deluge ui to console ... "
  /usr/bin/deluge -s console
  touch /etc/deluge/.configured
fi
endef

$(eval $(call Py3Package,deluge))
$(eval $(call BuildPackage,deluge))

$(eval $(call Py3Package,deluge-ui-web))
$(eval $(call BuildPackage,deluge-ui-web))
