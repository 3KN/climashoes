$(document).ready(function() {
	
	var token = $.cookie('token');
	
	getData(token);
	
	
	
	var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];
	
	
	document.getElementById('kekcheb').appendChild(makeUL(options[1]));
	
	

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

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('li');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}



