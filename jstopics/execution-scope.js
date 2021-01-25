hmLoadTopic({
hmKeywords:"",
hmTitle:"Execution Scope",
hmDescription:"When a device filter is executed, it is always executed in a specific scope. This execution scope defines the base set of devices to which the filter will be applied. The...",
hmPrevLink:"logical-operators.html",
hmNextLink:"term-type-availability.html",
hmParentLink:"device-filter.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"client-service.html\">Client Service<\/a> &gt; <a href=\"device-filter.html\">Device filter<\/a>",
hmTitlePath:"Backend infrastructure > Client Service > Device filter > Execution Scope",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Execution Scope<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">When a device filter is executed, it is always executed in a specific scope. This <span class=\"f_Identifier\">execution scope<\/span> defines the base set of devices to which the filter will be applied. The execution scope is basis for the permission check that is performed before the execution of the device filter. I.e. the user executing the device filter must have the permission to see all devices in this scope.<\/p>\n\r<p class=\"p_Normal\">The user interface available for the HsM system usually make the current scope very explicit (e.g. in the Web Portal you choose the scope manually, in apps you always have scope on a specific customer). The API for the Client Service requires an execution scope to be passed with each device filter execution request.<\/p>\n\r<p class=\"p_Normal\">Depending on the execution scope the Client Service will dynamically modify the device filter to make sure that the results will only include devices in the given scope.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Global scope<\/span><\/h1>\n\r<p class=\"p_Normal\">The global execution scope includes all devices managed by the Client Service. Device filters executed in global scope are not modified dynamically.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Organization scope<\/span><\/h1>\n\r<p class=\"p_Normal\">Includes all devices of all customers within an organization. <\/p>\n\r<p class=\"p_Normal\">If a customer has sub-ordinate chain and bill-to customers those customers will always be in the same organization. When executing a query in an organization scope the devices of any sub-ordinate customer of any customer in that organization are part of the base set of devices to which the filter is applied.<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Customer scope<\/span><\/h1>\n\r<p class=\"p_Normal\">Includes all devices of the customer or one of its chain, or bill-to customers.<\/p>\n\r<p class=\"p_Normal\">Customers can have associated chain customers and associated bill-to customers. When executing a device filter in a customer scope the devices of these sub-ordinate customers will also be part of the base set of devices on which the filter is executed.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"Device filter dynamc scope modification\" style=\"margin:0;width:37.3750rem;height:15.1250rem;border:none\" src=\".\/images\/hmfile_hash_65d5ca13.png\"\/><\/p>\n\r<p class=\"p_Normal\">Note chain to and bill customer are hierarchical, e.g. chain customers can have sub-ordinate bill-to customers etc.<\/p>\n\r"
})
