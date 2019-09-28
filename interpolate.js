"use strict";

//Global constants
var black = vec3(0,0,0) 
var white = vec3(1,1,1)
var red = vec3(1,0,0)
var green = vec3(0,1,0)
var blue = vec3(0,0,1)

//Global variables
var gray //for the gray vector to be generated
var color //for the colored vector to be generated

window.onload = function init() //Just to showcase a running prototype of this question.
{
	do{
		var inputwidth = prompt("Enter width of the canvas")
	} while (inputwidth.length == 0 || isNaN(parseInt(inputwidth)))
	do {
		var inputc = prompt("Enter coordinate of the pixel")
} while (inputc.length == 0 || isNaN(parseInt(inputc)))
	var result = interpolate(parseInt(inputwidth), parseInt(inputc))
	alert("Webgl coordinate are: " + result[0] + "\n" +
	"gray mapping is: " + result[1] + "\n" +
	"color mapping is: " + result[2])
	return;

}

//Main function to the solution of Q4.
function interpolate(W,c) // where W is the width of canvas, c is the pixel coordinate on x-axis 
{
	var webglcoord = map_point(0, W, c, -1, 1) //mapping on -1,1 (webgl x axis)
	var gray = map_point(0,W,c, black, white) //mapping between black and white
	if (webglcoord <= 0)
	{
		color = map_point(-1,0,webglcoord,red, green) //mapping between red and green
	}
	else
	{
		color = map_point(0,1,webglcoord,green, blue) //mapping between green and blue
	}
	
	return [[webglcoord,0], gray, color] //y coordinate of webgl is hardcoded as 0 as mentioned in the question.
}
//Testcases to check if the function works correctly. Not part of the assignment.
/*
function testCases(){
	//outputter(W, point)
	console.log(interpolate(100,50));
	// [0,0]
	// [0.5, 0.5, 0.5]
	// [ 0, 1, 0 ]

	console.log(interpolate(100,0));
	// [ -1, 0 ]
	// [ 0, 0, 0 ]
	// [ 1, 0, 0 ]

	console.log(interpolate(100,100));
	// [ 1, 0 ]
	// [ 1, 1, 1 ]
	// [ 0, 0, 1 ]

	console.log(interpolate(4,2));
	// [ 0, 0 ]
	// [ 0.5, 0.5, 0.5 ]
	// [ 0, 1, 0 ]

	console.log(interpolate(4,1));
	// [ -0.5, 0 ]
	// [ 0.25, 0.25, 0.25 ]
	// [ 0.5, 0.5, 0 ]

	console.log(interpolate(50,10));
	// [ -0.6000000000000001, 0 ]
	// [ 0.2, 0.2, 0.2 ]
	// [ 0.6, 0.4, 0 ]

	console.log(interpolate(50,35));
	// [ 0.3999999999999999, 0 ]
	// [ 0.7, 0.7, 0.7 ]
	// [ 0, 0.6, 0.4 ]

	console.log(interpolate(50,49));
	// [ 0.96, 0 ]
	// [ 0.98, 0.98, 0.98 ]
	// [ 0, 0.040000000000000036, 0.96 ]
	
	console.log(interpolate(10,2));
	// [ -0.6000000000000001, 0 ]
	// [ 0.2, 0.2, 0.2 ]
	// [ 0.6, 0.4, 0 ]

}
*/