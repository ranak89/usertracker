
jQuery(document).ready(function(){
//var base_url = "http://52.6.251.159/~customweb/swayengine/backend/home/";
var base_url = "https://swayengine.com/backend/home/";

jQuery.getJSON('//freegeoip.net/json/?callback=?', function(data) {
		
		var hash = jQuery.fingerprint();
		
		var url = window.location.href;
		
		//$('body').append('<div id="dialog" title="Have a look at some of our latest stock" style="width: 900px;"></div>');
		//console.log(data);
		
		var info = [];
		 
	    var module = {
	        options: [],
	        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
	        dataos: [
	            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
	            { name: 'Windows', value: 'Win', version: 'NT' },
	            { name: 'iPhone', value: 'iPhone', version: 'OS' },
	            { name: 'iPad', value: 'iPad', version: 'OS' },
	            { name: 'Kindle', value: 'Silk', version: 'Silk' },
	            { name: 'Android', value: 'Android', version: 'Android' },
	            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
	            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
	            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
	            { name: 'Linux', value: 'Linux', version: 'rv' },
	            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
	        ],
	        databrowser: [
	            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
	            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
	            { name: 'Safari', value: 'Safari', version: 'Version' },
	            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
	            { name: 'Opera', value: 'Opera', version: 'Opera' },
	            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
	            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
	        ],
	        init: function () {
	            var agent = this.header.join(' '),
	                os = this.matchItem(agent, this.dataos),
	                browser = this.matchItem(agent, this.databrowser);
	            
	            return { os: os, browser: browser };
	        },
	        matchItem: function (string, data1) {
	            var i = 0,
	                j = 0,
	                html = '',
	                regex,
	                regexv,
	                match,
	                matches,
	                version;
	            
	            for (i = 0; i < data1.length; i += 1) {
	                regex = new RegExp(data1[i].value, 'i');
	                match = regex.test(string);
	                if (match) {
	                    regexv = new RegExp(data1[i].version + '[- /:;]([\\d._]+)', 'i');
	                    matches = string.match(regexv);
	                    version = '';
	                    if (matches) { if (matches[1]) { matches = matches[1]; } }
	                    if (matches) {
	                        matches = matches.split(/[._]+/);
	                        for (j = 0; j < matches.length; j += 1) {
	                            if (j === 0) {
	                                version += matches[j] + '.';
	                            } else {
	                                version += matches[j];
	                            }
	                        }
	                    } else {
	                        version = '0';
	                    }
	                    return {
	                        name: data1[i].name,
	                        version: parseFloat(version)
	                    };
	                }
	            }
	            return { name: 'unknown', version: 0 };
	        }
	    };
	    
	    var e = module.init(),
	        debug = '';
	    
	    data['os'] = e.os.name;
	    data['version'] = e.os.version;
	    data['browser'] = e.browser.name;
	    data['browserversion'] = e.browser.version;
	    
	    data['agent'] = navigator.userAgen;
	    data['appVersion'] = navigator.appVersion;
	    data['platform'] = navigator.platform;
	    data['vendor']  = navigator.vendor;
		
		
		jQuery.ajax({
			url: "https://swayengine.com/backend/home/loadData",
	        type: "post",
	        async:false,
	        cache: false,
	        data: {'url': url , 'data': data , 'hash': hash, 'ip': data['ip'], 'country_name': data['country_name'], 'latitude': data['latitude'], 'longitude': data['longitude']},
	        success: function(d) {
	        }
		});
	});	


	/*
	var url = window.location.href;
	
	$(document).mouseleave(function(){
		$.ajax({
		    url: base_url + "getBoxData",
		    data: {'url' : url},
		    type: "post",
		    success: function(data){
        		//$("#dialog").html(data);
//        		$("#dialog").dialog(
//        			       {
//        				        bgiframe: true,
//        				        autoOpen: false,
//        				        height: 600,
//        				        width: 900,
//        				        modal: true
//        			       }
//        				);
        		//$("#dialog").dialog('open');
    		}   
		});

		
	
	});
	
	try{
        opera.setOverrideHistoryNavigationMode('compatible');
        history.navigationMode = 'compatible';
    }catch(e){}

    function ReturnMessage()
    {
        return "wait";
    }

    function UnBindWindow()
    {
        $(window).unbind('beforeunload', ReturnMessage);
    }

    $(window).bind('beforeunload',ReturnMessage ); */
});

