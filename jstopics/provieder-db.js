hmLoadTopic({
hmKeywords:"",
hmTitle:"Provider DB",
hmDescription:"The provider DB is the place where the first digital representation of HsM devices is stored. The End-Test procedure writes data records to tables in this database; from this...",
hmPrevLink:"logging2.html",
hmNextLink:"trace_product.html",
hmParentLink:"on-premise-infrastructure.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On Premise infrastructure<\/a>",
hmTitlePath:"On Premise infrastructure > Provider DB",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Provider DB<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The provider DB is the place where the first digital representation of HsM devices is stored. The End-Test procedure writes data records to tables in this database; from this database HsM starts the life cycle for digital twins.<\/p>\n\r<p class=\"p_Normal\">The Provider DB stores much more information than necessary for HsM. HsM only interacts with data in following tables:<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:12.3125rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Table Name<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:30.8125rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:12.3125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">TRACE_Product<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">This is the main table for products i.e. things that run off the production line including dispensers, gateways and other device.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:12.3125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">TRACE_Measure<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">A Key value storage used to store measurements done by the end-test procedure, actions performed by the end-test procedure and values set by the end-test procedure.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:12.3125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">TRACE_ProductRecordState<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.8125rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">A lookup table for defined product record states. These states are used in TRACE_Product to classify the records stored there.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_c6659b\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 1: Tables in the Provider DB used by HsM<\/span><\/p>\n\r"
})
