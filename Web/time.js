$(document).ready(function() {
	$('#btnTableA1').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableA1').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableA2').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableA2').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableB1').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableB1').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableB2').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableB2').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableC1').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableC1').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableC2').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableC2').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	$('#btnTableIELTS').mouseover(function (){
		$(this).animate({width: '+=20px', height: '+=10px'});
	});
	$('#btnTableIELTS').mouseout(function (){
		$(this).animate({width: '-=20px', height: '-=10px'});
	});
	function playSound() {
		let sound = new Audio("audio.mp3");
		sound.play()
	}
	
	
	//tables
	$("#tableA1").hide();
	$("#tableA2").hide();
	$("#tableB1").hide();
	$("#tableB2").hide();
	$("#tableC1").hide();
	$("#tableC2").hide();
	$("#tableIELTS").hide();
	hideAll();
	$("#btnTableA1").click(function (){
		hideAll();
		$("#tableA1").show("slow");
	});
	$("#btnTableA2").click(function (){
		hideAll();
		$("#tableA2").show('slow');
	})
	;$("#btnTableB1").click(function (){
		hideAll();
		$("#tableB1").show("slow");
	});
	$("#btnTableB2").click(function (){
		hideAll();
		$("#tableB2").show("slow");
	});
	$("#btnTableC1").click(function (){
		hideAll();
		$("#tableC1").show("slow");
	});
	$("#btnTableC2").click(function (){
		hideAll();
		$("#tableC2").show("slow");
	});
	$("#btnTableIELTS").click(function (){
		hideAll();
		$("#tableIELTS").show("slow");
	});
	//tables
});

function hideAll(){
	$("#tableA1").hide();
	$("#tableA2").hide();
	$("#tableB1").hide();
	$("#tableB2").hide();
	$("#tableC1").hide();
	$("#tableC2").hide();
	$("#tableIELTS").hide();
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