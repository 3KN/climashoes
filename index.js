var user;

$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

function signIn() {
	
	
		var login = document.getElementById("login").value;
		var pass =document.getElementById("pass").value;
	
		var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

		var xhr = new XHR();

		// (2) запрос на другой домен :)
		xhr.open('GET', 'https://jerseybuzzapp.herokuapp.com/webapi/user/get/'+login+'/'+pass, true);

		xhr.onload = function() {
			var obj = this.responseText;
			//alert( obj);
			var event = JSON.parse(obj);

			if(event["status"] =="OK"){
				$.cookie('token', event["token"],{ path: '/' });
				window.location.href="data.html";
			}else{
				alert(event["errorValue"]);
				
			}
		  //window.location.href="data.html";
		}

		xhr.onerror = function() {
		  alert( 'Ошибка ' + this.status );
		}

		xhr.send();

	
	//window.location.href="data.html";
	
}





