hmLoadTopic({
hmKeywords:"",
hmTitle:"Total online % offline time",
hmDescription:"Whenever the Data Link Monitoring Service detects a change in the data-link status from online to offline, temporarily offline or not connected it adds the time between this...",
hmPrevLink:"expectation.html",
hmNextLink:"dlms-metrics-online-ratio.html",
hmParentLink:"dlms-connection-metrics.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a> &gt; <a href=\"dlms-connection-metrics.html\">Connection metrics<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Connection metrics > Total online % offline time",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Total online % offline time<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Whenever the Data Link Monitoring Service detects a change in the <a href=\"dlms-data-link-status.html\" class=\"topiclink\">data-link status<\/a> from <span class=\"f_Term\">online<\/span> to <span class=\"f_Term\">offline<\/span>, <span class=\"f_Term\">temporarily offline<\/span> or <span class=\"f_Term\">not connected<\/span> it adds the time between this change and the last data-link status change to the <span style=\"font-style: italic;\">total online time<\/span> of this device.<\/p>\n\r<p class=\"p_Normal\">Whenever the Data Link Monitoring Service detects a change in the data-link status from <span style=\"font-style: italic;\">offline<\/span> or <span style=\"font-style: italic;\">temporarily offline<\/span> to <span style=\"font-style: italic;\">online<\/span> it adds the time between this change and the last data-link status change to the <span class=\"f_Term\">total offline time<\/span> for this device. Changes from <span class=\"f_Term\">not-connected<\/span> to <span style=\"font-style: italic;\">online <\/span>are not added to the cumulated offline time.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th colspan=\"3\"  rowspan=\"2\"  style=\"vertical-align:middle; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><br \/>\n\r<\/th>\n\r<th colspan=\"4\"  style=\"vertical-align:middle; width:6.0625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\" style=\"text-align: center;\"><span class=\"f_CondensedNormal\">Example<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<tr>\n\r<th colspan=\"2\"  style=\"vertical-align:middle; width:6.4375rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\" style=\"text-align: center;\"><span class=\"f_CondensedNormal\">Total online time (TON)<\/span><\/p>\n\r<\/th>\n\r<th colspan=\"2\"  style=\"vertical-align:middle; width:6.0625rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\" style=\"text-align: center;\"><span class=\"f_CondensedNormal\">Total offline time (TOF)<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<tr>\n\r<th style=\"vertical-align:middle; width:10.5000rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Current Status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:11.3125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">New Status<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:7.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Change<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:2.8125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Current<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:2.8125rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Next<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:2.6875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Current<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:middle; width:2.6875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Next<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Term\"><span class=\"f_Term\">&lt;no status recorded before&gt;<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">None<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TON<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">5<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TON<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">5<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TON<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">15<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TON<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">20<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">25<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">40<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">45<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">40<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">45<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">5<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">0<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">50<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">55<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">20<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">25<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">60<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">65<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">85<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Temporary offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Adds to TOF<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">85<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">None<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Online<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">None<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">80<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:middle; width:10.5000rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Not connected<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:11.3125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Offline<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:7.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">None<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.8125rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">10<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">5<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:middle; width:2.6875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">5<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_ea6559\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 26: Calculation of total online and offline time with example. The example assumes that the time between the status changes is always 5 seconds. TON = Total online time, TOF = Total offline time<\/span><\/p>\n\r"
})
