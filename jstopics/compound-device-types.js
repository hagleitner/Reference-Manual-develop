hmLoadTopic({
hmKeywords:"",
hmTitle:"Compound device types",
hmDescription:"nh  HsM supports the concept of compound devices, i.e. devices can include other devices. These devices within other devices, however, are more than just components: they have...",
hmPrevLink:"definitions.html",
hmNextLink:"introduction2.html",
hmParentLink:"catalog-service.html",
hmBreadCrumbs:"<a href=\"neutral-backend-infrastructure.html\">Neutral backend infrastructure<\/a> &gt; <a href=\"catalog-service.html\">Catalog Service<\/a>",
hmTitlePath:"Neutral backend infrastructure > Catalog Service > Compound device types",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Compound device types<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">nh <\/p>\n\r<p class=\"p_Normal\">HsM supports the concept of compound devices, i.e. devices can include other devices. These devices within other devices, however, are more than just components: they have their own device id, they can often also be used as stand-alone devices, they can be moved to another compound device, etc.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The MLE (Modulare Leerstandseinheit) is an example of a device type that can exist as a standalone device or can be part of a compound device like the multifold or the paper box.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The catalog service supports compound device types as part of the device type definition. This is implemented as device type placeholders that define the logical location within the compound device type as well as the device type of the compound member type. I.e. device type placeholders are typed with a specific device type.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Wording<\/p>\n\r<p class=\"p_Normal\">Wording in Catalog:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Compound device type: Device type with at least one device type placeholder.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Compound member device type: Device type that can be part of at least one compound device type.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Wording in digital twin<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Compound device: Device that has at least one other device filling a placeholder<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Compound member device: &nbsp;Device that is part of a compound device type<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Enumerating resource instances<\/p>\n\r<p class=\"p_Normal\">Since compound device types can contain multiple compound member device types, they can also contain multiple firmware types. Therefore the possibly available resource instances have to be enumerated.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The available resource instances for a given device type are built as follows:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Search for all firmware component types that are part of the given device type<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Search for all device type placeholders within the given device type, and search for all firmware component types within that device<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">A result could look like in the example shown below.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Device type 1:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Firmware type A<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource A.1<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource A.2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Device type placeholder 1<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Firmware type B<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource B.1<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource B.2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource B.3<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Device type placeholder 2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Firmware type C<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource C.1<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Resource C.2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Possibly available resource instances:<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">A.1, A.2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">B.1, B.2, B.3<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">C.1, C.2<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Delivering device types via the browse API<\/p>\n\r<p class=\"p_Normal\">When device types are requested and then delivered via the browse API their component type placeholders are resolved to component types, the according component type variants and component type variant versions. Device type placeholders are however not resolved; i.e. only the id of the combinable device type is returned.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Combining devices<\/p>\n\r<p class=\"p_Normal\">Compound devices can either be created by the Digital Twin registration agent when the device is first registered, or they can be created through the HsM Client Service (usually via Xibu App or Web Frontend).<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Both possible ways of combining devices make use of the catalog service, since it provides information about possible device type placeholders for compound device types. As the placeholders are typed, the consumers of the catalog know which combinable devices can be installed in a compound device.<\/p>\n\r"
})
