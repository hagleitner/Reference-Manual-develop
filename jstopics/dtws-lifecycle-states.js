hmLoadTopic({
hmKeywords:"",
hmTitle:"Lifecycle states and transitions",
hmDescription:"Status   Allows transition to Produced Device was produced and is registered for a specific HsM OEM Partner. This state is the initial state for all devices when they are digit",
hmPrevLink:"dtws-lifecycle.html",
hmNextLink:"dtws-lifecycle-compound.html",
hmParentLink:"dtws-lifecycle.html",
hmBreadCrumbs:"<a href=\"neutral-backend-infrastructure.html\">Neutral backend infrastructure<\/a> &gt; <a href=\"dtws.html\">Digital Twin Service<\/a> &gt; <a href=\"dtws-lifecycle.html\">Digital Twin lifecycle<\/a>",
hmTitlePath:"Neutral backend infrastructure > Digital Twin Service > Digital Twin lifecycle > Lifecycle states and transitions",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Lifecycle states and transitions<\/span><\/h1>\n\r",
hmBody:"<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:6.8750rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:28.0000rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">&nbsp;<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:9.8125rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Allows transition to<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.8750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Produced<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:28.0000rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Device was produced and is registered for a specific HsM OEM Partner. This state is the initial state for all devices when they are digitally born and registered by the manufacturer\'s production line.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:9.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Active<\/p>\n\r<p class=\"p_Normal\">Decommissioned<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.8750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Active<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:28.0000rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Once the device is assigned to a location (and therefore customer) in HsM its life cycle sate is <span style=\"font-style: italic;\">Active<\/span>. I.e. devices considered as in-use are in <span class=\"f_Identifier\">Active<\/span> life cycle state.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:9.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Inactive<\/p>\n\r<p class=\"p_Normal\">Hibernating<\/p>\n\r<p class=\"p_Normal\">Decommissioned<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.8750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Inactive<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:28.0000rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">If a device is unassigned from a location in the HsM Client Service its life cycle state becomes inactive. <\/p>\n\r<p class=\"p_Normal\">If a device is woken from hibernation (by manufacturer) it is also in Inactive state.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:9.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Active<\/p>\n\r<p class=\"p_Normal\">Hibernating<\/p>\n\r<p class=\"p_Normal\">Decommissioned<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.8750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Hibernating<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:28.0000rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Device was returned to the manufacturer for repair and is currently not available for operation. HsM will not provide any digital services for this device. Device will be unassigned from its location.<\/p>\n\r<p class=\"p_Normal\">Only device manufacturers receiving returned devices may mark them as hibernating.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:9.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Inactive<\/p>\n\r<p class=\"p_Normal\">Decommissioned<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.8750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Decommissioned<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:28.0000rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">This is the final state of a device. Once a device is marked as decommissioned HsM will not provide any digital service for this device, and the device can never be moved to another life-cycle state again.<\/p>\n\r<p class=\"p_Normal\">Customers can mark devices as decommissioned through via the HsM Client Service.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:9.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">&nbsp;<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_7031b2\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 4: Life-cycle states of devices<\/span><\/p>\n\r<div class=\"p_Normal\"><div style=\"margin:0;width:45.6875rem\"><img id=\"FIG4293C3EF\" alt=\"Figure 1: State chart for the life cycle state of digital twins in HsM\" title=\"Figure 1: State chart for the life cycle state of digital twins in HsM\" style=\"width:45.6875rem;height:28.5625rem;border:none\" src=\".\/images\/hmfile_hash_3846e7d8.png\"\/><p style=\"text-align:center\"><span class=\"f_ImageCaption\">Figure 1: State chart for the life cycle state of digital twins in HsM<\/span><\/p><\/div><\/div>\n\r"
})
