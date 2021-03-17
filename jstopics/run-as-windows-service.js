hmLoadTopic({
hmKeywords:"",
hmTitle:"Creating a Windows Service",
hmDescription:"While there are many ways to register a program as a Windows Service, we recommend the following approach with PowerShell. Note you need to run PowerShell with administrative...",
hmPrevLink:"updating.html",
hmNextLink:"removing-a-windows-service.html",
hmParentLink:"dtra-operations-guide.html",
hmBreadCrumbs:"<a href=\"on-premise-infrastructure.html\">On Premise infrastructure<\/a> &gt; <a href=\"dtra.html\">Digital Twin Registration Agent<\/a> &gt; <a href=\"dtra-operations-guide.html\">Operations guide<\/a>",
hmTitlePath:"On Premise infrastructure > Digital Twin Registration Agent > Operations guide > Creating a Windows Service",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Creating a Windows Service<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">While there are many ways to register a program as a Windows Service, we recommend the following approach with PowerShell. Note you need to run PowerShell with administrative privileges to modify Windows Services.<\/p>\n\r<p class=\"p_Normal\">Creating a Windows Service for the Digital Twin Registration Agent can be done with the <span class=\"f_InlineCode\">New-Service<\/span> PowerShell cmdlet. For full documentation of this cmdlet type <span class=\"f_InlineCode\">Get-Help New-Service -Online<\/span> &nbsp;in PowerShell.<\/p>\n\r<p class=\"p_Normal\">Note that multiple windows service can be created based on the same installation<span style=\"font-family: Arial,Helvetica,sans-serif;\">↲↲↲<\/span> of the Digital Twin Registration Agent. However make sure that these service use different Environments and therefore different configuration. The Digital Twin Registration Agent will not allow two instances to run with the same configuration.<\/p>\n\r<p class=\"p_Normal\">General Syntax of the New-Service cmdlet:<\/p>\n\r<p class=\"p_CodeExample\"><span class=\"f_CodeExample\">New-Service <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Name] &lt;String&gt; <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-BinaryPathName] &lt;String&gt; <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-DisplayName &lt;String&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Description &lt;String&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-SecurityDescriptorSddl &lt;String&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-StartupType &lt;ServiceStartupType&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Credential &lt;PSCredential&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-DependsOn &lt;String[]&gt;] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-WhatIf] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Confirm] <\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[&lt;CommonParameters&gt;]<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Suggestions for the parameters to use:<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.2500rem 0 0.3750rem 0;\"><table style=\"border:none; border-spacing:0;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">Parameter<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">Notes<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-Name<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">It is recommended to put the environment name in the service name so that multiple service can be installed, e.g.: <span class=\"f_InlineCode\">DTRA_&lt;EnvironmentName&gt;<\/span><\/p>\n\r<p class=\"p_Normal\">The name cannot be null or have zero length. Its maximum size is 256 characters. It also cannot contain forward or backward slashes, \'\/\' or \'\\\', or characters from the ASCII character set with value less than decimal value 32.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-BinaryPathName<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">The full path to the executable of the Digital Twin Registration Agent including the command line switch for the Environment. Environment name should be consistent with the -Name parameter.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">\'&quot;&lt;FullPathToExe&quot; &quot;-Environment=&lt;EnvironmentName&gt;&quot;\'<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-StartupType &nbsp;<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">Recommended: <span class=\"f_InlineCode\">Automatic<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Example <\/p>\n\r<p class=\"p_CodeExample\"><span class=\"f_CodeExample\">New-Service `<\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-Name &quot;DRTA_Production&quot; `<\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-BinaryPathName \'&quot;&lt;path&gt;\\Hsm.DigitalTwinRegistrationAgent.exe --Environment=Production&quot; `<\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-DisplayName &quot;HsM Digital Twin Registration Agent - Production&quot; `<\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-Description &quot;Registeres digital twins with the HsM Digital Twin Service&quot; `<\/span><\/p>\n\r<p class=\"p_CodeExample\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-StartupType &quot;Automatic&quot;<\/span><\/p>\n\r"
})
