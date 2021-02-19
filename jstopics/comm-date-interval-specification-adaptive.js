hmLoadTopic({
hmKeywords:"",
hmTitle:"Adaptive date interval specification",
hmDescription:"Adaptive date intervals specifications are not based on Start and End but rather specify an algorithm to calculate a Start and End from the current date and time when the...",
hmPrevLink:"comm-date-interval-specification-static.html",
hmNextLink:"comm-date-interval-specification-predefinedadaptive.html",
hmParentLink:"comm-date-interval-specification.html",
hmBreadCrumbs:"<a href=\"comm.html\">Common<\/a> &gt; <a href=\"comm-date-interval-specification.html\">Date interval specification<\/a>",
hmTitlePath:"Common > Date interval specification > Adaptive date interval specification",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Adaptive date interval specification<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Adaptive date intervals specifications are not based on <span class=\"f_Identifier\">Start<\/span> and <span class=\"f_Identifier\">End<\/span> but rather specify an algorithm to calculate a Start and End from the current date and time when the adaptive date interval specification is accessed. I.e. the adaptive date interval specification is turned into a static interval on access.<\/p>\n\r<p class=\"p_Normal\">Table 12 shows the settings that define how the algorithm calculates the Start and End of the effective interval from the current time.<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:45.0000rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:15.5000rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Setting<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:29.2500rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Start offset<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Offset for the left (lower) boundary of the date interval. See table  14 for offset definitions.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">End offset<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Offset for the right (upper) boundary of the date interval. See table  14 for offset definitions.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Start included<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">If set a date time that equals exactly the start date (calculated from current date and time with the start offset) would be considered as part of the interval, in not set it would be outside the interval<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">End included<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">If set a date time that equals exactly the end date (calculated from current date and time with the end offset) would be considered as part of the interval, in not set it would be outside the interval<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Adjustment method<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Defines how the current date and time shall be converted into the base date and time for the actual interval calculation.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Adjustment part<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Defines the part of the current date and time that will be adjusted with the defined adjustment method<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:15.5000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">First day of week<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:29.2500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">For some adjustment parts (see below) the first day of the week must be defined. You can define any weekday as the first day of the week.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 13: Settings for adaptive date interval specification<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Adjustment of current date and time to base date and time<\/span><\/h1>\n\r<p class=\"p_Normal\">The current date and time when the adaptive date interval specification is evaluated is converted into the <span style=\"font-style: italic;\">base date and time<\/span> for the adaptive date interval by using the specified adjustment method and adjustment part.Table 14 lists the available adjustment methods, table 15 lists the available adjustment parts. <\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:45.0000rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:4.7500rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Method<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:40.0000rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">None<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The current date and time is not modified and the base date time is the current date and time<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Round<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The current date and time is rounded according to the adjustment part. E.g. If the current date time is 2020-01-12 21:15:02:12.00+01:00, the adjustment method is <span class=\"f_Identifier\">Round<\/span> and the adjustment part is hours the resulting <span class=\"f_Identifier\">base date and time<\/span> would be 2020-01-12 15:00:00.00+01:00.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Ceiling<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The current date and time is set to the next full unit according to the adjustment part. E.g. If the current date and time is 2020-01-12 21:15:02.12, the adjustment method is <span class=\"f_Identifier\">Ceiling<\/span> and the adjustment part is <span class=\"f_Identifier\">Month<\/span> the resulting <span class=\"f_Identifier\">base date and time<\/span> would be 2020-02-01 00:00:00.00.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Floor<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The current date and time is set to the previous full unit according to the adjustment part. E.g. If the current date and time is 2015-01-12 21:15:02.12, the adjustment type is <span class=\"f_Identifier\">Floor<\/span> and the adjustment part is <span class=\"f_Identifier\">Minutes<\/span> the resulting <span class=\"f_Identifier\">base date and time<\/span> would be 2015-01-12 21:15:00.00.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 13: Adjustment methods for calculating the base date and time from the current date and time.<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:45.0000rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:4.5625rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><br \/>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:40.1875rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><br \/>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Year<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Year part of the date will be adjusted. Rounding a year checks today to which half does it belong. If today belongs in first half of the year then use current year, else use beginning of next year.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Month<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Adjust the month part. Floor and ceiling simply uses beginning of current and next month respectively. While round checks if today is in first half of the current month, if true then rounds to the beginning of current month. Otherwise use the beginning of next month.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Week<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">When adjusting the current time span using week as adjustment type the system always uses first day of the week based on the user\'s culture.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Day<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Floor and ceiling moves the time stamp to the beginning of today and the beginning to tomorrow. Rounding checks if the half of the day has passed, if so use beginning of tomorrow, else use beginning of today.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Hour<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Floor and ceiling an hour works as expected(beginning of current and next hour). Rounding checks if half of the current hour is passed already, if so use next hour. Otherwise use the beginning of current hour.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:4.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Minute<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:40.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Adjusting the minutes adjust the minute part of the time. If floored uses the beginning of current minute, ceiling uses the beginning of next minute. Rounding check the seconds, If 30 seconds has passed in the current minute, use the beginning of next minute. If current time is within the first 30 second, then system uses the beginning of current minute.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 13: Adjustment parts to which the adjustment method will be applied<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Offset specification<\/span><\/h1>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 13: Configuration settings for an adaptive date interval specification<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:45.0000rem; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:8.0000rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Offset type<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:36.7500rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:8.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Month<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:36.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Offset given in number calender month. I.e. An offset of 5 applied to a time stamp of 2020-12-11 12:13:15+01:00 would result in 2020-07-11 12:13:15+02:00<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:8.0000rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Time span offset<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:36.7500rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Offset given as a time span i.e. days, hours, minutes, seconds, and milliseconds.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_ImageCaption\"><a id=\"fig_96ed33\" class=\"hmanchor\"><\/a><span class=\"f_ImageCaption\">Table 13: Different types of offsets<\/span><\/p>\n\r<p style=\"margin: 0 0 0 0;\">Based on the <span class=\"f_Identifier\">base date and time<\/span> the system computes the <span class=\"f_Identifier\">start date ant time<\/span> and <span class=\"f_Identifier\">end date and time<\/span> using the given offset specifications. The offset values are subtracted from the basic date and time, therefore to specify lower or upper boundaries in the future negative offsets have to be used.<\/p>\n\r"
})
