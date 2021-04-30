hmLoadTopic({
hmKeywords:"",
hmTitle:"Device installation",
hmDescription:"Linking (the digital twin of) a device to a specific room within the location tree of a customer is called device installation. ",
hmPrevLink:"locking.html",
hmNextLink:"technical-check.html",
hmParentLink:"clse.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device installation",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device installation<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Linking (the digital twin of) a device to a specific room within the location tree of a customer is called <span style=\"font-style: italic;\">device installation<\/span>. <\/p>\n\r<p class=\"p_Normal\">All devices known to the <a href=\"dtws.html\" class=\"topiclink\">digital twin service<\/a> (and only those) can be installed. To install a specific device in specific a room of a specific customer the user attempting the installation must be authorized to do so. A user is authorized to install a device at a specific customer if he has the appropriate permission on the room the device shall be installed in and if he can prove that the device belongs to that customer. <\/p>\n\r<p class=\"p_Normal\">For the later the user must know the serial number of one component of a device and the associated secret - all this data is encoded in the QR-code on the component and is also printed in clear text next to the QR-code<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:17.5625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Type of device<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:25.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Secret<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:17.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">BLE-networked devices devices <\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:25.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Last 4 digits of the EUI64<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:17.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Legacy non networked devices<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:25.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">no Secret<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:17.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Non networked devices with pin<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:25.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">4 digit pin<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_238297\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 18: Secrets for different types of devices<\/span><\/p>\n\r<p class=\"p_Normal\">A device can be uninstalled and or moved to other locations (i.e. installed to another location). A device can be therefore be installed at multiple locations over time. But a device can only be installed at one location at any point in time. The Client Service keeps a historical record of the locations a device was installed to.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
