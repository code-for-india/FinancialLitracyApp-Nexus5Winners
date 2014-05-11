
function isInternetExplorer(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if( msie != -1){
	return true;
    }
    return false;
}

function loading(please_wait_loader_message){
	var loading_div = document.getElementById("please_wait_loader");
	if( please_wait_loader_message != null && please_wait_loader_message != ""){
		$("#please_wait_loader_message").html(please_wait_loader_message);
	}
	if( loading_div  ){
		$("#please_wait_loader").show();
	}
}
function doneLoading(){
	var loading_div = document.getElementById("please_wait_loader");
	if( loading_div  ){
		$("#please_wait_loader").css({"display":"none"});
	}
}


function canConsoleLog(){
    return (!isInternetExplorer() && console != null);
}

function handleAJAXError(xhr, status){
	if( canConsoleLog() && "error" in console )console.error("There was a network error : "+xhr.status);
	if( xhr.status > 300 ){
	    if( xhr.status == 500 ){
	    	alert("OOPS! There was an error! Our Dev team will look into this. Please try again later.");
	    }else{
	    	alert("Network error. Please try again later : "+xhr.status);
	    }
	}
}

function doGetJSON(url, params, _callback){
    var start_time = new Date().getTime();
	if( params == undefined ){
		params = {};
	}
    var is_failure = false
    var make_websvc_call = true;
    if( make_websvc_call ){
    	var webServiceRetrievalStartTime = new Date().getTime();
    	$.getJSON(url, params, function(jsonData){
    		_callback(jsonData);
    	}).fail(function( xhr, status ){
    		is_failure = true
    		if( canConsoleLog() && "error" in console )console.error("There was a doGetJSON error url:"+url+" | xhr Status:"+xhr.status+" | xhr text:"+xhr.responseText+" | status : "+status);
    		handleAJAXError( xhr, status );
    	}).always(function() {
    		var webServiceRetrievalEndTime = new Date().getTime();
    		if( !is_failure ){
    			doneLoading();
    		}
    	});
    }
    
}

function doGetJSON_NoParams(url, _callback){
	doGetJSON(url, null, _callback);
}

function doPost(url, request_data, _callback){
	var start_time = new Date().getTime();
	var is_failure = false
	$.post(url, request_data, function(data){
		if( canConsoleLog() && "debug" in console )console.debug("Inside Callback Function doPost : "+url+" | time "+(new Date().getTime()));
		_callback(data);
	}).fail(function( xhr, status ){
		is_failure = true
		if( canConsoleLog() && "error" in console )console.error("There was a doPost error url:"+url+" | xhr Status:"+xhr.status+" | xhr text:"+xhr.responseText+" | status : "+status);
		handleAJAXError( xhr, status );
	}).always(function() {
		if( canConsoleLog() && "debug" in console )console.debug("Inside Always Function doPost : "+url+" | time "+(new Date().getTime()));
		doneLoading();
	});
}

function getDataBasedOnFilter(){
	var params = {district_selector: $("#district_selector").val(), 
					school_selector: $("#school_selector").val()};
	doGetJSON('/getUserDataAfterFilter', params, function(jsonData){
		if( jsonData.status == "success"){
			var teacher_ngo_partner_names = jsonData.teacher_ngo_partner_names;
			for( var id in teacher_ngo_partner_names){
				var ngo =  teacher_ngo_partner_names[id];
				
			}
		}
	});
}

function getFilterData(data_type, data_key, data_target){
	var params = {data_type: data_type, 
			data_key: data_key, 
			data_target: data_target};
	loading();
	doGetJSON('/getFilterData', params, function(jsonData){
		if( jsonData.status == "success"){
			var options = {
				    value: "ANY",
				    text: "--- ANY ---"
				};
			$("#district_selector").append($('<option>', options));
			$("#school_selector").append($('<option>', options));
			$("#teacher_selector").append($('<option>', options));
			$("#ngo_partner_selector").append($('<option>', options));
			
			for( var id in jsonData.all_districts_json){
				var district = jsonData.all_districts_json[id];
				var options = {
					    value: district.id,
					    text: district.district_name
					};
				var new_element = $('<option>', options);
				$("#district_selector").append(new_element);
			}
			for( var id in jsonData.all_schools_json){
				var school = jsonData.all_schools_json[id];
				var options = {
					    value: school.id,
					    text: school.school_name
					};
				var new_element = $('<option>', options);
				$("#school_selector").append(new_element);
			}
			for( var id in jsonData.all_teachers_json){
				var teacher = jsonData.all_teachers_json[id];
				var options = {
					    value: teacher.id,
					    text: teacher.teacher_name
					};
				var new_element = $('<option>', options);
				$("#teacher_selector").append(new_element);
			}
			for( var id in jsonData.all_ngo_partners_json){
				var ngo_partner = jsonData.all_ngo_partners_json[id];
				var options = {
					    value: ngo_partner.id,
					    text: ngo_partner.ngo_partner_name
					};
				var new_element = $('<option>', options);
				$("#ngo_partner_selector").append(new_element);
			}
		}
	});
}