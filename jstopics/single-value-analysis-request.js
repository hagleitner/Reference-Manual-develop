hmLoadTopic({
hmKeywords:"",
hmTitle:"Request",
hmDescription:"Single value analysis are based on single value analysis requests that provide the Data Analysis Service with information what data to process and how to process that data....",
hmPrevLink:"dans-single-value-analysis.html",
hmNextLink:"data-series-source_2.html",
hmParentLink:"dans-single-value-analysis.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"daan.html\">Data Analysis Service<\/a> &gt; <a href=\"dans-single-value-analysis.html\">Single value analysis<\/a>",
hmTitlePath:"Backend infrastructure > Data Analysis Service > Single value analysis > Request",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Request<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Single value analysis are based on <span style=\"font-style: italic;\">single value analysis requests<\/span> that provide the Data Analysis Service with information what data to process and how to process that data. Tables 19 and 19 describe the parameters of a time series analysis request.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.1875rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Request parameter<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Data series sources<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">A collection of data series source (see table 20 for details). At least one data series source has to be specified for each request.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Base data set<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Raw data<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Daily aggregations<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Weekly aggregations<\/span><\/p><p class=\"p_CondensedNormal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_CondensedNormal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span class=\"f_CondensedNormal\">Monthly aggregations<\/span><\/p><\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Time aggregation function<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Defines which base data aggregate is used.<\/span><\/p>\n\r<p class=\"p_CondensedNormal\"><span class=\"f_CondensedNormal\">Available aggregates: Min, Max, Avg, Range, Last-First, Standard deviation, Sum, Count<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Value aggregation<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Defines how data of a single data series is aggregated within a time partition. When base data set is not raw date the aggregation is performed on the chosen base data aggregation.<\/p>\n\r<p class=\"p_Normal\">Available aggregation functions: <span class=\"f_CondensedNormal\">Min, Max, Avg, Range, Last-First, Standard deviation, Sum, Count<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.1875rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Device aggregation function<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Defines how the results of time aggregations per data series source are aggregated.<\/p>\n\r<p class=\"p_Normal\">Available aggregation functions: <span class=\"f_CondensedNormal\">Min, Max, Avg, Range, Last-First, Standard deviation, Sum, Count<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_05d8c4\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 20: Parameters of a single value analysis request<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; line-height: 1.44; padding: 0 0 0 0; margin: 0.3750rem 0 0.2500rem 0;\"><table style=\"width:43.7500rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.2500rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Request parameter<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:33.8750rem; background-color:#F5F5F5; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Component Id<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The identifier of the component that generated data for a data series<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The id of the resource type<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Resource instance number<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The id of the resource instance number<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.2500rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">Time interval<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:33.8750rem; padding:0.1250rem; border:solid thin #e1e1e1;\"><p class=\"p_Normal\">The Data Analysis Service will only process data of this data series source that applies to a date within this interval. The interval is specified with a from and to date - time. These boundaries are inclusive, i.e. they defined a closed date interval<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_a51724\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 21: Parameters of a data series source within a time series analysis request<\/span><\/p>\n\r"
})
