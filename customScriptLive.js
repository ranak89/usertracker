!function(n){n.fingerprint=function(){function e(){return[navigator.userAgent,[screen.height,screen.width,screen.colorDepth].join("x"),(new Date).getTimezoneOffset(),!!window.sessionStorage,!!window.localStorage,n.map(navigator.plugins,function(e){return[e.name,e.description,n.map(e,function(n){return[n.type,n.suffixes].join("~")}).join(",")].join("::")}).join(";")].join("###")}return function(){if("function"==typeof window.md5)return md5(e());throw"md5 unavailable, please get it from http://github.com/wbond/md5-js/"}()}}(jQuery),function(){function n(n,e){var t=n[0],u=n[1],s=n[2],v=n[3];u=i(u=i(u=i(u=i(u=a(u=a(u=a(u=a(u=o(u=o(u=o(u=o(u=r(u=r(u=r(u=r(u,s=r(s,v=r(v,t=r(t,u,s,v,e[0],7,-680876936),u,s,e[1],12,-389564586),t,u,e[2],17,606105819),v,t,e[3],22,-1044525330),s=r(s,v=r(v,t=r(t,u,s,v,e[4],7,-176418897),u,s,e[5],12,1200080426),t,u,e[6],17,-1473231341),v,t,e[7],22,-45705983),s=r(s,v=r(v,t=r(t,u,s,v,e[8],7,1770035416),u,s,e[9],12,-1958414417),t,u,e[10],17,-42063),v,t,e[11],22,-1990404162),s=r(s,v=r(v,t=r(t,u,s,v,e[12],7,1804603682),u,s,e[13],12,-40341101),t,u,e[14],17,-1502002290),v,t,e[15],22,1236535329),s=o(s,v=o(v,t=o(t,u,s,v,e[1],5,-165796510),u,s,e[6],9,-1069501632),t,u,e[11],14,643717713),v,t,e[0],20,-373897302),s=o(s,v=o(v,t=o(t,u,s,v,e[5],5,-701558691),u,s,e[10],9,38016083),t,u,e[15],14,-660478335),v,t,e[4],20,-405537848),s=o(s,v=o(v,t=o(t,u,s,v,e[9],5,568446438),u,s,e[14],9,-1019803690),t,u,e[3],14,-187363961),v,t,e[8],20,1163531501),s=o(s,v=o(v,t=o(t,u,s,v,e[13],5,-1444681467),u,s,e[2],9,-51403784),t,u,e[7],14,1735328473),v,t,e[12],20,-1926607734),s=a(s,v=a(v,t=a(t,u,s,v,e[5],4,-378558),u,s,e[8],11,-2022574463),t,u,e[11],16,1839030562),v,t,e[14],23,-35309556),s=a(s,v=a(v,t=a(t,u,s,v,e[1],4,-1530992060),u,s,e[4],11,1272893353),t,u,e[7],16,-155497632),v,t,e[10],23,-1094730640),s=a(s,v=a(v,t=a(t,u,s,v,e[13],4,681279174),u,s,e[0],11,-358537222),t,u,e[3],16,-722521979),v,t,e[6],23,76029189),s=a(s,v=a(v,t=a(t,u,s,v,e[9],4,-640364487),u,s,e[12],11,-421815835),t,u,e[15],16,530742520),v,t,e[2],23,-995338651),s=i(s,v=i(v,t=i(t,u,s,v,e[0],6,-198630844),u,s,e[7],10,1126891415),t,u,e[14],15,-1416354905),v,t,e[5],21,-57434055),s=i(s,v=i(v,t=i(t,u,s,v,e[12],6,1700485571),u,s,e[3],10,-1894986606),t,u,e[10],15,-1051523),v,t,e[1],21,-2054922799),s=i(s,v=i(v,t=i(t,u,s,v,e[8],6,1873313359),u,s,e[15],10,-30611744),t,u,e[6],15,-1560198380),v,t,e[13],21,1309151649),s=i(s,v=i(v,t=i(t,u,s,v,e[4],6,-145523070),u,s,e[11],10,-1120210379),t,u,e[2],15,718787259),v,t,e[9],21,-343485551),n[0]=l(t,n[0]),n[1]=l(u,n[1]),n[2]=l(s,n[2]),n[3]=l(v,n[3])}function e(n,e,r,o,a,i){return e=l(l(e,n),l(o,i)),l(e<<a|e>>>32-a,r)}function r(n,r,o,a,i,t,u){return e(r&o|~r&a,n,r,i,t,u)}function o(n,r,o,a,i,t,u){return e(r&a|o&~a,n,r,i,t,u)}function a(n,r,o,a,i,t,u){return e(r^o^a,n,r,i,t,u)}function i(n,r,o,a,i,t,u){return e(o^(r|~a),n,r,i,t,u)}function t(e){/[\x80-\xFF]/.test(e)&&(e=unescape(encodeURI(e))),txt="";var r,o=e.length,a=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=e.length;r+=64)n(a,u(e.substring(r-64,r)));e=e.substring(r-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<e.length;r++)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(n(a,i),r=0;r<16;r++)i[r]=0;return i[14]=8*o,n(a,i),a}function u(n){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=n.charCodeAt(e)+(n.charCodeAt(e+1)<<8)+(n.charCodeAt(e+2)<<16)+(n.charCodeAt(e+3)<<24);return r}function s(n){for(var e="",r=0;r<4;r++)e+=c[n>>8*r+4&15]+c[n>>8*r&15];return e}function v(n){for(var e=0;e<n.length;e++)n[e]=s(n[e]);return n.join("")}function l(n,e){return n+e&4294967295}function l(n,e){var r=(65535&n)+(65535&e);return(n>>16)+(e>>16)+(r>>16)<<16|65535&r}var c="0123456789abcdef".split("");md5=function(n){return v(t(n))},md5("hello")}(),jQuery(document).ready(function(){jQuery.getJSON("//freegeoip.net/json/?callback=?",function(n){var e=jQuery.fingerprint(),r=window.location.href,r={options:[],header:[navigator.platform,navigator.userAgent,navigator.appVersion,navigator.vendor,window.opera],dataos:[{name:"Windows Phone",value:"Windows Phone",version:"OS"},{name:"Windows",value:"Win",version:"NT"},{name:"iPhone",value:"iPhone",version:"OS"},{name:"iPad",value:"iPad",version:"OS"},{name:"Kindle",value:"Silk",version:"Silk"},{name:"Android",value:"Android",version:"Android"},{name:"PlayBook",value:"PlayBook",version:"OS"},{name:"BlackBerry",value:"BlackBerry",version:"/"},{name:"Macintosh",value:"Mac",version:"OS X"},{name:"Linux",value:"Linux",version:"rv"},{name:"Palm",value:"Palm",version:"PalmOS"}],databrowser:[{name:"Chrome",value:"Chrome",version:"Chrome"},{name:"Firefox",value:"Firefox",version:"Firefox"},{name:"Safari",value:"Safari",version:"Version"},{name:"Internet Explorer",value:"MSIE",version:"MSIE"},{name:"Opera",value:"Opera",version:"Opera"},{name:"BlackBerry",value:"CLDC",version:"CLDC"},{name:"Mozilla",value:"Mozilla",version:"Mozilla"}],init:function(){var n=this.header.join(" ");return{os:this.matchItem(n,this.dataos),browser:this.matchItem(n,this.databrowser)}},matchItem:function(n,e){var r,o,a,i,t=0,u=0;for(t=0;t<e.length;t+=1)if(r=new RegExp(e[t].value,"i"),r.test(n)){if(o=new RegExp(e[t].version+"[- /:;]([\\d._]+)","i"),a=n.match(o),i="",a&&a[1]&&(a=a[1]),a)for(a=a.split(/[._]+/),u=0;u<a.length;u+=1)i+=0===u?a[u]+".":a[u];else i="0";return{name:e[t].name,version:parseFloat(i)}}return{name:"unknown",version:0}}}.init();n.os=r.os.name,n.version=r.os.version,n.browser=r.browser.name,n.browserversion=r.browser.version,n.agent=navigator.userAgen,n.appVersion=navigator.appVersion,n.platform=navigator.platform,n.vendor=navigator.vendor,jQuery.ajax({url:"https://swayengine.com/backend/home/loadData",type:"post",async:!1,cache:!1,data:{url:r,data:n,hash:e,ip:n.ip,country_name:n.country_name,latitude:n.latitude,longitude:n.longitude},success:function(n){}})})});

//--------------------------------------------------------------------------------------------------

//=============================================== Facebook ==============================================
window.fbAsyncInit = function() {
FB.init({
        appId : '632690410273915', // App ID
        status: true,
        cookie: true,
        xfbml : true,
        oauth : true
});
FB.getLoginStatus(function(response) {
    console.log(response);
    if(response['status']=='connected'){
        FB.login(function(response) {
         if (response.authResponse) {            
             testAPI();
           /*FB.api('/me', function(response) {
            console.log(response);
            alert('Good to see you, ' + response.name + '.');
           });*/
         } else {
        	 
        	//============================================ Google ===============================================

        	 var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';
        	 var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
        	 var SCOPE       =   'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
        	 var CLIENTID    =   '67092056315-6hhjoehqdure3nrlr26ntmf7b33ev5t6.apps.googleusercontent.com';
        	 var REDIRECT    =   'https://swayengine.com/checkGmail.html';
        	 //var REDIRECT    = 	'http://52.6.251.159/~customweb/swayengine/gmaillogin/checkGmail.html';
        	 var LOGOUT      =   'http://accounts.google.com/Logout';
        	 var TYPE        =   'token';
        	 var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
        	 var acToken;
        	 var tokenType;
        	 var expiresIn;
        	 var user;
        	 var loggedIn    =   false;

        	     var win         =   window.open(_url, "windowname1", 'width=800, height=600'); 
        	     window.open().close();
        	   	var urls=_url;
        	     var pollTimer   =   window.setInterval(function() { 
        	         try {
        	             if (win.document.URL.indexOf(REDIRECT) != -1) {   
        	                 window.clearInterval(pollTimer);
        	                 var url =   win.document.URL;
        	                 acToken =   gup(url, 'access_token');
        	                 tokenType = gup(url, 'token_type');
        	                 expiresIn = gup(url, 'expires_in');
        	                win.close();

        	                 validateToken(acToken);
        	                 console.log(acToken);
        	             }
        	         } catch(e) {
        	         }
        	     }, 500);
        	 
           //alert('User cancelled login or did not fully authorize.');
         }
       });
   }
   function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,picture,birthday,work,tagged_places,religion,political,likes,hometown,news.reads,videos,gender'}, function(response) {
        console.log(response);
        console.log('Good to see you, ' + response.first_name + '.' + ' Email: ' + response.email + ' Facebook ID: ' + response.id);
        jQuery.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                		var hash = jQuery.fingerprint();
                               // var hash = 'ss';
                		var url = window.location.href;
                		jQuery.ajax({
                                    url: "https://swayengine.com/backend/home/mergeFacebookProfile",
                                    type: "post",
                                    async:false,
                                    cache: false,
                                    data: {'url': url , 'userinfo': response , 'hash': hash, 'ip': data['ip']},
                                        success: function(d) {
                                    }
                		});
                	});	
    });
}
});
// Additional initialization code here
};
// Load the SDK Asynchronously
(function(d){
	 var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
	 js = d.createElement('script'); js.id = id; js.async = true;
	 js.src = "//connect.facebook.net/en_US/all.js";
	 d.getElementsByTagName('head')[0].appendChild(js);
}(document));
 
 

function validateToken(token) {
    jQuery.ajax({
        url: VALIDURL + token,
        data: null,
        success: function(responseText){  
            getUserInfo();
            loggedIn = true;
        },  
        dataType: "jsonp"  
    });
}

function getUserInfo() {
    jQuery.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        success: function(resp) {
            user    =   resp;
            jQuery.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        		var hash = jQuery.fingerprint();
        		var url = window.location.href;
        		jQuery.ajax({
        			url: "https://swayengine.com/backend/home/mergeProfile",
        	        type: "post",
        	        async:false,
        	        cache: false,
        	        data: {'url': url , 'userinfo': user , 'hash': hash, 'ip': data['ip']},
        	        success: function(d) {
        	        }
        		});
        	});	
        },
        dataType: "jsonp"
    });
}

//credits: http://www.netlobo.com/url_query_string_javascript.html
function gup(url, name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\#&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    if( results == null )
        return "";
    else
        return results[1];
}