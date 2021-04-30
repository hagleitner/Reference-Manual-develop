hmLoadTopic({
hmKeywords:"",
hmTitle:"BLE Communication",
hmDescription:"HsM BLE-networked devices can communicate with BLE centrals (Xibu App, HsM stationary gateways). This communication is used for a local interaction with the device (configuring...",
hmPrevLink:"hsmd.html",
hmNextLink:"hsmd-ble-advertising.html",
hmParentLink:"hsmd.html",
hmBreadCrumbs:"<a href=\"hsmd.html\">HsM devices<\/a>",
hmTitlePath:"HsM devices > BLE Communication",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">BLE Communication<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM BLE-networked devices can communicate with BLE centrals (Xibu App, HsM stationary gateways). This communication is used for a local interaction with the device (configuring the device) and for relaying data via gateways to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">BLE-networked devices BLE peripherals. The send out <a href=\"hsmd-ble-advertising.html\" class=\"topiclink\">advertising packets<\/a> to notify other BLE devices (including the HsM stationary gateways and apps) of their existence and to provide some basic information bout their current status.<\/p>\n\r<p class=\"p_Normal\">The HsM non-gateway devices will allow connections from other BLE devices (BLE centrals). In HsM Mobile Apps and stationary gateways act as BLE centrals. They discover BLE-networked devices in their vicinity by listening and processing advertising packets and they build up connections to the non-gateway devices in order to read and write data.<\/p>\n\r<p class=\"p_Normal\">The BLE-networked devices devices (BLE peripherals) and BLE Centrals (Apps or stationary gateways) can therefore be in a <span class=\"f_Term\">connected<\/span> mode or in an <span class=\"f_Term\">advertising-discvovery<\/span> mode. The difference is that in the connected mode allows bi-directional data transfer between the connected data device, in the advertising-discovery mode the peripheral does not know about the central and therefor can only broadcast information, the central only processes advertising packets and does not interact with the device.<\/p>\n\r<p class=\"p_Normal\">Generally HsM BLE-networked devices allow maximum two BLE connections from &nbsp;Apps or stationary gateways at the same time.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
