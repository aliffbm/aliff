'use strict';

$(document).ready(function(){

	initializePage(); 

});

function initializePage(){

	$("#tree").click(function(e){
		e.preventDefault();
	
		var someHTML = "<div class='container'>" +
		
		"<h1 class='text-center nameHeader'><img class='img-circle' id='aliffPic' src='images/me.jpg' width=130/>Aliff Macapinlac</h1>" + 
		"<div class='row'><div class='col-sm-12'></div></div>"+
		"</div>";
		$("body").html(someHTML);  
		$("body").css({"background-image": "url(/images/frontPagePic.jpg)", "background-position": "center"});
		$("#aliffPic").css({"display": "inline-block"})
	});

	// $("#coffeeShop").click(function(e){
	// 	e.preventDefault();
	
	// 	var someHTML = 
	// 	"<div class='container'>" +
	// 	"<div class='row'>"+
	// 	"<div class='col-sm-3 col-sm-push-8'><h1 class='nameHeader' style='display: inline-block; min-width: 400px;'>Aliff Macapinlac<span>I have no special Talent." +
	// 	"<br>I am only passionately curious. <br>  &emsp; &emsp; &emsp;   - Albert Einstein</span></h1></div>" + 
	// 	"<div class='col-sm-2 col-sm-push-8'><img class='img-circle' id='aliffPic' src='images/me.jpg' width=130/></div>"+
	// 	"</div>" +
	// 	"<div class='row'>" +
	// 	"<div class='col-sm-5' style='border: 1px solid #fff'>Navigation Menu Goes Here</div>"+
	// 	"</div>"+ 
	// 	"</div>";
	// 	$("body").html(someHTML);  
	// 	$("body").css({"background-image": "url(/images/coffeeShop.png)", "background-position": "center"});
	// });

	$("#jungle").click(function(e){
		e.preventDefault();
		
		var someHTML = "<div class='container'>" +
		
		"<h1 class='text-center nameHeader'><img class='img-circle' id='aliffPic' src='images/me.jpg' width=130/>Aliff Macapinlac</h1>" + 
		"<div class='row'><div class='col-sm-12'></div></div>"+
		"</div>";
		$("body").html(someHTML);  
		$("body").css({"background-image": "url(/images/jungle.jpg)", "background-position": "center"});
	});

		$("#antarctica").click(function(e){
		e.preventDefault();
		
		var someHTML = "<div class='container'>" +
		
		"<h1 class='text-center nameHeader'><img class='img-circle' id='aliffPic' src='images/me.jpg' width=130/>Aliff Macapinlac</h1>" + 
		"<div class='row'><div class='col-sm-12'></div></div>"+
		"</div>";
		$("body").html(someHTML);  
		$("body").css({"background-image": "url(/images/antarctica.jpg)", "background-position": "center"});
	});

}