const cheerio = require('cheerio');

let html = `
<!DOCTYPE html>
<!-- saved from url=(0048)http://www.imdb.com/title/tt0120737/?ref_=rvi_tt -->
<html xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml" class=" scriptsOn"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script async="" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/ue-full-11e51f253e8ad9d145f4ed644b40f692._V1_.js.download"></script>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="apple-itunes-app" content="app-id=342792525, app-argument=imdb:///title/tt0120737?src=mdot">
            <script type="text/javascript">var ue_t0=window.ue_t0||+new Date();</script>
            <script type="text/javascript">
                var ue_mid = "A1EVAM02EL8SFB"; 
                var ue_sn = "www.imdb.com";  
                var ue_furl = "fls-na.amazon.com";
                var ue_sid = "146-4728071-3854735";
                var ue_id = "1EC1KPZA8BB024FPYRDK";
                (function(e){var c=e;var a=c.ue||{};a.main_scope="mainscopecsm";a.q=[];a.t0=c.ue_t0||+new Date();a.d=g;function g(h){return +new Date()-(h?0:a.t0)}function d(h){return function(){a.q.push({n:h,a:arguments,t:a.d()})}}function b(m,l,h,j,i){var k={m:m,f:l,l:h,c:""+j,err:i,fromOnError:1,args:arguments};c.ueLogError(k);return false}b.skipTrace=1;e.onerror=b;function f(){c.uex("ld")}if(e.addEventListener){e.addEventListener("load",f,false)}else{if(e.attachEvent){e.attachEvent("onload",f)}}a.tag=d("tag");a.log=d("log");a.reset=d("rst");c.ue_csm=c;c.ue=a;c.ueLogError=d("err");c.ues=d("ues");c.uet=d("uet");c.uex=d("uex");c.uet("ue")})(window);(function(e,d){var a=e.ue||{};function c(g){if(!g){return}var f=d.head||d.getElementsByTagName("head")[0]||d.documentElement,h=d.createElement("script");h.async="async";h.src=g;f.insertBefore(h,f.firstChild)}function b(){var k=e.ue_cdn||"z-ecx.images-amazon.com",g=e.ue_cdns||"images-na.ssl-images-amazon.com",j="/images/G/01/csminstrumentation/",h=e.ue_file||"ue-full-11e51f253e8ad9d145f4ed644b40f692._V1_.js",f,i;if(h.indexOf("NSTRUMENTATION_FIL")>=0){return}if("ue_https" in e){f=e.ue_https}else{f=e.location&&e.location.protocol=="https:"?1:0}i=f?"https://":"http://";i+=f?g:k;i+=j;i+=h;c(i)}if(!e.ue_inline){if(a.loadUEFull){a.loadUEFull()}else{b()}}a.uels=c;e.ue=a})(window,document);
                if (!('CS' in window)) { window.CS = {}; }
                    window.CS.loginLocation = "https://www.imdb.com/registration/signin?u=%2Ftitle%2Ftt0120737%2F%3Fref_%3Drvi_tt";
            </script>
 

        
        <script type="text/javascript">var IMDbTimer={starttime: new Date().getTime(),pt:'java'};</script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadTitle", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_title"] = new Date().getTime(); })(IMDbTimer);</script>
        <title>O Senhor dos Anéis: A Sociedade do Anel (2001) - IMDb</title>
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_title"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadTitle", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadTitle", {wb: 1});
    }
</script>
        
            <link rel="canonical" href="http://www.imdb.com/title/tt0120737/">
            <meta property="og:url" content="http://www.imdb.com/title/tt0120737/">

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadIcons", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_icon"] = new Date().getTime(); })(IMDbTimer);</script>
        <link href="http://ia.media-imdb.com/images/G/01/imdb/images/safari-favicon-517611381._CB514892156_.svg" mask="" rel="icon" sizes="any">
        <link rel="icon" type="image/ico" href="http://ia.media-imdb.com/images/G/01/imdb/images/favicon-2165806970._CB514892157_.ico">
        <meta name="theme-color" content="#000000">
        <link rel="shortcut icon" type="image/x-icon" href="http://ia.media-imdb.com/images/G/01/imdb/images/desktop-favicon-2165806970._CB522736561_.ico">
        <link href="http://ia.media-imdb.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-4151659188._CB514891867_.png" rel="apple-touch-icon"> 
        <link href="http://ia.media-imdb.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-76x76-53536248._CB514891820_.png" rel="apple-touch-icon" sizes="76x76"> 
        <link href="http://ia.media-imdb.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-120x120-2442878471._CB514893789_.png" rel="apple-touch-icon" sizes="120x120"> 
        <link href="http://ia.media-imdb.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-152x152-1475823641._CB514891827_.png" rel="apple-touch-icon" sizes="152x152">            
        <link rel="search" type="application/opensearchdescription+xml" href="http://ia.media-imdb.com/images/G/01/imdb/images/imdbsearch-3349468880._CB514892150_.xml" title="IMDb">
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_icon"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadIcons", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadIcons", {wb: 1});
    }
</script>
        
        <meta property="pageId" content="tt0120737">
        <meta property="pageType" content="title">
        <meta property="subpageType" content="main">


        <link rel="image_src" href="https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR89,0,630,1200_AL_.jpg">
        <meta property="og:image" content="https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR89,0,630,1200_AL_.jpg">

        <meta property="og:type" content="video.movie">
    <meta property="fb:app_id" content="115109575169727">

    <meta property="og:title" content="The Lord of the Rings: The Fellowship of the Ring (2001)">
    <meta property="og:site_name" content="IMDb">
    <meta name="title" content="O Senhor dos Anéis: A Sociedade do Anel (2001) - IMDb">
        <meta name="description" content="Directed by Peter Jackson.  With Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean. A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.">
        <meta property="og:description" content="Directed by Peter Jackson.  With Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean. A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.">
        <meta name="keywords" content="Reviews, Showtimes, DVDs, Photos, Message Boards, User Ratings, Synopsis, Trailers, Credits">
        <meta name="request_id" content="1EC1KPZA8BB024FPYRDK">

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadCSS", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_css"] = new Date().getTime(); })(IMDbTimer);</script>
<!-- h=ics-1d-c4-2xl-af98de38.us-east-1 -->

            <link rel="stylesheet" type="text/css" href="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/title-flat-v2-1086038910._CB513505085_.css">
        <noscript style="display: none;">
            &lt;link rel="stylesheet" type="text/css" href="http://ia.media-imdb.com/images/G/01/imdb/css/wheel/nojs-2827156349._CB514892070_.css"&gt;
        </noscript>
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_css"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadCSS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadCSS", {wb: 1});
    }
</script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadJS", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_ads"] = new Date().getTime(); })(IMDbTimer);</script>
        <script>
window.ads_js_start = new Date().getTime();
var imdbads = imdbads || {}; imdbads.cmd = imdbads.cmd || [];
</script>
<!-- begin SRA -->
<script>
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";a(2)},{2:2}],2:[function(a,b,c){"use strict";!function(){var a,b,c=function(a){return"[object Array]"===Object.prototype.toString.call(a)},d=function(a,b){for(var c=0;c<a.length;c++)c in a&&b.call(null,a[c],c)},e=[],f=!1,g=!1,h=function(){var a=[],b=[],c={};return d(e,function(e){var f="";d(e.dartsite.split("/"),function(b){""!==b&&(b in c||(c[b]=a.length,a.push(b)),f+="/"+c[b])}),b.push(f)}),{iu_parts:a,enc_prev_ius:b}},i=function(){var a=[];return d(e,function(b){var c=[];d(b.sizes,function(a){c.push(a.join("x"))}),a.push(c.join("|"))}),a},j=function(){var a=[];return d(e,function(b){a.push(k(b.targeting))}),a.join("|")},k=function(a,b){var c,d=[];for(var e in a){c=[];for(var f=0;f<a[e].length;f++)c.push(encodeURIComponent(a[e][f]));b?d.push(e+"="+encodeURIComponent(c.join(","))):d.push(e+"="+c.join(","))}return d.join("&")},l=function(){var a=+new Date;g||document.readyState&&"loaded"!==document.readyState||(g=!0,f&&imdbads.cmd.push(function(){for(var b=0;b<e.length;b++)generic.monitoring.record_metric(e[b].name+".fail",csm.duration(a))}))};window.tinygpt={define_slot:function(a,b,c,d){e.push({dartsite:a.replace(/\/$/,""),sizes:b,name:c,targeting:d})},set_targeting:function(b){a=b},callback:function(a){var c,d,f={},g=+new Date;try{for(var h=0;h<e.length;h++)c=e[h].dartsite,d=e[h].name,a[h][c]?f[d]=a[h][c]:window.console&&console.error&&console.error("Unable to correlate GPT response for "+d);imdbads.cmd.push(function(){for(var a=0;a<e.length;a++)ad_utils.slot_events.trigger(e[a].name,"request",{timestamp:b}),ad_utils.slot_events.trigger(e[a].name,"tagdeliver",{timestamp:g});ad_utils.gpt.handle_response(f)})}catch(i){window.console&&console.error&&console.error("Exception in GPT callback: "+i.message)}},send:function(){var d,g,m=[],n=function(a,b){c(b)&&(b=b.join(",")),b&&m.push(a+"="+encodeURIComponent(""+b))};if(0===e.length)return void tinygpt.callback({});n("gdfp_req","1"),n("correlator",Math.floor(4503599627370496*Math.random())),n("output","json_html"),n("callback","tinygpt.callback"),n("impl","fifs"),n("json_a","1");var o=h();n("iu_parts",o.iu_parts),n("enc_prev_ius",o.enc_prev_ius),n("prev_iu_szs",i()),n("prev_scp",j()),n("cust_params",k(a,!0)),d=document.createElement("script"),g=document.getElementsByTagName("script")[0],d.async=!0,d.type="text/javascript",d.src="http://pubads.g.doubleclick.net/gampad/ads?"+m.join("&"),d.id="tinygpt",d.onload=d.onerror=d.onreadystatechange=l,f=!0,g.parentNode.insertBefore(d,g),b=+new Date}}}()},{}]},{},[1]);</script>
<!-- begin ads header -->
<script src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/tarnhelm-1889598722._CB512972623_.js.download"></script>
<script id="ads_doWithAds">
doWithAds = function(inside, failureMessage){
if ('consoleLog' in window &&
'generic' in window &&
'ad_utils' in window &&
'custom' in window &&
'monitoring' in generic &&
'document_is_ready' in generic) {
try{
inside.call(this);
}catch(e) {
if ( window.ueLogError ) {
if(typeof failureMessage !== 'undefined'){
e.message = failureMessage;
}
e.attribution = "Advertising";
e.logLevel = "ERROR";
ueLogError(e);
}
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
} else {
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
};
</script><script id="ads_monitoring_setup">
doWithAds(function(){
generic.monitoring.set_forester_info("title");
generic.monitoring.set_twilight_info(
"title",
"BR",
"27b8efb8278049ecd34432fb98e32c0c4bd0a2b1",
"2017-10-22T17%3A47%3A55GMT",
"https://s.media-imdb.com/twilight/?",
"consumer");
generic.monitoring.start_timing("page_load");
generic.seconds_to_midnight = 47525;
generic.days_to_midnight = 0.5500578880310059;
},"Generic not defined, skipping monitoring setup.");
</script>
<script src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/DAsf-1.34_FX1._V275812351_.js.download"></script>
<script id="ads_safeframe_setup">
doWithAds(function(){
if (typeof DAsf != 'undefined' && typeof DAsf.registerCustomMessageListener === 'function') {
DAsf.registerCustomMessageListener('adFeedback', window.ad_utils.show_ad_feedback);
DAsf.registerCustomMessageListener('sendMetrics', window.generic.monitoring.update_sf_slot_metrics);
DAsf.registerCustomMessageListener('expand', window.ad_utils.expand_overlay);
DAsf.registerCustomMessageListener('collapse', window.ad_utils.collapse_overlay);
}
},"ads js missing, skipping safeframe setup.");
</script>
<script id="ads_general_setup">
doWithAds(function(){
generic.monitoring.record_metric("ads_js_request_to_done", (new Date().getTime()) - window.ads_js_start);
generic.send_csm_head_metrics && generic.send_csm_head_metrics();
ad_utils.set_slots_on_page({ 'injected_billboard':1, 'injected_navstrip':1, 'bottom_ad':1, 'top_ad':1, 'navboard':1, 'btf_rhs2':1, 'top_rhs':1, 'rhs_cornerstone':1 });
custom.full_page.data_url = "https://ia.media-imdb.com/images/G/01/imdbads/js/graffiti_data-538221799._CB514936172_.js";
consoleLog('advertising initialized','ads');
},"ads js missing, skipping general setup.");
var _gaq = _gaq || [];
_gaq.push(['_setCustomVar', 4, 'ads_abtest_treatment', '']);
</script>
<script>
doWithAds(function(){
ad_utils.register_punt_ad("top_rhs","300","250"," <!DOCTYPE html><html><body><\!-- [TOP_AD] --\><\!-- aid : 1657895060001 : cid : 5795586030901 : template : IMDb Master Companion-1.83 --\><\!-- Third party Impression Tracking --\><\!-- --\><\!-- --\><\!-- --\><script>var creativeContents=\"<script type=\\\"text/javascript\\\">document.ad={aid:\\\"1657895060001\\\",cid:\\\"5795586030901\\\",w:\\\"970\\\",h:\\\"250\\\",bb:1},top&&top.generic&&top.generic.monitoring&&top.generic.monitoring.set_partner&&top.generic.monitoring.set_partner(window,\\\"3P\\\");var iframe=window.frameElement;iframe.style.position=\\\"relative\\\",parent.ad_utils.expand_ad(iframe);<\\/script>\\n <ins class=\'dcmads\' style=\'display:inline-block;width:970px;height:250px\'\\n data-dcm-placement=\'N6344.160337.AMAZON/B11468533.204977376\'\\n data-dcm-rendering-mode=\'script\'\\n data-dcm-https-only\\n data-dcm-resettable-device-id=\'\'\\n data-dcm-app-id=\'\'\\n data-dcm-click-tracker=\'http://aax-us-east.amazon-adsystem.com/x/c/QjgFAjVhNwHL2USpG5UpgLUAAAFfRTLChwEAAADKASOOjVs/\'>\\n <script src=\'https://www.googletagservices.com/dcm/dcmads.js\'><\\/script>\\n</ins>\\n\";document.ad={aid:\"1657895060001\",cid:\"5795586030901\",w:0,h:0},parent.ad_utils.inject_ad.inject(\"injected_billboard\",creativeContents);<\/script><\!-- [TOP_AD] --\><\!-- aid : 1657895060001 : cid : 5795586030901 : template : IMDb Master Companion-1.83 --\><script>document.ad={aid:\"1657895060001\",cid:\"5795586030901\",w:\"0\",h:\"0\"};<\/script>\n</body></html><\!-- creativeModDate = 1504824286000 --\>\n <div id=\"top_rhs_webbug\" style=\"display:none;\">\n <img src=\"http://aax-us-east.amazon-adsystem.com/e/loi/imp?b=IujSvhwlvETxg5jlU8OYyk8AAAFfRTLCpQEAAADKAf0AYy8&pj=[PUNT_ORIGIN]\" border=\"0\" height=\"1\" width=\"1\" alt=\"\"/>\n </div>\n");
}, "ad_utils not defined, skipping punt ad data setup.");
</script>
<script>doWithAds(function() { ad_utils.ads_header.done(); });</script>
<!-- end ads header -->
        <script type="text/javascript">
            // ensures js doesn't die if ads service fails.  
            // Note that we need to define the js here, since ad js is being rendered inline after this.
            (function(f) {
                // Fallback javascript, when the ad Service call fails.  
                
                if((window.csm == null || window.generic == null || window.consoleLog == null)) {
                    if (window.console && console.log) {
                        console.log("one or more of window.csm, window.generic or window.consoleLog has been stubbed...");
                    }
                }
                
                window.csm = window.csm || { measure:f, record:f, duration:f, listen:f, metrics:{} };
                window.generic = window.generic || { monitoring: { start_timing: f, stop_timing: f } };
                window.consoleLog = window.consoleLog || f;
            })(function() {});
        </script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_head_delivery_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadJS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadJS", {wb: 1});
    }
</script>
        <link rel="stylesheet" type="text/css" href="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/imdb._TTW_.css"><script src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/html_expanding_rendering_lib_200_209.js.download"></script><script type="text/javascript" charset="UTF-8" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/lidar.js.download"></script></head>
    <body id="styleguide-v2" class="fixed" cz-shortcut-listen="true">
<script>
    if (typeof uet == 'function') {
      uet("bb");
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_body_delivery_started');
    }
  </script>
        <div id="wrapper">
            <div id="root" class="redesign">
<script>
    if (typeof uet == 'function') {
      uet("ns");
    }
</script>
<div id="nb20" class="navbarSprite">
<div id="supertab">	
	
<!-- begin TOP_AD -->
<div id="top_ad_wrapper" class="cornerstone_slot" style="display: none;">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('top_ad');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" frameborder="0" id="top_ad" marginwidth="0" marginheight="0" name="top_ad" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" style="display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource.html"></iframe> </div>
<div id="top_ad_reflow_helper"></div>
<script id="top_ad_rendering">
doWithAds(function(){
ad_utils.inject_serverside_ad('top_ad', '<script>document.defaultAd = {h:0,w:0}; document.ad = document.defaultAd;<\/script> <\!-- aid : 1657895060001 : cid : 5795586030901 : template : IMDb Master Companion-1.83 --\><\!-- Third party Impression Tracking --\><\!-- --\><\!-- --\><\!-- --\><script>var creativeContents=\"<script type=\\\"text/javascript\\\">document.ad={aid:\\\"1657895060001\\\",cid:\\\"5795586030901\\\",w:\\\"970\\\",h:\\\"250\\\",bb:1},top&&top.generic&&top.generic.monitoring&&top.generic.monitoring.set_partner&&top.generic.monitoring.set_partner(window,\\\"3P\\\");var iframe=window.frameElement;iframe.style.position=\\\"relative\\\",parent.ad_utils.expand_ad(iframe);<\\/script>\\n <ins class=\'dcmads\' style=\'display:inline-block;width:970px;height:250px\'\\n data-dcm-placement=\'N6344.160337.AMAZON/B11468533.204977376\'\\n data-dcm-rendering-mode=\'script\'\\n data-dcm-https-only\\n data-dcm-resettable-device-id=\'\'\\n data-dcm-app-id=\'\'\\n data-dcm-click-tracker=\'http://aax-us-east.amazon-adsystem.com/x/c/QjgFAjVhNwHL2USpG5UpgLUAAAFfRTLChwEAAADKASOOjVs/\'>\\n <script src=\'https://www.googletagservices.com/dcm/dcmads.js\'><\\/script>\\n</ins>\\n\";document.ad={aid:\"1657895060001\",cid:\"5795586030901\",w:0,h:0},parent.ad_utils.inject_ad.inject(\"injected_billboard\",creativeContents);<\/script>\n');
}, "ad_utils not defined, unable to inject serverside ad");
</script>
<!-- End TOP_AD -->
	
</div>
  <div id="navbar" class="navbarSprite">
<noscript style="display: none;">
  &lt;link rel="stylesheet" type="text/css" href="http://ia.media-imdb.com/images/G/01/imdb/css/site/consumer-navbar-no-js-3652782989._CB514893318_.css" /&gt;
</noscript>
<!--[if IE]><link rel="stylesheet" type="text/css" href="http://ia.media-imdb.com/images/G/01/imdb/css/site/consumer-navbar-ie-2133976414._CB514893341_.css"><![endif]-->
<span id="home_img_holder">
<a href="http://www.imdb.com/?ref_=nv_home" title="Home" class="navbarSprite" id="home_img"></a>  <span class="alt_logo">
    <a href="http://www.imdb.com/?ref_=nv_home" title="Home">IMDb</a>
  </span>
</span>
<form method="get" action="http://www.imdb.com/find" class="nav-searchbar-inner" id="navbar-form">
  <div id="nb_search">
    <noscript style="display: none;">&lt;div id="more_if_no_javascript"&gt;&lt;a href="/search/"&gt;More&lt;/a&gt;&lt;/div&gt;</noscript>
    <button id="navbar-submit-button" class="primary btn" type="submit"><div class="magnifyingglass navbarSprite"></div></button>
    <input type="hidden" name="ref_" value="nv_sr_fn">
    <input type="text" autocomplete="off" value="" name="q" id="navbar-query" placeholder="Find Movies, TV shows, Celebrities and more...">
    <div class="quicksearch_dropdown_wrapper">
      <select name="s" id="quicksearch" class="quicksearch_dropdown navbarSprite" onchange="jumpMenu(this); suggestionsearch_dropdown_choice(this);">
        <option value="all">All</option>
        <option value="tt">Titles</option>
        <option value="ep">TV Episodes</option>
        <option value="nm">Names</option>
        <option value="co">Companies</option>
        <option value="kw">Keywords</option>
        <option value="ch">Characters</option>
        <option value="qu">Quotes</option>
        <option value="bi">Bios</option>
        <option value="pl">Plots</option>
      <option class="advancedSearch" value="/search/">Advanced Search »</option></select>
    </div>
    <div id="navbar-suggestionsearch" style="left: 140px; top: 38px; width: 534px;"></div>
  </div>
</form>
<div id="megaMenu">
    <ul id="consumer_main_nav" class="main_nav">
        <li class="spacer js_nav_item"></li>
        <li class="js_nav_item" id="navTitleMenu">
            <p class="navCategory">
                <a href="http://www.imdb.com/movies-in-theaters/?ref_=nv_tp_inth_1">Movies</a>,
                <a href="http://www.imdb.com/chart/toptv/?ref_=nv_tp_tv250_2">TV</a><br>
                &amp; <a href="http://www.imdb.com/showtimes/?ref_=nv_tp_sh_3">Showtimes</a></p>
            <span class="downArrow"></span>
            <div id="navMenu1" class="sub_nav">
                <div id="titleAd" style="background: url(&quot;http://ia.media-imdb.com/images/M/MV5BMTkyNTExOTM2OV5BMl5BanBnXkFtZTcwNTk1NzEyNw@@._V1._SY315_CR120,0,410,315_.jpg&quot;);"><a title="O Castelo Animado, #139 on IMDb Top Rated Movies" href="http://www.imdb.com/title/tt0347149/?ref_=nv_mv_dflt_1" class="fallback"></a><div class="overlay"><p><a href="http://www.imdb.com/title/tt0347149/?ref_=nv_mv_dflt_2" id="titleAdClick"><strong>O Castelo Animado</strong> (2004)</a><br><a href="http://www.imdb.com/chart/top?ref_=nv_mv_dflt_3" id="titleAdSecondaryClick">#<strong>139</strong> on IMDb Top Rated Movies</a> »</p></div></div>
                <div class="subNavListContainer">
                    <h5>MOVIES</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth_1">In Theaters</a></li>
                        <li><a href="http://www.imdb.com/showtimes/?ref_=nv_mv_sh_2">Showtimes &amp; Tickets</a></li>
                        <li><a href="http://www.imdb.com/trailers/?ref_=nv_mv_tr_3">Latest Trailers</a></li>
                        <li><a href="http://www.imdb.com/movies-coming-soon/?ref_=nv_mv_cs_4">Coming Soon</a></li>
                        <li><a href="http://www.imdb.com/calendar/?ref_=nv_mv_cal_5">Release Calendar</a></li>
                        <li><a href="http://www.imdb.com/chart/top?ref_=nv_mv_250_6">Top Rated Movies</a></li>
                        <li><a href="http://www.imdb.com/india/top-rated-indian-movies?ref_=nv_mv_250_in_7">Top Rated Indian Movies</a></li>
                        <li><a href="http://www.imdb.com/chart/moviemeter?ref_=nv_mv_mpm_8">Most Popular Movies</a></li>
                    </ul>
                    <h5>CHARTS &amp; TRENDS</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/chart/?ref_=nv_ch_cht_1">Box Office</a></li>
                        <li><a href="http://www.imdb.com/search/title?count=100&amp;groups=oscar_best_picture_winners&amp;sort=year,desc&amp;ref_=nv_ch_osc_2">Oscar Winners</a></li>
                        <li><a href="http://www.imdb.com/genre/?ref_=nv_ch_gr_3">Most Popular by Genre</a></li>
                    </ul>
                </div>
                <div class="subNavListContainer">
                    <h5>TV &amp; VIDEO</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/tv/?ref_=nv_tvv_tv_1">IMDb TV</a></li>
                        <li><a href="http://www.imdb.com/chart/toptv/?ref_=nv_tvv_250_3">Top Rated TV Shows</a></li>
                        <li><a href="http://www.imdb.com/chart/tvmeter?ref_=nv_tvv_mptv_4">Most Popular TV Shows</a></li>
                        <li><a href="http://www.imdb.com/sections/dvd/?ref_=nv_tvv_dvd_5">DVD &amp; Blu-Ray</a></li>
                    </ul>
                    <h5>SPECIAL FEATURES</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/amazon-originals/?ref_=nv_sf_ams_1">Amazon Originals</a></li>
                        <li><a href="http://www.imdb.com/streaming/?ref_=nv_sf_st_2">Streaming</a></li>
                        <li><a href="http://www.imdb.com/scary-good/?ref_=nv_sf_scg_3">Scary Good</a></li>
                        <li><a href="http://www.imdb.com/imdbpicks/?ref_=nv_sf_picks_4">IMDb Picks</a></li>
                        <li><a href="http://www.imdb.com/superheroes/?ref_=nv_sf_supr_5">Superheroes</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="spacer js_nav_item"></li>
        <li class="js_nav_item" id="navNameMenu">
            <p class="navCategory">
                <a href="http://www.imdb.com/search/name?gender=male,female&amp;ref_=nv_tp_cel_1">Celebs</a>,
                <a href="http://www.imdb.com/awards-central/?ref_=nv_tp_awrd_2">Events</a><br>
                &amp; <a href="http://www.imdb.com/gallery/rg784964352?ref_=nv_tp_ph_3">Photos</a></p>
            <span class="downArrow"></span>
            <div id="navMenu2" class="sub_nav">
                <div id="nameAd" style="background: url(&quot;http://ia.media-imdb.com/images/M/MV5BMjMxNTMyNDY3MV5BMl5BanBnXkFtZTcwODU1OTQwNw@@._V1._SX260_CR0,0,250,315_.jpg&quot;);"><a title="Amy Adams, #137 on STARmeter" href="http://www.imdb.com/name/nm0010736/?ref_=nv_cel_dflt_1" class="fallback"></a><div class="overlay"><p><a href="http://www.imdb.com/name/nm0010736/?ref_=nv_cel_dflt_2" id="nameAdClick"><strong>Amy Adams</strong></a> »<br>#<strong>137</strong> on STARmeter</p></div></div>
                <div class="subNavListContainer">
                    <h5>CELEBS</h5>
                    <ul>
                            <li><a href="http://www.imdb.com/search/name?birth_monthday=10-22&amp;refine=birth_monthday&amp;ref_=nv_cel_brn_1">Born Today</a></li>
                        <li><a href="http://www.imdb.com/news/celebrity?ref_=nv_cel_nw_2">Celebrity News</a></li>
                        <li><a href="http://www.imdb.com/search/name?gender=male,female&amp;ref_=nv_cel_m_3">Most Popular Celebs</a></li>
                    </ul>
                    <h5>PHOTOS</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/gallery/rg1859820288?ref_=nv_ph_ls_1">Latest Stills</a></li>
                        <li><a href="http://www.imdb.com/gallery/rg1624939264?ref_=nv_ph_lp_2">Latest Posters</a></li>
                        <li><a href="http://www.imdb.com/gallery/rg1641716480?ref_=nv_ph_lv_3">Photos We Love</a></li>
                    </ul>
                </div>
                <div class="subNavListContainer">
                    <h5>EVENTS</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/awards-central/?ref_=nv_ev_awrd_1">Awards Central</a></li>
                        <li><a href="http://www.imdb.com/festival-central/?ref_=nv_ev_fc_2">Festival Central</a></li>
                        <li><a href="http://www.imdb.com/oscars/?ref_=nv_ev_acd_3">Oscars</a></li>
                        <li><a href="http://www.imdb.com/golden-globes/?ref_=nv_ev_gg_4">Golden Globes</a></li>
                        <li><a href="http://www.imdb.com/sundance/?ref_=nv_ev_sun_5">Sundance</a></li>
                        <li><a href="http://www.imdb.com/cannes/?ref_=nv_ev_can_6">Cannes</a></li>
                        <li><a href="http://www.imdb.com/comic-con/?ref_=nv_ev_comic_7">Comic-Con</a></li>
                        <li><a href="http://www.imdb.com/emmys/?ref_=nv_ev_rte_8">Emmy Awards</a></li>
                        <li><a href="http://www.imdb.com/venice/?ref_=nv_ev_venice_9">Venice Film Festival</a></li>
                        <li><a href="http://www.imdb.com/toronto/?ref_=nv_ev_tor_10">Toronto Film Festival</a></li>
                        <li><a href="http://www.imdb.com/festival-central/tribeca?ref_=nv_ev_trb_11">Tribeca</a></li>
                        <li><a href="http://www.imdb.com/event/all/?ref_=nv_ev_all_12">All Events</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="spacer js_nav_item"></li>
        <li class="js_nav_item" id="navNewsMenu">
            <p class="navCategory">
                <a href="http://www.imdb.com/news/top?ref_=nv_tp_nw_1">News</a> &amp;<br>
                <a href="http://www.imdb.com/czone/?ref_=nv_cm_cz_2">Community</a>
            </p>
            <span class="downArrow"></span>
            <div id="navMenu3" class="sub_nav">
                <div id="latestHeadlines">
                    <div class="subNavListContainer">
                        <h5>LATEST HEADLINES</h5>
    <ul>
                <li itemprop="headline">
<a href="http://www.imdb.com/news/ni61642809/?ref_=nv_nw_tn_1"> Tyler Perry's 'Boo 2!' Tops Weekend While Fellow Newcomers Struggle All Around
</a><br>
                        <span class="time">1 hours ago</span>
                </li>
                <li itemprop="headline">
<a href="http://www.imdb.com/news/ni61641281/?ref_=nv_nw_tn_2"> Paul Thomas Anderson’s ‘Phantom Thread’ Gets a Full Synopsis, First Trailer Coming Soon
</a><br>
                        <span class="time">22 hours ago</span>
                </li>
                <li itemprop="headline">
<a href="http://www.imdb.com/news/ni61641049/?ref_=nv_nw_tn_3"> Wong Kar-Wai Says Young Filmmakers Are "Less Competitive"
</a><br>
                        <span class="time">21 October 2017 5:11 PM, UTC</span>
                </li>
    </ul>
                    </div>
                </div>
                <div class="subNavListContainer">
                    <h5>NEWS</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/news/top?ref_=nv_nw_tp_1">Top News</a></li>
                        <li><a href="http://www.imdb.com/news/movie?ref_=nv_nw_mv_2">Movie News</a></li>
                        <li><a href="http://www.imdb.com/news/tv?ref_=nv_nw_tv_3">TV News</a></li>
                        <li><a href="http://www.imdb.com/news/celebrity?ref_=nv_nw_cel_4">Celebrity News</a></li>
                        <li><a href="http://www.imdb.com/news/indie?ref_=nv_nw_ind_5">Indie News</a></li>
                    </ul>
                    <h5>COMMUNITY</h5>
                    <ul>
                        <li><a href="http://www.imdb.com/czone/?ref_=nv_cm_cz_2">Contributor Zone</a></li>
                        <li><a href="http://www.imdb.com/poll/?ref_=nv_cm_pl_3">Polls</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="spacer js_nav_item"></li>
        <li class="js_nav_item" id="navWatchlistMenu">
<p class="navCategory singleLine watchlist">
    <a href="http://www.imdb.com/list/watchlist?ref_=nv_wl_all_0">Watchlist</a>
</p>
<span class="downArrow"></span>
<div id="navMenu4" class="sub_nav">
    <h5>
            YOUR WATCHLIST
    </h5>
    <ul id="navWatchlist">
    <li><a id="" href="http://www.imdb.com/list/watchlist?ref_=nv_wl_img_1"><img alt="Add items to your Watchlist" class="" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/watchlist_slot1_logged_out-1670046337._CB514893327_.jpg" height="209" width="140" title="Add items to your Watchlist"></a></li><li><a id="" href="http://www.imdb.com/search/title?count=100&amp;title_type=feature,tv_series&amp;ref_=nv_wl_img_2"><img alt="Add items to your Watchlist" class="" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/watchlist_slot2_popular-4090757197._CB514891970_.jpg" height="209" width="140" title="Add items to your Watchlist"></a></li><li><a id="" href="http://www.imdb.com/chart/top?ref_=nv_wl_img_3"><img alt="Add items to your Watchlist" class="" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/watchlist_slot3_top250-575799966._CB514893316_.jpg" height="209" width="140" title="Add items to your Watchlist"></a></li></ul>
    <script>
    if (!('imdb' in window)) { window.imdb = {}; }
    window.imdb.watchlistTeaserData = [
                {
                        href : "/list/watchlist",
                src : "http://ia.media-imdb.com/images/G/01/imdb/images/navbar/watchlist_slot1_logged_out-1670046337._CB514893327_.jpg"
                },
                {
                    href : "/search/title?count=100&title_type=feature,tv_series",
                src : "http://ia.media-imdb.com/images/G/01/imdb/images/navbar/watchlist_slot2_popular-4090757197._CB514891970_.jpg"
                },
                {
                    href : "/chart/top",
                src : "http://ia.media-imdb.com/images/G/01/imdb/images/navbar/watchlist_slot3_top250-575799966._CB514893316_.jpg"
                }
    ];
    </script>
</div>
        </li>
        <li class="spacer js_nav_item"></li>
    </ul>
<script>
if (!('imdb' in window)) { window.imdb = {}; }
window.imdb.navbarAdSlots = {
    titleAd : {
            clickThru : "/title/tt0347149/",
            imageUrl : "http://ia.media-imdb.com/images/M/MV5BMTkyNTExOTM2OV5BMl5BanBnXkFtZTcwNTk1NzEyNw@@._V1._SY315_CR120,0,410,315_.jpg",
            titleYears : "2004",
            rank : 139,
                    headline : "O Castelo Animado"
    },
    nameAd : {
            clickThru : "/name/nm0010736/",
            imageUrl : "http://ia.media-imdb.com/images/M/MV5BMjMxNTMyNDY3MV5BMl5BanBnXkFtZTcwODU1OTQwNw@@._V1._SX260_CR0,0,250,315_.jpg",
            rank : 137,
            headline : "Amy Adams"
    }
}
</script>
</div>
<div id="nb_extra">
    <ul id="nb_extra_nav" class="main_nav">
        <li class="js_nav_item" id="navProMenu">
            <p class="navCategory">
<a href="http://pro.imdb.com/signup/index.html?rf=cons_nb_hm&amp;ref_=cons_nb_hm"> <img alt="IMDbPro Menu" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/imdbpro_logo_nb-3000473826._CB514891971_.png">
</a>            </p>
            <span class="downArrow"></span>
            <div id="navMenuPro" class="imdb-pro-ad sub_nav">
<a href="http://pro.imdb.com/signup/index.html?rf=cons_nb_hm&amp;ref_=cons_nb_hm" class="imdp-pro-ad__link"> <div id="proAd" class="imdb-pro-ad__image">
<img alt="Go to IMDbPro" height="180" width="174" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/imdbpro_menu_user-4091932618._CB514893321_.png" srcset="http://ia.media-imdb.com/images/G/01/imdb/images/navbar/imdbpro_menu_user-4091932618._CB514893321_.png 1x,
http://ia.media-imdb.com/images/G/01/imdb/images/navbar/imdbpro_menu_user_2x-2074318947._CB514891973_.png 2x">
</div>
</a><section class="imdb-pro-ad__content"><a href="http://pro.imdb.com/signup/index.html?rf=cons_nb_hm&amp;ref_=cons_nb_hm" class="imdp-pro-ad__link">
<h1 class="imdb-pro-ad__title">The leading information resource for the entertainment industry</h1>
<p class="imdb-pro-ad__line">Find industry contacts &amp; talent representation</p>
<p class="imdb-pro-ad__line">Manage your photos, credits, &amp; more</p>
<p class="imdb-pro-ad__line">Showcase yourself on IMDb &amp; Amazon</p>
<span role="button" class="imdb-pro-ad__button">Go to IMDbPro</span></a>
</section>
            </div>
        </li>
        <li class="spacer js_nav_item"><span class="ghost">|</span></li>
        <li class="js_nav_item">
            <a href="http://www.imdb.com/help/?ref_=nb_hlp">Help</a>
        </li>
        <li class="social js_nav_item">

    <a href="http://www.imdb.com/offsite/?page-action=fol_fb&amp;token=BCYnRSvdC0FYSOMCaMInvyRUzTAJs3v6UOIWUkp0mEUfVIy1nTA0iiJ89glr9qeM4swJa8pbQm9k%0D%0AxYQe2G7UkXJ1BjTR5nljIsm44Vh0omtQOUuMtRYwjBlWzeY5tjJio1vqjcJLnCEXMmDY9dDICdlE%0D%0A4O9gpdj0oYtU2KaaaE5UQ_uCHkArKC9brbqR_i-95XVxRp20lsCjHyxRcVu6DoAlFg%0D%0A&amp;ref_=tt_nv_fol_fb" title="Follow IMDb on Facebook" target="_blank" itemprop="url"> <span class="desktop-sprite follow-facebook"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=fol_tw&amp;token=BCYuJdLhNYOkMG6lQGWgU7qqk7D8pnMdANjyZpEOV2B3wdveehE0Yu6XNqbSXEC-dmXZtQJGD7jW%0D%0A4qpKTCSEWbaQxJ1EO924FpPqeJiLk45O67zYKvpI7DKTc5wUnkXwoQYVfe3FfCUDGldsVpAwk2CC%0D%0A5nqx4tMrdD_VdydQXrNjrURP82vRPlabidc6ixmxnyLYcWMfZRLhiGb9hsrxrTuWdA%0D%0A&amp;ref_=tt_nv_fol_tw" title="Follow IMDb on Twitter" target="_blank" itemprop="url"> <span class="desktop-sprite follow-twitter"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=fol_inst&amp;token=BCYqfWp2HcO8ZtblSRgzAR4e1r_Yqq-8IxzNLlfapdeAF96KtBnDIbUnzuTggqSFdSiO9efZPl8P%0D%0A6j6czPddcwKP3fBNRPGMqI80-_FtEb2cP2DrcBRU9mtkC7-Tfrp38aqyLjaUtcI7wa8M59Xavb5S%0D%0Ay7NSOxG-t7r3rgaFA_ZxKpq-_ZrpLOnVN_evp_iMnsZ-4feAypcj3f_skhmJ5MemUw%0D%0A&amp;ref_=tt_nv_fol_inst" title="Follow IMDb on Instagram" target="_blank" itemprop="url"> <span class="desktop-sprite follow-instagram"></span>
</a>
        </li>
    </ul>
</div>
<div id="nb_personal">
    <ul id="consumer_user_nav" class="main_nav">

            <li class="css_nav_menu no_arrow js_nav_item" id="navUserMenu">
            <p class="navCategory singleLine">
                <a id="facebook-signin-link" href="https://graph.facebook.com/v2.8/oauth/authorize?client_id=127059960673829&amp;scope=email%2Cuser_about_me%2Cuser_birthday&amp;state=eyI0OWU2YyI6ImQyYTQiLCJ1IjoiaHR0cHM6Ly93d3cuaW1kYi5jb20vP3JlZl89bnZfZmJfbGdpbiIsIm1hbnVhbExpbmsiOiJmYWxzZSJ9&amp;redirect_uri=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Ffacebookhandler%2F" class="signin-button">
                <span class="facebook-logo"></span>
                <span class="signin-facebook-text">Sign in with Facebook</span></a>
                <a href="https://www.imdb.com/registration/signin?u=/title/tt0120737/%3Fref_%3Drvi_tt&amp;ref_=nv_usr_lgin_1" rel="login" class="signin-other-options-text" id="nblogin">Other Sign in options</a>
                </p>
        </li>
    </ul>
</div>
  </div>
</div>
	
	<!-- no content received for slot: navstrip -->
	
	
	
<!-- begin INJECTED_NAVSTRIP -->
<div id="injected_navstrip_wrapper" class="injected_slot" style="display: none;">
<script type="text/javascript">
doWithAds(function(){
if ('injected_slot' != 'injected_slot') {
ad_utils.register_ad('injected_navstrip');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-dart-params="#doubleclick;u=284895568311;ord=284895568311?" frameborder="0" id="injected_navstrip" marginwidth="0" marginheight="0" name="injected_navstrip" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" style="display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(1).html"></iframe> </div>
<div id="injected_navstrip_reflow_helper"></div>
<script id="injected_navstrip_rendering">
doWithAds(function(){
if ('injected_slot' == 'injected_slot') {
ad_utils.inject_ad.register('injected_navstrip');
} else {
ad_utils.gpt.render_ad('injected_navstrip');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End INJECTED_NAVSTRIP -->
	
<script>
    if (typeof uet == 'function') {
      uet("ne");
    }
</script>
              

                    <div id="pagecontent" class="pagecontent" itemscope="" itemtype="http://schema.org/Movie">
	
	
<!-- begin INJECTED_BILLBOARD -->
<div id="injected_billboard_wrapper" class="injected_slot billboard">
<script type="text/javascript">
doWithAds(function(){
if ('injected_slot' != 'injected_slot') {
ad_utils.register_ad('injected_billboard');
}
});
</script>
<div id="creative_93614823_1" style="width: 970px; height: 250px; display: inline-block;"><div style="width: 970px; height: 250px; position: relative; will-change: z-index; display: block; z-index: 100;"><div id="DfaVisibilityIdentifier_1508694480989" class="GoogleActiveViewClass" style="position: absolute; width: 970px; height: 250px; box-sizing: content-box; margin: 0px; padding: 0px; overflow: hidden;"><iframe frameborder="0" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/index.html" id="200_209_html_expanding_0.if" scrolling="no" allowfullscreen="true" style="border: 0px; vertical-align: bottom; width: 970px; height: 250px; left: 0px; top: 0px; position: absolute;"></iframe></div></div></div><script type="text/javascript" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/rpc.flow" async=""></script><script type="text/javascript" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/vce_st.js.download" async=""></script><script src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/rs.js.download" type="text/javascript"></script><iframe allowtransparency="true" class="yesScript" data-dart-params="#doubleclick;u=284895568311;ord=284895568311?" frameborder="0" id="injected_billboard" marginwidth="0" marginheight="0" name="injected_billboard" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" style="position: relative; width: 0px; height: 0px; display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(2).html"></iframe> </div>
<div id="injected_billboard_reflow_helper"></div>
<script id="injected_billboard_rendering">
doWithAds(function(){
if ('injected_slot' == 'injected_slot') {
ad_utils.inject_ad.register('injected_billboard');
} else {
ad_utils.gpt.render_ad('injected_billboard');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End INJECTED_BILLBOARD -->
	


    
    
    

    
    
    

    
    
    

	
	
<!-- begin NAVBOARD -->
<div id="navboard_wrapper" class="injected_slot" style="display: none;">
<script type="text/javascript">
doWithAds(function(){
if ('injected_slot' != 'injected_slot') {
ad_utils.register_ad('navboard');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-dart-params="#doubleclick;u=284895568311;ord=284895568311?" frameborder="0" id="navboard" marginwidth="0" marginheight="0" name="navboard" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" style="display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(3).html"></iframe> </div>
<div id="navboard_reflow_helper"></div>
<script id="navboard_rendering">
doWithAds(function(){
if ('injected_slot' == 'injected_slot') {
ad_utils.inject_ad.register('navboard');
} else {
ad_utils.gpt.render_ad('navboard');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End NAVBOARD -->
	


    
    
    

    
    
    

<div id="content-2-wide" class="flatland">
    <div id="main_top" class="main">

    
    
    

    
    
    


    
    
    

            <div class="title-overview">


  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleOverviewWidget_started');
    }
  </script>
        <div id="title-overview-widget" class="heroic-overview">
            <div class="message_box">
                <div id="star-ratings-widget-error" class="hidden error">
                    <h2>There was an error trying to load your rating for this title.</h2>
                    <p>Some parts of this page won't work property. Please reload or try later.</p>
                </div>
            </div>
            <div class="vital">                
      <div id="quicklinksBar" class="subnav">
  <div id="quicklinksMainSection">
         <a href="http://www.imdb.com/title/tt0120737/fullcredits?ref_=tt_ql_1" class="quicklink">FULL CAST AND CREW</a> <span class="ghost">|</span>
         <a href="http://www.imdb.com/title/tt0120737/trivia?ref_=tt_ql_2" class="quicklink">TRIVIA</a> <span class="ghost">|</span>
         <a href="http://www.imdb.com/title/tt0120737/reviews?ref_=tt_ql_3" class="quicklink">USER REVIEWS</a> <span class="ghost">|</span>
      <a href="http://pro.imdb.com/title/tt0120737?rf=cons_tt_contact&amp;ref_=cons_tt_contact" class="quicklink">IMDbPro</a>
        <span class="ghost">|</span>
        <span class="show_more quicklink">
            MORE<span class="titleOverviewSprite quicklinksArrowUp"></span>
        </span>
        <span class="show_less quicklink" style="display:none">
           LESS<span class="titleOverviewSprite quicklinksArrowDown"></span>
        </span>
  </div>

    <span class="titleOverviewShareButton launch-share-popover quicklink">SHARE</span>
    <div id="share-popover">
        <a class="close-popover" href="http://www.imdb.com/title/tt0120737/?ref_=rvi_tt#">X</a>
        <h4>Share</h4>
        
    
    
    <a onclick="window.open(&quot;https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Dext_shr_fb_tt&quot;, &#39;newWindow&#39;, &#39;width=626,height=436&#39;); return false;" href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Dext_shr_fb_tt" title="Share on Facebook" class="facebook" target="_blank"><div class="option facebook">
                            <span class="titlePageSprite share_facebook"></span>
                            <div>Facebook</div>
                        </div></a>
    
    
    <a onclick="window.open(&quot;https://twitter.com/intent/tweet?text=O%20Senhor%20dos%20An%C3%A9is%3A%20A%20Sociedade%20do%20Anel%20(1%20January%202002%20(Brazil))%20-%20imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Dext_shr_tw_tt&quot;, &#39;newWindow&#39;, &#39;width=815,height=436&#39;); return false;" href="https://twitter.com/intent/tweet?text=O%20Senhor%20dos%20An%C3%A9is%3A%20A%20Sociedade%20do%20Anel%20(1%20January%202002%20(Brazil))%20-%20imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Dext_shr_tw_tt" title="Share on Twitter" class="twitter" target="_blank"><div class="option twitter">
                            <span class="titlePageSprite share_twitter"></span>
                            <div>Twitter</div>
                        </div></a>
    <a href="mailto:?subject=IMDb%3A%20O%20Senhor%20dos%20An%C3%A9is%3A%20A%20Sociedade%20do%20Anel%20(1%20January%202002%20(Brazil))&amp;body=IMDb%3A%20O%20Senhor%20dos%20An%C3%A9is%3A%20A%20Sociedade%20do%20Anel%20(1%20January%202002%20(Brazil))%0AA%20meek%20Hobbit%20from%20the%20Shire%20and%20eight%20companions%20set%20out%20on%20a%20journey%20to%20destroy%20the%20powerful%20One%20Ring%20and%20save%20Middle%20Earth%20from%20the%20Dark%20Lord%20Sauron.%0Ahttp%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Dext_shr_eml_tt" title="Share by e-mail" class=""><div class="option email">
                    <span class="titlePageSprite share_email"></span>
                    <div>E-mail</div>
                    </div></a>
     <a href="http://www.imdb.com/title/tt0120737/?ref_=rvi_tt#" class="open-checkin-popover">
        <div class="option checkin">
            <span class="titlePageSprite share_checkin"></span>
            <div>Check in</div>
        </div>
     </a>     
            
    </div>
    
        <div id="share-checkin">
<div class="add_to_checkins" data-const="tt0120737" data-lcn="title-maindetails">
<span class="btn2_wrapper"><a onclick="" class="btn2 large btn2_text_on checkins_action_btn"><span class="btn2_glyph">0</span><span class="btn2_text">Check in</span></a></span>    <div class="popup checkin-dialog" style="display: none;">
        <a class="small close btn">X</a>
        <span class="beta">Beta</span>
        <span class="title">I'm Watching This!</span>
        <div class="body">
            <div class="info">Keep track of everything you watch; tell your friends.
            </div>
            <div class="small message_box">
                <div class="hidden error" style="display: none;"><h2>Error</h2> Please try again!</div>
                <div class="hidden success" style="display: none;"><h2>Added to Your Check-Ins.</h2> <a href="http://www.imdb.com/list/checkins">View</a></div>
            </div>
            <textarea data-msg="Enter a comment..." class="placeholder"></textarea>
            <div class="share">
                <button class="large primary btn"><span>Check in</span></button>
<!--
                    Check-ins are more fun when<br>
                    you <a href="/register/sharing">enable Facebook sharing</a>!
-->
            </div>
        </div>
    </div>
    <input type="hidden" name="49e6c" value="d2a4">
</div>
        </div>

   <div class="quicklinkSection" id="full_subnav" style="display:none">           
               <div class="quicklinkSectionColumn">
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">DETAILS</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/fullcredits?ref_=tt_ql_dt_1" class="quicklink">Full Cast and Crew</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/releaseinfo?ref_=tt_ql_dt_2" class="quicklink">Release Dates</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/officialsites?ref_=tt_ql_dt_3" class="quicklink">Official Sites</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/business?ref_=tt_ql_dt_4" class="quicklink">Box Office/Business</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/companycredits?ref_=tt_ql_dt_5" class="quicklink">Company Credits</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/locations?ref_=tt_ql_dt_6" class="quicklink">Filming Locations</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/technical?ref_=tt_ql_dt_7" class="quicklink">Technical Specs</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/literature?ref_=tt_ql_dt_8" class="quicklink">Literature</a>                </div>
    </div>
               </div>
               <div class="quicklinkSectionColumn">
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">STORYLINE</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/taglines?ref_=tt_ql_stry_1" class="quicklink">Taglines</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/plotsummary?ref_=tt_ql_stry_2" class="quicklink">Plot Summary</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/synopsis?ref_=tt_ql_stry_3" class="quicklink">Synopsis</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/keywords?ref_=tt_ql_stry_4" class="quicklink">Plot Keywords</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/parentalguide?ref_=tt_ql_stry_5" class="quicklink">Parents Guide</a>                </div>
    </div>
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">RELATED ITEMS</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/news?ref_=tt_ql_rel_1" class="quicklink">NewsDesk</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/externalsites?ref_=tt_ql_rel_2" class="quicklink">External Sites</a>                </div>
    </div>
               </div>
               <div class="quicklinkSectionColumn">
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">OPINION</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/awards?ref_=tt_ql_op_1" class="quicklink">Awards</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/faq?ref_=tt_ql_op_2" class="quicklink">FAQ</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/reviews?ref_=tt_ql_op_3" class="quicklink">User Reviews</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/ratings?ref_=tt_ql_op_4" class="quicklink">User Ratings</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/externalreviews?ref_=tt_ql_op_5" class="quicklink">External Reviews</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/criticreviews?ref_=tt_ql_op_6" class="quicklink">Metacritic Reviews</a>                </div>
    </div>
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">PHOTO &amp; VIDEO</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/mediaindex?ref_=tt_ql_pv_1" class="quicklink">Photo Gallery</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/videogallery?ref_=tt_ql_pv_2" class="quicklink">Trailers and Videos</a>                </div>
    </div>
               </div>
               <div class="quicklinkSectionColumn">
    <div class="quicklinkGroup">
        <div class="quicklinkSectionHeader">DID YOU KNOW?</div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/trivia?ref_=tt_ql_trv_1" class="quicklink">Trivia</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/goofs?ref_=tt_ql_trv_2" class="quicklink">Goofs</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/crazycredits?ref_=tt_ql_trv_3" class="quicklink">Crazy Credits</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/quotes?ref_=tt_ql_trv_4" class="quicklink">Quotes</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/alternateversions?ref_=tt_ql_trv_5" class="quicklink">Alternate Versions</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/movieconnections?ref_=tt_ql_trv_6" class="quicklink">Connections</a>                </div>
                <div class="quicklinkSectionItem">
<a href="http://www.imdb.com/title/tt0120737/soundtrack?ref_=tt_ql_trv_7" class="quicklink">Soundtracks</a>                </div>
    </div>
               </div>
   </div>
      </div>  
         
                <div class="title_block">
                    <div class="title_bar_wrapper">

    <div class="ratings_wrapper">
        <div class="imdbRating" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                <div class="ratingValue">
<strong title="8,8 based on 1.356.427 user ratings"><span itemprop="ratingValue">8,8</span></strong><span class="grey">/</span><span class="grey" itemprop="bestRating">10</span>                </div>
                <a href="http://www.imdb.com/title/tt0120737/ratings?ref_=tt_ov_rt"><span class="small" itemprop="ratingCount">1.356.427</span></a>
                    <div class="hiddenImportant">
                            <span itemprop="reviewCount">5.111 user</span>
                            <span itemprop="reviewCount">303 critic</span>
                    </div>
        </div>

  <div id="star-rating-widget" class="star-rating-widget" data-tconst="tt0120737" data-rating="0" data-user="" data-auth="" data-tracking-tag="title-maindetails" data-rating-share-enabled="false" data-title="O Senhor dos Anéis: A Sociedade do Anel" data-rating-next-share-time="2000-01-01T00:00:00.000Z" data-rating-share-treatment="C"><div class="star-rating-button" data-reactid=".2"><button data-reactid=".2.0"><span class="star-rating-star no-rating" data-reactid=".2.0.0"></span><span class="star-rating-text" data-reactid=".2.0.1">Rate This</span></button><div value="0" class="star-rating" data-reactid=".2.1"><span data-reactid=".2.1.0"><a class="star-rating-delete" title="Delete" rel="nofollow" data-reactid=".2.1.0.0"></a><span class="star-rating-stars" data-reactid=".2.1.0.1"><a class="" title="Click to rate: 1" rel="nofollow" data-reactid=".2.1.0.1.$1"><span data-reactid=".2.1.0.1.$1.0">1</span></a><a class="" title="Click to rate: 2" rel="nofollow" data-reactid=".2.1.0.1.$2"><span data-reactid=".2.1.0.1.$2.0">2</span></a><a class="" title="Click to rate: 3" rel="nofollow" data-reactid=".2.1.0.1.$3"><span data-reactid=".2.1.0.1.$3.0">3</span></a><a class="" title="Click to rate: 4" rel="nofollow" data-reactid=".2.1.0.1.$4"><span data-reactid=".2.1.0.1.$4.0">4</span></a><a class="" title="Click to rate: 5" rel="nofollow" data-reactid=".2.1.0.1.$5"><span data-reactid=".2.1.0.1.$5.0">5</span></a><a class="" title="Click to rate: 6" rel="nofollow" data-reactid=".2.1.0.1.$6"><span data-reactid=".2.1.0.1.$6.0">6</span></a><a class="" title="Click to rate: 7" rel="nofollow" data-reactid=".2.1.0.1.$7"><span data-reactid=".2.1.0.1.$7.0">7</span></a><a class="" title="Click to rate: 8" rel="nofollow" data-reactid=".2.1.0.1.$8"><span data-reactid=".2.1.0.1.$8.0">8</span></a><a class="" title="Click to rate: 9" rel="nofollow" data-reactid=".2.1.0.1.$9"><span data-reactid=".2.1.0.1.$9.0">9</span></a><a class="" title="Click to rate: 10" rel="nofollow" data-reactid=".2.1.0.1.$10"><span data-reactid=".2.1.0.1.$10.0">10</span></a></span></span><span class="star-rating-value" data-reactid=".2.1.1">0</span></div></div></div>
    </div>
    <div class="titleBar">
        <div class="primary_ribbon">
            <div class="ribbonize" data-tconst="tt0120737" data-caller-name="title" style="position: relative;"><div class="wl-ribbon standalone not-inWL" title="Click to add to watchlist"></div></div>
            <div class="wlb_dropdown_btn btn2_wrapper btn2_active wlb_dropdown" data-tconst="tt0120737" data-size="large" data-caller-name="title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 large primary btn2_glyph_on" onclick=""><span class="btn2_glyph"><div class="btn2_down"></div></span><span class="btn2_text"></span></a></div>
            <div class="wlb_dropdown_list" style="display:none"></div>
        </div>

        <div class="title_wrapper">
<h1 itemprop="name" class="">O Senhor dos Anéis: A Sociedade do Anel&nbsp;
	<span id="titleYear">
	(
	<a href="http://www.imdb.com/year/2001/?ref_=tt_ov_inf">2001</a>
	)
	</span>
</h1>
                <div class="originalTitle">The Lord of the Rings: The Fellowship of the Ring<span class="description"> (original title)</span></div>
            <div class="subtext">
                    <meta itemprop="contentRating" content="12">12
<span class="ghost">|</span>                    <time itemprop="duration" datetime="PT178M">
                        2h 58min
                    </time>
<span class="ghost">|</span>
<a href="http://www.imdb.com/genre/Adventure?ref_=tt_ov_inf"><span class="itemprop" itemprop="genre">Adventure</span></a>, 
<a href="http://www.imdb.com/genre/Drama?ref_=tt_ov_inf"><span class="itemprop" itemprop="genre">Drama</span></a>, 
<a href="http://www.imdb.com/genre/Fantasy?ref_=tt_ov_inf"><span class="itemprop" itemprop="genre">Fantasy</span></a>
<span class="ghost">|</span>
<a href="http://www.imdb.com/title/tt0120737/releaseinfo?ref_=tt_ov_inf" title="See more release dates">1 January 2002 (Brazil)
<meta itemprop="datePublished" content="2002-01-01">
</a>            </div>
        </div>
    </div>
                    </div>
                </div>



                
                    <div class="slate_wrapper">
    <div class="poster">
<a href="http://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976?ref_=tt_ov_i"> <img alt="O Senhor dos Anéis: A Sociedade do Anel Poster" title="O Senhor dos Anéis: A Sociedade do Anel Poster" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg" itemprop="image">
</a>    </div>
    <div class="slate">
<a href="http://www.imdb.com/video/imdb/vi2073101337?playlistId=tt0120737&amp;ref_=tt_ov_vi" class="slate_button prevent-ad-overlay video-modal" data-type="recommends" data-tconst="tt0120737" data-video="vi2073101337" data-context="imdb" itemprop="trailer" data-refsuffix="tt_ov_vi" data-pixels=""> <img alt="Promotional" title="Promotional" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/MV5BODk1MzkwNTA4N15BMl5BanBnXkFtZTgwOTU1ODY3MjI@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg" itemprop="image">
<div class="slate_fade_top"></div>
<div class="slate_fade_bottom"></div>
</a>        <div class="caption"> 
            <div style="float: left;">2:02 <span class="ghost">|</span> Promotional</div>
                <div style="float: right;">        <a href="http://www.imdb.com/title/tt0120737/videogallery?ref_=tt_ov_vi_sm">2 VIDEOS</a>
<span class="ghost">|</span>        <a href="http://www.imdb.com/title/tt0120737/mediaindex?ref_=tt_ov_mi_sm">285 IMAGES</a>
</div>
            <div style="clear: both;"></div>
        </div>
    </div>
                    </div>
            </div>

    
    
    
    <div class="plot_summary_wrapper">
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitlePlotAndCreditSummaryWidget_started');
    }
  </script>
    <div class="plot_summary ">
            <div class="summary_text" itemprop="description">
                    A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.
            </div>
        
    <div class="credit_summary_item">
        <h4 class="inline">Director:</h4>
            <span itemprop="director" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0001392?ref_=tt_ov_dr" itemprop="url"><span class="itemprop" itemprop="name">Peter Jackson</span></a>            </span>
    </div>
    <div class="credit_summary_item">
        <h4 class="inline">Writers:</h4>
            <span itemprop="creator" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0866058?ref_=tt_ov_wr" itemprop="url"><span class="itemprop" itemprop="name">J.R.R. Tolkien</span></a> (novel),             </span>
            <span itemprop="creator" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0909638?ref_=tt_ov_wr" itemprop="url"><span class="itemprop" itemprop="name">Fran Walsh</span></a> (screenplay)            </span>
            <span class="ghost">|</span>
<a href="http://www.imdb.com/title/tt0120737/fullcredits?ref_=tt_ov_wr#writers">2 more credits</a>&nbsp;»
    </div>
    <div class="credit_summary_item">
        <h4 class="inline">Stars:</h4>
            <span itemprop="actors" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000704?ref_=tt_ov_st_sm" itemprop="url"><span class="itemprop" itemprop="name">Elijah Wood</span></a>,             </span>
            <span itemprop="actors" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0005212?ref_=tt_ov_st_sm" itemprop="url"><span class="itemprop" itemprop="name">Ian McKellen</span></a>,             </span>
            <span itemprop="actors" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0089217?ref_=tt_ov_st_sm" itemprop="url"><span class="itemprop" itemprop="name">Orlando Bloom</span></a>            </span>
            <span class="ghost">|</span>
<a href="http://www.imdb.com/title/tt0120737/fullcredits?ref_=tt_ov_st_sm">See full cast &amp; crew</a>&nbsp;»
    </div>
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitlePlotAndCreditSummaryWidget_finished');
    }
  </script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleReviewsAndPopularityWidget_started');
    }
  </script>
      <div class="titleReviewBar ">           
    <div class="titleReviewBarItem">
<a href="http://www.imdb.com/title/tt0120737/criticreviews?ref_=tt_ov_rt"> <div class="metacriticScore score_favorable titleReviewBarSubItem">
<span>92</span>
</div></a>        <div class="titleReviewBarSubItem">
            <div><a href="http://www.imdb.com/title/tt0120737/criticreviews?ref_=tt_ov_rt">
Metascore
</a>            </div>
            <div><span class="subText"> 
               From <a href="http://www.metacritic.com/" target="_blank">metacritic.com</a> 
               </span>
            </div>
        </div>
    </div>
                   <div class="divider"></div>
           
    <div class="titleReviewBarItem titleReviewbarItemBorder">
        <div>
        Reviews
        </div>
        <div>
            <span class="subText">
                   <a href="http://www.imdb.com/title/tt0120737/reviews?ref_=tt_ov_rt">5.111 user</a>                   
                       <span class="ghostText">|</span>
                   <a href="http://www.imdb.com/title/tt0120737/externalreviews?ref_=tt_ov_rt">303 critic</a>
             </span>
        </div>
    </div>
                   <div class="divider"></div>

    <div class="titleReviewBarItem">
  <div class="titleOverviewSprite popularityTrendUp"></div>
        <div class="titleReviewBarSubItem">
            <div>
            Popularity
            </div>
            <div>
                <span class="subText">
                    201
      (<span class="titleOverviewSprite popularityImageUp"></span> <span class="popularityUpOrFlat">11</span>)
                </span>
            </div>
        </div>                                   
    </div>
      </div>              
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleReviewsAndPopularityWidget_finished');
    }
  </script>
    </div>
        </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleOverviewWidget_finished');
    }
  </script>
            </div> 

<script>
    if (typeof uet == 'function') {
      uet("af");
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_atf_main');
    }
  </script>

    </div> 

<script>
    if (typeof uet == 'function') {
      uet("cf");
    }
</script>


    <div id="sidebar">

	
	
<!-- begin TOP_RHS -->
<div id="billboard_show_button" style="display: none;">undefined</div><div id="top_rhs_wrapper" class="cornerstone_slot" style="display: none;">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('top_rhs');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" frameborder="0" id="top_rhs" marginwidth="0" marginheight="0" name="top_rhs" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="300" data-original-height="250" width="0" height="0" style="display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(4).html"></iframe> </div>
<div id="top_rhs_reflow_helper"></div>
<div id="top_rhs_after" class="after_ad" style="visibility: hidden; display: none;">
<a class="yesScript" href="http://www.imdb.com/title/tt0120737/?ref_=rvi_tt#" onclick="ad_utils.show_ad_feedback(&#39;top_rhs&#39;);return false;" id="ad_feedback_top_rhs">ad feedback</a>
</div>
<script id="top_rhs_rendering">
doWithAds(function(){
ad_utils.inject_serverside_ad('top_rhs', '<script>document.defaultAd = {h:250,w:300}; document.ad = document.defaultAd;<\/script> <!DOCTYPE html><html><body><\!-- aid : 1657895060001 : cid : 5795586030901 : template : IMDb Master Companion-1.83 --\><script>document.ad={aid:\"1657895060001\",cid:\"5795586030901\",w:\"0\",h:\"0\"};<\/script>\n</body></html><\!-- creativeModDate = 1504824286000 --\>\n <div id=\"top_rhs_webbug\" style=\"display:none;\">\n <img src=\"http://aax-us-east.amazon-adsystem.com/e/loi/imp?b=IujSvhwlvETxg5jlU8OYyk8AAAFfRTLCpQEAAADKAf0AYy8\" border=\"0\" height=\"1\" width=\"1\" alt=\"\"/>\n </div>\n');
}, "ad_utils not defined, unable to inject serverside ad");
</script>
<!-- End TOP_RHS -->
	
  <script>
    if ('csm' in window) {
      csm.measure('csm_atf_sidebar');
    }
  </script>


    
    
    

    
    
    




    
    
        <a name="slot_right-3"></a>
        <div class="mini-article">
        
    
        
                                

    
            <script type="text/javascript">if(typeof uet === 'function'){uet('bb','NinjaWidget',{wb:1});}</script>
                                

                    
    
        <span class="ab_widget">
        
    

    <div class="ab_ninja">
<span class="widget_header"> <span class="oneline"> <a href="http://www.imdb.com/imdbpicks/fall-movie-guide-2017/ls068449550/?pf_rd_m=A2FGELUUNOQJNL&amp;pf_rd_p=3263177182&amp;pf_rd_r=1EC1KPZA8BB024FPYRDK&amp;pf_rd_s=right-3&amp;pf_rd_t=15021&amp;pf_rd_i=tt0120737&amp;ref_=tt_ecw_fmg17_rhs_hd"> <h3>What Movies Are Coming This Fall?</h3> </a> </span> </span> <div class="widget_content no_inline_blurb"> <div class="widget_nested"> <div class="ninja_image_pack"> <div class="ninja_center"> <div class="ninja_image first_image last_image" style="width:307px;height:auto;"> <div style="width:307px;height:auto;margin:0 auto;"> <div class="widget_image"> <div class="image"> <a href="http://www.imdb.com/imdbpicks/fall-movie-guide-2017/ls068449550/?pf_rd_m=A2FGELUUNOQJNL&amp;pf_rd_p=3263177182&amp;pf_rd_r=1EC1KPZA8BB024FPYRDK&amp;pf_rd_s=right-3&amp;pf_rd_t=15021&amp;pf_rd_i=tt0120737&amp;ref_=tt_ecw_fmg17_rhs_i_1"> <img itemprop="image" class="pri_image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/MV5BMzg3MzE4NzYxM15BMl5BanBnXkFtZTgwNzkwNzY3MjI@._CR373,50,957,717_UX614_UY460._SY230_SX307_AL_.jpg"> </a> <div class="widget_caption caption_overlay"> <div class="primary"> <div class="onoverflow"> <i>Jumanji: Welcome to the Jungle</i> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <p class="blurb">Replicants, superheros, and reboots await you in our Fall Movie Guide. Plan your season and take note of the hotly anticipated indie, foreign, and documentary releases, too.</p> <p class="seemore"><a href="http://www.imdb.com/imdbpicks/fall-movie-guide-2017/ls068449550/?pf_rd_m=A2FGELUUNOQJNL&amp;pf_rd_p=3263177182&amp;pf_rd_r=1EC1KPZA8BB024FPYRDK&amp;pf_rd_s=right-3&amp;pf_rd_t=15021&amp;pf_rd_i=tt0120737&amp;ref_=tt_ecw_fmg17_rhs_sm" class="position_bottom supplemental">Check out our Fall Movie Guide</a></p>    </div>
    

                        
        </span>



            <script type="text/javascript">
                if(typeof uex === 'function'){uex('ld','NinjaWidget',{wb:1});}
            </script>
        




        </div>
    

  <div class="aux-content-widget-2"> 
    <div class="social">     
  <script type="text/javascript">if (uet) { uet('bb', 'facebook_like_iframe', {wb: 1}); }</script>
  <div class="social_networking_like">
    <iframe id="iframe_like" name="fbLikeIFrame_0" class="social-iframe" scrolling="no" frameborder="0" allowtransparency="allowTransparency" ref="http://www.imdb.com/title/tt0120737/" width="280" height="65" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/like.html"></iframe>
  </div>
    </div>
  </div>


    
    
    

    
    
    

    
    
    

	
	
<!-- begin RHS_CORNERSTONE -->
<div id="rhs_cornerstone_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('rhs_cornerstone');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside="" frameborder="0" id="rhs_cornerstone" marginwidth="0" marginheight="0" name="rhs_cornerstone" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="300" data-original-height="125" width="300" height="125" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(5).html"></iframe> </div>
<div id="rhs_cornerstone_reflow_helper"></div>
<script id="rhs_cornerstone_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('rhs_cornerstone');
} else {
ad_utils.gpt.render_ad('rhs_cornerstone');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End RHS_CORNERSTONE -->
	


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "RelatedNewsWidgetRHS", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_RelatedNewsWidgetRHS_started');
    }
  </script>

      <div class="mini-article">
        <h3>Related News</h3>

        
                
                    
                    
                    <div class="news_item odd">
                        <span itemprop="headline">
                            <a href="http://www.imdb.com/title/tt0120737/news?ref_=tt_nwr_1#ni58691120">Obituário: Christopher Lee</a>
                        </span>
                        
                        <br><small>
                                <span itemprop="datePublished">
                                  12 June 2015 8:52 AM, -03:00
                                </span>
                            
                                <span class="ghost">|</span><span itemprop="provider">
                                        <a href="http://www.imdb.com/news/ns0002977?ref_=tt_nwr_1">SplitScreen</a>
                                </span>
                        </small>
                    </div>
                
                    
                    
                    <div class="news_item even">
                        <span itemprop="headline">
                            <a href="http://www.imdb.com/title/tt0120737/news?year=2012&amp;ref_=tt_nwr_2#ni36757988">Os Filmes Favoritos Aos Óscares 2013 - 3ª Parte</a>
                        </span>
                        
                        <br><small>
                                <span itemprop="datePublished">
                                  21 September 2012 2:06 PM, -03:00
                                </span>
                            
                                <span class="ghost">|</span><span itemprop="provider">
                                        <a href="http://www.imdb.com/news/ns0002219?ref_=tt_nwr_2">Portal Cinema</a>
                                </span>
                        </small>
                    </div>
                
                    
                    
                    <div class="news_item odd">
                        <span itemprop="headline">
                            <a href="http://www.imdb.com/title/tt0120737/news?ref_=tt_nwr_3#ni31165382">Academia de Artes e Ciências Cinematográficas convida 176 personalidades para serem seus membros</a>
                        </span>
                        
                        <br><small>
                                <span itemprop="datePublished">
                                  30 June 2012 5:53 PM, -03:00
                                </span>
                            
                                <span class="ghost">|</span><span itemprop="provider">
                                        <a href="http://www.imdb.com/news/ns0000740?ref_=tt_nwr_3">c7nema</a>
                                </span>
                        </small>
                    </div>
       
            <div class="see-more">
                <a href="http://www.imdb.com/title/tt0120737/news?ref_=tt_nwr_sm">See all 6 related articles</a>&nbsp;»
            </div>

      </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_RelatedNewsWidgetRHS_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "RelatedNewsWidgetRHS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "RelatedNewsWidgetRHS", {wb: 1});
    }
</script>


    
    
    

	
	<!-- no content received for slot: middle_rhs -->
	


    
    
    


    
    
        <a name="slot_right-7"></a>
        <div class="mini-article">
        
    
        
                                

    
            <script type="text/javascript">if(typeof uet === 'function'){uet('bb','ZergnetWidget',{wb:1});}</script>
                                

                    
    
        <span class="ab_widget">
            <div class="ab_zergnet">
<span class="widget_header"> <span class="oneline"> <h3>Around The Web</h3> <span>&nbsp;|&nbsp;</span> <h4>Powered by ZergNet</h4> </span> </span> <div class="widget_content no_inline_blurb"> <div class="widget_nested"> <iframe class="zergnet-frame__sidebar" scrolling="no" seamless="" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/zergnet-2975767399._CB514892135_.html"></iframe> </div> </div>    </div>

                        
        </span>



            <script type="text/javascript">
                if(typeof uex === 'function'){uex('ld','ZergnetWidget',{wb:1});}
            </script>
        




        </div>
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "RelatedListsWidget", {wb: 1});
    }
</script>
        <div class="mini-article">
            <div id="relatedListsWidget">
                <div class="rightcornerlink">
                    <a href="http://www.imdb.com/list/create?ref_=tt_rls">Create a list</a>&nbsp;»
                </div>
                <h3>User Lists</h3>
                <p>Related lists from IMDb users</p>

    <div class="list-preview even">
        <div class="list-preview-item-narrow">
<a href="http://www.imdb.com/list/ls002974595?ref_=tt_rls_1"><img height="86" width="86" alt="list image" title="list image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX86_CR0,0,86,86_AL_.jpg"></a>        </div>
        <div class="list_name">
            <strong><a href="http://www.imdb.com/list/ls002974595?ref_=tt_rls_1">
My Favorite 25 Movies
</a></strong>
        </div>
        <div class="list_meta">
            a list of 25 titles
            <br>created 13&nbsp;Mar&nbsp;2012
        </div>
        <div class="clear">&nbsp;</div>
    </div>
    <div class="list-preview odd">
        <div class="list-preview-item-narrow">
<a href="http://www.imdb.com/list/ls057668755?ref_=tt_rls_2"><img height="86" width="86" alt="list image" title="list image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX86_CR0,0,86,86_AL_.jpg"></a>        </div>
        <div class="list_name">
            <strong><a href="http://www.imdb.com/list/ls057668755?ref_=tt_rls_2">
Actions
</a></strong>
        </div>
        <div class="list_meta">
            a list of 25 titles
            <br>created 23&nbsp;Feb&nbsp;2013
        </div>
        <div class="clear">&nbsp;</div>
    </div>
    <div class="list-preview even">
        <div class="list-preview-item-narrow">
<a href="http://www.imdb.com/list/ls058751826?ref_=tt_rls_3"><img height="86" width="86" alt="list image" title="list image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/game.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNTY0ZDczZTktOTRjZi00NTI3LThlZjItOTM4YzhmYWZkOTc1XkEyXkFqcGdeQXVyNjgzMDgzODM@._V1_UX86_CR0,0,86,86_AL_.jpg"></a>        </div>
        <div class="list_name">
            <strong><a href="http://www.imdb.com/list/ls058751826?ref_=tt_rls_3">
Favorites Video games, TV shows, and Movies
</a></strong>
        </div>
        <div class="list_meta">
            a list of 32 titles
            <br>created 23&nbsp;Mar&nbsp;2014
        </div>
        <div class="clear">&nbsp;</div>
    </div>
    <div class="list-preview odd">
        <div class="list-preview-item-narrow">
<a href="http://www.imdb.com/list/ls033131109?ref_=tt_rls_4"><img height="86" width="86" alt="list image" title="list image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX86_CR0,0,86,86_AL_.jpg"></a>        </div>
        <div class="list_name">
            <strong><a href="http://www.imdb.com/list/ls033131109?ref_=tt_rls_4">
Top 25 Movies of all Time
</a></strong>
        </div>
        <div class="list_meta">
            a list of 21 titles
            <br>created 01&nbsp;Feb&nbsp;2016
        </div>
        <div class="clear">&nbsp;</div>
    </div>
    <div class="list-preview even">
        <div class="list-preview-item-narrow">
<a href="http://www.imdb.com/list/ls063380146?ref_=tt_rls_5"><img height="86" width="86" alt="list image" title="list image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX86_CR0,0,86,86_AL_.jpg"></a>        </div>
        <div class="list_name">
            <strong><a href="http://www.imdb.com/list/ls063380146?ref_=tt_rls_5">
fantasy
</a></strong>
        </div>
        <div class="list_meta">
            a list of 40 titles
            <br>created 28&nbsp;Jul&nbsp;2016
        </div>
        <div class="clear">&nbsp;</div>
    </div>
                <div class="see-more">
                    <a href="http://www.imdb.com/lists/tt0120737?ref_=tt_rls_sm">See all related lists</a>&nbsp;»
                </div>
            </div>
        </div>
<script>
    if (typeof uet == 'function') {
      uet("be", "RelatedListsWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "RelatedListsWidget", {wb: 1});
    }
</script>
        


    
    
    

	
	<!-- no content received for slot: btf_rhs1 -->
	


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "ConnectWidget", {wb: 1});
    }
</script>
    <div class="mini-article">
        <h3>Connect with IMDb</h3>
        <div id="facebookWrapper">
            <iframe scrolling="no" frameborder="0" id="facebookIframe" allowtransparency="true" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/likebox.html"></iframe>
        </div>
        <hr>
        <iframe allowtransparency="true" frameborder="0" role="presentation" scrolling="no" id="twitterIframe" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/twitter.html"></iframe>
    </div>
<script>
    if (typeof uet == 'function') {
      uet("be", "ConnectWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "ConnectWidget", {wb: 1});
    }
</script>


    
    
    


  
      
    <div class="mini-article">
        <div id="ratingWidget">
            <h3>Share this Rating</h3>
            <p>
                Title:
                <strong>O Senhor dos Anéis: A Sociedade do Anel</strong>
                (2001)
            </p>
            <span class="imdbRatingPlugin imdbRatingStyle1" data-user="" data-title="tt0120737" data-style="t1">
<a href="http://www.imdb.com/title/tt0120737/?ref_=tt_plg_rt"> <img alt="O Senhor dos Anéis: A Sociedade do Anel (2001) on IMDb" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/imdb_46x22-2264473254._CB514892074_.png">
</a>                <span class="rating">8,8<span class="ofTen">/10</span></span>                
<img src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/imdb_star_22x21-2889147855._CB514892068_.png" class="star">
            </span>
            <p>Want to share IMDb's rating on your own site? Use the HTML below.</p>
            <div id="ratingPluginHTML" class="hidden">
                <div class="message_box small">
                    <div class="error">
                        <p>
                        You must be a registered user to use the IMDb rating plugin.
                        </p>
                        <a href="http://www.imdb.com/register/login?ref_=tt_plg_rt" class="cboxElement" rel="login">Login</a>
                    </div>
                </div>
            </div>
            <div id="ratingWidgetLinks">
                <span class="titlePageSprite arrows show"></span>
                <a href="http://www.imdb.com/plugins?titleId=tt0120737&amp;ref_=tt_plg_rt" id="toggleRatingPluginHTML" itemprop="url">Show HTML</a>
                <a href="http://www.imdb.com/plugins?titleId=tt0120737&amp;ref_=tt_plg_rt" itemprop="url">View more styles</a>
            </div>
        </div>
    </div>


    
    
    


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleMainDetailsRelatedPolls", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMainDetailsRelatedPolls_started');
    }
  </script>
<div class="mini-article poll-widget-rhs ">
    <style>
        .mini-article.poll-widget-rhs ul li { margin-bottom: 0.5em; clear: left; font-weight: bold;}
        .mini-article.poll-widget-rhs span { margin-bottom: 0.5em; clear: left;}
        .mini-article.poll-widget-rhs img { float: left; padding: 0 5px 5px 0; height: 86px; width: 86px;}
    </style>
    <h3>User Polls</h3>
    <ul>
        <li>
<a href="http://www.imdb.com/poll/_eXghLUfoJk/?ref_=tt_po_i1"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/_eXghLUfoJk/?ref_=tt_po_q1">Language of the Movies</a>
        </li><li>
<a href="http://www.imdb.com/poll/Ay9Erdy_iZ4/?ref_=tt_po_i2"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/Ay9Erdy_iZ4/?ref_=tt_po_q2">If you could watch these films backwards...</a>
        </li><li>
<a href="http://www.imdb.com/poll/CMEgvB2vwMo/?ref_=tt_po_i3"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/CMEgvB2vwMo/?ref_=tt_po_q3">Director's Cut/Extended Edition Movies</a>
        </li><li>
<a href="http://www.imdb.com/poll/LzjZG-Ml7O8/?ref_=tt_po_i4"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/LzjZG-Ml7O8/?ref_=tt_po_q4">What year did you register to IMDb movie-wise?</a>
        </li><li>
<a href="http://www.imdb.com/poll/8NhWtNQLpds/?ref_=tt_po_i5"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/8NhWtNQLpds/?ref_=tt_po_q5">Favorite movie of the year according to IMDb?</a>
        </li><li>
<a href="http://www.imdb.com/poll/gfP4y61_mUY/?ref_=tt_po_i6"><img height="86" width="86" alt="poll image" title="poll image" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYWQwOWVkMGItMDU2Yy00YjIzLWJkMjEtNmVkZjE3MjMwYzEzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX86_CR0,0,86,86_.jpg"></a>        <a href="http://www.imdb.com/poll/gfP4y61_mUY/?ref_=tt_po_q6">Longest Movies in the IMDb Top 250</a>
    </li></ul>
    <div class="see-more"><a href="http://www.imdb.com/poll/?ref_=tt_po_sm">See more polls »</a></div>
</div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMainDetailsRelatedPolls_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleMainDetailsRelatedPolls", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleMainDetailsRelatedPolls", {wb: 1});
    }
</script>


    
    
    

	
	<!-- no content received for slot: bottom_rhs -->
	


    
    
    
        
	
	
<!-- begin BTF_RHS2 -->
<div id="btf_rhs2_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('btf_rhs2');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside="" frameborder="0" id="btf_rhs2" marginwidth="0" marginheight="0" name="btf_rhs2" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="300" data-original-height="250" width="300" height="250" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(6).html"></iframe> </div>
<div id="btf_rhs2_reflow_helper"></div>
<script id="btf_rhs2_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('btf_rhs2');
} else {
ad_utils.gpt.render_ad('btf_rhs2');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End BTF_RHS2 -->
	


    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    </div> 

    <div id="main_bottom" class="main">

    
    
    



    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleAwardsWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleAwardsWidget_started');
    }
  </script>
      <div class="article highlighted" id="titleAwardsRanks">
          <strong>
<a href="http://www.imdb.com/chart/top?ref_=tt_awd"> Top Rated Movies #11
</a>          </strong>
          |

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleAwardsSummaryWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleAwardsSummaryWidget_started');
    }
  </script>
    <span itemprop="awards">
      <b>
        Won
        4
        Oscars.
      </b>
    </span>
    <span itemprop="awards">
        Another
      112 wins &amp; 124 nominations.
    </span>
    <span class="see-more inline">
<a href="http://www.imdb.com/title/tt0120737/awards?ref_=tt_awd" class="btn-full">See more awards</a>&nbsp;»    </span>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleAwardsSummaryWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleAwardsSummaryWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleAwardsSummaryWidget", {wb: 1});
    }
</script>
      </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleAwardsWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleAwardsWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleAwardsWidget", {wb: 1});
    }
</script>


    
    
    



    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleMediaStripWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMediaStripWidget_started');
    }
  </script>


  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMediaStripWidget_started');
    }
  </script>

      <div class="article" id="titleMediaStrip">
        <div class="mediastrip_container combined">
                <div id="combined-videos">
                    <h2>Videos</h2>
    <div class="mediastrip_big">
                <span class="video_slate" itemscope="" itemtype="http://schema.org/videoObject">
                <meta itemprop="duration" content="T2M2S">

<a href="http://www.imdb.com/title/tt0120737/videoplayer/vi2073101337?ref_=tt_pv_vi_aiv_1" title="O Senhor dos Anéis: A Sociedade do Anel -- The trailer for The Lord of the Rings Trilogy on Blu-ray." alt="O Senhor dos Anéis: A Sociedade do Anel -- The trailer for The Lord of the Rings Trilogy on Blu-ray." class="video-modal" data-video="vi2073101337" data-context="imdb" data-rid="1EC1KPZA8BB024FPYRDK" widget-context="titleMaindetails" itemprop="url"><img height="105" width="139" alt="O Senhor dos Anéis: A Sociedade do Anel -- The trailer for The Lord of the Rings Trilogy on Blu-ray." title="O Senhor dos Anéis: A Sociedade do Anel -- The trailer for The Lord of the Rings Trilogy on Blu-ray." src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/no-video-slate-856072904._CB514893337_.png" class="loadlate video" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BODk1MzkwNTA4N15BMl5BanBnXkFtZTgwOTU1ODY3MjI@._V1_SP229,229,0,C,0,0,0_CR45,62,139,105_PIimdb-blackband-204-14,TopLeft,0,0_PIimdb-blackband-204-28,BottomLeft,0,1_CR0,0,139,105_PIimdb-bluebutton-big,BottomRight,-1,-1_ZAPromo,2,76,16,137,verdenab,8,255,255,255,1_ZAon%2520IMDb,2,1,14,137,verdenab,7,255,255,255,1_ZA02%253A02,103,1,14,36,verdenab,7,255,255,255,1_PIimdb-HDIconMiniWhite,BottomLeft,2,-2_.jpg" itemprop="image" viconst="vi2073101337"></a>            </span>
                <span class="video_slate_last" itemscope="" itemtype="http://schema.org/videoObject">
                <meta itemprop="duration" content="T1M55S">

<a href="http://www.imdb.com/title/tt0120737/videoplayer/vi3063002649?ref_=tt_pv_vi_aiv_2" title="O Senhor dos Anéis: A Sociedade do Anel -- Sept. 22 is the birthday of fictional hero Bilbo Baggins, and is also known as &quot;Hobbit Day&quot; by avid &#39;Lord of the Rings&#39; fans." alt="O Senhor dos Anéis: A Sociedade do Anel -- Sept. 22 is the birthday of fictional hero Bilbo Baggins, and is also known as &quot;Hobbit Day&quot; by avid &#39;Lord of the Rings&#39; fans." class="video-modal" data-video="vi3063002649" data-context="imdb" data-rid="1EC1KPZA8BB024FPYRDK" widget-context="titleMaindetails" itemprop="url"><img height="105" width="139" alt="O Senhor dos Anéis: A Sociedade do Anel -- Sept. 22 is the birthday of fictional hero Bilbo Baggins, and is also known as &quot;Hobbit Day&quot; by avid &#39;Lord of the Rings&#39; fans." title="O Senhor dos Anéis: A Sociedade do Anel -- Sept. 22 is the birthday of fictional hero Bilbo Baggins, and is also known as &quot;Hobbit Day&quot; by avid &#39;Lord of the Rings&#39; fans." src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/no-video-slate-856072904._CB514893337_.png" class="loadlate video" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjgzODIyNTkyN15BMl5BanBnXkFtZTgwNjE2OTgwMDI@._V1_SP229,229,0,C,0,0,0_CR45,62,139,105_PIimdb-blackband-204-14,TopLeft,0,0_PIimdb-blackband-204-28,BottomLeft,0,1_CR0,0,139,105_PIimdb-bluebutton-big,BottomRight,-1,-1_ZAVideo,2,76,16,137,verdenab,8,255,255,255,1_ZAon%2520IMDb,2,1,14,137,verdenab,7,255,255,255,1_ZA01%253A55,103,1,14,36,verdenab,7,255,255,255,1_PIimdb-HDIconMiniWhite,BottomLeft,2,-2_.jpg" itemprop="image" viconst="vi3063002649"></a>            </span>
    </div>
                </div>
                <div id="combined-photos">
                    <h2>Photos</h2>
    <div class="mediastrip">        	
                
<a href="http://www.imdb.com/title/tt0120737/mediaviewer/rm2628354048?context=default&amp;ref_=tt_pv_md_1" itemprop="thumbnailUrl"><img height="105" width="105" alt="Sean Astin in O Senhor dos Anéis: A Sociedade do Anel (2001)" title="Sean Astin in O Senhor dos Anéis: A Sociedade do Anel (2001)" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown-1394846836._CB514893342_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMTQ4MTI3OV5BMl5BanBnXkFtZTcwMzgwMjk2Mw@@._V1_UY105_CR26,0,105,105_AL_.jpg" itemprop="image"></a>                
<a href="http://www.imdb.com/title/tt0120737/mediaviewer/rm3936598528?context=default&amp;ref_=tt_pv_md_2" itemprop="thumbnailUrl"><img height="105" width="105" alt="Liv Tyler in O Senhor dos Anéis: A Sociedade do Anel (2001)" title="Liv Tyler in O Senhor dos Anéis: A Sociedade do Anel (2001)" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown-1394846836._CB514893342_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5Mzk1Mzc3N15BMl5BanBnXkFtZTcwNzEzNTU0NA@@._V1_UY105_CR40,0,105,105_AL_.jpg" itemprop="image"></a>                
<a href="http://www.imdb.com/title/tt0120737/mediaviewer/rm4116027392?context=default&amp;ref_=tt_pv_md_3" itemprop="thumbnailUrl"><img height="105" width="105" alt="Peter Jackson in O Senhor dos Anéis: A Sociedade do Anel (2001)" title="Peter Jackson in O Senhor dos Anéis: A Sociedade do Anel (2001)" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/unknown-1394846836._CB514893342_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwODk0MzYwMV5BMl5BanBnXkFtZTYwMDcyNjY2._V1_UY105_CR26,0,105,105_AL_.jpg" itemprop="image"></a>    </div>
                </div>
            <div class="combined-see-more see-more">
<a href="http://www.imdb.com/title/tt0120737/mediaindex?ref_=tt_pv_mi_sm"><span class="titlePageSprite showAllVidsAndPics"></span></a>
<a href="http://www.imdb.com/title/tt0120737/mediaindex?ref_=tt_pv_mi_sm">285 photos</a>
<span class="ghost">|</span>
<a href="http://www.imdb.com/title/tt0120737/videogallery?ref_=tt_pv_vi_sm">2 videos</a>
<span class="ghost">|</span>
<a href="http://www.imdb.com/title/tt0120737/news?ref_=tt_pv_nw_sm">6 news articles</a> »            </div>
        </div>
      </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMediaStripWidget_finished');
    }
  </script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleMediaStripWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleMediaStripWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleMediaStripWidget", {wb: 1});
    }
</script>



<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleRecsWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleRecsWidget_started');
    }
  </script>
    
        <div class="article" id="titleRecs">
            <span class="rightcornerlink">
            <a href="http://www.imdb.com/help/show_leaf?personalrecommendations&amp;ref_=tt_rec_lm">Learn more</a>
            </span>
            
            <h2 class="rec_heading_wrapper">  
                <span class="rec_heading" data-spec="p13nsims:tt0120737" style="display: inline;">People who liked this also liked...&nbsp;</span>
            </h2>

            <div class="rec_wrapper" id="title_recs" data-items-per-request="24" data-items-per-page="6" data-specs="p13nsims:tt0120737" data-caller-name="p13nsims-title">      
                
    <div class="rec_const_picker">
        <div class="rec_view">
            <div class="rec_grave" style="display:none"></div>
            <div class="rec_slide" style="width: 492px;">
                        <div class="rec_page rec_selected">         
    
    
    <div class="rec_item rec_selected" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0167260">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0167260/?ref_=tt_rec_tti"><img height="113" width="76" alt="O Senhor dos Anéis: O Retorno do Rei" title="O Senhor dos Anéis: O Retorno do Rei" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX76_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0133093">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0133093/?ref_=tt_rec_tti"><img height="113" width="76" alt="Matrix" title="Matrix" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX76_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0468569">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0468569/?ref_=tt_rec_tti"><img height="113" width="76" alt="Batman: O Cavaleiro das Trevas" title="Batman: O Cavaleiro das Trevas" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0109830">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0109830/?ref_=tt_rec_tti"><img height="113" width="76" alt="Forrest Gump: O Contador de Histórias" title="Forrest Gump: O Contador de Histórias" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY113_CR1,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt1375666">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt1375666/?ref_=tt_rec_tti"><img height="113" width="76" alt="A Origem" title="A Origem" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0080684">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0080684/?ref_=tt_rec_tti"><img height="113" width="76" alt="O Império Contra-Ataca" title="O Império Contra-Ataca" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX76_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

                        </div>
                        <div class="rec_page">         
    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0137523">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0137523/?ref_=tt_rec_tti"><img height="113" width="76" alt="Clube da Luta" title="Clube da Luta" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0076759">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0076759/?ref_=tt_rec_tti"><img height="113" width="76" alt="Guerra nas Estrelas" title="Guerra nas Estrelas" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX76_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0110912">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0110912/?ref_=tt_rec_tti"><img height="113" width="76" alt="Pulp Fiction: Tempo de Violência" title="Pulp Fiction: Tempo de Violência" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0172495">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0172495/?ref_=tt_rec_tti"><img height="113" width="76" alt="Gladiador" title="Gladiador" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt1345836">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt1345836/?ref_=tt_rec_tti"><img height="113" width="76" alt="Batman: O Cavaleiro das Trevas Ressurge" title="Batman: O Cavaleiro das Trevas Ressurge" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY113_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

    
    
    <div class="rec_item" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0086190">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0086190/?ref_=tt_rec_tti"><img height="113" width="76" alt="O Retorno de Jedi" title="O Retorno de Jedi" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-293970583._CB514891998_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX76_CR0,0,76,113_AL_.jpg"> <br>
</a>    </div>

                        </div>
            </div>
            <div class="rec_nav">
                <div class="rec_nav_page_num"></div>
                <a class="rec_nav_left rec_nav_disabled">◄ Prev 6</a>
                <a class="rec_nav_right">Next 6 ►</a>
            </div>
        </div>
    </div>
    
   <div class="rec_overviews">

         
      <div class="rec_overview" data-tconst="tt0167260" style="display: block;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0167260">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0167260/?ref_=tt_rec_tti"><img height="190" width="128" alt="O Senhor dos Anéis: O Retorno do Rei" title="O Senhor dos Anéis: O Retorno do Rei" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0167260" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0167260/?ref_=tt_rec_tt"><b>O Senhor dos Anéis: O Retorno do Rei</b></a>
            <span class="nobr">(2003)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 12

                     Adventure          
 <span class="ghost">|</span> 
                     Drama          
 <span class="ghost">|</span> 
                     Fantasy          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0167260|imdb|8.9|8.9|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,9/10 (1.336.053 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 124.6px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,9</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Peter Jackson  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Elijah Wood, 
Viggo Mortensen, 
Ian McKellen</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0133093" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0133093">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0133093/?ref_=tt_rec_tti"><img height="190" width="128" alt="Matrix" title="Matrix" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0133093" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0133093/?ref_=tt_rec_tt"><b>Matrix</b></a>
            <span class="nobr">(1999)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 12

                     Action          
 <span class="ghost">|</span> 
                     Sci-Fi          


        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0133093|imdb|8.7|8.7|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,7/10 (1.344.186 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 121.8px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Directors:</b>
Lana Wachowski,
Lilly Wachowski  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Keanu Reeves, 
Laurence Fishburne, 
Carrie-Anne Moss</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0468569" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0468569">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0468569/?ref_=tt_rec_tti"><img height="190" width="128" alt="Batman: O Cavaleiro das Trevas" title="Batman: O Cavaleiro das Trevas" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY190_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0468569" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0468569/?ref_=tt_rec_tt"><b>Batman: O Cavaleiro das Trevas</b></a>
            <span class="nobr">(2008)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 12

                     Action          
 <span class="ghost">|</span> 
                     Crime          
 <span class="ghost">|</span> 
                     Drama          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0468569|imdb|9|9|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 9/10 (1.845.224 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 126px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">9</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Christopher Nolan  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Christian Bale, 
Heath Ledger, 
Aaron Eckhart</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0109830" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0109830">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0109830/?ref_=tt_rec_tti"><img height="190" width="128" alt="Forrest Gump: O Contador de Histórias" title="Forrest Gump: O Contador de Histórias" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY190_CR1,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0109830" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0109830/?ref_=tt_rec_tt"><b>Forrest Gump: O Contador de Histórias</b></a>
            <span class="nobr">(1994)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 14

                     Comedy          
 <span class="ghost">|</span> 
                     Drama          
 <span class="ghost">|</span> 
                     Romance          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0109830|imdb|8.8|8.8|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,8/10 (1.408.199 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 123.2px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
JFK, LBJ, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Robert Zemeckis  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Tom Hanks, 
Robin Wright, 
Gary Sinise</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt1375666" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt1375666">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt1375666/?ref_=tt_rec_tti"><img height="190" width="128" alt="A Origem" title="A Origem" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY190_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt1375666" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt1375666/?ref_=tt_rec_tt"><b>A Origem</b></a>
            <span class="nobr">(2010)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 14

                     Action          
 <span class="ghost">|</span> 
                     Adventure          
 <span class="ghost">|</span> 
                     Sci-Fi          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt1375666|imdb|8.8|8.8|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,8/10 (1.634.890 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 123.2px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Christopher Nolan  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Leonardo DiCaprio, 
Joseph Gordon-Levitt, 
Ellen Page</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0080684" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0080684">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0080684/?ref_=tt_rec_tti"><img height="190" width="128" alt="O Império Contra-Ataca" title="O Império Contra-Ataca" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0080684" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0080684/?ref_=tt_rec_tt"><b>O Império Contra-Ataca</b></a>
            <span class="nobr">(1980)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: Livre

                     Action          
 <span class="ghost">|</span> 
                     Adventure          
 <span class="ghost">|</span> 
                     Fantasy          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0080684|imdb|8.8|8.8|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,8/10 (932.284 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 123.2px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Master Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Irvin Kershner  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Mark Hamill, 
Harrison Ford, 
Carrie Fisher</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0137523" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0137523">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0137523/?ref_=tt_rec_tti"><img height="190" width="128" alt="Clube da Luta" title="Clube da Luta" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY190_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0137523" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0137523/?ref_=tt_rec_tt"><b>Clube da Luta</b></a>
            <span class="nobr">(1999)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 18

                     Drama          


        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0137523|imdb|8.8|8.8|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,8/10 (1.497.188 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 123.2px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
David Fincher  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Brad Pitt, 
Edward Norton, 
Meat Loaf</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0076759" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0076759">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0076759/?ref_=tt_rec_tti"><img height="190" width="128" alt="Guerra nas Estrelas" title="Guerra nas Estrelas" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0076759" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0076759/?ref_=tt_rec_tt"><b>Guerra nas Estrelas</b></a>
            <span class="nobr">(1977)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 10

                     Action          
 <span class="ghost">|</span> 
                     Adventure          
 <span class="ghost">|</span> 
                     Fantasy          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0076759|imdb|8.7|8.7|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,7/10 (1.004.709 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 121.8px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
George Lucas  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Mark Hamill, 
Harrison Ford, 
Carrie Fisher</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0110912" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0110912">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0110912/?ref_=tt_rec_tti"><img height="190" width="128" alt="Pulp Fiction: Tempo de Violência" title="Pulp Fiction: Tempo de Violência" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0110912" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0110912/?ref_=tt_rec_tt"><b>Pulp Fiction: Tempo de Violência</b></a>
            <span class="nobr">(1994)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 18

                     Crime          
 <span class="ghost">|</span> 
                     Drama          


        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0110912|imdb|8.9|8.9|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,9/10 (1.461.646 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 124.6px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,9</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Quentin Tarantino  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
John Travolta, 
Uma Thurman, 
Samuel L. Jackson</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0172495" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0172495">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0172495/?ref_=tt_rec_tti"><img height="190" width="128" alt="Gladiador" title="Gladiador" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY190_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0172495" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0172495/?ref_=tt_rec_tt"><b>Gladiador</b></a>
            <span class="nobr">(2000)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 14

                     Action          
 <span class="ghost">|</span> 
                     Adventure          
 <span class="ghost">|</span> 
                     Drama          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0172495|imdb|8.5|8.5|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,5/10 (1.084.552 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 119px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,5</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
When a Roman General is betrayed, and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Ridley Scott  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Russell Crowe, 
Joaquin Phoenix, 
Connie Nielsen</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt1345836" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt1345836">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt1345836/?ref_=tt_rec_tti"><img height="190" width="128" alt="Batman: O Cavaleiro das Trevas Ressurge" title="Batman: O Cavaleiro das Trevas Ressurge" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY190_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt1345836" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt1345836/?ref_=tt_rec_tt"><b>Batman: O Cavaleiro das Trevas Ressurge</b></a>
            <span class="nobr">(2012)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: 12

                     Action          
 <span class="ghost">|</span> 
                     Thriller          


        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt1345836|imdb|8.4|8.4|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,4/10 (1.257.388 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 117.6px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,4</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
Eight years after the Joker's reign of anarchy, the Dark Knight, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Christopher Nolan  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Christian Bale, 
Tom Hardy, 
Anne Hathaway</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
         
      <div class="rec_overview" data-tconst="tt0086190" style="display: none;">
    
    
    
    <div class="rec_poster" data-info="" data-spec="p13nsims:tt0120737" data-tconst="tt0086190">
        <div class="rec_overlay">
            <div class="rec_filter"></div>
            <div class="glyph rec_watchlist_glyph"></div>
            <div class="glyph rec_blocked_glyph"></div>
            <div class="glyph rec_rating_glyph"></div>
            <div class="glyph rec_pending_glyph"></div>                        
        </div>            
<a href="http://www.imdb.com/title/tt0086190/?ref_=tt_rec_tti"><img height="190" width="128" alt="O Retorno de Jedi" title="O Retorno de Jedi" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/film-184890147._CB522736516_.png" class="loadlate rec_poster_img" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,0,128,190_AL_.jpg"> <br>
</a>    </div>

    
       <div class="rec_actions">
     
         <div class="rec_action_divider">
           <div class="wlb_classic_wrapper">
             <span class="wlb_wrapper">
               <a class="rec_wlb_watchlist_btn btn2_wrapper btn2_active wlb_lite" data-tconst="tt0086190" data-size="medium" data-caller-name="p13nsims-title" data-type="primary" data-initialized="1"><div class="btn2_alert" style="display:none"></div><a class="btn2 medium primary btn2_text_on" onclick="" title="Click to add to watchlist"><span class="btn2_glyph"></span><span class="btn2_text">Add to Watchlist</span></a></a>
             </span>
           </div>  
         </div> 
       
         <div class="rec_action_divider">
           <span class="btn2_wrapper">
             <a class="rec_next rec_half_button btn2 medium btn2_text_on" title="Show me the next title" onclick="">
               <span class="btn2_glyph">0</span>
               <span class="btn2_text">Next »</span>
             </a>
           </span>
         </div>    
         
             <input type="hidden" name="49e6c" value="d2a4">
       </div>
       
       <div class="rec_details">
         <div class="rec-info">
         
           <div class="rec-jaw-upper">  

     <div class="rec-title">
       <a href="http://www.imdb.com/title/tt0086190/?ref_=tt_rec_tt"><b>O Retorno de Jedi</b></a>
            <span class="nobr">(1983)</span>
   </div>  
             


    <div class="rec-cert-genre rec-elipsis">
        

            
            
                
                    Certificate: Livre

                     Action          
 <span class="ghost">|</span> 
                     Adventure          
 <span class="ghost">|</span> 
                     Fantasy          

        
    </div>
             
             <div class="rec-rating">
               

  

  
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="" data-user="" id="tt0086190|imdb|8.4|8.4|p13nsims-title|tt0120737|title|main" data-ga-identifier="" title="Users rated this 8,4/10 (764.426 votes) - click stars to rate">
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 117.6px">&nbsp;</span>
<span class="rating-stars">
      <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
      <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,4</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>

               <div class="rec-outline">
    <p>
After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.    </p>
               </div>
               
             </div>  
             
           </div>
           
           <div class="rec-jaw-lower">
             <div class="rec-jaw-teeth"></div>                       
 <div class="rec-director rec-ellipsis">
      <b>Director:</b>
Richard Marquand  </div>
<div class="rec-actor rec-ellipsis"> <span>
    <b>Stars:</b> 
Mark Hamill, 
Harrison Ford, 
Carrie Fisher</span></div> 
           </div>
           
         </div>
       </div>
 
      </div>
     
    
   </div>
   
                
            </div>
        </div>  
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleRecsWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleRecsWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleRecsWidget", {wb: 1});
    }
</script>


<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleCastWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleCastWidget_started');
    }
  </script>
    <div class="article" id="titleCast">
    <span class="rightcornerlink">
            <a href="http://www.imdb.com/register/login?why=edit&amp;ref_=tt_cl" rel="login">Edit</a>
    </span>
        <h2>Cast</h2>
        
        <table class="cast_list">    
  <tbody><tr><td colspan="4" class="castlist_label">Cast overview, first billed only:</td></tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0397102/?ref_=tt_cl_i1"><img height="44" width="32" alt="Alan Howard" title="Alan Howard" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDYwNzY3OF5BMl5BanBnXkFtZTcwMDYxMTUwOA@@._V1_UY44_CR1,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0397102/?ref_=tt_cl_t1" itemprop="url"> <span class="itemprop" itemprop="name">Alan Howard</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            Voice of the Ring 
  
  
  (voice)
  
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0032370/?ref_=tt_cl_i2"><img height="44" width="32" alt="Noel Appleby" title="Noel Appleby" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class=""></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0032370/?ref_=tt_cl_t2" itemprop="url"> <span class="itemprop" itemprop="name">Noel Appleby</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000163/?ref_=tt_cl_t2">Everard Proudfoot</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0000276/?ref_=tt_cl_i3"><img height="44" width="32" alt="Sean Astin" title="Sean Astin" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjczOTQ1NF5BMl5BanBnXkFtZTcwMzI2NzYyMQ@@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000276/?ref_=tt_cl_t3" itemprop="url"> <span class="itemprop" itemprop="name">Sean Astin</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0035497/?ref_=tt_cl_t3">Sam</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm1019674/?ref_=tt_cl_i4"><img height="44" width="32" alt="Sala Baker" title="Sala Baker" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3OTA2Mjk0NV5BMl5BanBnXkFtZTcwNjgxMjc4Nw@@._V1_UY44_CR17,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm1019674/?ref_=tt_cl_t4" itemprop="url"> <span class="itemprop" itemprop="name">Sala Baker</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000156/?ref_=tt_cl_t4">Sauron</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0000293/?ref_=tt_cl_i5"><img height="44" width="32" alt="Sean Bean" title="Sean Bean" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMzc4MDk5OF5BMl5BanBnXkFtZTcwODg3MjUxNw@@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000293/?ref_=tt_cl_t5" itemprop="url"> <span class="itemprop" itemprop="name">Sean Bean</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000140/?ref_=tt_cl_t5">Boromir</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0000949/?ref_=tt_cl_i6"><img height="44" width="32" alt="Cate Blanchett" title="Cate Blanchett" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BNDUyNDMxMzU1OF5BMl5BanBnXkFtZTgwMTY0MzQyMDI@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000949/?ref_=tt_cl_t6" itemprop="url"> <span class="itemprop" itemprop="name">Cate Blanchett</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000136/?ref_=tt_cl_t6">Galadriel</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0089217/?ref_=tt_cl_i7"><img height="44" width="32" alt="Orlando Bloom" title="Orlando Bloom" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDkxMjQ3NV5BMl5BanBnXkFtZTcwMzQ3Mjc4MQ@@._V1_UY44_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0089217/?ref_=tt_cl_t7" itemprop="url"> <span class="itemprop" itemprop="name">Orlando Bloom</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000137/?ref_=tt_cl_t7">Legolas</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0101710/?ref_=tt_cl_i8"><img height="44" width="32" alt="Billy Boyd" title="Billy Boyd" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzOTEyMTQ3OF5BMl5BanBnXkFtZTYwNzkzMDk1._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0101710/?ref_=tt_cl_t8" itemprop="url"> <span class="itemprop" itemprop="name">Billy Boyd</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000154/?ref_=tt_cl_t8">Pippin</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0190744/?ref_=tt_cl_i9"><img height="44" width="32" alt="Marton Csokas" title="Marton Csokas" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxOTcyNDEyMV5BMl5BanBnXkFtZTgwMjMzMzYyNTE@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0190744/?ref_=tt_cl_t9" itemprop="url"> <span class="itemprop" itemprop="name">Marton Csokas</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0028839/?ref_=tt_cl_t9">Celeborn</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm1104283/?ref_=tt_cl_i10"><img height="44" width="32" alt="Megan Edwards" title="Megan Edwards" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class=""></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm1104283/?ref_=tt_cl_t10" itemprop="url"> <span class="itemprop" itemprop="name">Megan Edwards</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0502128/?ref_=tt_cl_t10">Mrs. Proudfoot</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm1096480/?ref_=tt_cl_i11"><img height="44" width="32" alt="Michael Elsworth" title="Michael Elsworth" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class=""></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm1096480/?ref_=tt_cl_t11" itemprop="url"> <span class="itemprop" itemprop="name">Michael Elsworth</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0185921/?ref_=tt_cl_t11">Gondorian Archivist</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0272527/?ref_=tt_cl_i12"><img height="44" width="32" alt="Mark Ferguson" title="Mark Ferguson" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2NzM1MTcxN15BMl5BanBnXkFtZTcwOTg4MDkwOA@@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0272527/?ref_=tt_cl_t12" itemprop="url"> <span class="itemprop" itemprop="name">Mark Ferguson</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0031817/?ref_=tt_cl_t12">Gil-galad</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0000453/?ref_=tt_cl_i13"><img height="44" width="32" alt="Ian Holm" title="Ian Holm" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0ODA2MjM2NF5BMl5BanBnXkFtZTYwNDg5NDIz._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000453/?ref_=tt_cl_t13" itemprop="url"> <span class="itemprop" itemprop="name">Ian Holm</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000153/?ref_=tt_cl_t13">Bilbo</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="even">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0000489/?ref_=tt_cl_i14"><img height="44" width="32" alt="Christopher Lee" title="Christopher Lee" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMjU5NDA0NV5BMl5BanBnXkFtZTYwMTUwMzI0._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0000489/?ref_=tt_cl_t14" itemprop="url"> <span class="itemprop" itemprop="name">Christopher Lee</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000149/?ref_=tt_cl_t14">Saruman</a> 
                  
              </div>
          </td>
      </tr>
      <tr class="odd">
          <td class="primary_photo">
<a href="http://www.imdb.com/name/nm0538692/?ref_=tt_cl_i15"><img height="44" width="32" alt="Lawrence Makoare" title="Lawrence Makoare" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/name-2138558783._CB514891992_.png" class="loadlate" loadlate="https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MzQ5MjA2NF5BMl5BanBnXkFtZTcwNjI5NTIxOA@@._V1_UX32_CR0,0,32,44_AL_.jpg"></a>          </td>
          <td class="itemprop" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
<a href="http://www.imdb.com/name/nm0538692/?ref_=tt_cl_t15" itemprop="url"> <span class="itemprop" itemprop="name">Lawrence Makoare</span>
</a>          </td>
          <td class="ellipsis">
              ...
          </td>
          <td class="character">
              <div>
            <a href="http://www.imdb.com/character/ch0000159/?ref_=tt_cl_t15">Lurtz</a> 
                  
              </div>
          </td>
      </tr>
        </tbody></table>
        <div class="see-more">
            <a href="http://www.imdb.com/title/tt0120737/fullcredits?ref_=tt_cl_sm#cast">See full cast</a>&nbsp;»
        </div>
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleCastWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleCastWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleCastWidget", {wb: 1});
    }
</script>



    
    
    

	
	<!-- no content received for slot: maindetails_center_ad -->
	


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleStorylineWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleStorylineWidget_started');
    }
  </script>
    <div class="article" id="titleStoryLine">
    <span class="rightcornerlink">
            <a href="http://www.imdb.com/register/login?why=edit&amp;ref_=tt_stry" rel="login">Edit</a>
    </span>
    
        <h2>Storyline</h2>
        
        <div class="inline canwrap" itemprop="description">
            <p>
An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!                <em class="nobr">Written by
<a href="http://www.imdb.com/search/title?plot_author=Paul%20Twomey%20%3Ctoomsp%40hotmail.com%3E&amp;view=simple&amp;sort=alpha&amp;ref_=tt_stry_pl">Paul Twomey &lt;toomsp@hotmail.com&gt;</a></em>            </p>
        </div>
        
        <span class="see-more inline"> 
                <a href="http://www.imdb.com/title/tt0120737/plotsummary?ref_=tt_stry_pl">Plot Summary</a>
    <span>|</span>
        <a href="http://www.imdb.com/title/tt0120737/synopsis?ref_=tt_stry_pl">Plot Synopsis</a>
    </span>
        <hr>
        <div class="see-more inline canwrap" itemprop="keywords">
            <h4 class="inline">Plot Keywords:</h4>
<a href="http://www.imdb.com/keyword/ring?ref_=tt_stry_kw"> <span class="itemprop" itemprop="keywords">ring</span></a>
                        <span>|</span>
<a href="http://www.imdb.com/keyword/quest?ref_=tt_stry_kw"> <span class="itemprop" itemprop="keywords">quest</span></a>
                        <span>|</span>
<a href="http://www.imdb.com/keyword/hobbit?ref_=tt_stry_kw"> <span class="itemprop" itemprop="keywords">hobbit</span></a>
                        <span>|</span>
<a href="http://www.imdb.com/keyword/elf?ref_=tt_stry_kw"> <span class="itemprop" itemprop="keywords">elf</span></a>
                        <span>|</span>
<a href="http://www.imdb.com/keyword/orc?ref_=tt_stry_kw"> <span class="itemprop" itemprop="keywords">orc</span></a>
            <span>|</span>&nbsp;<nobr><a href="http://www.imdb.com/title/tt0120737/keywords?ref_=tt_stry_kw">See All (186)</a>&nbsp;»</nobr>

        </div>      
        <hr>
        <div class="txt-block">
            <h4 class="inline">Taglines:</h4>
Even the smallest person can change the course of the future.                <span class="see-more inline">
<a href="http://www.imdb.com/title/tt0120737/taglines?ref_=tt_stry_tg"> See more</a>&nbsp;»
                </span>
        </div>
        <hr>
        <div class="see-more inline canwrap" itemprop="genre">
            <h4 class="inline">Genres:</h4>
<a href="http://www.imdb.com/genre/Adventure?ref_=tt_stry_gnr"> Adventure</a>&nbsp;<span>|</span>
<a href="http://www.imdb.com/genre/Drama?ref_=tt_stry_gnr"> Drama</a>&nbsp;<span>|</span>
<a href="http://www.imdb.com/genre/Fantasy?ref_=tt_stry_gnr"> Fantasy</a>
        </div>      
        
             <hr>
    
    <div class="txt-block">
            <h4 class="inline">Certificate:</h4>
            <span itemprop="contentRating">12</span>
<span class="ghost">|</span>            <span class="see-more inline">
<a href="http://www.imdb.com/title/tt0120737/parentalguide?ref_=tt_stry_pg#certification"> See all certifications</a>&nbsp;»
            </span>
    </div>
    <div class="txt-block">
        <h4 class="inline">Parents Guide:</h4>
        <span class="see-more inline" itemprop="audience" itemscope="" itemtype="http://schema.org/Audience">
<a href="http://www.imdb.com/title/tt0120737/parentalguide?ref_=tt_stry_pg" itemprop="url"> View content advisory</a>&nbsp;»
        </span>
    </div>
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleStorylineWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleStorylineWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleStorylineWidget", {wb: 1});
    }
</script>


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleDetailsWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleDetailsWidget_started');
    }
  </script>
    
    <div class="article" id="titleDetails">
    <span class="rightcornerlink">
            <a href="http://www.imdb.com/register/login?why=edit&amp;ref_=tt_dt_dt" rel="login">Edit</a>
    </span>
        <h2>Details</h2>
      <div class="txt-block">
      <h4 class="inline">Official Sites:</h4>
    <a href="http://www.imdb.com/offsite/?page-action=offsite-leseigneurdesanneaux&amp;token=BCYteogiQQxqw07CtfyFI1C6QUdcZmiXV9jsbzGdhpyxqsezWx1O-hBk8VCSaI6nUoiHnLP8Tf3r%0D%0Ae4b-kpe_gfttlu9JriWifYGe8mHaZiic5CAow3pEDhYP-g_fVoFlh3MWrzEoi_huJegI_DUu4yFd%0D%0A7-QaAd7C88KcyZ3Ps1G-kdH5dupzVJ1PdvO4rhOEfsXJqPMrTrUSOPosTvDWhdDCLFF_EbbbJdM0%0D%0A2qX148fxm-I%0D%0A&amp;ref_=tt_pdt_ofs_offsite_0" rel="nofollow" itemprop="url">Allocine (French)</a>
          <span class="ghost">|</span>
        
    <a href="http://www.imdb.com/offsite/?page-action=offsite-aurum&amp;token=BCYr-SmnsDryNLDLiDU4APr2PGc6xKHRQiCa41DRvfJ6ffhnHRmYaTSu8D0FWKJ-4p8_VIs-JEJX%0D%0AkUn4Wz8uhcddHcsBZP4epQC3yv5k-h4KH4PBS9XeOGQkhlai8PH3p1KGQ5Oor4a13NyY6ZtXPXRL%0D%0AbndVsLIa1AikI0dpHDvpMnsf6GvwlhA9pORkm5MD8Urt9Bs1BTEeRtQ_RyLLE420ijtVK9LQ-fWw%0D%0AQEFOALArdEc%0D%0A&amp;ref_=tt_pdt_ofs_offsite_1" rel="nofollow" itemprop="url">Aurum [Spain]</a>
          <span class="ghost">|</span>
               <span class="see-more inline">
          <a href="http://www.imdb.com/title/tt0120737/externalsites?ref_=tt_dt_dt#official" itemprop="url">See more</a>&nbsp;»
      </span>
      </div>
  
    <div class="txt-block">
    <h4 class="inline">Country:</h4>
        <a href="http://www.imdb.com/search/title?country_of_origin=nz&amp;ref_=tt_dt_dt" itemprop="url">New Zealand</a>
              <span class="ghost">|</span>
        <a href="http://www.imdb.com/search/title?country_of_origin=us&amp;ref_=tt_dt_dt" itemprop="url">USA</a>
    </div>
  
    <div class="txt-block">
    <h4 class="inline">Language:</h4>
        <a href="http://www.imdb.com/search/title?title_type=feature&amp;primary_language=en&amp;sort=moviemeter,asc&amp;ref_=tt_dt_dt" itemprop="url">English</a>
            <span class="ghost">|</span>
        <a href="http://www.imdb.com/search/title?title_type=feature&amp;primary_language=sjn&amp;sort=moviemeter,asc&amp;ref_=tt_dt_dt" itemprop="url">Sindarin</a>
    </div>
  
    
    <div class="txt-block">
    <h4 class="inline">Release Date:</h4> 1 January 2002 (Brazil)
    <span class="see-more inline">
      <a href="http://www.imdb.com/title/tt0120737/releaseinfo?ref_=tt_dt_dt" itemprop="url">See more</a>&nbsp;»
    </span>
    </div>
  
      <div class="txt-block">
      <h4 class="inline">Also Known As:</h4> O Senhor dos Anéis: A Sociedade do Anel
      <span class="see-more inline">
        <a href="http://www.imdb.com/title/tt0120737/releaseinfo?ref_=tt_dt_dt#akas" itemprop="url">See more</a>&nbsp;»
      </span>
      </div>
  
    <div class="txt-block">
    <h4 class="inline">Filming Locations:</h4> 
    <a href="http://www.imdb.com/search/title?locations=Fort%20Dorset,%20Miramar,%20Wellington,%20New%20Zealand&amp;ref_=tt_dt_dt" itemprop="url">Fort Dorset, Miramar, Wellington, New Zealand</a>
      <span class="see-more inline">
        <a href="http://www.imdb.com/title/tt0120737/locations?ref_=tt_dt_dt" itemprop="url">See more</a>&nbsp;»
      </span>
    </div>
  
    <hr> 
    <h3 class="subheading">Box Office</h3>
  
      <div class="txt-block">
      <h4 class="inline">Budget:</h4>        $93.000.000        

      <span class="attribute">(estimated)</span>
      </div>
  
    <div class="txt-block">
    <h4 class="inline">Opening Weekend:</h4>         $844.711        

      (Belgium)
      <span class="attribute">(21 December 2001)</span>
    </div>
  
    <div class="txt-block">
    <h4 class="inline">Gross:</h4>        $315.544.750        

      <span class="attribute">(USA)</span>
      <span class="attribute">(14 June 2011)</span>
    </div>
  
  <span class="see-more inline">
    <a href="http://www.imdb.com/title/tt0120737/business?ref_=tt_dt_bus" itemprop="url">See more</a>&nbsp;»
  </span>  
  <hr> 
  <h3 class="subheading">Company Credits</h3>
    <div class="txt-block">
    <h4 class="inline">Production Co:</h4>
        <span itemprop="creator" itemscope="" itemtype="http://schema.org/Organization">
<a href="http://www.imdb.com/company/co0046718?ref_=tt_dt_co" itemprop="url"><span class="itemprop" itemprop="name">New Line Cinema</span></a></span>,        <span itemprop="creator" itemscope="" itemtype="http://schema.org/Organization">
<a href="http://www.imdb.com/company/co0046203?ref_=tt_dt_co" itemprop="url"><span class="itemprop" itemprop="name">WingNut Films</span></a></span>,        <span itemprop="creator" itemscope="" itemtype="http://schema.org/Organization">
<a href="http://www.imdb.com/company/co0061706?ref_=tt_dt_co" itemprop="url"><span class="itemprop" itemprop="name">The Saul Zaentz Company</span></a></span>      <span class="see-more inline">
        <a href="http://www.imdb.com/title/tt0120737/companycredits?ref_=tt_dt_co" itemprop="url">See more</a>&nbsp;»
      </span>
    </div>
  <div class="txt-block"> 
  Show detailed
<a href="http://pro.imdb.com/title/tt0120737/companycredits?rf=cons_tt_cocred_tt&amp;ref_=cons_tt_cocred_tt" itemprop="url">company contact information</a>
  on 
  <a href="http://pro.imdb.com/signup/index.html?rf=cons_tt_cocred_spl&amp;ref_=cons_tt_cocred_spl" itemprop="url">IMDbPro</a>&nbsp;»
  </div>
  

  <hr>
  <h3 class="subheading">Technical Specs</h3>
  
    <div class="txt-block">
      <h4 class="inline">Runtime:</h4> 
        <time itemprop="duration" datetime="PT178M">178 min</time>
          <span class="ghost">|</span>
        <time itemprop="duration" datetime="PT208M">208 min</time>
            (Special DVD Extended Edition)
          <span class="ghost">|</span>
        <time itemprop="duration" datetime="PT228M">228 min</time>
            (Blu Ray Extended Edition)
          <span class="ghost">|</span>
        <time itemprop="duration" datetime="PT171M">171 min</time>
            (DVD Widescreen Edition)
    </div>
  
    <div class="txt-block">
    <h4 class="inline">Sound Mix:</h4>
        <a href="http://www.imdb.com/search/title?sound_mixes=dts_es&amp;ref_=tt_dt_spec" itemprop="url">DTS-ES</a>
<span class="ghost">|</span>        <a href="http://www.imdb.com/search/title?sound_mixes=dolby_digital_ex&amp;ref_=tt_dt_spec" itemprop="url">Dolby Digital EX</a>
<span class="ghost">|</span>        <a href="http://www.imdb.com/search/title?sound_mixes=sdds&amp;ref_=tt_dt_spec" itemprop="url">SDDS</a>
    </div>
  
    <div class="txt-block">
    <h4 class="inline">Color:</h4>
        <a href="http://www.imdb.com/search/title?colors=color&amp;ref_=tt_dt_spec" itemprop="url">Color</a>
    </div>
  
    <div class="txt-block">
    <h4 class="inline">Aspect Ratio:</h4> 2.35 : 1
    </div>
  
  See <a href="http://www.imdb.com/title/tt0120737/technical?ref_=tt_dt_spec" itemprop="url">full technical specs</a>&nbsp;»
    </div>

  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleDetailsWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleDetailsWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleDetailsWidget", {wb: 1});
    }
</script>


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleDidYouKnowWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleDidYouKnowWidget_started');
    }
  </script>
    <div id="titleDidYouKnow" class="article">
    <span class="rightcornerlink">
            <a href="http://www.imdb.com/register/login?why=edit&amp;ref_=tt_trv_trv" rel="login">Edit</a>
    </span>
        <h2>Did You Know?</h2>
    <div id="trivia" class="txt-block">
        <h4>Trivia</h4>
<a href="http://www.imdb.com/name/nm0032434?ref_=tt_trv_trv">Matt Appleton</a>: One of the Elves at the Council of Elrond.        <a href="http://www.imdb.com/title/tt0120737/trivia?ref_=tt_trv_trv" class="nobr">See more</a>  »
    </div>
                <hr>
     <div id="goofs" class="txt-block">
        <h4>Goofs</h4>
Throughout the movie, Frodo's fingernails are very bitten down and short, but a close-up when the Black Rider tries to sniff him out shows neatly manicured nails.        <a href="http://www.imdb.com/title/tt0120737/trivia?tab=gf&amp;ref_=tt_trv_gf" class="nobr">See more</a>  »
    </div>   
                <hr>
    <div id="quotes" class="text-block">
        <h4>Quotes</h4>
[<span class="fine">first lines</span>]
<br><a href="http://www.imdb.com/name/nm0000949/?ref_=tt_trv_qu"><span class="character">Galadriel</span></a>:
The world is changed. I feel it in the water. I feel it in the earth. I smell it in the air. Much that once was is lost, for none now live who remember it. It began with the forging of the Great Rings. Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of Men, who, above all else, desire power. But they were, all of them, deceived, for ...
<br>                
        <a href="http://www.imdb.com/title/tt0120737/trivia?tab=qt&amp;ref_=tt_trv_qu" class="nobr">See more</a> »
    </div>
                <hr>
     <div id="crazyCredits" class="txt-block">
        <h4>Crazy Credits</h4>
Toward the end of the credits, there are some lines in Maori, thanking the people of New Zealand, where the movie was filmed.:  He mihi nui hoki ki nga tangata whenua o Aotearoa.  Ma rangi raua ko papa  tatou e manaaki, e tiaki hei nga tau e tu mai nei.        <a href="http://www.imdb.com/title/tt0120737/trivia?tab=cz&amp;ref_=tt_trv_cc" class="nobr">See more</a>  »
    </div>   
                <hr>
    <div id="connections" class="text-block">
        <h4>Connections</h4>
        Referenced in <a href="http://www.imdb.com/title/tt0473300?ref_=tt_trv_cnn">FIFA Soccer 06</a>&nbsp;(2005)


        <a href="http://www.imdb.com/title/tt0120737/trivia?tab=mc&amp;ref_=tt_trv_cnn" class="nobr">See more</a> »
    </div>
                <hr>
    <div id="soundtracks" class="text-block">
        <h4>Soundtracks</h4>
Aníron <br>
Composed and Performed by <a href="http://www.imdb.com/name/nm0258216/">Enya</a> <br>        <a href="http://www.imdb.com/title/tt0120737/soundtrack?ref_=tt_trv_snd" class="nobr">See more</a> »
    </div>
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleDidYouKnowWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleDidYouKnowWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleDidYouKnowWidget", {wb: 1});
    }
</script>


    
    
    


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleFAQWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleFAQWidget_started');
    }
  </script>
    
    <div class="article" id="titleFAQ">
        <h2>Frequently Asked Questions</h2>
        
            <div class="faq">
                    <div class="odd">
                    <b>Q:</b>
<a href="http://www.imdb.com/title/tt0120737/faq?ref_=tt_faq_1#.2.1.24"> Why did Sméagol transform into the disgusting-looking Gollum? I thought Ring-bearers did not age.</a>
                    </div>
                    <div class="even">
                    <b>Q:</b>
<a href="http://www.imdb.com/title/tt0120737/faq?ref_=tt_faq_2#.2.1.10"> Are hobbits human?</a>
                    </div>
                    <div class="odd">
                    <b>Q:</b>
<a href="http://www.imdb.com/title/tt0120737/faq?ref_=tt_faq_3#.2.1.5"> Who is speaking in the prologue to the film?</a>
                    </div>
            </div>
        
            <span class="see-more inline">        
                <a href="http://www.imdb.com/title/tt0120737/faq?ref_=tt_faq_sm" class="nobr">See more</a>
                <span class="spoilers">(Spoiler Alert!)</span></span>&nbsp;»
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleFAQWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleFAQWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleFAQWidget", {wb: 1});
    }
</script>


    
    
    

<script>
    if (typeof uet == 'function') {
      uet("bb", "TitleUserReviewsWidget", {wb: 1});
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleUserReviewsWidget_started');
    }
  </script>
    <div class="article" id="titleUserReviewsTeaser">
        <h2>User Reviews</h2>
        <div class="user-comments">
                    <div class="tinystarbar" title="9/10">
                        <div style="width: 90px;">&nbsp;</div>
                    </div>
                <span itemprop="review" itemscope="" itemtype="http://schema.org/Review">  
                    <strong itemprop="name">A Glorious Vision of Middle Earth</strong>
                    <span itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
                        <meta itemprop="worstRating" content="1">
                        <meta itemprop="ratingValue" content="9">
                        <meta itemprop="bestRating" content="10">
                    </span>
                    <div class="comment-meta">
                        11 April 2004 | by <a href="http://www.imdb.com/user/ur3074289/?ref_=tt_urv"><span itemprop="author">David D Lowery</span></a>
                        <meta itemprop="datePublished" content="2004-04-11">
                              (Chicago)
                        – <a href="http://www.imdb.com/user/ur3074289/comments?ref_=tt_urv">See all my reviews</a>
                    </div>
                    <div>
                        <p itemprop="reviewBody"> The reason why this first part of Jackson's 'Lord of the Rings' is superior to his latter two parts is because of restraint. Jackson was restrained from over doing it with the CGI and "epic" battle sequences, which in my opinion does not make a story epic. Part of the reason was simply because Tolkien did not have very many battles in the first part of his book, which thankfully forced Jackson to focus on creating a believable world rather than a believable hack-n-slash action movie.<br><br>I don't find much entertainment in watching people mutilate each other, but I love it when a movie engages me in a world, and 'The Fellowship of the Ring' does just that. Certainly the most breathtaking scenes in the movie are the moments of patient observation, when the camera pans around and captures the beautiful settings of Middle Earth. I must give Jackson credit. He did hire some very extraordinary artists that have envisioned one of the grandest interpretations of Tolkien's world.<br><br>There are about five particular moments that stick out in my mind and gave me that tingle of goosebumps down my spine when I saw them for the first time. The first is the introduction to Hobbiton. After the somewhat awkward prologue, I was beginning to have my doubts to whether the movie would live up to the book. But the movie surprised me. Hobbiton is perfect. The houses have flower patches and old fences, the roads look worn and made through decades of travel, and the Old Mill spins with the laziness of a quiet town. Every color is vibrant and every moment looks as through it was taken out of a picture book. Although I still don't agree with the particular look of the Hobbits, I believe everything else in Hobbiton is worthy of Tolkien's words.<br><br>The second moment comes after Frodo's awakening in Rivendell, and the third, during the exploration of the Halls of Moria. In both moments, the camera pans away from the characters and outward into a static shot of their surroundings. The moments make us feel like we're turning our heads and gazing at the world around us just as the characters do. The golden waterfalls of the elven city mark an interesting contrast with the dark halls of the dwarfish mines, but each are inspiring in their own ways and add to feeling of being engaged in a living world.<br><br>My other favorite moments come during the exploration of Lothlorien and the passage down the Anduin. And while I won't go into detail about the scenes, since they really should be experienced without any prior expectations, they are monuments in imaginative cinema. 'The Fellowship of the Ring' is one of those rare movies that I always wish I could reexperience for the first time. Unfortunately, Jackson turned away from exploring Middle Earth in his next two movies, and instead, turned to fighting and warfare. He seems to take a lot of pride in the love story and battle sequences he created in 'The Two Towers' and 'The Return of the King,' but it is was in his first movie when he really got it right. In 'The Fellowship of the Ring,' it's okay if the characters are uninteresting and have silly dialogue. Middle Earth is the star, and the characters are the ones seeing it for the first time.</p>
                    </div>
                </span>
                <hr>
                <div class="yn" id="ynd_462003">
                    168 of 240 people found this review helpful.&nbsp;
                    Was this review helpful to you?
                    <button class="btn small" value="Yes" name="ynb_462003_yes" onclick="CS.TMD.user_review_vote(462003, &#39;tt0120737&#39;, &#39;yes&#39;);">Yes</button>
                    <button class="btn small" value="No" name="ynb_462003_no" onclick="CS.TMD.user_review_vote(462003, &#39;tt0120737&#39;, &#39;no&#39;);">No</button>
                </div>
            <div class="see-more">
                
                <a href="http://www.imdb.com/title/tt0120737/reviews-enter?ref_=tt_urv" rel="login">Review this title</a>
                <span>|</span>
                    <a href="http://www.imdb.com/title/tt0120737/reviews?ref_=tt_urv">See all 5.111 user reviews</a>&nbsp;»
            </div>
        </div>
    </div>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleUserReviewsWidget_finished');
    }
  </script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleUserReviewsWidget_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "TitleUserReviewsWidget", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "TitleUserReviewsWidget", {wb: 1});
    }
</script>


    
    
    


    
    
    

  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleContributeWidget_started');
    }
  </script>
    <div class="article contribute">
        <div class="rightcornerlink">
<a href="http://www.imdb.com/help/?adding/&amp;ref_=tt_cn_hlp">Getting Started</a>
            <span>|</span>
<a href="http://www.imdb.com/czone/?ref_=tt_cn_cz">Contributor Zone</a>&nbsp;»</div>
        <h2>Contribute to This Page</h2>

                <div class="button-box">
                    <form method="get" action="https://contribute.imdb.com/updates">
                        <input type="hidden" name="ref_" value="tt_cn_edt">
                        <input type="hidden" name="edit" value="legacy/title/tt0120737/">
                            <button class="btn primary large" rel="login" type="submit">Edit page</button>
                    </form>
                </div>
        

    

        <div class="button-box">
<a href="http://www.imdb.com/title/tt0120737/reviews-enter?ref_=tt_cn_urv" class="btn large" rel="login">Write review</a>          
        </div>
    
    
        <div class="form-box">
            <form method="post" action="http://www.imdb.com/character/create?ref_=tt_cn_ch" accept-charset="ISO-8859-1">
                <input type="hidden" value="tt0120737" name="title">
                <div class="form-txt">Create a character page for:</div>
                <select id="character_select" name="name" data-tconst="tt0120737">
                        <option value="Voice of the Ring">Voice of the Ring</option>
                     <option disabled="disabled">-----------</option>
                     <option value="...">more...</option>
                </select>
                <button class="btn small">Create »</button>
                <a href="http://www.imdb.com/help/show_leaf?createchar&amp;ref_=tt_cn_chhlp" class="btn small">?</a>
            </form>
        </div>
    </div>

  <script>
    if ('csm' in window) {
      csm.measure('csm_TitleContributeWidget_finished');
    }
  </script>


    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    </div>
    <br class="clear">
</div> 


    
    
    

    
    
    

                   <br class="clear">
                </div>






    <div id="footer" class="ft">

            <div id="rvi-div">
                <div class="recently-viewed">
                  <div class="header">
                    <div class="rhs">
                        <a id="clear_rvi" href="http://www.imdb.com/title/tt0120737/?ref_=rvi_tt#">Clear your history</a>
                    </div>
                    <h3>Recently Viewed</h3>
                    <br clear="all">
                  </div>
                    <div class="items">&nbsp;</div>
                </div>
                <br class="clear">
            </div>

	
	
<!-- begin BOTTOM_AD -->
<div id="bottom_ad_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('bottom_ad');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside="" frameborder="0" id="bottom_ad" marginwidth="0" marginheight="0" name="bottom_ad" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="728" data-original-height="90" width="728" height="90" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/saved_resource(7).html"></iframe> </div>
<div id="bottom_ad_reflow_helper"></div>
<script id="bottom_ad_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('bottom_ad');
} else {
ad_utils.gpt.render_ad('bottom_ad');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End BOTTOM_AD -->
	

        <div class="container footer-grid-wrapper">
            <div class="row footer-row">
                <div class="col outside">
    <h3>IMDb Everywhere</h3>
    <div class="app-links">
    <a href="http://www.imdb.com/offsite/?page-action=ft_app_apple&amp;token=BCYnDvcYku38AYsn9AdS2hmq0Ah_ry3wf60ROhwt8MhxWpM6-7A7S1gkiBl5Z_5M8D6HcSbmWm4V%0D%0AP92qgJAVWi28sHvg7UxEzvYDcEP8BTZuW_cRKKe8UMqvj8-sTup98h4stLpqxRBeM2Uw5mFXpQwM%0D%0AObtL6QetD2LHD56sx7n3voQOSqsyw1QYgp5EtDV_FmDX2bxUuoiZPLWO-JiRYz_yHGwgAQhsTYTY%0D%0AlY_oKY9WTYs%0D%0A&amp;ref_=ft_app_apple" title="Get the IMDb App on the Apple App Store" target="_blank" itemprop="url"> <span class="desktop-sprite appstore-apple"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=ft_app_google&amp;token=BCYl5IaICwz5Xp5BE3kG-Zw7AH4tM7YBWzuOajiI3A8--VyQoa5gWp1-BwIjWUjSIXp7ZDxRnH3Z%0D%0AT5n7ZSiu2R8WtxTO-2-FTjFbTxfkOFgpqN6rBeaJ_Ro7QipFkjPhz9To1XGGC6Tl7y5g4AHzCznF%0D%0AcWJEdHzLfu7HcQ_15vi_pmBlVLaIqmzeJtSlNicf-uXrD7Je8Y-6WHJTRJ-to_R7c7moSiDXHRET%0D%0Aq9ipqGysEek%0D%0A&amp;ref_=ft_app_google" title="Get the IMDb app on Google Play" target="_blank" itemprop="url"> <span class="desktop-sprite appstore-google"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=ft_app_amazon&amp;token=BCYpm2HEKzCB-Hgv7lwjvOxEkSlyJOMrzHBFPpfa3Oh0FgnDiYIDSirWnBMVxyz86KNp5OKjc2hx%0D%0AL2XIjoi5DPg4i8pNQAAY79_OvaEqpJ5-co_TmK-baNxeqUlt8cINWUppHq1HicD4seOhRs-7nY9p%0D%0AvZf8mLqpAt7zPI47rHpbHRGY9PKJ0C54BPLXwsMqF55jYEdmRfVtepNjUb4mS4pVNBF6WGem6p-X%0D%0A7zd-XULtHM0DCJd1VVnicp92WmkS-pwB5tLliNeJaemsjPE3yTZiWAUgdvcpiUVhn1TbAe_Wh4N4%0D%0AK4U9aT_F7UiMNK0Em0DQF0hj20eoDOFHnI9zDkOAWnKT6LbufKziBliM414dhPwq0BsYIu0SMZuR%0D%0ACHqIIgQEN7gFsmHfRF4eOHhdIK-fl4OKI4gL5j35jAtkWtxAXsU%0D%0A&amp;ref_=ft_app_amazon" title="Get the IMDb app on Amazon Appstore for Android" target="_blank" itemprop="url"> <span class="desktop-sprite appstore-amazon"></span>
</a>
    </div>

    <p>Find showtimes, watch trailers, browse photos, track your Watchlist and rate your favorite movies and TV shows on your phone or tablet!</p>

    <a href="http://m.imdb.com/?ref_=ft_mdot" class="touchlink">IMDb Mobile site</a>
                </div>
                <div class="col center">
  <div class="link-bar icon-link-bar">
    <h3>
      Follow IMDb on
      <div>

    <a href="http://www.imdb.com/offsite/?page-action=fol_fb&amp;token=BCYmJtIz0fwgt3EnVKGVd-IQYOIhgFnjRyKEl3Bpu_pr74ggNTUf9PTvX36y8L2diPUDQwyMm4Uu%0D%0AkxqcvESMTRV_ykjG8e8gFjSp8DJ3XR_dT3rnlrwY86LyfcyKaxntIl_fUYh-WOQTmhVO4XdrudAV%0D%0AO10DblPYV8GHBFkQ_r-8yQ7fEO3dRc48gCsPh4jSPB5DZk9_pTAPun_EpxzMz4e1Aw%0D%0A&amp;ref_=tt_ft_fol_fb" title="Follow IMDb on Facebook" target="_blank" itemprop="url"> <span class="desktop-sprite follow-facebook"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=fol_tw&amp;token=BCYnj9LpHExn08dtZl0FkV4xJ5oslhpZwOT3Sz9lPp9S_Re-FRiKx28YgYntBsaVHfmTQ6UP6SV0%0D%0AJ63r0Me1ZxDmZP2IMGJRxJF3ngwgO_FkG-r1elomHA0lIqj3lMIyRZ7LnllOnOJA1n3-IjkVgVfH%0D%0A3Y082_pVAfcnoMDz5YVuXPAlxyNVekPkCE7Cdugb9fxK0yin0uwHb_m1-YxljZi6eg%0D%0A&amp;ref_=tt_ft_fol_tw" title="Follow IMDb on Twitter" target="_blank" itemprop="url"> <span class="desktop-sprite follow-twitter"></span>
</a>
    <a href="http://www.imdb.com/offsite/?page-action=fol_inst&amp;token=BCYngRuATSISvz0aEAZMwlBkP5XdUqwdrjx41pef_aMm4KXQVKTrpv62hQ2jgGunkD2T0Wbvssoy%0D%0Augx7QH5ly3Ry56APWocqgYGjeqtkZ1BAvXduYkgmcXwfWhKATSI-B3VJKESPaApwnxptXMSQ5jll%0D%0AdBNFUr9sHaDfkC784AAoFGkjvD43oum7BpfUPoXTgx_L6eiZ_Owfdk47_a6YAyyPUw%0D%0A&amp;ref_=tt_ft_fol_inst" title="Follow IMDb on Instagram" target="_blank" itemprop="url"> <span class="desktop-sprite follow-instagram"></span>
</a>
      </div>
    </h3>
  </div>
                </div>
                <div class="col outside">
    <div class="row">
        <div class="col col-4">
            <ul class="unstyled">
                <li><a href="http://www.imdb.com/?ref_=ft_hm">Home</a></li>
                <li><a href="http://www.imdb.com/chart/top?ref_=ft_250">Top Rated Movies</a></li>
                <li><a href="http://www.imdb.com/chart/?ref_=ft_cht">Box Office</a></li>
                <li><a href="http://www.imdb.com/sections/tv/?ref_=ft_tv">TV</a></li>
                <li><a href="http://www.imdb.com/movies-coming-soon/?ref_=ft_cs">Coming Soon</a></li>
                <li><a href="http://www.imdb.com/a2z?ref_=ft_si">Site Index</a></li>
                <li><a href="http://www.imdb.com/search?ref_=ft_sr">Search</a></li>
                <li><a href="http://www.imdb.com/movies-in-theaters/?ref_=ft_inth">In Theaters</a></li>
            </ul>
        </div>
        <div class="col col-4">
            <ul class="unstyled">
                <li><a href="http://www.imdb.com/helpdesk/contact?ref_=ft_con">Contact Us</a></li>
                <li>        <a href="https://secure.imdb.com/register-imdb/form-v2?ref_=ft_reg">Register</a>
</li>
                <li><a href="http://www.imdb.com/news/?ref_=ft_nw">News</a></li>
                <li class="spacer"></li>
                <li><a href="http://www.imdb.com/pressroom/?ref_=ft_pr">Press Room</a></li>
                <li><a href="http://www.imdb.com/advertising/?ref_=ft_ad">Advertising</a></li>
                <li><a href="http://www.imdb.com/jobs?ref_=ft_jb">Jobs</a></li>
            </ul>
        </div>
        <div class="col col-4">
            <ul class="unstyled">
                <li><a href="http://pro.imdb.com/signup/index.html?rf=cons_ft_hm&amp;ref_=cons_ft_hm">IMDbPro</a></li>
                <li>    <a href="http://www.imdb.com/offsite/?page-action=ft-mojo&amp;token=BCYtigPFIX3vg9TX4ixfD4HCNTv_6pS_paGAGrIceMMRNlFTDuzlBB9LvT0v8n9Scw1qRbUaOe2d%0D%0Au3lxZDwF87kB0b7MasgYKPiDYbfg2-loEE7UMNMdw7RX11ww8IaevwM2vlw6rbncz5CEJPw5apb9%0D%0AbprW6YBF_7wH5duvHzJS_tNEg26Z5OddUL_PlRwt9-eszN4DccnydW92MgNRdWSTog%0D%0A&amp;ref_=ft_bom" itemprop="url">Box Office Mojo</a>
</li>
                <li>    <a href="http://www.imdb.com/offsite/?page-action=ft-wab&amp;token=BCYlIDiz56akx_4FSJ3-S4XLwK11cw-JwAT-eMjpmhQBBvUudWYlqXOI8ur8r1Yj1iW0o4PtMQBN%0D%0AcaZqFlJTXHlPsQy6OUpyAcPwAaVy7FYLL1GzvKHIHKKfjR-Rw4q9d3BJN_VfNbs3Cdp-iGG7r7Il%0D%0A-9g_IsF5OZqBd0IYy_Q6hwg5PKXsoALmBN7VGgBWfCD9EogcYBNhI4Gw4hzAaeY8Iw%0D%0A&amp;ref_=ft_wab" itemprop="url">Withoutabox</a>
</li>
                <li class="spacer"></li>
                <li><a href="http://www.imdb.com/help/show_article?conditions&amp;ref_=ft_cou">Conditions of Use</a></li>
                <li><a href="http://www.imdb.com/privacy?ref_=ft_pvc">Privacy Policy</a></li>
                <li>    <a href="http://www.imdb.com/offsite/?page-action=ft-iba&amp;token=BCYuOEDyLEd9j_9abs55qyZSJ_kPQselfq110Jk4NNEeZY1QrXqltLL2iT0FTlDNNfMvO4PliSKl%0D%0A9PQ0_sXP1DBfctZo4dVMbOI7RibmXdbPVt7Z5m3qR9Gk7SfayaW9_gbMmGgq8At_IYmlXZfEzJo6%0D%0ANTfgHAXrlIQJMexNz20PvRIKkg5qO50N7XYrkZxRKRF_xb3pPjj0uWOvQ5ZOHbMvHeBO_ZY2h1OZ%0D%0A0JeF7dFYP4UmciSTxSW5_A1S6-e4F7d2%0D%0A&amp;ref_=ft_iba" itemprop="url">Interest-Based Ads</a>
</li>
                <li class="spacer"></li>
            </ul>
        </div>
    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="ft-copy float-right">
                <a href="http://www.imdb.com/help/show_article?conditions">Copyright ©</a> 1990-2017
                <a href="http://www.imdb.com/help/">IMDb.com, Inc.</a>
            </div>
            <div>
                An <span id="amazon_logo" class="footer_logo" align="middle">Amazon.com</span> company.
            </div>
        </div>



    <table class="footer" id="amazon-affiliates">
        <tbody><tr>
            <td colspan="8">
                Amazon Affiliates
            </td>
        </tr>
        <tr>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-aiv&amp;token=BCYt1GMi0JUuFRPWcfuCuGkuxjhRDdDVd9cynmBVkEEzXNeFCks5ibTLAQBeYr_VU3Qxu_AUJmuA%0D%0AMfyt2LJ48-fxcv4nlZ7ngQCFchxxbuMrO_qHdg8JHGy9_Zo1ZXgq3_JuOyL3rXfj9zK9sJXbhMu_%0D%0Aws_YUpJQ4u_EFU4Slr3egE_FxLvNITMKhs8dvnmC_e5aKgqWeM_PRv1MsEyjmkKnSxEcX0s0WpHY%0D%0ALcuy3gyylcQ%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Amazon Video</span><br>
                <span class="amazon-affiliate-site-desc">Watch Movies &amp;<br>TV Online</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-piv&amp;token=BCYuwgD0Hmf_IX1oM1uY2b2Yv9j21-i-ILevsOf7GfsuN6YCtXTUM2ghLoyP6ENmBiMBpg697zf6%0D%0ATzvR7NE5yzqEhHSbUu3zUosrRSHKY30nFojq6Jmb5g9tJgInps8qnKI7EW21rVnGBpewihUlG1Ht%0D%0AE_Azo82z2ZrvwA4eY5AY3vci-P81XR4Ltp2GDVdJyqyNjEo3e46L8cC5i3nWaT08CDPiKAuYZ57t%0D%0ADkDMinVvPGY%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Prime Video</span><br>
                <span class="amazon-affiliate-site-desc">Unlimited Streaming<br>of Movies &amp; TV</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-de&amp;token=BCYk_qPyZybPYS1AWN4btCArtL6rIIBx-T4JS9Yq15PV-W4UynlApTNYNAthdj9ivtvu9hEwmsvh%0D%0AxhgZaWsJk9naGdZrx4NFT23w9Asychg3Fji3yNJR4i4MlhuZo0RnbJsDsk-cWVhlewqXfgS9meoU%0D%0Ar0LvEtFmdcx9AqOu0QHyDGr43Yn1L-Im7Hw36HzlwA7z8LSaM-gSX0fRc4jCJs0X51jNVZMSdW_b%0D%0ANpJcmtQYwQw%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Amazon Germany</span><br>
                <span class="amazon-affiliate-site-desc">Buy Movies on<br>DVD &amp; Blu-ray</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-it&amp;token=BCYoqBI696I9ZHvU6xQN87-NFQoe5rTBtxgOimm_8hadU5RBiD6d3Tu6mjn3oVAcGo3mOknkSqNK%0D%0A1__xC0vjTpjeZmV_uh9x_syueH-kHOawXrOMi_rKaCe7lysmMmcu0ThXZK4Imh9gQUx7Vzp3f5hs%0D%0A_AYL5khKMlhFekDoeNKhHeWDAJbLgyBU8PkDiyEXa8PgXlzMSnjLCoQ16GbYlIaTtYZKjw2ae6pY%0D%0AW-vG2aBCeMk%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Amazon Italy</span><br>
                <span class="amazon-affiliate-site-desc">Buy Movies on<br>DVD &amp; Blu-ray</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-fr&amp;token=BCYk_Lg5mEYR0IR6drvD2w3Gx8obxBgLlNGVbpUJTAKLuMTpREvf-fPNw1QtZ3AXhFPQNISZRpum%0D%0AMdBg5j3D5T0_53hIwUaBewDS9Ob4sv3on2ptF2SlttGlJZodB74dYDpSGByYgNtl7zjGoPL_jfg8%0D%0ABdXZO1rIPWas-932YNLQO1qsOcu1C0KZOhlaStnpRODjezYZZEFipvTFipwnzOYMGnsDlc3JG6gj%0D%0A57UfIjEfuj8%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Amazon France</span><br>
                <span class="amazon-affiliate-site-desc">Buy Movies on<br>DVD &amp; Blu-ray</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-in&amp;token=BCYpfg4AYzJnmuhfRnEeZc49YoBNJH2GhC_-pr7Glih9x_USLC4osPlTjVBoojFS5j2lDT_blILh%0D%0A2xFtl2ROoxPCm48hLGVOrf2QHYQ1-HkRDm1dSfLOnM-Ud1py2K3gcB0GwHEeRK8PkxkJxWuO3lci%0D%0AnZIjbBsDlBDZZ4EYaKkxpI-sVr95SliK7ptz6hWYoyQALZyMlmyCyLVzbMjlflNFY7FwWM4_2036%0D%0AsPuWbkLFTXkY7H6WymsuC2EIpbCU4RDt%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Amazon India</span><br>
                <span class="amazon-affiliate-site-desc">Buy Movie and<br>TV Show DVDs</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-dpr&amp;token=BCYpUBscmw1lEqWwUz2JLAjfE9jHPd8HHxIvaexsQIa111pyTGZpTwg4KNqQJIknp1K_7rE76Dt_%0D%0AiNID3kPFyLrGFRPmeu58m0idWzDVDAynC818Ym8c_jt7RBFTaEJTl_87hTBCPKvsk3tpgfOA_S4J%0D%0AaJP_q-OO11Hy0x5qc3zBFcg%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">DPReview</span><br>
                <span class="amazon-affiliate-site-desc">Digital<br>Photography</span>
            </a>
        </div>
    </td>

    <td>
        <div>
            <a href="http://www.imdb.com/offsite/?page-action=ft-amzn-aud&amp;token=BCYnuGBM_tTL7pHIhUayJpWSM0o7uoSs0kd7HTlXiLsYHyv4HIRMNXfDptctaSkC1rQBrJI048KV%0D%0A4riTWIToeoCHxK8L-7eHG68UOy7dLOhAxFkhIUz0J8MY7HhbwsEaPjHImlM4KPM4obHBoV8LoAWR%0D%0AIs-OvVkOKcMjgKs9cFB_-Eg%0D%0A" class="amazon-affiliate-site-link">
                <span class="amazon-affiliate-site-name">Audible</span><br>
                <span class="amazon-affiliate-site-desc">Download<br>Audio Books</span>
            </a>
        </div>
    </td>
        </tr>
    </tbody></table>
      </div>
            </div>
        </div>



<script type="text/javascript" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/common-2411119445._CB514893747_.js.download"></script>
<script type="text/javascript" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/title-1334710043._CB513500739_.js.download"></script><div id="photo-container"><noscript data-reactid=".0" style="display: none;"></noscript></div><div id="video-container"><div class="modal__closed" data-reactid=".1"><div class="modal__video-container" data-reactid=".1.1"><div class="video-player__video-panel" data-reactid=".1.1.0"><div class="video-player__video-wrapper" data-reactid=".1.1.0.0"><div class="video-player__video-margin-maker" data-reactid=".1.1.0.0.0"><div class="video-player__video-container" data-reactid=".1.1.0.0.0.0"><span data-reactid=".1.1.0.0.0.0.0"><div class="arrow-left disabled" data-reactid=".1.1.0.0.0.0.0.$=1$arrow-left"></div><div class="arrow-right disabled" data-reactid=".1.1.0.0.0.0.0.$=1$arrow-right"></div><div class="video-player__header" data-reactid=".1.1.0.0.0.0.0.$=1$header"><div class="video-player__header-internal" data-reactid=".1.1.0.0.0.0.0.$=1$header.0"><div class="close-button" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.0"></div><div class="header-text-container" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.1"><div class="header-text" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.1.0"></div></div><div class="video-player__info-button" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.2"></div><div id="social-sharing-widget" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3"><div class="dropdown share-widget" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0"><button title="Share this video" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=10"><svg class="share-button" fill="#fff" viewBox="0 0 24 24" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=10.0"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=10.0.0"></path></svg><span class="share-button-title" style="color:#fff;" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=10.1">SHARE</span></button><div class="dropdown-menu menu-right" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11"><div class="dropdown-menu-item" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=10"><a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F" title="Share on Facebook" target="_blank" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=10.0"><span class="share-widget-sprite share facebook" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=10.0.0"></span><span data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=10.0.1">Facebook</span></a></div><div class="dropdown-menu-item" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=11"><a href="http://twitter.com/intent/tweet?text=Check%20out%20this%20video%20on%20IMDb!%20-%20http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F" title="Share on Twitter" target="_blank" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=11.0"><span class="share-widget-sprite share twitter" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=11.0.0"></span><span data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=11.0.1">Twitter</span></a></div><div class="dropdown-menu-item" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=12"><a href="mailto:?subject=Watch%20this%20video%20from%20undefined%20on%20IMDb!&amp;body=Check%20out%20this%20video%20on%20IMDb!%20-%20http://www.imdb.com/title/tt0120737/" title="Share by email" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=12.0"><span class="share-widget-sprite share email" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=12.0.0"></span><span data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=12.0.1">Email</span></a></div><div class="dropdown-menu-item" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13"><a href="http://www.imdb.com/title/tt0120737/" title="Click to copy" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0"><span class="share-widget-copy-icon" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0.0"><span class="share-widget-sprite share link" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0.0.0"></span></span><div class="share-link-descriptor" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0.1">Copy</div><div class="share-link-textbox" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0.2"><input type="text" readonly="" value="http://www.imdb.com/title/tt0120737/" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=13.0.2.0"></div></a></div><div class="dropdown-menu-item" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14"><a href="http://www.imdb.com/title/tt0120737/?ref_=rvi_tt#" title="Click to copy" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0"><span class="share-widget-copy-icon" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0.0"><span class="share-widget-sprite share embed" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0.0.0"></span></span><div class="share-link-descriptor" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0.1">Embed</div><div class="share-link-textbox" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0.2"><input type="text" readonly="" value="&lt;iframe src=&quot;http://www.imdb.com/videoembed/undefined&quot; allowfullscreen width=&quot;854&quot; height=&quot;400&quot;&gt;&lt;/iframe&gt;" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=11.$/=14.0.2.0"></div></a></div></div><div class="dropdown-overlay" data-reactid=".1.1.0.0.0.0.0.$=1$header.0.3.0.$/=12"></div></div></div></div></div></span><div class="video-player__video" id="imdb-video-1"></div></div></div></div><div class="video-player__sidebar" data-reactid=".1.1.0.1"><div class="video-player__sidebar-wrapper" data-reactid=".1.1.0.1.0"><div class="sidebar-close-button" data-reactid=".1.1.0.1.0.0"></div><div class="sidebar-header" data-reactid=".1.1.0.1.0.1"><div class="sidebar-header-tabs" data-reactid=".1.1.0.1.0.1.0"><div class="sidebar-header-tab active" data-reactid=".1.1.0.1.0.1.0.0">INFO</div></div></div><div class="sidebar-related" data-reactid=".1.1.0.1.0.2"><div class="sidebar-content scrollable-area active" data-reactid=".1.1.0.1.0.2.1"><div class="sidebar-video-description" data-reactid=".1.1.0.1.0.2.1.0"><div class="content-card collapsed" data-reactid=".1.1.0.1.0.2.1.0.0"><div class="expand-collapse-card-button" data-reactid=".1.1.0.1.0.2.1.0.0.0"></div><div class="primary-text-container" data-reactid=".1.1.0.1.0.2.1.0.0.2"><div class="centered-primary-text" data-reactid=".1.1.0.1.0.2.1.0.0.2.0"><div class="title" data-reactid=".1.1.0.1.0.2.1.0.0.2.0.0"></div></div></div><div class="description" data-reactid=".1.1.0.1.0.2.1.0.0.3"></div></div></div><div class="primary-relation-card" data-reactid=".1.1.0.1.0.2.1.1"><div class="primary-relation-poster" data-reactid=".1.1.0.1.0.2.1.1.1"><a target="_self" class="poster-link" data-reactid=".1.1.0.1.0.2.1.1.1.0"></a></div><div class="primary-relation-info" data-reactid=".1.1.0.1.0.2.1.1.2"><a target="_self" class="primary-relation-name" data-reactid=".1.1.0.1.0.2.1.1.2.0"></a></div></div></div></div></div></div></div></div></div></div>

<script type="text/javascript" id="login">
(function(){
    var readyTimeout = setInterval(function() {
        if (window.jQuery && window.imdb && window.imdb.login_lightbox) {
            clearTimeout(readyTimeout);
            window.imdb.login_lightbox();
        }
    }, 100);
})();
</script>

        <script type="text/javascript">
        function jQueryOnReady(remaining_count) {
            if (window.jQuery && typeof $.fn.watchlistRibbon !== 'undefined') {
                jQuery(
                             function() {
           var isAdvertisingThemed = !!(window.custom && window.custom.full_page && window.custom.full_page.theme),
               url = "https://www.facebook.com/widgets/like.php?width=280&show_faces=1&layout=standard&href=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F&colorscheme=light",
               like = document.getElementById('iframe_like');

           if (!isAdvertisingThemed && like) {
              like.src = url;
              like.onload = function () { 
                  if (uex) { uex('ld', 'facebook_like_iframe', {wb: 1}); }
              };
           } else if (isAdvertisingThemed) {
              $('.social_networking_like').closest('.aux-content-widget-2').hide();
           }
        }

                );
                jQuery(
                             function() {
            var facebookTheme = (window.custom && window.custom.full_page &&
                    window.custom.full_page.theme) ?
                window.custom.full_page.theme : "light",
            url = "//www.facebook.com/plugins/likebox.php?href=facebook.com%2Fimdb&width=300&height=190&connections=4&header=false&stream=false&colorscheme=" + facebookTheme,
            like = document.getElementById('facebookIframe'),
            twitterIframe = document.getElementById('twitterIframe');
            if (like) {
                like.src = url;
            }
            if (twitterIframe) {
                twitterIframe.src = "https://i.media-imdb.com/images/social/twitter.html?10#imdb";
            }
         }

                );
            } else if (remaining_count > 0) {
                setTimeout(function() { jQueryOnReady(remaining_count-1) }, 100);
            }
        }
        jQueryOnReady(50);
        </script>

<!-- begin ads footer -->

<!-- Begin SIS code --> 
<iframe id="sis_pixel_sitewide" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" style="display: none;" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/iu3.html"></iframe>
<script>
    setTimeout(function(){
        try{
            //sis3.0 pixel
            var url_sis3 = 'https://s.amazon-adsystem.com/iu3?',
                params_sis3 = [
                    "d=imdb.com",
                    "a1=",
                    "a2=01011716970a4bec87f4b078169feaa4ce9413ae6ae65c63167d5b6be8ebbe840b00",
                    "pId=tt0120737",
                    "r=1",
                    "rP=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Drvi_tt",
                    "ex-hargs=v=1.0;c=IMDB;p=tt0120737;t=imdb_title_view;",
                    "encoding=server",
                    "cb=284895568311"  
                ];
        
            if (document.getElementById('sis_pixel_sitewide')) {
                (document.getElementById('sis_pixel_sitewide')).src = url_sis3 + params_sis3.join('&');
            }
        }
        catch(e){
            if ('consoleLog' in window){
                consoleLog('Pixel failure ' + e.toString(),'sis');
            }
            if (window.ueLogError) { 
                window.ueLogError(e);
            }
        }
    }, 20);
</script>
<!-- End SIS code -->

<!-- begin comscore beacon -->
<script type="text/javascript" src="./O Senhor dos Anéis_ A Sociedade do Anel (2001) - IMDb_files/beacon-1792157672._CB514933407_.js.download"></script>
<script type="text/javascript">
if(window.COMSCORE){
COMSCORE.beacon({
c1: 2,
c2:"6034961",
c3:"",
c4:"http://www.imdb.com/title/tt0120737/?ref_=rvi_tt",
c5:"",
c6:"",
c15:""
});
}
</script>
<noscript style="display: none;">
&lt;img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=6034961&amp;c3=&amp;c4=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F%3Fref_%3Drvi_tt&amp;c5=c6=&amp;15=&amp;cj=1"/&gt;
</noscript>
<!-- end comscore beacon -->

<script>
    doWithAds(function(){
        (new Image()).src = "http://www.amazon.com/aan/2009-05-01/imdb/default?slot=sitewide-iframe&u=284895568311&ord=284895568311";
    },"unable to request AAN pixel");
</script>

<!-- end ads footer -->

<div id="servertime" time="426">



<script>
    if (typeof uet == 'function') {
      uet("be");
    }
</script>

    


</div><div id="cboxOverlay" style="display: none;"></div><div id="colorbox" class="" role="dialog" tabindex="-1" style="display: none;"><div id="cboxWrapper"><div><div id="cboxTopLeft" style="float: left;"></div><div id="cboxTopCenter" style="float: left;"></div><div id="cboxTopRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxMiddleLeft" style="float: left;"></div><div id="cboxContent" style="float: left;"><div id="cboxTitle" style="float: left;"></div><div id="cboxCurrent" style="float: left;"></div><button type="button" id="cboxPrevious"></button><button type="button" id="cboxNext"></button><button id="cboxSlideshow"></button><div id="cboxLoadingOverlay" style="float: left;"></div><div id="cboxLoadingGraphic" style="float: left;"></div></div><div id="cboxMiddleRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxBottomLeft" style="float: left;"></div><div id="cboxBottomCenter" style="float: left;"></div><div id="cboxBottomRight" style="float: left;"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none; max-width: none;"></div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0" id="ns__zoom_svg" style="position:absolute; top:-9999px; border:0; display:none;"></svg><div id="ns__zoom_div" style="position:absolute; top:-9999px; border:0;min-width:100%; margin:0;"></div><div style="position:absolute; top:-9999px; border:0;width:100px; height:100px; overflow:scroll;" id="ns__zoom_scroll"></div></body></html>
`

let $ = cheerio.load(html);

//console.log($.html());

console.log($('#titleYear').children().text());