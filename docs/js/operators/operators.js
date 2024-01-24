function main() {
	console.log("main method start");
	//concatenate1();
	//concatenate2();
	//addition1();
	//addition2();
	//subtraction();
	//multipication();
	//division();
	//reminder();
	//increment();
	//decrement();
	//append();
	//comparision();
	commonElements();
	commonElementsFromTwoArrays();
	console.log("main method emd");
}

function concatenate1() {
	console.log("concatenate1 method start");
	let firstName = "Salma";
	let lastName = "Shaik";
	//let fullName = firstName + lastName;
	let fullName = firstName + " " + lastName;
	console.log(fullName);
	console.log("concatenate1 method end");
}

function concatenate2() {
	console.log("concatenate2 method start");
	let firstName = "Salma";
	let lastName = "Shaik";
	firstName += lastName;
	console.log(firstName);
	console.log("concatenate2 method end");
}
function addition1() {
	console.log("addition1 method start");
	let x = 2;
	let y = 3;
	//x = x + y;
	x += y;
	console.log(x);
	console.log("addition1 method end");
}

function addition2() {
	console.log("addition2 method start");
	let x;
	let y;
	let z;
	let w;
	console.log(typeof x);
	x = 12;
	y = 13;
	z = 15;
	console.log(typeof x);
	console.log(typeof y);
	console.log(x + y);
	x = "12";
	y = "13";
	w = "16";
	let v = z + w;
	console.log(x + y);
	console.log(v);
	console.log(typeof v);
	console.log("addition2 method end");
}

function subtraction() {
	console.log("subtraction method start");
	let x = 13;
	let y = 12;
	let z = x - y;
	console.log(z);
	console.log("subtraction method end");
}

function multipication() {
	console.log("multipication method start");
	let x = 13;
	let y = 12;
	let z = x * y;
	console.log(z);
	console.log("multipication method end");
}

function division() {
	console.log("division method start");
	let x = 13;
	let y = 12;
	let z = x / y;
	console.log(z);
	console.log("division method end");
}

function reminder() {
	console.log("reminder method start");
	let x = 13;
	let y = 12;
	let z = x % y;
	console.log(z);
	console.log("reminder method end");
}

function increment() {
	console.log("increment method start");
	let x = 5;
	let y = 5;
	console.log(x);
	console.log(y);
	x = x++; //post increment
	y = ++y; //pre increment
	console.log(x); // 5
	console.log(y); // 6
	
	console.log(x++); //6 but it prints 5
	console.log(++y); //7
	console.log("increment method end");
}

function decrement() {
	console.log("decrement method start");
	let x = 5;
	let y = 5;
	console.log(x);
	console.log(y);
	let a = x--; //post
	let b = --y; //pre
	console.log(x); //4
	console.log(y); //4
	console.log(a); //4
	console.log(b); //4
	console.log("decrement method end");
}
function append() {
	let fn = "Salma";
	let ln = "Shaik";
	let x = 11;
	let y = 12;
	let z = '13';
	let a = x + y + z;
	let b = z + y + x;
	console.log(a);
	console.log(b);
	console.log(fn+" "+ln);
}
function comparision() {
	let x = 11;
	let y = 12;
	let z = 11;
	console.log(x==y);
	console.log(x==z);
	console.log(x!=y);
	console.log(x!=z);
}

function commonElements() 
{
	let values = [1, 2, 3, 1, 3, 4, 5, 6, 1, 3];
	let commons = [];
	for (let i = 0; i <= values.length; i++) 
	{
		let value1 = values[i];
		for (let j = 0; j <= values.length; j++) 
		{
			let value2 = values[j];
			if (i == j) {} 
			else 
			{
				if (value1 == value2) 
				{
					commons.push(value2);
				} 
				else {}
			}
		} // inner for loop
	} // outer for loop
	console.log(commons);
	commons =[...new Set(commons)];
	console.log(commons);
} // function close

function commonElementsFromTwoArrays() {
	let array1 = [1, 2, 5, 4, 6];
	let array2 = [2, 3, 7, 8, 5, 4];
	let array3 = [];
	for (let i = 0; i < array1.length; i++) 
	{
		let value1 = array1[i];
		for (let j = 0; j < array2.length; j++) 
		{
			let value2 = array2[j];
			if (i == j) {} 
			else 
			{
				if (value1 == value2) 
				{
					array3.push(value2);
				} 
				else {}
			}
		}
	}
	console.log(array3);
}

/*
What is the overloaded operator in javascript and java? 
+ addition and append
What is difference between == and === operators?
What is ternary ? operator?
*/