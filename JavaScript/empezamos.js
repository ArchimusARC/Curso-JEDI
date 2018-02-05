
//Quadrat
function square (number){
	return number*number;
}

//Es parell o imparell?
function pairs(number) {
	if(number%2 == 0) return "Es parell";
	return "Es imparell";
}

//Es rectangle o quadrat?
function rectangle(horitz, vertical) {
	var form;
	if(horitz === vertical) form = "square";
	else form = "rectangle";
	return form;
}

//Factorial de number
function factorial(number) {
	var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}
	var result = "Factorial of " +  number + " is " + total;
	return result; 
}

//Velocidad de una bala dada una distancia y un tiempo
function bullet_speed(meters,time) {
	return (meters/time) + " m/s ";
}

//Averigua cual de los 4 números es más grande
function greater (n1,n2,n3,n4) {
	var numbers = [n1,n2,n3,n4];
	var i = 1;
	var great = n1;
	for (i; i <= numbers.length - 1; i++) {
		if (numbers[i] > great)  great = numbers[i];
	}
	return "Greater number is: " + great;
}

//Calcula el MCM y el MCD 
function mcd_mcm(n1,n2) {


	function gcd(x, y) {
	  if ((typeof x !== 'number') || (typeof y !== 'number')) 
	    return false;
	  x = Math.abs(x);
	  y = Math.abs(y);
	  while(y) {
	    var t = y;
	    y = x % y;
	    x = t;
	  }
	  return x;
	}

	var mcd = gcd(n1,n2);

	var mcm = n1*n2/mcd;

	return "MCD = " + mcd + ". MCM = " + mcm;

}

//Llama a pairs con el resultado de elevar al cuadrado el número dado
function callit(n){
	return pairs(square(n));
}


