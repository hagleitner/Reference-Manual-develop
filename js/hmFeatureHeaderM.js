/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2015-2017 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
function fh(){var f,m,n,k,l,i,h,b,d,c,a,e,g;doFeatureHeight=function(){var o=$(window).height();a=m.width()*d;c=o*d;e=i.height();g=k.height();if(hmBrowser.Flandscape()){o=o/2;e=e>c?e:c}else{o=o/2;e=e>a?e:a}e=e>o?o:e;n.css({"padding-top":e+"px"});m.css({top:(k.is(":visible")?g:0)+"px","border-bottom":"2px solid #bababa",height:e+"px"})};init=function(){if($("div#featureheader").length<1){$("div#topicbody").prepend('<div id="featureheader"><p id="featuretext"></p></div>')}m=$("div#featureheader");n=$("div#topicbox");k=$("div#headerbox");l=$("div#hmpagebody");i=$("p#featuretext");f=new Image();f.src=hmpage.hmPicture;m.css("background-image","url('"+hmpage.hmPicture+"')");i.html(hmpage.hmDescription);setTimeout(function(){var o=0;var p=setInterval(function(){h=f.width;b=f.height;d=b/h;o++;if(h>0||o>50){doFeatureHeight();clearInterval(p)}},50);$(window).off("orientationchange.features").on("orientationchange.features",function(){setTimeout(function(){doFeatureHeight()},100)});n.off("scroll.features").on("scroll.features",function(){var r=n.scrollTop(),q=e-r;q=q<=e?q:e;if(q<1){q=1}m.css({height:q+"px"});if(q<3){m.css("border-bottom","0")}else{m.css("border-bottom","2px solid #bababa")}});m.on("selectstart",function(){return false});m.off(hmBrowser.touchstart).on(hmBrowser.touchstart,function(){if(i.is(":visible")){i.fadeOut("fast")}else{i.fadeIn("fast")}})},100)};var j=function(o){if(!o){o="init"}switch(o){case"init":init();break;case"resize":doFeatureHeight();break}};return j}hmWebHelp.funcs.hmFeatureHeaderM=new fh();
