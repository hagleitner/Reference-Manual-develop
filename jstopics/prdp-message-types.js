hmLoadTopic({
hmKeywords:"",
hmTitle:"Message types",
hmDescription:"HsM uses different message types for communication via Azure IoT Hub. Table 30 provides an overview of all used message types. ",
hmPrevLink:"pdpr.html",
hmNextLink:"prdp-messagetype-device-gateway-connection-status.html",
hmParentLink:"pdpr.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"pdpr.html\">Primary Data Processing<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing > Message types",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Message types<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM uses different <span class=\"f_Term\">message types<\/span> for communication via Azure IoT Hub. Table 30 provides an overview of all used message types. <\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:11.5625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Message type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:3.5625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Version<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:22.3125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"prdp-messagetype-resource-instance-data.html\" class=\"topiclink\">resource instance data<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:3.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">1.0.0<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">This message type is used for transferring resource instance values from devices to the HsM Backend.<\/p>\n\r<p class=\"p_Normal\">Value for message-type application property: <span class=\"f_InlineCode\">resource-instance-data<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"prdp-messagetype-gateway-heartbeat.html\" class=\"topiclink\">gateway heartbeat<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:3.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">1.0.0<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">This message type is used by HsM gateways to signal the HsM Backend that they are alive. <\/p>\n\r<p class=\"p_Normal\">Value for message-type application property:<span class=\"f_InlineCode\"> gateway-heartbeat<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"prdp-messagetype-device-gateway-connection-status.html\" class=\"topiclink\">device-gateway connection status<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:3.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">1.0.0<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:22.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">This message type is used by HsM stationary gateways to inform the HsM Backend about the status of connections it has with BLE-networked devices devices.<\/p>\n\r<p class=\"p_Normal\">Value for message-type application property:<span class=\"f_InlineCode\"> device-gateway-connection-status<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_b7eaee\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 30: IoT message types used in <\/span><span class=\"f_ImageCaption\">HsM<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><a id=\"common-system-properties\" class=\"hmanchor\"><\/a><span class=\"f_Heading1\">Common message system properties<\/span><\/h1>\n\r<p class=\"p_Normal\">All message type used by HsM have a <span class=\"f_InlineCode\">application\/json<\/span> content-type and all messages use <span class=\"f_InlineCode\">UTF8<\/span> encoding. Azure IoT Hub message <span class=\"f_Term\">system properties<\/span> are used to signal this content-type and encoding, see table 31<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">System property name<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.5625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Value<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">content-type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">application\/json<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">content-encoding<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.5625rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">utf-8<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_3122b4\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 31: Azure IoT Hub message system properties set in all <\/span><span class=\"f_ImageCaption\">HsM<\/span><span class=\"f_ImageCaption\"> IoT Hub messages.<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><a id=\"common-application-properties\" class=\"hmanchor\"><\/a><span class=\"f_Heading1\">Common message application properties<\/span><\/h1>\n\r<p class=\"p_Normal\">All messages transferred via the Azure IoT Hub in HsM use a common set of Azure IoT Hub message <span class=\"f_Term\">application properties<\/span> as shown in table. 32. Besides these properties each message type might add additional application properties, see the specific message types documentation for more details.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:11.9375rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Property<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:31.1250rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.9375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">message-type<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:31.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A string identifying the HsM Azure IoT Hub message type. See 29 for the possible values of this application property. The value in this property is case insensitive.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.9375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">message-type-version<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:31.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A version of the message type. Over time different versions of message types can be released. The message type version is given as a semantic version. The value of this property is case insensitive.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:11.9375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_InlineCode\"><span class=\"f_InlineCode\">sender-id<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:31.1250rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Identifying string of the message sender. For device-to-cloud messages link this is usually the some unique id of the gateway. The value of this property is case insensitive.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_87d88a\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 32: IoT message application properties used by all <\/span><span class=\"f_ImageCaption\">HsM<\/span><span class=\"f_ImageCaption\"> IoT Hub messages<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
