//~ Version: 40, Copyright (C) 2014-2016: Willem Vree, contributions St�phane David.
//~ This program is free software; you can redistribute it and/or modify it under the terms of the
//~ GNU General Public License as published by the Free Software Foundation; either version 2 of
//~ the License, or (at your option) any later version.
//~ This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//~ without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//~ See the GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
var msc_VERSION=40,opt,onYouTubeIframeAPIReady,msc_credits,media_height,times_arr,offset_js,endtime_js,abc_arr,lpRec;
(function(){function W(){opt={jump:0,no_menu:0,repufld:0,noplyr:0,nocsr:0,media_height:"",btns:1,ipadr:"",mstr:0,autscl:0,ctrmed:0,ctrnot:0,lncsr:0,opacity:.2,synbox:0,speed:1,top_margin:0,yubvid:"",nomed:0,delay:0,repskip:0,spdctl:0,lopctl:0,metro:0};$("#yubuse").prop("checked",!1);$("#yvdlbl, #vidyub").css("display","none");msc_credits=void 0;$("#credits").html("");media_height=void 0;$("#buttons").css("height","");Q="";p=0;h=null}function q(b,c,d,f,e,l,g){this.xs=b;this.ymin=c;this.ymax=d;this.times=
f;this.times.unshift(0);this.tixbts=g;this.line=0;this.msre=1;this.width=0;this.wijzer=$(document.createElementNS("http://www.w3.org/2000/svg","svg"));this.wijzer.attr("id","wijzer");this.wijzer.css("overflow","visible");this.shade=$(document.createElementNS("http://www.w3.org/2000/svg","rect"));this.shade.attr({width:"100%",height:"100%"});this.wijzer.append(this.shade);this.tiktak=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.tiktak.attr("y",5);this.tiktak.css({fill:"green",
stroke:"green","text-anchor":"end","font-size":"xx-large"});this.wijzer.append(this.tiktak);this.atag=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.atag.attr("id","atag");this.atag.text("<");this.atag.css({fill:"red",stroke:"red","text-anchor":"middle"});this.btag=$(document.createElementNS("http://www.w3.org/2000/svg","text"));this.btag.attr("id","btag");this.btag.text(">");this.btag.css({fill:"red",stroke:"red","text-anchor":"middle"});"undefined"==typeof lpRec&&(lpRec={loopBtn:1,
loopStart:0,loopEnd:f[f.length-1]},$("#lopctl").prop("checked",!1),opt.lopctl=0);this.hmargin=100;this.vmargin=50;this.tmargin=0<=opt.top_margin?opt.top_margin:this.vmargin;this.lastSync=0;this.setScale();this.cursorTime=0;this.time_ix=1;this.tixlb=e;this.lbtix=l;this.repcnt=1;this.noCursor=0}function C(){this.paused=!0;this.currentTime=0;this.klok=-1;this.step=200;this.playing=0;X(.1,4,.05)}function Y(){var b=$("#abclbl"),c=b.html(),d=$("#impbox").prop("checked");b.toggleClass("abcimp",d);b.html(d?
c.replace("score file","<b>import</b>"):c.replace("<b>import</b>","score file"));d&&!opt.btns&&$("#btns").click()}function ta(b,c){if(0>b.indexOf("//# This page"))alert("not a preload file");else{b=c.replace(/\n/g,"");var d=b.match(/offset_js = (.*);/);1<d.length&&(n=offset_js=parseFloat(d[1]));d=b.match(/times_arr = (.*);abc_arr/);1<d.length&&(times=Z(JSON.parse(d[1])));k&&(k.times=times,k.times.unshift(0));$("#impbox").prop("checked",!1);Y()}}function aa(b){var c=b.slice(0,4E3);$("#impbox").prop("checked")?
ta(c,b):0<=c.indexOf("//# This page")?(W(),eval(b),y()):0<=c.indexOf("X:")?ba(b):-1==c.indexOf("<?xml ")?alert("not an xml file nor an abc file"):(b=$.parseXML(b),b=vertaal(b,{p:"f",t:1,u:opt.repufld,v:3}),b[1]&&$("#err").append(b[1]+"\n"),ba(b[0]))}function ua(b){$("#err").text("");lpRec=offset_js=times_arr=void 0;var c=b[0].link;z=b[0].name.split(".")[0];$("#wait").toggle(!0);$("#err").text("link: "+c+"\n");$.get(c,"",null,"text").done(function(b,c){$("#err").append("preload: "+c+"\n");abc_arr=
b.split("\n");y()}).fail(function(b,c,e){$("#wait").append("\npreload failed: "+c)})}function ca(b,c){$("#err").text("");offset_js=times_arr=void 0;$("#impbox").prop("checked")||(lpRec=void 0);var d=new FileReader;d.onload=function(b){aa(d.result)};var f="dd"==b?c[0]:$("#fknp").prop("files")[0];f&&(z=f.name.split(".")[0],d.readAsText(f))}function va(b){b.stopPropagation();b.preventDefault();$("body").toggleClass("indrag",!1);b=b.dataTransfer.files;/video|audio/.test(b[0].type)?R("dd",b):ca("dd",b)}
function R(b,c){var d,f;"dbx"==b?(d=c[0],f=d.link):(d="dd"==b?c[0]:$("#mknp").prop("files")[0],f=window.URL.createObjectURL(d));F(d.name,f)}function wa(){$("#yubid")[0].checkValidity()?(opt.yubvid=$("#yubid").val(),F("","")):alert("The youtube video id should be 11 characters long,\neach from 'A' to 'Z', 'a' to 'z', '0' to '9', '-' or '_'")}function X(b,c,d){for(w=[];b<=c+.001;b+=d)b=Math.round(100*b)/100,w.push(b)}function da(b){function c(b){$("#yubuse").attr("disabled",b);$("#yublbl").css("color",
b?"#aaa":"#000");$("#yubload").toggle(b)}b&&(ea=b);"undefined"==typeof YT?(c(!0),$("#yubuse").prop("checked",!1),$.getScript("https://www.youtube.com/iframe_api")):(c(!1),ea())}function F(b,c){c=c.replace("www.dropbox","dl.dropboxusercontent").split("?")[0];Q=0==c.indexOf("http")?c:b;var d;b=b.split("?")[0];$("#vid, #aud").attr("src","");G&&G.stopVideo();E.clearKlok();if(b){p=0;if(/\.webm$|\.mp4$/i.test(b)){d=$("#vid");if(0==d.length)return;$("#vidyub, #aud").css("display","none");d.css("display",
"inline-block");$("#buttons").toggleClass("video",!0)}else{d=$("#aud");if(0==d.length)return;$("#vidyub, #vid").css("display","none");d.css("display","inline-block");$("#buttons").toggleClass("video",!1)}h=d.get(0);/\.ogg$/i.test(c)&&(h.canPlayType("audio/ogg")||(c=c.replace(/\.ogg$/i,".mp3")));/\.webm$/i.test(c)&&(h.canPlayType("video/webm")||(c=c.replace(/\.webm$/i,".mp4")));d.attr("src",c+(n?"#t="+n:""));d.on("timeupdate",H);d.on("playing",function(){E.setKlok(null,0);h.playbackRate=opt.speed});
d.on("pause",function(){E.pause()});d.on("loadedmetadata",t);X(.5,2,.05);A(0);t()}else p=1,$("#vid, #aud").css("display","none"),$("#vidyub").css("display","inline-block"),$("#buttons").toggleClass("video",!0),da(function(){h=G;w=h.getAvailablePlaybackRates();A(0);t();h.cueVideoById({videoId:opt.yubvid,startSeconds:n})})}function fa(){var b=$("#yubuse").prop("checked");$("#medlbl").css("display",b?"none":"block");$("#yvdlbl").css("display",b?"block":"none")}function S(){var b=parseInt($("body").css("width"))/
2,c=parseInt($("#vid").css("width"))/2,d=parseInt($("#vidyub").css("width"))/2,f=parseInt($("#aud").css("width"))/2;$("#vid").css("margin-left",opt.ctrmed?(b-c).toFixed()+"px":"0px");$("#vidyub").css("margin-left",opt.ctrmed?(b-d).toFixed()+"px":"0px");$("#aud").css("margin-left",opt.ctrmed?(b-f).toFixed()+"px":"0px");$("#meddiv").css("text-align",opt.ctrmed?"left":"center")}function t(){h&&$(h).toggle(!opt.noplyr);$("#buttons").toggleClass("noheight",!!opt.noplyr);var b=$("#btns").prop("checked"),
c=parseFloat($("#buttons").css("height")),d=parseFloat($("body").css("height")),b=b?parseFloat($("#err").css("height")):0,d=100-(100*(c+b)/d).toFixed();
    

$("#vidyub").css("width",(1.52*c).toFixed());
S()}function ba(b)
{function c(b){
    b=Object.keys(b).map(function(b){return parseFloat(b)});
    b.sort(function(b,c){return b-c});
    return b}
function d(b){
    var c;
    c='%%beginsvg\n<defs>\n<text id="x" x="-3" y="0">&#xe263;\n\
    </text>\n<text id="normal" x="-3.7" y="0">&#xe0a4;\n\
    </text>\n';
    c+='<g id="circle-x"><text x="-3" y="0">&#xe263;\n\
    </text><circle r="4" class="stroke"/></g>\n';
    c+='<path id="triangle" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"/>\n';
    c+='<path id="triangle+" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="fill:#000"/>\n';
    c+='<path id="rectangle" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"/>\n';
    c+='<path id="rectangle+" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="fill:#000"/>\n'
    ;c+='<path id="diamond" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"/>\n';
    c+='<path id="diamond+" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="fill:#000"/>\n';
    c+="</defs>\n%%endsvg";var d={diamond:1,triangle:1,rectangle:1};
    c=[c];
    var f,e,g,l="default",h={"default":[]};
    b=b.split("\n");
    for(f=0;f<b.length;++f)
        if(e=b[f],0<=e.indexOf("I:percmap")&&(e=e.split(" "),g=e[4],g in d&&(g=g+"+,"+g),e="%%map perc"+l+" "+e[1]+" print="+e[2]+" midi="+e[3]+" heads="+g,h[l].push(e)),0<=e.indexOf("V:")&&(g=e.match(/V:\s*(\S+)/)))
            l=g[1],l in h||(h[l]=[]);
    for(l in h)c=c.concat(h[l]);
    for(f=0;f<b.length;++f)
        e=b[f],0<=e.indexOf("I:percmap")||(0<=e.indexOf("V:")||0<=e.indexOf("K:")?((g=e.match(/V:\s*(\S+)/))&&(l=g[1]),0==h[l].length&&(l="default"),c.push(e),0<=e.indexOf("perc")&&-1==e.indexOf("map=")&&(e+=" map=perc"),0<=e.indexOf("map=perc")&&0<h[l].length&&c.push("%%voicemap perc"+l),0<=e.indexOf("map=off")&&c.push("%%voicemap")):c.push(e));
    return c.join("\n")}var f="",e="",l,g={},s={},m=[],p,x=[],r=[],ga=[],v=[],ha=[],D=[],w=[],I=[[0,0,1]],t=[];
L="";
u=[];
M=[];
k=null;
n=0;
J=.1;
N=0;

var B=$("#notation");
$("body").attr("title","");
B.html("");
var z=function(b){
    var c,d;
    b=b.replace(/\r\n/g,"\n");
    b=b.split(/^\s*X:/m);
    if(1==b.length)return[];c=b[1].split(/^\s*$/m);
        c=b[0]+"X:"+c[0];b=c.split(/\r\n|[\n\r\u0085\u2028\u2029]/);
        for(c=0;c<Math.min(100,b.length);++c)(d=b[c].match(/%%scale\s*([\d.]+)/))&&1==d[1]&&(b[c]="%%scale 0.99");
        return b}
    (b);
    b=z.join("\n");
    0<=b.indexOf("percmap")&&(b=d(b));
    l=new Abc({img_out:function(b){-1!=b.indexOf("<svg")&&(b=b.replace(/width="(\d*)px"\s*height="(\d*)px"/,
'width="$1px" height="$2px" viewbox="0 0 $1 $2"'),g=c(g),s=c(s),1<g.length&&g[1]<Math.min.apply(null,r)&&g.splice(0,1),m.push({xs:g,ys:s}),g={},s={},r=[]);

f+=b},errmsg:function(b,c,d){e+=b+"\n"},read_file:function(b){return""},anno_start:function(b,c,d,e,f,h,k){"note"!=b&&"rest"!=b||r.push(l.sx(e));"bar"==b&&(e=l.sx(e).toFixed(2),f=l.sy(f).toFixed(2),g[e]=1,s[f]=1,p=l.sx(0).toFixed(2),g[p]=1)},get_abcmodel:function(b,c,d){var e=768;d=0;var f,g=0;try{f=c[0].meter.a_meter[0].top}catch(l){f="4"}for(;b;b=
b.ts_next)if(0==b.v){for(c=b.extra;
c;
c=c.next)14==c.type&&c.tempo_notes&&(e=c.tempo_notes.reduce(function(b,c){return b+c}),e=e*c.tempo/60);
switch(b.type){
    case 8:
    case 10:
        d+=b.dur/e;
        break;
    case 0:
        if(b.time==g){D[D.length-1]+=b.bar_type;
            break}"eoln"in b&&(g=b.time);
        w.push(d);
        d=0;
        f=f.replace("C|","2").replace("C","4");
        ha.push(parseInt(f));
        D.push(b.bar_type);
        ga.push(b.text);
        break;
    case 6:f=b.a_meter[0].top}}}});
    l.tosvg("abc2svg",b);
    ""!=e&&$("#err").append(e);
    B.html(f);u=B.find("svg");
    u.css("overflow","visible");
u.children("title").text("");
B=u.children("g");

    for(b=0;b<B.length;++b)M.push(B.eq(b));
    var B=[],A=[],C=[];
    for(b=0;b<m.length;++b){var y=m[b];B[b]=y.xs;A[b]=y.ys[0];C[b]=y.ys[y.ys.length-1]}(function(){
        for(var b=0,c=1,d=m[b].xs.length,e=0,f=0,g=1,l=0,h=1,k=0;;){
            var s=ga[e-1];
            if(s=s?s.match(/[,\d]*(\d)/):null)s=parseInt(s[1]),s!=k&&(k=s);
            if(!k||k>=h)f+=w[e],x.push(f),v.push(ha[e]),t[b]||(t[b]=[]),t[b][c]||(t[b][c]=[]),t[b][c][h]=I.length,I.push([b,c,h]);
            "|"!=D[e]&&(k=0);if((s=/^:/.test(D[e]))&&1==h&&
!opt.repskip)h=2,e=l,c=I[g][1],b=I[g][0],d=m[b].xs.length;
else if(s&&(h=1),/:$/.test(D[e])&&(g=I.length,l=e+1,h=1),e+=1,c+=1,c>=d){c=1;
    b+=1;
    
                if(b>=m.length)break;
                d=m[b].xs.length}}})();
    "undefined"!=typeof times_arr&&(x=Z(times_arr));
    "undefined"!=typeof offset_js&&(n=offset_js);
    if("undefined"!=typeof endtime_js)var F=endtime_js-n,G=x[x.length-1],x=x.map(function(b){return b*F/G});
    L=z;
    k=new q(B,A,C,x,I,t,v);
    k.setline(0);
    u.each(function(){$(this).mousedown(xa)});
    h||(h=E);
    var H=lpRec.loopStart+n+.01;
    setTimeout(function(){K("false:"+
H+":false",0);ia()},0)}

        function Z(b){b=b.map(function(b){return b.slice(1)});return b=b.reduce(function(b,d){return b.concat(d)})}
        function H(){if(h){var b=(p?h.getCurrentTime():h.currentTime)-n,c=b;
                0>b&&(b=0);
                opt.lopctl&&(b>lpRec.loopEnd&&(b=lpRec.loopStart),b<lpRec.loopStart&&(b=lpRec.loopStart+.01),b!=c&&(p?h.seekTo(b+n,!0):h.currentTime=b+n));
                k&&k.time2x(b)}}
        
        function xa(b){b.preventDefault();
            b.stopPropagation();var c=u.get().indexOf(this);b=b.clientX;b-=$(this).position().left;k.x2time(b,c)}
        function ja(){$("#sync_out").css("display",
opt.synbox?"block":"none");

k&&opt.synbox&&k.showSyncInfo()}

        function ka(){$("#medbts").css("display",opt.btns?"inline":"none");
            $("#err").css("display",opt.btns?"block":"none");
            t();
            opt.btns&&"undefined"==typeof FileReader&&$("#notation").prepend("<h3>Your browser does not support reading of local files ...</h3>but you can use the preload feature.")}
        
        function T(){k&&k.time2x(k.cursorTime);
            
            /* mettere la notazione al centro: era "center":"left" ma ho messo in entrambi i casi center */
            $("#notation").css("text-align",opt.ctrnot?"right":"right")}
        
        // speed ctrl 
        function la(){
            var b=$("#spdctl").prop("checked");
            $("#spdlbl").css("display",b?"block":"none")}
        function ma(){
            function b(b){
                $("#drpuse").prop("checked",!b);
                $("#drpuse").attr("disabled",b);
                $("#drplbl").css("color",b?"#aaa":"#000")}
            if("undefined"==typeof Dropbox)
                b(!0),$.ajax({url:"https://www.dropbox.com/static/api/2/dropins.js",dataType:"script",cache:!0}).done(function(){
                    b(!1);
                    Dropbox.init({appKey:"ckknarypgq10318"});
                    ya();
                    ma()});
            else{
                var c=$("#drpuse").prop("checked");
                $(".dropbox-dropin-btn").css("display",c?"inline-block":"none");
                $("#fknp, #mknp").css("display",c?"none":"inline-block")}}
        
    function za(b,c){
        function d(){e<=f&&(v=setTimeout(d,l),k.tiktak.text(e),e+=1)}
        var f,e,l;
        clearInterval(v);
        v=0;
        f=k.tixbts[b-1];
        e=1;
        l=(k.times[b]-c)/f/opt.speed*1E3;
        v=setTimeout(d,0)}
    function na(){k&&setTimeout(function(){clearInterval(v);v=0;k.tiktak.text("")},0)}
    
        function Aa(b,c){
            function d(){
                $("#countin").toggle(!1);
                clearInterval(v);v=0}
            function f(){
                $("#countin").html("<b>"+e.num+"</b>").toggle(!0);
                0==e.num--&&(d(),K(b,c))}
            if(v)d();
            else{b=b.replace(":true",":false");
                var e=k.compCountIn();
                f();
                v=setInterval(f,
1E3*e.time)}}

        function K(b,c){
            if(h){
                var d=b.split(":"),f="true"==d[0],e=parseFloat(d[1]),d="true"==d[2],l=p?h.getPlayerState():0,g=p?1!=l:h.paused;
                p?5!=l&&h.seekTo(e,!0):h.currentTime=e;
                if(g&&f||!g&&!f){if(d){Aa(b,c);
                        return}
                    if(c){
                        setTimeout(function(){K(b,0)},c);
                        return}p?h.playVideo():h.play();
                    opt.metro&&k&&(k.time_ix=0)}
                else p?5!=l&&h.pauseVideo():h.pause(),opt.metro&&na();
                f=!opt.lncsr&&!f;
                k&&k.time2x(e-n,f)}}function U(b,c){var d=b+":"+c.toFixed(2)+":"+(b&&$("#cntin").prop("checked"));
            r?r.send(d):
K(d,0)}
        // funzione che legge input da tastiera per le impostazioni
        function O(b){
            /*
            var c=b.keyCode?b.keyCode:b.which,d=1;
            switch(c){
                case 219:
                case 88:
                    k.goMsre(0);
                    break;
                case 221:
                case 67:
                    k.goMsre(1);
                    break;
                case 80:
                case 89:
                case 90:
                    if(!h)break;
                    U(!0,p?h.getCurrentTime():h.currentTime);
                    break;
                case 65:$("#autscl").click();
                    break;
                case 70:$("#btns").click();
                    break;
                case 72:$("#help").toggleClass("showhlp");
                case 76:$("#lncsr").click();
                    break;
                case 77:$("#menu label").toggle();
                    break;

                 
                  case 83:opt.spdctl&&!opt.lopctl?$("#lopctl").click():opt.lopctl&&!opt.spdctl?$("#spdctl").click():$("#spdctl, #lopctl").click();
                    break;
                case 171:
                case 61:
                case 107:
                    A(1);
                    break;
                 
                case 173:
                case 109:
                    A(-1);
                    break;
                default:d=0}*/
                if(opt.synbox&&k&&!d){
                    switch(c){
                        case 190:
                            b.ctrlKey?n+=J:k.changeTimesKeyb(J);
                            break;
                        case 188:
                            b.ctrlKey?n-=J:k.changeTimesKeyb(-J);
                            break;
                        case 87:oa()}b.preventDefault();
                        k.showSyncInfo()}}
                
                function V(){
                    S();
                    k&&(u[0].width.baseVal.value>screen.width||opt.autscl)&&(k.setSize.call(k),k.setScale.call(k))}
                

                
                function Ba(b){
                    b=b.map(function(b){return window.btoa(unescape(encodeURIComponent(b)))}).join("+");
                    
                    
                for(var c=[],d=0;d<=b.length;)c.push(b.substr(d,150)),d+=150;
                return c}
            
                function Ca(b){
                    return b.join("").split("+").map(function(b){
                        return decodeURIComponent(escape(window.atob(b)))}).join("\n")}
                function oa(){var b,c,d=[],f,e,l="[",g,h,m,q;
                    f='media_file = "'+(p?"":Q)+'";\n';
                    h="undefined"!=typeof msc_credits?"msc_credits = "+JSON.stringify(msc_credits)+";\n":"";
                    e="offset_js = "+n.toFixed(2)+";\n";opt.synbox=0;m="opt = "+JSON.stringify(opt)+";\n";
                    opt.synbox=1;q=lpRec.loopBtn?"lpRec = "+JSON.stringify(lpRec)+";\n":"";
                    
                    for(c=k.times.map(function(b){return b.toFixed(2)});c.length;)
                        g=c[9],d.push(l+c.splice(0,10).join(",")+"]"),l="["+g+",";c="times_arr = ["+d.join(",\n")+"];\n";$("#encr").prop("checked")?(g=Ba(L).map(function(b){return JSON.stringify(b)}),l=['"X:1"']):(g=[""],l=L.map(function(b){return JSON.stringify(b)}));g="abc_enc = ["+g.join(",\n")+"];\n";var l="abc_arr = ["+l.join(",\n")+"];\n",d="//########################################\n//# This page contains score data, timing data and the media file path. Save it as a text file in\n//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the\n",
d=d+"//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name\n",d=d+"//# Also works locally with file:///path/to/abcweb.html?file_name\n",d=d+'//# **** You have to correct the path to the media file below! (media_file="...";) ****\n',d=d+"//########################################\n//#\n",d=d+(f+h+e+m+q+c+l+g),x="data:text/plain;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(d)));if($("#drpuse").prop("checked"))$("#err").text(""),Dropbox.save(x,z+
".js",{success:function(){$("#err").text('"'+z+'.js" saved to your Dropbox.\n')},progress:function(b){},cancel:function(){},error:function(b){$("#err").text("Error: "+b+"\n");$("#err").append("fnm: "+z+", len: "+x.length+"\n")}});else try{b=document.createElement("a"),b.href=x,b.download=z+".js",b.text="Save synchronization data",$("#saveDiv").append(b),b.click()}catch(r){confirm("Do you want to save your synchronization data?")&&(document.open("text/html"),document.write("<pre>"+d+"</pre>"),document.close())}}
function Da(){W();$("#err").text("");var b,c="",d="",f,e,l,g,h="",k;b=window.location.href.replace("?dl=0","").split("?");if(e=b[0].match(/:\/\/([^/:]+)/))k=e[1];if(1<b.length){l=b[1].split("&");for(g=0;g<l.length;g++)b=l[g].replace(/d:(\w{15}\/[^.]+\.)/,"https://dl.dropboxusercontent.com/s/$1"),(e=b.match(/xml=(.*)/))?c=decodeURIComponent(e[1]).replace("www.dropbox","dl.dropboxusercontent"):(e=b.match(/med=(.*)/))?h=e[1]:(e=b.match(/tmr=(.*)/))?m.top_margin=parseInt(e[1]):(e=b.match(/tb=([\d.]*)/))?
offset_js=parseFloat(e[1]):(e=b.match(/te=([\d.]*)/))?endtime_js=parseFloat(e[1]):(e=b.match(/ip=(\d+.\d+.\d+.\d+)/))?m.ipadr=e[1]:(e=b.match(/^d([\d.]+)$/))?m.delay=parseFloat(e[1]):b.match(/ip=host/)&&k?m.ipadr=k:"mstr"==b?m.mstr=1:"jmp"==b?m.jump=1:"syn"==b?m.synbox=1:"nb"==b?m.no_menu=1:"sp"==b?m.spdctl=m.lopctl=1:"ur"==b?m.repufld=1:"npl"==b?m.noplyr=1:"ncr"==b?m.nocsr=1:"asc"==b?m.autscl=1:"cm"==b?m.ctrmed=1:"cs"==b?m.ctrnot=1:"nomed"==b?(m.nomed=1,m.noplyr=1):d=b,/(\.xml$)|(\.abc$)/.test(d)&&
(c=d,d=""),/(\.mp3$)|(\.mp4$)|(\.ogg$)|(\.webm$)/.test(d)&&(h=d,d="");h&&(11==h.length&&-1==h.indexOf(".")?opt.yubvid=h:media_file=decodeURIComponent(h).replace("www.dropbox","dl.dropboxusercontent"));(d||c)&&$("#wait").toggle(!0);c?$.get(c,"",null,"text").done(function(b,c){$("#err").append("preload: "+c+"\n");abc_arr=b.split("\n");y()}).fail(function(b,c,d){$("#wait").append("\npreload failed: "+c)}):d&&(0<=d.indexOf("dropbox.com")&&(d+="?dl=1"),$.getScript(d).done(function(b,c){$("#err").append("preload: "+
c+"\n");y()}).fail(function(b,c,e){$("#wait,#err").append("preload failed: "+e+", trying script tag ...\n");f=document.createElement("script");f.src=d;f.onload=function(){y()};f.onerror=function(){$("#wait").append("\npreload failed")};document.head.appendChild(f);document.head.removeChild(f)}))}return d||c}function y(){if("undefined"!=typeof abc_arr){var b=abc_arr.join("\n");"undefined"!=typeof abc_enc&&abc_enc.length&&(b=Ca(abc_enc),opt.no_menu=1);aa(b)}for(var c in m)opt[c]=m[c];"nospd"in opt&&
(opt.spdctl=!opt.nospd,opt.nospd=void 0);"undefined"!=typeof media_file&&media_file&&!opt.nomed&&(F(media_file,media_file),opt.btns=0);opt.yubvid&&!opt.nomed&&(F("",""),opt.btns=0);"undefined"!=typeof msc_credits&&(b=msc_credits.reduce(function(b,c){return b+c}),$("#credits").html(b));"undefined"!=typeof media_height&&(opt.media_height=media_height);opt.no_menu&&($("#sync").css("display","none"),opt.btns=0,$("body").off("dragenter dragleave drop dragover"),$("body").on("contextmenu",function(b){b.preventDefault()}));
$("#wait").toggle(!1);pa(!1)}function pa(b){if(b)for(var c in m)opt[c]=m[c];opt.ipadr&&Ea(opt.ipadr);opt.media_height&&$("#buttons").css("height",opt.media_height);for(c in opt)$("#"+c).prop("checked",opt[c]);ka();T();la();ja();V();$("#sync, #medbts, #meddiv, #err").css("visibility","visible")}function P(b){$("#err").append(b+"\n")}function Ea(b){r?P("websocket already open"):(r=new WebSocket("ws://"+b+":8091/"),r.onmessage=function(b){"master"==b.data?$("#mbar").css("background","rgba(255,0,0,0.2)"):
K(b.data,100*opt.delay)},r.onerror=function(b){P("socket error (server inaccessible?)");r=null},r.onopen=function(b){$("#mbar").css("background","rgba(0,255,0,0.2)");opt.mstr&&r.send("master");P("connection opened")},r.onclose=function(b){$("#mbar").css("background","");P("connection closed: "+b.code);r=null})}function Fa(b){if(!qa()&&"meddiv"==b.target.id){$("#buttons").css("opacity","0.5");$("#streep").css("opacity","1.0");var c="touchstart"==b.type,d=$("#meddiv"),f=c?b.originalEvent.touches[0].clientY:
b.pageY,e=$("#buttons").height();d.css("cursor","row-resize");d.on("mousemove touchmove",function(b){var d=$("body").height();opt.media_height=(100*(e+(c?b.originalEvent.touches[0].clientY:b.pageY)-f)/d).toFixed()+"%";$("#buttons").css("height",opt.media_height)});d.on("mouseup touchend",function(b){$("#buttons").css("opacity","1.0");$("#streep").css("opacity","0.0");d.off("mousemove touchmove mouseup touchend");d.css("cursor","initial");t()})}}function A(b){if(2==b){b=$("#speed").val();var c=b-opt.speed;
.06>=Math.abs(c)?b=0<c?1:-1:(opt.speed=b,b=0)}c=w.map(function(b,c){return{x:Math.abs(b-opt.speed),i:c}}).sort(function(b,c){return b.x-c.x})[0].i;-1==b&&0<c&&(opt.speed=w[c+b]);1==b&&c<w.length-1&&(opt.speed=w[c+b]);0==b&&(opt.speed=w[c]);$("#speed").val(opt.speed.toFixed(2));h&&!p&&(h.playbackRate=opt.speed);h&&p&&h.setPlaybackRate(opt.speed)}function ia(){k&&k.drawTags();opt.lopctl=$("#lopctl").prop("checked");$("#atag").css("display",opt.lopctl?"block":"none");$("#btag").css("display",opt.lopctl?
"block":"none")}function ya(){var b=Dropbox.createChooseButton({success:ua,cancel:function(){},linkType:"direct",multiselect:!1,extensions:[".xml",".abc",".txt",".js"]}),c=Dropbox.createChooseButton({success:function(b){R("dbx",b)},cancel:function(){},linkType:"preview",multiselect:!1,extensions:[".ogg",".mp3",".webm",".mp4"]});$("#abcfile").append(b);$("#mediafile").append(c)}function ra(b){b=$(this).prop("checked");var c=$(this).attr("id");opt[c]=b;switch(c){case "ctrnot":T();break;case "ctrmed":S();
break;case "spdctl":la();break;
/* chiamo due volte V(), che sarebbe la funzione per scalare lo spartito in base al div */
case "autscl":V(); V();break;case "lncsr":T();break;case "btns":ka();break;case "synbox":ja();break;case "noplyr":t();break;case "nocsr":k&&!E.paused&&(k.noCursor=b);break;case "metro":b||na()}}function sa(){$("#menu label").css("display","none")}function qa(){var b="none"!=$("#menu label").css("display")||$("#help").hasClass("showhlp");b&&($("#help").toggleClass("showhlp",!1),setTimeout(sa,0));return b}var u,M,k,n,Q,L,h,z,G,p=0,w=[],N=0,ea,m={},r=null,J,E=new C;opt={};onYouTubeIframeAPIReady=
function(){G=new YT.Player("vidyub",{events:{onReady:function(){$("#yubuse").prop("checked",!0);fa();da()},onStateChange:function(b){b.data==YT.PlayerState.PLAYING?(E.setKlok(H,100),A(0)):E.pause();b.data==YT.PlayerState.CUED&&t()}}})};q.prototype.setline=function(b){$("#wijzer").remove();this.sety(this.ymin[b],this.ymax[b]);this.setx(0,0,0);this.line=b;this.wijzer.prependTo(M[b]);this.width=u[b].width.baseVal.value;var c=$("#notation"),d=c.scrollTop(),f=d+c.height()-this.vmargin;(this.line_offsets[b+
1]>f||this.line_offsets[b]<d+this.vmargin)&&c.scrollTop(this.line_offsets[b]-this.tmargin)};q.prototype.sety=function(b,c){this.wijzer.attr("y",b.toFixed(2));this.wijzer.attr("width","2");this.wijzer.attr("height",(30+c-b).toFixed(2));this.shade.attr("fill","blue")};q.prototype.setx=function(b,c,d){var f=$("#notation"),e=f.scrollLeft(),h=e+f.width()-this.hmargin;opt.lncsr?(this.wijzer.attr("x",b.toFixed(2)),this.wijzer.attr("width","2"),this.shade.attr("fill-opacity",this.noCursor?"0.0":"0.5"),b/=
this.scale,(b>h||b<e+this.hmargin)&&f.scrollLeft(b-this.hmargin)):(this.wijzer.attr("x",c.toFixed(2)),this.wijzer.attr("width",(d-c).toFixed(2)),this.shade.attr("fill-opacity",this.noCursor?"0.0":""+opt.opacity),c/=this.scale,d/=this.scale,(d>h||c<e+this.hmargin)&&f.scrollLeft(c-this.hmargin))};q.prototype.time2x=function(b,c){if(!N){this.cursorTime=b;var d,f,e,l,g;d=this.times;for(g=this.time_ix;g<d.length&&b>d[g];)g+=1;if(g==d.length)p?1==h.getPlayerState()&&h.pauseVideo():h.paused||h.pause();else{for(;0<
g&&b<d[g-1];)--g;c&&.3>d[g]-b&&(d[g]=b-.01,console.log("tijdcor: "+(b-.01)+", maat: "+g),g<d.length-1&&(g+=1));opt.metro&&g!=this.time_ix&&za(g,b);this.time_ix=g;this.repcnt=this.tixlb[g][2];this.msre=l=this.tixlb[g][1];f=this.tixlb[g][0];this.line!=f&&this.setline(f);e=this.xs[f];f=d[g-1];g=d[g];d=e[l-1]+10;l=e[l]+10;f=d+(l-d)*(b-f)/(g-f);e=this.times[this.times.length-1];0>=b||b>e?this.setx(0,0,0):this.setx(f,d,l);opt.synbox&&this.showSyncInfo()}}};q.prototype.drawTags=function(){for(var b in{atag:1,
btag:1})b in lpRec&&(a=lpRec[b],this[b].prependTo(M[a.line]),this[b].attr("x",a.x),this[b].attr("y",this.ymin[a.line]))};q.prototype.doLoopTag=function(b,c,d,f,e){function h(b,c,d,e,f,g,l,k){if(!opt.lncsr){var n=m.xs[d];g=m.times;c=n[l-1];n=n[l];l=g[k-1];k=g[k];lpRec.loopStart==l+.01&&(b="btag",f="loopEnd");lpRec.loopEnd==k-.01&&(b="atag",f="loopStart");"loopStart"==f?g=l+.01:(c=n,g=k-.01)}lpRec[b]={x:c.toFixed(2),line:d};lpRec.loopBtn=e;lpRec[f]=g;m.drawTags()}var g,k,m=this;switch(lpRec.loopBtn){case 1:h("atag",
b,c,2,"loopStart",d,f,e);break;case 2:d>lpRec.loopStart&&h("btag",b,c,3,"loopEnd",d,f,e);break;case 3:g=Math.abs(lpRec.loopStart-d),k=Math.abs(lpRec.loopEnd-d),g<k?h("atag",b,c,3,"loopStart",d,f,e):h("btag",b,c,3,"loopEnd",d,f,e)}};q.prototype.x2time=function(b,c){var d,f,e,l,g,k;b*=this.scale;d=this.xs[c];e=1;if(b<d[0])O({keyCode:80});else{for(;e<d.length&&d[e]<b;)e+=1;e==d.length?O({keyCode:80}):(k=this.lbtix[c][e],k[this.repcnt]||(this.repcnt=1),k=k[this.repcnt],f=this.times,l=d[e-1],g=d[e],d=
f[k-1],f=f[k],l=d+(f-d)*(b-l)/(g-l),opt.lopctl?this.doLoopTag(b,c,l,e,k):opt.synbox&&(p?h.getPlayerState()==YT.PlayerState.PLAYING:!h.paused)?this.syncTimes(b,e,c,k):U(!1,(opt.lncsr?l:d+.01)+n))}};q.prototype.goMsre=function(b){var c=this.time_ix;h&&(b=b?this.times[c]+.01:2>=c?.01:this.times[c-2]+.01,U(!1,b+n))};q.prototype.showSyncInfo=function(){var b=this.time_ix,b=this.times[b]-this.times[b-1];$("#sync_info").html("duration&nbsp;measure:<br>"+b.toFixed(3)+" sec.<br>");$("#sync_info").append("media&nbsp;offset:<br>"+
n.toFixed(3)+" sec.")};q.prototype.changeTimesKeyb=function(b){this.changeTimes(this.lbtix[this.line][this.msre][this.repcnt]-1,b,0)};q.prototype.changeTimes=function(b,c,d){var f,e=this.times;for(b+=1;b<e.length;++b)f=d?e[b-1]+d:e[b]+c,e[b]=f};q.prototype.syncTimes=function(b,c,d,f){b=this.lbtix[d][c][this.repcnt]-1;d=(p?h.getCurrentTime():h.currentTime)-n-.2;0==b?(n+=d,p?h.seekTo(n+.01,!0):h.currentTime=n+.01,N&&$("#woff").click()):(--b,c=2==f?0:this.times[f-2],f=this.times[f-1],d<c+.5?alert("tempo faster than 240 bpm: first sync previous measures"):
(this.lastSync>b?this.changeTimes(b,d-f,0):(this.changeTimes(b,0,d-c),this.lastSync=b),opt.jump&&(p?h.seekTo(c+n+.01,!0):h.currentTime=c+n+.01)))};q.prototype.setSize=function(){var b,c,d,f,e;for(b=0;b<u.length;++b)c=u[b],d=c.width.baseVal.value,f=c.height.baseVal.value,e=$("#notation").prop("clientWidth"),c.width.baseVal.value=e,c.height.baseVal.value=e*f/d};q.prototype.setScale=function(){var b,c,d,f;c=u[0];b=c.getBoundingClientRect().width;c=c.viewBox.baseVal.width;d=$("svg>g").get(0).transform.baseVal;
d=d.length?d.getItem(0).matrix.a:1;this.scale=c/d/b;d=$("#notation").position();f=$("#notation").scrollTop();this.line_offsets=[];for(b=0;b<u.length;++b)c=$(u[b]).position(),this.line_offsets[b]=f+c.top-d.top;this.line_offsets[b]=$("#notation").prop("scrollHeight")};q.prototype.compCountIn=function(){var b={time:.25,num:4},c=1<this.time_ix?this.time_ix-1:this.time_ix,d=Math.min(this.times.length-1,c+3);if(d>c){var f=this.tixbts.slice(c,d).reduce(function(b,c){return b+c},0);b.time=(this.times[d]-
this.times[c])/f/opt.speed;b.num=this.tixbts[c]}return b};C.prototype.pause=function(){this.clearKlok();H()};C.prototype.play=function(){this.paused=!1;if(-1==this.klok){var b=this;this.setKlok(function(){b.currentTime+=b.step/1E3*opt.speed;H()},this.step)}};C.prototype.setKlok=function(b,c){-1!=this.klok&&clearInterval(this.klok);this.klok=b?setInterval(b,c):-1;this.paused=!1;k&&opt.nocsr&&(k.noCursor=1)};C.prototype.clearKlok=function(){-1!=this.klok&&clearInterval(this.klok);this.klok=-1;this.paused=
!0;k&&(k.noCursor=0)};var v=0;$(document).ready(function(){$("#drpuse").prop("checked",!1);Da()||pa(!0);$(window).resize(V);$("body").keydown(O);$("#save").click(oa);$("#speed").change(function(){A(2)});$("#lopctl").click(ia);var b='<a href="http://wim.vree.org/js/">abcweb</a> (version: '+msc_VERSION+")</br>\u00a9Willem Vree",b=b+'<br>using:<br><a href="http://moinejf.free.fr/js/">abc2svg</a>, \u00a9Jef Moine';$("#help").prepend('<div style="position: absolute; right: 5px;">'+b+"</div>");$("#helpm").click(function(){$("#help").toggleClass("showhlp")});

$("#meddiv").on("mousedown touchstart",Fa);
$("#fknp").change(function(){ca("btn",[])});
$("#mknp").change(function(){R("btn",[])});
$("#yknp").click(wa);
$("#yubid").keydown(function(b){b.stopPropagation()});
$("#yubuse").change(fa);
$("#drpuse").click(ma);
$("#notation").mousedown(function(){qa()||O({keyCode:80})});
$("#jump").change(ra);
$("#impbox").change(Y);
$("#menu * input").change(ra);
$("#menu label").toggle();
$("#mbar").click(function(){"none"==$("#menu label").css("display")?$("#menu label").toggle(!0):sa()});
$("#woff").change(function(){N=$(this).prop("checked")});
$.event.props.push("dataTransfer");
$("body").on("drop",va);
$("body").on("dragover",function(b){b.stopPropagation();
    b.preventDefault();
    b.dataTransfer.dropEffect="copy"});
$("body").on("dragenter dragleave",function(){$(this).toggleClass("indrag")})})})();
