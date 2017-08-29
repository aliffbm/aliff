

var width = document.getElementById("part").offsetWidth,
    height = document.getElementById("part").offsetHeight;



var svg = d3.select("#part").append("svg")
    .attr("width", width)
    .attr("height", height);




    window.onresize = function(){
    	width = document.getElementById("part").offsetWidth;
    	height = document.getElementById("part").offsetHeight;
    	height1 = document.getElementById("aboutMe").offsetHeight;
		width1 = document.getElementById("aboutMe").offsetWidth;
		
		d3.select("#aboutMEsvg").attr("width", width1).attr("height", height1);	

		$("#svgContainer img").css("width", width1).css("height", height1)
		.css("border-radius", "50px");

		svg.attr("width", width)
		.attr("height", height);

		//d3.select("circle").attr("cx", width1/2 + 50);

    	d3.select("#part").style("background-size", ""+width+"px "+height+"px");
    	svg.attr("width", width);

    	projectsWidth();

    }



var i = 0;
particle = function() {
 

  svg.insert("circle")
  	 
      .attr("cx", Math.random()*width)
      .attr("cy", Math.random()*height)
      .attr("r", .01)
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(5000)
      .ease(Math.sqrt)
      .attr("r", 200)
      .style("stroke-opacity", .5);
      //.remove();

}


var particleInterval = setInterval(particle, .10);

setTimeout(function(){
	
	var a = 1; 

	d3.select("#part").style("background-image", 'url("images/glider.jpg")')
			.style("background-size", ""+width+"px "+height+"px")
			.style("background-repeat", "no-repeat");
			
	var slideCircle = setInterval(function(){
		d3.select("#part").select("svg").style("opacity", (a-=.04));

		if(a < .01){
			clearInterval(particleInterval);
			d3.select("#part").select("svg").remove();
			
			
		}
	}, 500)
	
	
}, 2000);






var welcome = $("#welcome");

var w = 10; 
var arrived = false;
welcome.fadeIn(); 

var inter = setInterval(function(){
	welcome.css("margin-top", w+"px"); 
	w+=10; 
	if(w > 300){
	
		clearInterval(inter);
		setTimeout(offScreen, 1000);
	}
}, 10);



var k = 0; 
var c2 = -100;
var d = 0;
var c3 = -10;
function offScreen(){
	
	var it = setInterval(function(){
		k = k + c2;
		d = d+ c3;
		welcome.css("transform", "rotate("+d+"deg)");
		welcome.css("margin-left", k+"px");
	}, 30);

	setTimeout(function(){
		clearInterval(it);
		welcome.fadeOut();
		aboutMeSlide();
		
		

	}, 1000);
}

function aboutMeSlide(){

		var f = 100;
		$("#aboutMe").fadeIn(2000);

		var e = window.innerWidth;

		var itt = setInterval(function(){
			e = e - f;
			$("#aboutMe").css("margin-left", e+"px");

			if(e < 0){
				clearInterval(itt);
				$("#aboutMe").css("margin-left", "0px");
				theRest();

			}
		}, 1);
		
		

}

function theRest(){

	// 
	$(".blackDivide").fadeIn(2200);
	var mt = window.innerHeight - 500;
	var d = -40;
	var wala = setInterval(function(){

		mt = mt + d;
		$("#blackDivide").css("margin-top", mt+"px");

		if(mt < 50){  
			clearInterval(wala);
			$("#blackDivide").css("margin-top", "0px");
			$("#resumeSec").fadeIn(2000);
			//triangleFun();
			showMyPic();
			projectsWidth();
			$("#footer").fadeIn(2000); 


			

		}

	}, 32);

}


function showMyPic(){

	height1 = document.getElementById("aboutMe").offsetHeight;
	width1 = document.getElementById("aboutMe").offsetWidth;
	$("#svgContainer img").css("width", width1).css("height", height1)
	.css("border-radius", "50px");
	$("#svgContainer").slideDown(1000);
}

function projectsWidth(){
	var theProjectsWidth = document.getElementsByClassName("projects")[0].offsetWidth; 
	console.log("It is " + theProjectsWidth);

	for(var i = 0 ; i < document.getElementsByClassName("projects").length; i++){

		document.getElementsByClassName("projects")[i].children[0].style.width = theProjectsWidth+"px";
	}



}


// add clicks to project
function redirectAffiniate(){
	window.location = "https://github.com/goofysir04/affinvf";
}

function redirectOnlineJournalClub(){
	window.location = "https://onlineJournalClub.herokuapp.com";
}


