"use strict";

/* This section was written to test the code. Not part of the assignment
var x = vec2(3,3)
var p = vec2(2,2)
var q = vec2(4,4)
var a = 2
var b = 4
var numerator=[];
var denominator=[];
*/

/*
window.onload = function init()
{
	var result = map_point(p,q,x,a,b)
	alert(result);
	return;
}
*/


function map_point(p,q,x,a,b) //where p, q, x are affine combination/collinear/parallel
{
	if (typeof p == "number" && typeof q == "number" && typeof x == "number")
	{
			var s = (x-p)/(q-p) //if P, Q, X are scalar
	}
	else if (p.length == q.length == x.length)
	{
		//If P,Q,X are vectors
			var numerator = subtract(x,p)
			var denominator = subtract(q,p)
			var s = numerator[0]/denominator[0] //Calculate value of s. since affine combination/collinear/parallel, we use comparison of the same dimensional value.
	}
	else
	{
		alert("P,Q,X not of same type")
	}
	
	if (typeof a == "number" && typeof b == "number")
	{
		return (s*b + (1-s)*a) //If A,B are scalar
	}
	else if (a.length == b.length)
	{
		return mix(a,b,s) //If A, B are vectors
	}
	else
	{
		alert("A, B not of same type")
	}
}