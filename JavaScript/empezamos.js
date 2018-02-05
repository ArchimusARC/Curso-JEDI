
function square (number){
	return number*number;
}

function pairs(number) {
	if(number%2 == 0) return true;
	else return false;
}

function rectangle(horitz, vertical) {
	if(horitz === vertical) return "square";
	else return "rectangle";
}

function factorial(number) {
	var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}
	return total; 
}

function bullet_speed(meters,time) {
	return string(meters/time) + "m/s";
}

function greater (n1,n2,n3,n4) {
	var numbers = [n1,n2,n3,n4];
	var i = 1;
	var great = n1;
	for (i; i <= numbers.length - 1; i++) {
		if (numbers[i] > great)  great = numbers[i];
	}
}

function mcd_mcm(n1,n2) {
	var mcm;
	var mcd;
	return false;

}

function callit(){
	return pairs(square(4));
}


square(2);

pairs(42);

rectangle(6,8);

factorial(4);

bullet_speed(40,20);

greater (4, 8, 2, 17);

mcd_mcm(3,9);

callit();


