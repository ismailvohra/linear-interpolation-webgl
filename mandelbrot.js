"use strict";

var L; //Scalar -> width/height since both are equal
var pixelpos; //array of length 2. index 0 = row. index 1 = column. Initial default values of zero.

window.onload = function init() //Init function as a prototype to display the working solution of this question.
{
	do{
		var Lmenu = prompt("Enter L")
	}while (Lmenu.length == 0 || isNaN(parseInt(Lmenu)))
	do{
	var rowmenu = prompt("Enter row number")
	}while(rowmenu.length==0 || isNaN(parseInt(rowmenu)))
	do{
	var colmenu = prompt("Enter column number")
	}while(colmenu.length==0 || isNaN(parseInt(colmenu)))
	var result = mandelbrot(parseInt(Lmenu), [parseInt(rowmenu), parseInt(colmenu)])
	alert("Complex number coordinates are: " + result[0] + "\n" +
	"WebGl coordinates are: " + result[1])
}
//Main function for the solution to the Q5.
function mandelbrot(L, pixelpos) //Input L as scalar. Pixelpos are the coordinates for the pixel position in an array of length 2.
{
	var W = L //W and H are same as L
	var H = L //W and H are same as L
	var row = pixelpos[0] //0th index is row number
	var col = pixelpos[1] //1th index is column number
	
	var real = map_point(0, W, col, -2, 2) //Mapping of point on real part of complex number (x-axis)
	var imag = map_point(0, H, row, 2, -2) //Mapping of point on complex part of complex number (y-axis)
	
	var webglx = map_point(0, W, col, -1, 1) //Mapping of point on WebGl coordinate system (x-axis)
	var webgly = map_point(0, H, row, 1, -1) //Mapping of point on WebGl coordinate system (y-axis)
	return [[real, imag], [webglx, webgly]] //Return complex mapping, and webgl mapping 
	
}

//Not part of the assignment. Just testcases for my own check.
/*
function testCases(){
	//mandelbrot(L, row, col)
	console.log(mandelbrot(4,[0,0]));
	// [-2,2]
	// [-1,1]

	console.log(mandelbrot(4,[1,2]));
	// [0,1]
	// [0,0.5]

	console.log(mandelbrot(4,[2,2]));
	// [0,-0]
	// [0,0]

	console.log(mandelbrot(4,[4,4]));
	// [2,-2]
	// [1,-1]

	console.log(mandelbrot(100,[50,10]));
	// [-1.6,-0]
	// [-0.8,0]

	console.log(mandelbrot(100,[90,95]));
	// [ 1.7999999999999998, -1.6]
	// [0.8999999999999999, -0.8]

	console.log(mandelbrot(10,[2,3]));
	// [ -0.7999999999999999, 1.2000000000000002 ]
	// [ -0.39999999999999997, 0.6000000000000001 ]

	console.log(mandelbrot(15, [7, 6]));
	// [ -0.3999999999999999, 0.1333333333333333]
	// [-0.19999999999999996, 0.06666666666666665 ]

	console.log(mandelbrot(4,[3,3]));
	// [ 1, -1]
	// [0.5, -0.5]

	console.log(mandelbrot(4,[3,0]));
	// [-2, -1]
	// [-1, -0.5]

	console.log(mandelbrot(9,[1,3]));
	// [-0.6666666666666669, 1.5555555555555554]
	// [ -0.3333333333333334, 0.7777777777777777]

	console.log(mandelbrot(9,[7,3]));
	// [-0.6666666666666669, -1.1111111111111112]
	// [-0.3333333333333334, -0.5555555555555556 ]

	console.log(mandelbrot(1000, [150, 150]));
	// [-1.4, 1.4]
	// [-0.7, 0.7]

	console.log(mandelbrot(1000, [780, 780]));
	// [1.12, -1.12]
	// [0.56, -0.56 ]

	console.log(mandelbrot(1000, [150, 780]));
	// [1.12, 1.4]
	// [ 0.56, 0.7]
}
*/