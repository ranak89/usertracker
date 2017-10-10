var base_url = "http://52.6.251.159/~customweb/swayengine/backend/home/";

//var base_url = "http://localhost/latestCI/home/";
var requestURL = document.getElementById("loadJS").getAttribute("src");
console.log(base_url);
var queryString = requestURL.substring(requestURL.indexOf("?") + 1, requestURL.length);

var params = queryString.split("&");

var uid = params[0].substring(params[0].indexOf("=") + 1, params[0].length);
var udid = params[1].substring(params[1].indexOf("=") + 1, params[1].length);

console.log('uid',uid);

$(document).ready(function(){
	
	var url = window.location.href;
	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
		$.ajax({
		    url: base_url + "getUserData",
		    data: {'data': data, 'uid': uid, 'udid': udid, 'ip': data['ip'], 'country_name': data['country_name'], 'latitude': data['latitude'], 'longitude': data['longitude']},
		    type: "post",
		    success: function(data){
		    	$('body').append(data);
    		}   
		});

	});	
	
	try{
        opera.setOverrideHistoryNavigationMode('compatible');
        history.navigationMode = 'compatible';
    }catch(e){}

    /*function ReturnMessage()
    {
        return "wait";
    }

    function UnBindWindow()
    {
        $(window).unbind('beforeunload', ReturnMessage);
    }

    $(window).bind('beforeunload',ReturnMessage ); */
});

