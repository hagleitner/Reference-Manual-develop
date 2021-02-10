/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2015-2017 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
function mFb(){var j=this;var i=function(m){m=m.replace(/&gt;/g,">");m=m.replace(/&lt;/g,"<");m=m.replace(/&quot;/g,'"');m=m.replace(/&amp;/g,"&");m=m.replace(/&nbsp;|&NBSP;/g," ");if(!false){m=encodeURIComponent(m);m=m.replace(/%24CRLF%24/g,"%0A%0D");return m}m=escape(m);m=m.replace(/%E2|%E0|%E5|%E1|%E3/g,"a");m=m.replace(/%C5|%C0|%C1|%C2|%C3/g,"A");m=m.replace(/%C7/g,"C");m=m.replace(/%E7/g,"c");m=m.replace(/%E9|%EA|%EB|%E8/g,"e");m=m.replace(/%C9|%CA|%C8|%CB/g,"E");m=m.replace(/%u0192/g,"f");m=m.replace(/%EF|%EE|%EC|%ED/g,"i");m=m.replace(/%CF|%CD|%CE|%CC/g,"I");m=m.replace(/%F1/g,"n");m=m.replace(/%D1/g,"N");m=m.replace(/%F4|%F2|%F3|%F5|%F8/g,"o");m=m.replace(/%D4|%D2|%D3|%D5|%D8/g,"O");m=m.replace(/%u0161/g,"s");m=m.replace(/%u0160/g,"S");m=m.replace(/%FB|%FA|%F9/g,"u");m=m.replace(/%DB|%DA|%D9/g,"U");m=m.replace(/%FF|%FD/g,"y");m=m.replace(/%DD|%u0178/g,"Y");m=m.replace(/%FC/g,"ue");m=m.replace(/%DC/g,"Ue");m=m.replace(/%E4|%E6/g,"ae");m=m.replace(/%C4|%C6/g,"Ae");m=m.replace(/%F6|%u0153/g,"oe");m=m.replace(/%D6/g,"Oe");m=m.replace(/%DF/g,"ss");m=m.replace(/%24CRLF%24/g,"%0A%0D");return(m)};var d=function(){return i($("p.topictitle").first().text())},a=function(){return i("Reference:")},c=i("Dear Support Staff,"),k=function(){return(i("Feedback on: "+$("h1#hm_pageheader").text()+" > "+$("p.topictitle").text()))},f=helpman_mailrecipient,l="@",e="Documentation%20Feedback",h="",g=""!==""?"":false;var b=function(n){n=hmWebHelp.trimString(n);n=n.replace(/\?$/,"").replace(/\%20/g," ");n=encodeURI(n);if(g){g=hmWebHelp.trimString(g);g=g.replace(/^\?/,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/\%20/g," ").replace(/&quot;/g,'"').replace(/&apos;/g,"'");n=n+"?"+g}var m=window.open(n,"fbWin","",false)};return function(){var q=false;var r=window.location.protocol+"%2F%2F"+window.location.hostname+window.location.pathname;if($("div#navigationmenu").is(":visible")){hmWebHelp.hamburgerMenu()}if(h!==""){b(h);return}var o=function(u){if(u.substr(0,2)!=="$$"){return u}var t="";u=u.replace(/^\$\$/g,"").replace(/\$\$$/,"").replace(/\/\//g,"/").replace(/\"/g,"").replace(/\*/g,".");u=u.split("/");if(u.length===4){t='"'+u[0]+'" <'+u[1]+"@"+u[2]+"."+u[3]+">"}else{if(u.length===3){t=u[0]+"@"+u[1]+"."+u[2]}else{alert("Error: Invalid feedback address format!");return}}return t};f=o(f);l=o(l);var p,n,m;if(!q){n="mailto:"+escape(f)+"?subject="+k();m="&body="+a()+"%20"+d()+"%20%28"+r+"%29%0A%0D"+c+"%0A%0D"}else{n="mailto:"+escape(l)+"?subject="+e;m="&body=URL:%20"+r+"%0A%0D"}p=n+m;document.location.href=p}}hmWebHelp.funcs.hm_mail_feedback=new mFb();
