function check()
{
	var ps1 = document.getElementById('password').value;
var ps2 = document.getElementById('confirm').value;
if (ps1 != ps2)
{
	document.getElementById('ans').innerHTML='passowds not equal';
}
else
{
	document.getElementById('button').disabled=false;
	document.getElementById('ans').innerHTML='';
}
}