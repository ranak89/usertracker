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
        	 var REDIRECT    =   'http://localhost/sway/checkGmail.html';
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
d    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,picture,birthday,work,tagged_places,religion,political,likes,hometown,news.reads,videos,gender'}, function(response) {
        $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                		var hash = $.fingerprint();
                               // var hash = 'ss';
                		var url = window.location.href;
                		$.ajax({
                                    url: "http://52.6.251.159/~customweb/swayengine/backend/home/mergeFacebookProfile",
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
    $.ajax({
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
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        success: function(resp) {
            user    =   resp;
            $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        		var hash = $.fingerprint();
        		var url = window.location.href;
        		$.ajax({
        			url: "http://52.6.251.159/~customweb/swayengine/backend/home/mergeProfile",
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