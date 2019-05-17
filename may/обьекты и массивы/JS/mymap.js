let myArray = [2, 5, 33, 4, 14, 10]


function square(x) { 
	return x**2;
}


function mymap(func, array) {
	new_array = []
	for ( var i in array) {
		new_array.push(func(array[i]));
	}
	return new_array
};




document.write(`New Array: ${mymap(square, myArray)}`)
document.write('<br />')
document.write(`Old Array: ${myArray}` )