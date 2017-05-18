$(document).ready(function() {
	
	var token = $.cookie('token');
	
	getData(token);
	

});


function signOut(){
	
	$.removeCookie('token');
	
}


function getData(token){
	
		var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

		var xhr = new XHR();

		// (2) запрос на другой домен :)
		xhr.open('GET', 'https://jerseybuzzapp.herokuapp.com/webapi/shoes/get/'+token, true);

		xhr.onload = function() {
			var obj = this.responseText;
			//alert( obj);
			var event = JSON.parse(obj);

			if(event["status"] =="OK"){
				
				$("#humidity").html(event["humidity"]);
				$("#temperature").html(event["temperature"]);
			}else{
				alert(event["errorValue"]);
				
			}
		  //window.location.href="data.html";
		}

		xhr.onerror = function() {
		  alert( 'Ошибка ' + this.status );
		}

		xhr.send();
	
	
	
	
}