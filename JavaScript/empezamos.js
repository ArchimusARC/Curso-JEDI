
//Quadrat
function square (number){
	return number*number;
}

square(2);


//Es parell o imparell?
function pairs(number) {
	if(number%2 == 0) return "Es parell";
	return "Es imparell";
}

pairs(42);

pairs(27);


//Es rectangle o quadrat?
function rectangle(horitz, vertical) {
	var form;
	if(horitz === vertical) form = "square";
	else form = "rectangle";
	return form;
}

rectangle(6,8);

rectangle(3,3);


//Factorial de number
function factorial(number) {
	var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}
	var result = "Factorial of " +  number + " is " + total;
	return result; 
}

factorial(4);

function bullet_speed(meters,time) {
	return (meters/time) + " m/s ";
}

bullet_speed(400,20);

function greater (n1,n2,n3,n4) {
	var numbers = [n1,n2,n3,n4];
	var i = 1;
	var great = n1;
	for (i; i <= numbers.length - 1; i++) {
		if (numbers[i] > great)  great = numbers[i];
	}
	return "Greater number is: " + great;
}

greater (4, 8, 2, 17);

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

mcd_mcm(8,42);


function callit(){
	return pairs(square(4));
}

callit();

