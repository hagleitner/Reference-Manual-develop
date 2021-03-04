hmLoadTopic({
hmKeywords:"",
hmTitle:"Stored device filters",
hmDescription:"Device filters can be stored on the HsM Client Service for reuse.",
hmPrevLink:"clse-devicefiltertermtype-organization.html",
hmNextLink:"administrators-guide.html",
hmParentLink:"clse-devicefilter.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"clse.html\">Client Service<\/a> &gt; <a href=\"clse-devicefilter.html\">Device filter<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device filter > Stored device filters",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Stored device filters<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\"><a href=\"clse-devicefilter.html\" class=\"topiclink\">Device filters<\/a> can be stored on the HsM Client Service for reuse.<\/p>\n\r<p class=\"p_Normal\">Stored device filters are either stored for the whole system (global) or for a specific organization or for a specific customer.<\/p>\n\r<p class=\"p_Normal\">The <span class=\"f_Identifier\">scope availability<\/span> defines in which scopes the stored device filter shall be available for execution. Scope availability can only be set for device filters stored globally or for a specific organization. Table 11 shows the scope availability options for device filters in different storage places. Per default all scope availability options are set.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.1250rem 0;\"><table style=\"width:100%; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:8.6875rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Place of storage<\/span><\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:40.3750rem; background-color:#DCDCDC; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Scope availability options<\/span><\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:8.6875rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Global<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.3750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Global<\/span><\/p>\n\r<p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Organization<\/span><\/p>\n\r<p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Customer<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:8.6875rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Organization<\/span><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.3750rem; padding:0.1250rem; border:solid thin #c0c0c0;\"><p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Organization<\/span><\/p>\n\r<p class=\"p_Tablecontents\"><span class=\"f_Tablecontents\">Customer<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_e0a6f9\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 12: Stored device filter availability scopes<\/span><\/p>\n\r<p class=\"p_Normal\">A stored device filter can be either personal or public, personal device filters are available only to the user who created the filter (and can only be modified by this user) public device filters are available for all users.<\/p>\n\r<p class=\"p_Normal\">A user can create and modify personal stored device filters in storage places where he has the permission <span style=\"font-style: italic;\">Create and Modify personal device filters<\/span>. A user can create and modify public stored device filters in all storage places where he has the permission to <span class=\"f_Identifier\">Create and modify public device filters<\/span>.<\/p>\n\r<p class=\"p_Normal\">All users can see public device filters that are available in a specific execution scope (based on place of storage and scope availability). Personal device filters are only available to the creator of the filter (also based on place of storage and scope availability).<\/p>\n\r<p class=\"p_Normal\">When storing device filters the HsM Client Service will check hard and soft validity constraints only valid device filters can be stored.<\/p>\n\r<p class=\"p_Normal\">A stored device filter must always have a non-empty name. The system does not check the uniqueness of device filter names. The name is stored a s a phrase and can therefore be defined for each culture separately, the phrase must have at least one non-empty translation.<\/p>\n\r"
})
