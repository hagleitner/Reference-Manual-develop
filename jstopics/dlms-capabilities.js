hmLoadTopic({
hmKeywords:"",
hmTitle:"Detection capabilities",
hmDescription:"How quickly the Data Link Monitoring Service detects changed data-link states depends on many different things among them the configuration of the Data Link Monitoring Service...",
hmPrevLink:"dlms-configuration.html",
hmNextLink:"pdpr.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Detection capabilities",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Detection capabilities<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">How quickly the Data Link Monitoring Service detects changed data-link states depends on many different things among them the <a href=\"dlms-configuration.html\" class=\"topiclink\">configuration<\/a> of the Data Link Monitoring Service the configuration of the individual stationary gateways and the overall system load. Tables 33 and 34 give an estimation of detection rates.<\/p>\n\r<p class=\"p_Normal\">Generally all changes to the data-link status of BLE-networked device are detected very fast if the stationary gateway has connection to the HsM Backend. When a stationary gateway looses connection to the HsM Backend the data-link status of this stationary gateway as well as the data-link status of all the devices that are connected to this gateways is detected with some delay.<\/p>\n\r<p class=\"p_Normal\">A short interruption of a gateway\/HsM Backend connection may not be recognized by the Data Link Monitoring Service at all.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:20.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Event<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:22.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detection of gateway status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:22.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detection of status of connected BLE-networked devices<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:20.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Gateway &nbsp;connects with HsM Backend<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected within 30 s<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected within 30 s<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:20.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Gateway disconnects from HsM Backend accidentally (power loss, network down etc.)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected with 15 m<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected with within 15 m<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_40c8cd\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 33: <\/span><span class=\"f_ImageCaption\">Data Link Monitoring Service<\/span><span class=\"f_ImageCaption\"> detection capabilities for stationary gateways<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:13.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Gateway status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:14.7500rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device event<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detection<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td rowspan=\"2\"  style=\"vertical-align:middle; width:13.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Connected with HsM Backend<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:14.7500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device connects to Gateway<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected within 1 s to 30 s<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:14.7500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device disconnects from Gateway<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Detected within 1 s to 30 s<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td rowspan=\"2\"  style=\"vertical-align:middle; width:13.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Gateway is running but has not HsM Backend connection.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:14.7500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device connects to Gateway<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">10 to 30 seconds after the Gateway is reconnected to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">6 h if the gateway reboots while being offline or gateway is offline for longer than 48h.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:14.7500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device disconnects from Gateways<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">10 to 30 seconds after the Gateway is reconnected to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">6 h if the gateway reboots while being offline or gateway is offline for longer than 48h.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_982731\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 34: <\/span><span class=\"f_ImageCaption\">Data Link Monitoring Service<\/span><span class=\"f_ImageCaption\"> detection capabilities for stationary gateways<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
