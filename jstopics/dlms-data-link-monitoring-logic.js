hmLoadTopic({
hmKeywords:"",
hmTitle:"Data link monitoring service logic",
hmDescription:"The Data Link Monitoring Service records the result of monitoring data links between non-gateway devices and stationary gateways and the results of monitoring the data links...",
hmPrevLink:"dlms-connection-topology.html",
hmNextLink:"pdpr.html",
hmParentLink:"dlms.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"dlms.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Data link monitoring service logic",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data link monitoring service logic<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The Data Link Monitoring Service records the result of monitoring data links between non-gateway devices and stationary gateways and the results of monitoring the data links between stationary gateways and the HsM Backend. It keeps the current online status of these devices and in case of changes to the status it will store the changed data link status locally and will forward it as <a href=\"dlms-generated-resource-instance-values.html\" class=\"topiclink\">virtual resource instance values<\/a>.<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Consecutive reporting of the same status will not be stored or forwarded, thus limiting the amount of redundant data.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>When a stationary gateway disconnection is detected all non-gateway devices that last used this stationary gateway will considered as offline too, if those device are not reported online via another stationary gateway within a grace period of two minutes.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Devices for which no update has been received for the last 4 hours are considered as offline.<\/p>"
})
