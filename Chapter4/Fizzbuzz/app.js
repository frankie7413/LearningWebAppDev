var main = function() {
	"use strict";
	var $content, $newline, num;

	//gets the values to print
	var addline = function(num) {
		$newline = $("<span>").text(num + " ");
		$("body").append($newline);
	};

	var print = function(num1, num2) {
		$content = $("<p>");
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
		$("body").append($content);
	};

	function fizzbuzz_1() {
		print(1, 100);
	};


	function fizzbuzz_2 (start, end) {
		print(start, end)
	};

	function fizzbuzz_3 (arr) {
		$content = $("<p>");
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
		$("body").append($content);
	};

	function fizzbuzz_4 (obj) {
		$content = $("<p>");
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
		$("body").append($content);
	};

	function fizzbuzz_5 (arr, obj) {
		$content = $("<p>");
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
		$("body").append($content);
	};
		
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



