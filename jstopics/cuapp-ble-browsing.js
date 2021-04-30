hmLoadTopic({
hmKeywords:"BLE Beacons,Browsing",
hmTitle:"Browsing",
hmDescription:"The Xibu App continuously builds up connections to discovered HsM BLE-networked devices to read all resource instance values provided by this device. This process is called...",
hmPrevLink:"cuapp-ble-advertising.html",
hmNextLink:"mobile-gateway.html",
hmParentLink:"cuapp-ble-communication.html",
hmBreadCrumbs:"<a href=\"frontends.html\">Frontends<\/a> &gt; <a href=\"cuapp.html\">Xibu App<\/a> &gt; <a href=\"cuapp-ble-communication.html\">BLE communication<\/a>",
hmTitlePath:"Frontends > Xibu App > BLE communication > Browsing",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Browsing<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Xibu App continuously builds up connections to <a href=\"cuapp-ble-advertising.html\" class=\"topiclink\">discovered<\/a> HsM BLE-networked devices to read all resource instance values provided by this device. This process is called <span style=\"font-style: italic;\">browsing.<\/span> Browsing is performed to display detailed information about devices within the App but also to <a href=\"mobile-gateway.html\" class=\"topiclink\">relay<\/a> device data to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">Browsing is continuously triggered when the app is in foreground and shows the device list. When running in background browsing is triggered by the operating system when <a href=\"hsmd-ble-ceacons.html\" class=\"topiclink\">BLE beacons<\/a> are received.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Foreground browsing<\/span><\/h1>\n\r<p class=\"p_Normal\">If the Xibu App is in foreground (is the currently active app on the mobile device) browsing is performed when the app is on the device status screen. <\/p>\n\r<p class=\"p_Normal\">The Xibu App connects to discovered HsM BLE-networked devices sequentially (i.e. not in parallel but one device after the other). Each device will only be connected once every 15 minutes. I.e. the Xibu App will collect a full set of resource instance values only once every 15 minutes. The data broadcast by the non-gateway device via <a href=\"cuapp-ble-advertising.html\" class=\"topiclink\">advertising<\/a> is however collected and forwarded more frequently.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Background browsing with BLE Beacons.<\/span><\/h1>\n\r<p class=\"p_Normal\">Even if the Xibu App is in background (is not the currently active app on the mobile device) it can still discover and browse devices by utilizing <a href=\"hsmd-ble-ceacons.html\" class=\"topiclink\">BLE Beacon packages<\/a> broadcast by HsM BLE-networked devices. <\/p>\n\r<p class=\"p_Normal\">Mobile devices (smart phones) can detect when they enter or exit a particular setting by monitoring BLE beacons. BLE beacons are specially structured BLE packets sent by BLE devices. The operating systems of these mobile devices have an internal logic that decides whether it enters the area of the beacon source (the device sending the beacon packet) or leaves the area of the beacon source. Both events can then trigger actions on the mobile device. The Xibu App registers with the operating system of the mobile device it runs on so that it is woken up whenever the operating system enters the area of BLE devices that send beacons with specific beacon ids. <\/p>\n\r<p class=\"p_Normal\">The Xibu App will then discover and browse devices in it\'s vicinity. This way the Xibu App can discover and browse HsM devices even when in background.<\/p>\n\r"
})
