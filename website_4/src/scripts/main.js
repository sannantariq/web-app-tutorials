function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}



function add () {
	res = (parseFloat(n1.value) || 0) + (parseFloat(n2.value) || 0);
	sum.innerHTML = "= " + res;
}


var n1 = document.getElementById("input1");
var n2 = document.getElementById("input2");
var sum = document.getElementById("sum");

n1.addEventListener("input", add);
n2.addEventListener("input", add);