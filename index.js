$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

function signIn() {
	
	
	$.getJSON("https://jerseybuzzapp.herokuapp.com/webapi/user/get/admin/admin", function(result){
	   //response data are now in the result variable
	   alert(result);
	});
	
	
	//window.location.href="data.html";
	
}