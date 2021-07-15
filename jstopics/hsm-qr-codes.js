hmLoadTopic({
hmKeywords:"",
hmTitle:"Device QR Codes",
hmDescription:"All devices managed by HsM have QR codes that carry information about the device. The data encoded in these QR codes is used by clients (like Apps) identify devices and get...",
hmPrevLink:"comm-serial-numbers-v3.html",
hmNextLink:"4plus.html",
hmParentLink:"comm.html",
hmBreadCrumbs:"<a href=\"comm.html\">Common<\/a>",
hmTitlePath:"Common > Device QR Codes",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Device QR Codes<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">All devices managed by HsM have QR codes that carry information about the device. The data encoded in these QR codes is used by clients (like Apps) identify devices and get some basic information about devices.<\/p>\n\r<p class=\"p_Normal\">The QR code is physically placed on one component of the device, therefore if the component gets exchanged the QR code will change too. Most of the data encoded in the QR code (<span class=\"f_Term\">content<\/span>) is also printed next to the QR code in plain text.<\/p>\n\r<p class=\"p_Normal\">The content is a UTF-8 encoded string without <span style=\"font-style: italic;\">Byte order Mark. <\/span>It consists of several lines separated by a linefeed (0x0A) character. The content of the first two lines is the same for all HsM QR codes (see 49), the contents of the following lines depends on the QR-code content type and subtype encoded in the first line.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:7.4375rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content part<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:20.0000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Location in content<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:15.3125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:20.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">All characters up to the first hyphen (U+002D, 0x2D)<\/p>\n\r<\/td>\n\r<td rowspan=\"2\"  style=\"vertical-align:middle; width:15.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data type and subtype define the structure and information of the rest of the content.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Content subtype<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:20.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">All characters after the first hyphen to the second hyphen (U+002D, 0x2D)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"product-type-code.html\" class=\"topiclink\">Product type code<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:20.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">All characters after the second hyphen (U+002D, 0x2D up to the third hyphen.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:15.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The product type code of the device type this QR code is on.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"article-numbers.html\" class=\"topiclink\">Article number<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:20.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">All characters after the third hyphen (U+002D, 0x2D up to the first new line (<span style=\"font-size: 1.10rem; color: #242729; background-color: #ffffff;\">U+000A, 0x0A<\/span>)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:15.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:7.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\"><a href=\"comm-serial-numbers.html\" class=\"topiclink\">Serial number<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:20.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">All characters of the second line in the QR code content.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:15.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The serial number of the device or one of the components of the device<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_15d7fe\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 50: Content parts of the first line of a  <\/span><span class=\"f_ImageCaption\">HsM<\/span><span class=\"f_ImageCaption\"> QR code<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Content types and subtypes<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:6.0000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:5.4375rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data subtype<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:12.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Name of QR-code type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:18.8125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">50<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:5.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">01<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">4Plus<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:18.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">50<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:5.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">02<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Hybrid <\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:18.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Used on all Devices of the Hybrid line (devices with BLE)<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">50<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:5.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">03<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Analog and Auxiliary<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:18.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Used for devices that do not support network communication.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.0000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">50<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:5.4375rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">05<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device with network interface<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:18.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Used for device that do not have a serial number<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_15d7fe1\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 51: Contents types and content subtypes of QR code content used by <\/span><span class=\"f_ImageCaption\">HsM<\/span><\/p>\n\r"
})
