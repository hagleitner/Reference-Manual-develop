hmLoadTopic({
hmKeywords:"BLE beacons",
hmTitle:"Beacons",
hmDescription:"The operating systems of mobile devices (smart phones) can detect when they enter or exit a particular setting by monitoring BLE beacons. BLE beacons are specially structured...",
hmPrevLink:"hsmd-ble-advertising.html",
hmNextLink:"comm.html",
hmParentLink:"hsmd-ble-communication.html",
hmBreadCrumbs:"<a href=\"hsmd.html\">HsM devices<\/a> &gt; <a href=\"hsmd-ble-communication.html\">BLE Communication<\/a>",
hmTitlePath:"HsM devices > BLE Communication > Beacons",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Beacons<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">The operating systems of mobile devices (smart phones) can detect when they enter or exit a particular setting by monitoring BLE beacons. BLE beacons are specially structured BLE packets sent by BLE devices. The operating systems of these mobile devices have an internal logic that decides whether it enters the area of the beacon source or leaves the area of the beacon source. Both events can then trigger actions on the mobile device.<\/p>\n\r<p class=\"p_Normal\">HsM BLE-networked devices act as source for BLE beacons. They send BLE beacon packets (iBeacon) regularly and can therefore trigger actions on mobile devices. HsM apps register with the operating system of the device they run on to be notified about received beacons of HsM devices, so that they will be woken up whenever they are near a HsM device. This is used for background <a href=\"cuapp-ble-browsing.html\" class=\"topiclink\">browsing<\/a>.<\/p>\n\r<p class=\"p_Normal\">As described above operating systems of mobile devices will only trigger actions when the enter or leave a setting. Background browsing however shall be triggered regularly when being nearby a HsM device. Therefore the Beacon packets sent by HsM BLE-networked device use changing bacon ids to simulate entering a new setting.<\/p>\n\r<p class=\"p_Normal\">Following BLE beacon IDs are used:<\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">4cf5c9d2-21c1-4991-bd40-5aac5b2156ff<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">b1e3877a-3624-422d-b19c-ae1d04b19ab0<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">bc68d385-ae22-4134-acc3-d8fdd1765571<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">30d8018a-0c1b-4846-a751-df60d9bc9539<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">032cb2a0-8273-41c0-b4c4-bdc8a87278d5<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">03838efc-0cbd-4cba-83e7-1464ba3d7062<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">c65a5e9b-ae70-40ef-b698-e70b616e3f91<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">bfe8c673-c2bb-48df-a0c2-06664dd5e37e<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">c7978071-d892-475d-adac-f0269e4377ed<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">6761360b-9865-4168-b638-70f076fa65b3<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">3b2282e0-2dbc-4cdc-a009-aa66cce89e46<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">78afc740-b026-4c7c-a8fb-ed091d1d7521<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">0b111619-78b1-48b0-8913-e737aba80501<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">d0aa9ef7-c69c-48c4-b6d4-981de6c820d5<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">cb348a0f-c0e2-44a9-9a1b-427f61f3fbda<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_CodeExample\">dcee6eb2-2a4a-4586-b408-e8a833804f84<\/span><\/p>\n\r"
})
