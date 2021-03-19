hmLoadTopic({
hmKeywords:"",
hmTitle:"Data link monitoring service logic",
hmDescription:"The Data Link Monitoring Service records the result of monitoring data links between non-gateway devices and stationary gateways and the results of monitoring the data links...",
hmPrevLink:"dlms-data-link-monitoring-gateway-backend.html",
hmNextLink:"pdpr.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Data link monitoring service logic",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data link monitoring service logic<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Data Link Monitoring Service records the result of monitoring data links between non-gateway devices and stationary gateways and the results of monitoring the data links between stationary gateways and the HsM Backend. It keeps the current online status of these devices and in case of changes to the status will forward the changed status to the HsM IoT Data Storage Infrastructure as resource instance values.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Changes to a device status will be persisted as resource instance values. Consecutive reporting of the same status will not be persisted in the associated resource instance values.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Persisting as resource instance values is done via IoT hub (as virtual resource instance values)<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>When a stationary gateway disconnection is detected all non-gateway devices that used this stationary gateway previously will be set to state offline (Gateway not reachable) if the device has not been reported online with another stationary gateway within a grace period of xx minutes.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Devices for which no update has been received for the last xx hours will be set to Offline (Device not reachable).<\/p>"
})
