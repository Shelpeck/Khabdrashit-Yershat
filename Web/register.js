var w = false;
$(document).ready(function() {
	var cnt = 0, iog = 1, level = 0;
	function playSound() {
		let sound = new Audio("audio.mp3");
		sound.play()
	}
	document.getElementById('register').addEventListener('mouseover', function () {if(cnt > 0)$('#register').css('background-color', 'green');});
	document.getElementById('register').addEventListener('mouseout', function () {if (cnt > 0)$('#register').css('background-color', 'yellow');});
	hideAll();
	
	//table in register
	$("input[name='radio']").click( function(){
		cnt = 0;
		var tableid = $("input[name='radio']:checked").val();
		var table = document.getElementById(tableid).cloneNode(true);
		if (tableid == "tableA1")
			level = 500;
		else if (tableid == "tableA2")
			level = 1000;
		else if (tableid == "tableB1")
			level = 1500;
		else if (tableid == "tableB2")
			level = 2000;
		else if (tableid == "tableC1")
			level = 2500;
		else if (tableid == "tableC2")
			level = 3000;
		else if (tableid == "tableIELTS")
			level = 1500;
		table.id = "tableRegister";
		table.style.display = null;
		var tds=table.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++)
			if (tds[i].innerHTML != "FULL")
				tds[i].innerHTML += "<input name='costtable' type='checkbox' value='1'>";
		document.getElementById('tableForForm').innerHTML = "";
		document.getElementById("tableForForm").appendChild(table);
		$('#tableRegister').hide();
		$('#tableRegister').show('slow');
		for (var i = 0; i < tds.length; i++)
			if (tds[i].innerHTML != "FULL")
				tds[i].addEventListener("click", function (){cnt = document.querySelectorAll('input[type="checkbox"]:checked').length;calc(cnt, iog, level);});
	});
	$('input[name="radioIOG"]').click( function() {
		var val = $('input[name="radioIOG"]:checked').val();
		if (val == "individual")
			iog = 3;
		else
			iog = 1;
		w = true;
		console.log(cnt > 0 && w == true)
		calc(cnt, iog, level);
	});
	//table in register
	$('#register').click(function () {if(cnt>0)playSound();});
});

function calc(cnt, iog, level) {
	document.getElementById('cost').innerHTML =	cnt * iog * level;
	if (cnt > 0&& w == true)
		document.getElementById('register').disabled = false;
}

function hideAll(){
	$("#tableA1").hide();
	$("#tableA2").hide();
	$("#tableB1").hide();
	$("#tableB2").hide();
	$("#tableC1").hide();
	$("#tableC2").hide();
	$("#tableIELTS").hide();
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("register");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

mybutton = document.getElementById("scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
function Dark(){
	var a = document.getElementsByClassName('table');
	for (let i = 0; i < a.length; i ++)
	{
		a[i].classList.toggle('darktable');
	}
	var b = document.body;
	b.classList.toggle('darkmode');
}