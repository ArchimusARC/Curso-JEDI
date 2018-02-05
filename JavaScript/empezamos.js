
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

	var mcd = function(a, b) {
    if ( ! b) {
        return a;
    }
	mcd(b, a % b);
	};

	var mcm = ni*n2/mcd(n1,n2);

	return "MCD = " + mcd(n1,n2) + ". MCM = " + mcm;
}

mcd_mcm(3,9);


function callit(){
	return pairs(square(4));
}

callit();

