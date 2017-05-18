$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

function signIn() {
	
	
	
		var login = "admin";
		var pass ="admin";
	
		var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

		var xhr = new XHR();

		// (2) запрос на другой домен :)
		xhr.open('GET', 'https://jerseybuzzapp.herokuapp.com/webapi/user/get/admin/admin', true);

		xhr.onload = function() {
		  var responseText = this.responseText;
			
		  
		  alert(responseText);
		}

		xhr.onerror = function() {
		  alert( 'Ошибка ' + this.status );
		}

		xhr.send();

	
	//window.location.href="data.html";
	
}



