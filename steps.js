$(document).ready(function() {
	
	var token = $.cookie('token');
	
	getSteps(token);
	

});

function signOut(){
	
	$.removeCookie('token');
	
}


function getSteps(token){
	
	
	
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

		var xhr = new XHR();

		// (2) запрос на другой домен :)
		xhr.open('GET', 'https://jerseybuzzapp.herokuapp.com/webapi/steps/get/'+token, true);

		xhr.onload = function() {
			var obj = this.responseText;
			//alert( obj);
			var event = JSON.parse(obj);

			if(event["status"] =="OK"){
				
				var jsonArr = event["dates"];
				makeLI(jsonArr);
				
				
				
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
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]["date"] + " "+ array[i]["steps"]);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


function makeLI(jsonArr) {
	
	var element = document.getElementById("kekcheb");
 	for (i = 0; i < jsonArr.length; i++) { 
		
		var li=document.createElement('li');
		li.innerHTML=li.innerHTML + jsonArr[i]["date"] + " "+ jsonArr[i]["steps"];
		element.appendChild(li);
	 
	}

}