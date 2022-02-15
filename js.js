function check()
{
	var ps1 = document.getElementById('password').value;
	var ps2 = document.getElementById('confirm').value;
	if (ps1 == ps2)
		document.getElementById('ans').innerHTML='';
	if (ps1 != ps2)
	{
		document.getElementById('ans').innerHTML='passwords not equal';
		return false;
	}
	else
	{
		return true;
	}
}
function showPassword()
{
	var ps1 = document.getElementById('password');
	var ps2 = document.getElementById('confirm');
	if (ps1.type == "password")
	{
		ps1.type = "text";
		ps2.type = "text";
	}
	else
	{
		ps1.type = "password";
		ps2.type = "password";
	}
}
$(document).ready(function() {
	$("#checkbox").click(function() {
		if (document.getElementById('button').disabled == false) {
			document.getElementById('button').disabled = true;
		}
		if (check()) {
			document.getElementById('button').disabled = false;
		}
	});
	$("#textarea").bind('input', function (){
		$('#anyid').html($(this).val().length)
	});
	$("#pa").click(function() {
		$('#pa').fadeTo(3000, 0.5);
	});
	$("#btn1").click(function() {
		$("#box").animate({
			height: '+=400px',
			width: '+=400px'
		});
	});
	$("#btn2").click(function() {
		$("#box").animate({
			height: '100px',
			width: '100px'
		});
	});
	$('body').css("backgroundColor", "red");
});
function scrollToTop(){ 
	$(window).scrollTop(0);
}