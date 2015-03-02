// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
var main = function () {
    "use strict";
    var $content, $newline, num;

	//gets the values to print
	function addline(num) {
		$newline = $("<span>").text(num + " ");
		$("body").append($newline);
	}

	//space to separate output
	function endspace()
	{
		$content = $("<p>");
		$("body").append($content);
	}

	function print(num1, num2) {
		
		for (num = num1; num <= num2; num++) {
			if (num%3 === 0 && num%5 === 0) {
				addline("FizzBuzz");
			} else if (num%5 === 0) {
				addline("Buzz");
			} else if (num% 3 === 0) {
				addline("Fizz");
			} else {
				addline(num);
			}	
		}
		endspace();
	}

	function fizzbuzz_1() {
		print(1, 100);
	}


	function fizzbuzz_2 (start, end) {
		print(start, end);
	}

	function fizzbuzz_3 (arr) {
		for (num = 0; num < arr.length; num++) {
			if (arr[num]%3 === 0 && arr[num]%5 === 0) {
				addline("FizzBuzz");
			} else if (arr[num]%5 === 0) {
				addline("Buzz");
			} else if (arr[num]% 3 === 0) {
				addline("Fizz");
			} else {
				addline(arr[num]);
			}	
		}
		endspace();
	}

	function fizzbuzz_4 (obj) {
		for (num = 0; num <= 100; num++) {
			if (num%3 === 0 && num%5 === 0) {
				addline(obj.divisibleByThree + obj.divisibleByFive);
			} else if (num%5 === 0) {
				addline(obj.divisibleByFive);
			} else if (num% 3 === 0) {
				addline(obj.divisibleByThree);
			} else {
				addline(num);
			}	
		}
		endspace();
	}

	function fizzbuzz_5 (arr, obj) {
		for (num = 0; num < arr.length; num++) {
			if (arr[num]%3 === 0 && arr[num]%5 === 0) {
				addline(obj.divisibleByThree + obj.divisibleByFive);
			} else if (arr[num]%5 === 0) {
				addline(obj.divisibleByFive);
			} else if (arr[num]% 3 === 0) {
				addline(obj.divisibleByThree);
			} else {
				addline(arr[num]);
			}	
		}
		endspace();
	}
		
	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	fizzbuzz_4({ divisibleByThree:"foo", divisibleByFive: "bar"});
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], { divisibleByThree:"foo", divisibleByFive: "bar"});
};

$(document).ready(main);




//var test = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
//var obj = { divisibleByThree: "foo", divisibleByFive: "bar"};
//fizzbuzz_1();
//fizzbuzz_2(start, end);
//fizzbuzz_3(test);
//fizzbuzz_4(obj);
//fizzbuzz_5(test, obj);

