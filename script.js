function findLargest(a, b, c) {
  //your code here
	const temp1=a>b?(a>c?a:c):(b>c?b:c);
	return temp1;
}

 const num1 = parseInt(prompt("Enter First Number."));
 const num2 = parseInt(prompt("Enter Second Number."));
 const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));

