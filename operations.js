"use strict";

var vectorarray1 = [0,0,0,0]; //By default, an array holds values to cater to 2-4 dimensions. For vector 1
var vectorarray2 = [0,0,0,0]; //By default, an array holds values to cater to 2-4 dimensions. For vector 1
var vector1; //vector 1 to be built using MV.js constructors and taking in values from vectorarray1 for the required dimension.
var vector2; //vector 2 to be built using MV.js constructors and taking in values from vectorarray1 for the required dimension.
var menuoptions; //Main menu prompt in loop until exit is called


window.onload = function init()		// If we want a function to be executed first, we have to wait for this function call (called the onload event)
// It occurs when all the script files have been read in the HTML
{
    var menu = prompt("Please enter the dimension of the vector, or type 'exit' to exit the menu") //Prompt to enter dimensions of vectors to be used
	switch(menu) //Defines what to do for each of the 2,3 and 4 vector dimensions.
	{
		case '2':
		console.log("2 is valid");
		var temp = submenu(2);
		console.log(temp)
		vector1 = vec2(temp[0][0], temp[0][1]); //the index values 0 to 1 of vectorarray1 assigned to type(vec2) of MV.js
		vector2 = vec2(temp[1][0], temp[1][1]); //the index values 0 to 1 of vectorarray2 assigned to type(vec2) of MV.js
		console.log(vector1, vector2)
		options();
		break;
		
		case '3':
		console.log("3 is valid");
		var temp = submenu(3);
		vector1 = vec3(temp[0][0], temp[0][1], temp[0][2]); //the index values 0 to 2 of vectorarray1 assigned to type(vec2) of MV.js
		vector2 = vec3(temp[1][0], temp[1][1], temp[1][2]); //the index values 0 to 2 of vectorarray2 assigned to type(vec2) of MV.js
		options();
		break;
		
		case '4':
		console.log("4 is valid");
		var temp = submenu(4);
		vector1 = vec4(temp[0][0], temp[0][1], temp[0][2], temp[0][3]); //the index values 0 to 3 of vectorarray1 assigned to type(vec2) of MV.js
		vector2 = vec4(temp[1][0], temp[1][1], temp[1][2], temp[1][3]);//the index values 0 to 1 of vectorarray2 assigned to type(vec2) of MV.js
		options();
		break;
		
		case 'exit':
		console.log("exit is used") //Get out of the prompt if exit is called by user.
		return;
		
		case menu.length == 0: //If no input entered by user, and "Cancelled" button used on prompt.
		return;
		
		default:
		alert("Invalid option entered."); //alert for invalid input - validation check.
		console.log("invalid option entered");
		break;
	}
		
};

function submenu(dimension) //to be called after the dimension has been input by the user.
{
	var i;
	for (i=0; i<dimension; i++)
	{
		var vectorarray1prompt
		do{
			var vectorarray1prompt = prompt("Enter" + " " + i + "th" + "dimension value of your first vector")
			vectorarray1[i] = parseFloat(vectorarray1prompt) //replace default 0 values by the values input by the user.
		}while (vectorarray1prompt.length == 0 || isNaN(vectorarray1[i])) //If input is empty or non-number, reask for the value
	}
	
	for (i=0; i<dimension; i++)
	{
		var vectorarray2prompt
		do{
			var vectorarray2prompt = prompt("Enter" + " " + i + "th" + "dimension value of your second vector")
			vectorarray2[i] = parseFloat(vectorarray2prompt) //replace default 0 values by the values input by the user.
		}while (vectorarray2prompt.length == 0 || isNaN(vectorarray2[i])) //If input is empty or non-number, reask for the value
	}
	
	console.log(vectorarray1, vectorarray2);
	return [vectorarray1, vectorarray2];
}

function options() //main menu with all the options.
{
	do{ //While do loop applied so that the menu keeps running until exit is called
	menuoptions = prompt("Chose the relevant option number! \n \
	1: Tell whether the vectors are equal \n \
	2: Show the lengths of the vectors \n \
	3: Show the normalized vectors \n \
	4: Show the sum of the vectors \n \
	5: Show the difference of the vectors \n \
	6: Show the dot product of the vectors \n \
	7: Show the cross product of the vectors \n \
	exit: Exit the program")
	
	switch(menuoptions)
	{
		case '1':
		var result = equal(vector1, vector2)
		console.log(vector1)
		alert(result)
		break;
		
		case '2':
		var result = "Length of vector 1 is" + " " + length(vector1) + "\n" 
		+ "Length of vector 2 is" + " " + length(vector2) 
		alert(result)
		break;
		
		case '3':
		//Attempt to deep copying to avoid the original vector from being normalized
		var vec1copy = Array.from(vector1); 
		var vec2copy = Array.from(vector2);
		
		var result = "Normalized vector 1 is" + " " + normalize(vec1copy,0) + "\n" 
		+ "Normalized vector 2 is " + " " + normalize(vec2copy, 0)
		alert(result);
		break;
		
		case '4':
		var result = "Sum of the two vectors is:" + " " + add(vector1, vector2)
		alert(result)
		break;
		
		case '5':
		var result = "Difference of the two vectors is:" + " " + subtract(vector1, vector2)
		alert(result)
		break;
		
		case '6':
		var result = "Dot product of the two vectors is:" + " " + dot(vector1, vector2)
		alert(result)
		break;
		
		case '7':
		var result = "Cross product of the two vectors is:" + " " + cross(vector1, vector2)
		alert(result)
		break;
		
		case 'exit':
		return;
		break;
	} //Relevant MV.js functions used for each case.
	}while(menuoptions != 'exit')
}