import WpTest from "../WebPartyTest/WpTest.js";
import WpLinq from "./WpLinq.js";

let an;

let numbersArray = [2, 3, 6, 8, 1, 20, 5, -11, 0, 91];
let emptyArray = [];
let linq2NumbersArray = new WpLinq(numbersArray);
let linq2EmptyArray = new WpLinq(emptyArray);

let numbersMap = new Map([["two", 2], ["three", 3], ["six", 6], ["eight", 8], ["one", 1], ["twenty", 20], ["five", 5], ["minus eleven", -11], ["zero", 0], ["ninty one", 91]]);
let emptyMap = new Map();
let linq2NumbersMap = new WpLinq(numbersMap);
let linq2EmptyMap = new WpLinq(emptyMap);

let numbersSet = new Set(["two", "three", "six", "eight", "one", "twenty", "five", "minus eleven", "zero", "ninty one"]);
let emptySet = new Set();
let linq2NumbersSet = new WpLinq(numbersSet);
let linq2EmptySet = new WpLinq(emptySet);

let numbersInt16Array = new Int16Array([2, 3, 6, 8, 1, 20, 5, -11, 0, 91]);
let emptyInt16Array = new Int16Array();
let linq2NumbersInt16Array = new WpLinq(numbersInt16Array);
let linq2EmptyInt16Array = new WpLinq(emptyInt16Array);

let tempNumbersArr; /* to be used within tests using comma separator */
let tempString = null;

let linqTest = new WpTest.TestGroup("WpLinq tests");

an = new WpTest.AutoNumbering();

function isInteger(n) {
	return Math.floor(n) === n;
}

function dividedBy(a, b) {
	return isInteger(a / b);
}

let tempValue;

let peopleList = [
	{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
	{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
	{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
	{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
	{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
	{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
	{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
	{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
	{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
	{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
	{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
	{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
	{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
	{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
	{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
	{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
	{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
	{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
	{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
];

let peopleList2 = [
	{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation_id: 1 }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
	{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation_id: 15 }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
	{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation_id: 4 }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
	{ Id: 149, first_name: "Mark", last_name: "Brown", occupation_id: 5 }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 66, first_name: "Eve", last_name: "White", occupation_id: 22 }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
	{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation_id: 2 }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
	{ Id: 85, first_name: "Dana", last_name: "Lee", occupation_id: 6 }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
	{ Id: 266, first_name: "James", last_name: "Wilson", occupation_id: 9}, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 408, first_name: "Levy", last_name: "Williams", occupation_id: 11 }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
	{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation_id: 2 }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
	{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation_id: 3 }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
	{ Id: 608, first_name: "Henry", last_name: "Moore", occupation_id: 18 }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
	{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation_id: 7 }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
	{ Id: 55, first_name: "Mason", last_name: "Martin", occupation_id: 7 }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
	{ Id: 284, first_name: "Tom", last_name: "Smith", occupation_id: 5 }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
	{ Id: 502, first_name: "Dana", last_name: "Jones", occupation_id: 13 }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
	{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation_id: 1 }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
	{ Id: 181, first_name: "Mason", last_name: "Clark", occupation_id: 11 }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
	{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation_id: 12 }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
	{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation_id: 16 }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
	{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation_id: 11 }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
	{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation_id: 3 }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
];

let occupations = [
	{ id: 1, name: "Actor" },
	{ id: 2, name: "Business Broker" },
	{ id: 3, name: "Musician" },
	{ id: 4, name: "Composer" },
	{ id: 5, name: "Accountant" },
	{ id: 6, name: "Nurse" },
	{ id: 7, name: "Journalist" },
	{ id: 8, name: "Bitch" },
	{ id: 9, name: "Programmer" },
	{ id: 10, name: "Sucker" },
	{ id: 11, name: "Teacher" },
	{ id: 12, name: "Physicist" },
	{ id: 13, name: "Farmer" },
	//skip 14 for test
	{ id: 15, name: "Comedian" },
	{ id: 16, name: "Pilot" },
	{ id: 18, name: "Hairdresser" },
	{ id: 22, name: "Engineer" }
];

linqTest
	/* G R O U P */

	.groupStart("Linq object initialization")
	.throws(an.next("Initialize Linq object with number"), () => new WpLinq(2), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with big number"), () => new WpLinq(123n /* big integer */), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with boolean false"), () => new WpLinq(false), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with boolean true"), () => new WpLinq(true), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with symbol"), () => new WpLinq(Symbol("hello")), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with null"), () => new WpLinq(null), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with no parameter"), () => new WpLinq(/*undefined*/), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.throws(an.next("Initialize Linq object with object"), () => new WpLinq({}), (e) => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_iterable)
	.noThrows(an.next("Initialize Linq with []"), () => new WpLinq([2]))
	.noThrows(an.next("Initialize Linq with string"), () => new WpLinq(""))
	.noThrows(an.next("Initialize Linq with Map"), () => new WpLinq(new Map()))
	.noThrows(an.next("Initialize Linq with Set"), () => new WpLinq(new Set()))
	.noThrows(an.next("Initialize Linq with Array"), () => new WpLinq(new Array()))
	.noThrows(an.next("Initialize Linq with generator"), () => new WpLinq((function* () { })() /*generator iterable */))
	.noThrows(an.next("Initialize Linq with function 'arguments'"), function () { return new WpLinq(arguments); })
	.noThrows(an.next("Initialize Linq with Int16Array"), () => new WpLinq(new Int16Array))
	.groupClose()

	/* G R O U P */

	.groupStart("aggregate() function")
	.throws(an.next("accumulator = null"), () => new WpLinq(numbersArray).aggregate(-100, null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_accumulator)
	.throws(an.next("accumulator = 7"), () => new WpLinq(numbersArray).aggregate(-100, 7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_accumulator)
	.throws(an.next("resultSelector = 7"), () => new WpLinq(numbersArray).aggregate(-100, function f() { }, 7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector)

	.areEqual(an.next("numbersArray"), 91, new WpLinq(numbersArray).aggregate(-100, (item, soFar, index) => item > soFar ? item : soFar)) /* implement max */
	.areEqual(an.next("emptyArray"), -100, new WpLinq(emptyArray).aggregate(-100, (item, soFar, index) => item > soFar ? item : soFar)) /* implement max */
	.areEqual(an.next("numbersMap"), "minus hundred (-100)", linq2NumbersMap.aggregate(["minus hundred", -100], ([key, val], soFar, index) => val < soFar[1] ? [key, val] : soFar, ([key, val]) => key + ` (${val})`))
	.areEqual(an.next("numbersMap"), "minus eleven (-11)", linq2NumbersMap.aggregate(["hundred", 100], ([key, val], soFar, index) => val < soFar[1] ? [key, val] : soFar, ([key, val]) => key + ` (${val})`))
	.areEqual(an.next("emptyMap"), "ilan special number (i)", linq2EmptyMap.aggregate(["ilan special number", "i"], ([key, val], soFar, index) => val < soFar[1] ? [key, val] : soFar, ([key, val]) => key + ` (${val})`))
	.groupClose()

	/* G R O U P */

	.groupStart("all() function")
	.throws(an.next("predicate = null"), () => new WpLinq(numbersArray).all(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.throws(an.next("predicate = 7"), () => new WpLinq(numbersArray).all(7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)

	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).all(val => val >= -11))
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).all(val => val > -11))
	.isTrue(an.next("emptyArray"), new WpLinq(emptyArray).all(val => val != 0))

	.isTrue(an.next("numbersMap"), new WpLinq(numbersMap).all(([key, val], index) => val >= -11))
	.isFalse(an.next("numbersMap"), new WpLinq(numbersMap).all(([key, val], index) => val < 10))
	.isTrue(an.next("emptyMap"), new WpLinq(emptyMap).all(([key, val], index) => val < 10))

	.isTrue(an.next("numbersSet"), new WpLinq(numbersSet).all((val, index) => val.length >= 3))
	.isFalse(an.next("numbersSet"), new WpLinq(numbersSet).all((val, index) => val.length < 9))
	.isTrue(an.next("emptySet"), new WpLinq(emptySet).all((val, index) => val.length < 0))

	.isTrue(an.next("numbersInt16Array"), new WpLinq(numbersInt16Array).all((val, index) => val >= -22))
	.isFalse(an.next("numbersInt16Array"), new WpLinq(numbersInt16Array).all((val, index) => val < 80))
	.isTrue(an.next("emptyInt16Array"), new WpLinq(emptyInt16Array).all((val, index) => val < 10))

	/* use predefined LINQ variable multiple times. */
	.isTrue(an.next("Linq variable of numbersArray - first run"), linq2NumbersArray.all(val => val >= -11))
	.isTrue(an.next("Linq variable of numbersArray - second run"), linq2NumbersArray.all(val => val >= -11))
	.isFalse(an.next("Linq variable of numbersArray - third run"), linq2NumbersArray.all(val => val > -11))
	.isFalse(an.next("Linq variable of numbersArray - forth run"), linq2NumbersArray.all(val => val > -11))
	.isTrue(an.next("Linq variable of emptyArray - first run"), linq2EmptyArray.all(val => val != 0))
	.isTrue(an.next("Linq variable of emptyArray - second run"), linq2EmptyArray.all(val => val != 0))

	.isTrue(an.next("Linq variable of numbersMap - first run"), linq2NumbersMap.all(([key, val], index) => val >= -11))
	.isTrue(an.next("Linq variable of numbersMap - second run"), linq2NumbersMap.all(([key, val], index) => val >= -11))
	.isFalse(an.next("Linq variable of numbersMap - third run"), linq2NumbersMap.all(([key, val], index) => val < 10))
	.isFalse(an.next("Linq variable of numbersMap - forth run"), linq2NumbersMap.all(([key, val], index) => val < 10))
	.isTrue(an.next("Linq variable of emptyMap - first run"), linq2EmptyMap.all(([key, val], index) => val < 10))
	.isTrue(an.next("Linq variable of emptyMap - second run"), linq2EmptyMap.all(([key, val], index) => val < 10))

	.isTrue(an.next("Linq variable of numbersSet - first run"), linq2NumbersSet.all((val, index) => val.length >= 3))
	.isTrue(an.next("Linq variable of numbersSet - second run"), linq2NumbersSet.all((val, index) => val.length >= 3))
	.isFalse(an.next("Linq variable of numbersSet - third run"), linq2NumbersSet.all((val, index) => val.length < 9))
	.isFalse(an.next("Linq variable of numbersSet - forth run"), linq2NumbersSet.all((val, index) => val.length < 9))
	.isTrue(an.next("Linq variable of emptySet - first run"), linq2EmptySet.all((val, index) => val.length < 0))
	.isTrue(an.next("Linq variable of emptySet - second run"), linq2EmptySet.all((val, index) => val.length < 0))

	.isTrue(an.next("Linq variable of numbersInt16Array - first run"), linq2NumbersInt16Array.all((val, index) => val >= -22))
	.isTrue(an.next("Linq variable of numbersInt16Array - second run"), linq2NumbersInt16Array.all((val, index) => val >= -22))
	.isFalse(an.next("Linq variable of numbersInt16Array - third run"), linq2NumbersInt16Array.all((val, index) => val < 80))
	.isFalse(an.next("Linq variable of numbersInt16Array - forth run"), linq2NumbersInt16Array.all((val, index) => val < 80))
	.isTrue(an.next("Linq variable of emptyInt16Array - first run"), linq2EmptyInt16Array.all((val, index) => val < 10))
	.isTrue(an.next("Linq variable of emptyInt16Array - second run"), linq2EmptyInt16Array.all((val, index) => val < 10))
	.groupClose()

	/* G R O U P */

	.groupStart("any() function")
	.throws(an.next("predicate = 7"), () => new WpLinq(numbersArray).any(7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate)

	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).any(val => val >= -11)) /* all */
	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).any(val => val <= -11)) /* single */
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).any(val => val < -11)) /* none */
	.isFalse(an.next("emptyArray"), new WpLinq(emptyArray).any(val => val != 0))
	.isFalse(an.next("emptyArray"), new WpLinq(emptyArray).any(val => val >= 11))

	/* use predefined LINQ variable multiple times. */
	.isTrue(an.next("Linq variable of numbersMap - first run"), linq2NumbersMap.any(([key, val], index) => val >= -11)) /* all */
	.isTrue(an.next("Linq variable of numbersMap - second run"), linq2NumbersMap.any(([key, val], index) => val <= -11)) /* single */
	.isFalse(an.next("Linq variable of numbersMap - third run"), linq2NumbersMap.any(([key, val], index) => val < -11)) /* none */
	.isFalse(an.next("Linq variable of numbersMap - forth run"), linq2NumbersMap.any(([key, val], index) => val > 91)) /* none */
	.isFalse(an.next("Linq variable of emptyMap - first run"), linq2EmptyMap.any())
	.isFalse(an.next("Linq variable of emptyMap - second run"), linq2EmptyMap.any())
	.isFalse(an.next("Linq variable of emptyMap - first run"), linq2EmptyMap.any(([key, val], index) => val < 10))
	.isFalse(an.next("Linq variable of emptyMap - second run"), linq2EmptyMap.any(([key, val], index) => val < 10))
	.groupClose()

	/* G R O U P */

	.groupStart("append() function")
	.sequencesAreEqual(an.next("numbersArray"), (tempNumbersArr = numbersArray.slice(0), tempNumbersArr.push(89), tempNumbersArr), new WpLinq(numbersArray).append(89))
	.sequencesAreEqual(an.next("numbersArray"), (tempNumbersArr = numbersArray.slice(0), tempNumbersArr.push(89), tempNumbersArr), new WpLinq(numbersArray).append(89))
	.sequencesAreEqual(an.next("emptyArray"), ["hello"], new WpLinq(emptyArray).append("hello"))
	.areEqual(an.next("emptyArray"), 1, new WpLinq(emptyArray).append("hello").count())
	.isTrue(an.next("emptyArray"), new WpLinq(emptyArray).append("hello").single() === "hello")
	.groupClose()

	/* G R O U P */

	.groupStart("average() function")
	.areEqual(an.next("numbersSet"), numbersArray.reduce((a, b) => a + b, 0) / numbersArray.length, new WpLinq(numbersSet).select(v => numbersMap.get(v)).average())
	.areEqual(an.next("emptyArray"), undefined, new WpLinq(emptyArray).average())
	.areEqual(an.next("numbersSet"), numbersArray.reduce((a, b) => a + b, 0) / numbersArray.length, linq2NumbersSet.select(v => numbersMap.get(v)).average())
	.areEqual(an.next("numbersSet"), numbersArray.reduce((a, b) => a + b, 0) / numbersArray.length, linq2NumbersSet.select(v => numbersMap.get(v)).average())
	.areEqual(an.next("emptyArray"), undefined, linq2EmptyArray.average())
	.areEqual(an.next("emptyArray"), undefined, linq2EmptyArray.average())
	.groupClose()

	/* G R O U P */

	.groupStart("concat() function")
	.throws(an.next("not iterable argument - 7"), () => new WpLinq(numbersArray).concat(7), e => e.message === WpLinq.ErrorMessage.ALL_MUST_BE_ITERABLE)
	.throws(an.next("not iterable argument - null"), () => new WpLinq(numbersArray).concat(null), e => e.message === WpLinq.ErrorMessage.ALL_MUST_BE_ITERABLE)
	.throws(an.next("not iterable argument - undefined"), () => new WpLinq(numbersArray).concat(undefined), e => e.message === WpLinq.ErrorMessage.ALL_MUST_BE_ITERABLE)

	.sequencesAreEqual(an.next("numbersArray"), (tempNumbersArr = numbersArray.slice(0), tempNumbersArr.push(...(numbersArray.slice(0).reverse())), tempNumbersArr), new WpLinq(numbersArray).concat(linq2NumbersMap.select(([key, val]) => val).reverse()))
	.sequencesAreEqual(an.next("numbersMap"), (tempNumbersArr = numbersArray.slice(0), tempNumbersArr.push(...(numbersArray.slice(0).reverse())), tempNumbersArr.push(...numbersArray), tempNumbersArr.push(...(numbersArray.slice(0).reverse())), tempNumbersArr), linq2NumbersMap.select(([key, val]) => val).concat(linq2NumbersArray.reverse(), linq2NumbersArray, linq2NumbersArray.reverse()))
	.sequencesAreEqual(an.next("numbersArray"), linq2NumbersArray.duplicate(4), new WpLinq(numbersArray).concat(numbersArray, numbersArray, numbersArray))
	.areEqual(an.next("emptyArray"), 0, linq2EmptyArray.concat([]).count())
	.groupClose()

	/* G R O U P */

	.groupStart("contains() function")
	.throws(an.next("invalid equalityComparer - 7"), () => new WpLinq(numbersArray).contains(8, 7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.noThrows(an.next("invalid equalityComparer - null"), () => new WpLinq(numbersArray).contains(8, null))
	.noThrows(an.next("invalid equalityComparer - undefined"), () => new WpLinq(numbersArray).contains(2, undefined))

	/* numbersArray = [2, 3, 6, 8, 1, 20, 5, -11, 0, 91] */
	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).contains(8))
	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).contains(91))
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).contains(null))
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).contains())
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).contains(15))
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).contains(8, (value, item, itemIdx) => value == item - 2))
	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).contains(6, (value, item, itemIdx) => value == item - 2))
	.isTrue(an.next("numbersArray"), new WpLinq(numbersArray).contains(8, (value, item, itemIdx) => value == item + itemIdx))
	.isFalse(an.next("numbersArray"), new WpLinq(numbersArray).contains(6, (value, item, itemIdx) => value == item + itemIdx))
	.groupClose()

	/* G R O U P */

	.groupStart("count() function")
	.areEqual(an.next("numbersArray"), numbersArray.length, new WpLinq(numbersArray).count())
	.areEqual(an.next("emptyArray"), emptyArray.length, new WpLinq(emptyArray).count())

	.areEqual(an.next("numbersMap"), numbersMap.size, new WpLinq(numbersMap).count())
	.areEqual(an.next("emptyMap"), emptyMap.size, new WpLinq(emptyMap).count())

	.areEqual(an.next("numbersSet"), numbersSet.size, new WpLinq(numbersSet).count())
	.areEqual(an.next("emptySet"), emptySet.size, new WpLinq(emptySet).count())

	.areEqual(an.next("numbersInt16Array"), numbersSet.size, new WpLinq(numbersInt16Array).count())
	.areEqual(an.next("emptyInt16Array"), emptySet.size, new WpLinq(emptyInt16Array).count())

	/* use predefined LINQ variable multiple times. */

	.areEqual(an.next("Linq variable of numbersArray - first run"), numbersArray.length, linq2NumbersArray.count())
	.areEqual(an.next("Linq variable of numbersArray - second run"), numbersArray.length, linq2NumbersArray.count())
	.areEqual(an.next("Linq variable of emptyArray - first run"), emptyArray.length, linq2EmptyArray.count())
	.areEqual(an.next("Linq variable of emptyArray - second run"), emptyArray.length, linq2EmptyArray.count())

	.areEqual(an.next("Linq variable of numbersMap - first run"), numbersMap.size, linq2NumbersMap.count())
	.areEqual(an.next("Linq variable of numbersMap - second run"), numbersMap.size, linq2NumbersMap.count())
	.areEqual(an.next("Linq variable of emptyMap - first run"), emptyMap.size, linq2EmptyMap.count())
	.areEqual(an.next("Linq variable of emptyMap - second run"), emptyMap.size, linq2EmptyMap.count())

	.areEqual(an.next("Linq variable of numbersSet - first run"), numbersSet.size, linq2NumbersSet.count())
	.areEqual(an.next("Linq variable of numbersSet - second run"), numbersSet.size, linq2NumbersSet.count())
	.areEqual(an.next("Linq variable of emptySet - first run"), emptySet.size, linq2EmptySet.count())
	.areEqual(an.next("Linq variable of emptySet - second run"), emptySet.size, linq2EmptySet.count())

	.areEqual(an.next("Linq variable of numbersInt16Array - first run"), numbersArray.length, linq2NumbersInt16Array.count())
	.areEqual(an.next("Linq variable of numbersInt16Array - second run"), numbersArray.length, linq2NumbersInt16Array.count())
	.areEqual(an.next("Linq variable of emptyInt16Array - first run"), emptyArray.length, linq2EmptyInt16Array.count())
	.areEqual(an.next("Linq variable of emptyInt16Array - second run"), emptyArray.length, linq2EmptyInt16Array.count())
	.groupClose()

	/* G R O U P */

	.groupStart("defaultIfEmpty() function")
	.sequencesAreEqual(an.next(), numbersArray, linq2NumbersMap.select(([key, val]) => val).defaultIfEmpty())
	.sequencesAreEqual(an.next(), numbersArray.slice(1), linq2NumbersMap.skip(1).select(([key, val]) => val).defaultIfEmpty())
	.sequencesAreEqual(an.next(), new Set(["thousand"]), linq2EmptySet.defaultIfEmpty("thousand"))
	.groupClose()

	/* G R O U P */

	.groupStart("distinct() function")
	.throws(an.next("distinct with invalid equality comparer 1"), () => new WpLinq([44, 1, 2, 11, 23, 44, 1, 12, 23]).distinct(7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.sequencesAreEqual(an.next("distinct of array with duplicate items"), [44, 1, 2, 11, 23, 12], new WpLinq([44, 1, 2, 11, 23, 44, 1, 12, 23]).distinct())
	.sequencesAreEqual(an.next("distinct objects only by key"),
		[
			{ key: "a", value: 44 },
			{ key: "b", value: 1 },
			{ key: "c", value: 2 },
			{ key: "d", value: 11 },
			{ key: "e", value: 23 },
			{ key: "h", value: 12 }
		],
		new WpLinq([
			{ key: "a", value: 44 },
			{ key: "b", value: 1 },
			{ key: "c", value: 2 },
			{ key: "d", value: 11 },
			{ key: "e", value: 23 },
			{ key: "f", value: 44 },
			{ key: "g", value: 1 },
			{ key: "h", value: 12 },
			{ key: "i", value: 23 }
		]).distinct((a, b) => a.value === b.value),
		(a, b) => a.key === b.key && a.value === b.value)
	.sequencesAreEqual(an.next("distinct objects by both key and value"),
		[
			{ key: "a", value: 44 },
			{ key: "b", value: 1 },
			{ key: "c", value: 2 },
			{ key: "d", value: 11 },
			{ key: "e", value: 23 },
			{ key: "f", value: 44 },
			{ key: "g", value: 1 },
			{ key: "h", value: 12 },
			{ key: "i", value: 23 }
		],
		new WpLinq([
			{ key: "a", value: 44 },
			{ key: "b", value: 1 },
			{ key: "c", value: 2 },
			{ key: "d", value: 11 },
			{ key: "e", value: 23 },
			{ key: "f", value: 44 },
			{ key: "g", value: 1 },
			{ key: "h", value: 12 },
			{ key: "i", value: 23 }]).distinct((a, b) => a.key === b.key && a.value === b.value),
		(a, b) => a.key === b.key && a.value === b.value)
	.sequencesAreEqual(an.next("distinct of unique items array"), [44, 1, 2, 11, 23, 12], new WpLinq([44, 1, 2, 11, 23, 12]).distinct())
	.areEqual(an.next("distinct of empty array"), 0, new WpLinq([]).count())
	.groupClose()

	/* G R O U P */

	.groupStart("duplicate() function")
	.throws(an.next("invalid factor"), () => new WpLinq(["a", "b"]).duplicate(null), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor)
	.throws(an.next("invalid factor"), () => new WpLinq(["a", "b"]).duplicate(1.2), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor)
	.throws(an.next("invalid factor"), () => new WpLinq(["a", "b"]).duplicate(-0.2), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor)
	.throws(an.next("invalid factor"), () => new WpLinq(["a", "b"]).duplicate(-1.2), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor)
	.throws(an.next("invalid factor"), () => new WpLinq(["a", "b"]).duplicate(undefined), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor)
	.sequencesAreEqual(an.next("duplicate array 0 times"), [], new WpLinq(["a", "b", "c"]).duplicate(0))
	.sequencesAreEqual(an.next("duplicate array 1 time"), ["a", "b", "c"], new WpLinq(["a", "b", "c"]).duplicate(1))
	.sequencesAreEqual(an.next("duplicate array 2 time"), ["a", "b", "c", "a", "b", "c"], new WpLinq(["a", "b", "c"]).duplicate(2))
	.sequencesAreEqual(an.next("duplicate array 3 times"), ["a", "b", "c", "a", "b", "c", "a", "b", "c"], new WpLinq(["a", "b", "c"]).duplicate(3))
	.sequencesAreEqual(an.next("duplicate array 0 times (inplace)"), [], new WpLinq(["a", "b", "c"]).duplicate(0, true))
	.sequencesAreEqual(an.next("duplicate array 1 time (inplace)"), ["a", "b", "c"], new WpLinq(["a", "b", "c"]).duplicate(1, true))
	.sequencesAreEqual(an.next("duplicate array 2 time (inplace)"), ["a", "a", "b", "b", "c", "c"], new WpLinq(["a", "b", "c"]).duplicate(2, true))
	.sequencesAreEqual(an.next("duplicate array 3 times (inplace)"), ["a", "a", "a", "b", "b", "b", "c", "c", "c"], new WpLinq(["a", "b", "c"]).duplicate(3, true))
	.groupClose()

	/* G R O U P */

	.groupStart("elementAt() function")
	.throws(an.next("negative invalid index"), () => new WpLinq(["a", "b", "c"]).elementAt(/*none*/), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("negative invalid index"), () => new WpLinq(["a", "b", "c"]).elementAt(undefined), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("negative invalid index"), () => new WpLinq(["a", "b", "c"]).elementAt(null), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("negative invalid index"), () => new WpLinq(["a", "b", "c"]).elementAt("a"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("negative index"), () => new WpLinq(["a", "b", "c"]).elementAt(-1), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.areEqual(an.next("index = 0"), "a", new WpLinq(["a", "b", "c"]).elementAt(0))
	.areEqual(an.next("index = 1"), "b", new WpLinq(["a", "b", "c"]).elementAt(1))
	.areEqual(an.next("index = 2"), "c", new WpLinq(["a", "b", "c"]).elementAt(2))
	.throws(an.next("index out of range"), () => new WpLinq(["a", "b", "c"]).elementAt(3), e => e.message === WpLinq.ErrorMessage.OUT_OF_RANGE_index)
	.throws(an.next("empty array - negative index"), () => new WpLinq([]).elementAt(-1), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("empty array - sequence is empty"), () => new WpLinq([]).elementAt(0), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.throws(an.next("empty array - index out of range"), () => new WpLinq([]).elementAt(1), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.groupClose()

	/* G R O U P */

	.groupStart("elementAtOrDefault() function")
	.throws(an.next("undefined index"), () => new WpLinq(["a", "b", "c"]).elementAtOrDefault(undefined, "default item"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("null index"), () => new WpLinq(["a", "b", "c"]).elementAtOrDefault(null, "default item"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.throws(an.next("invalid index"), () => new WpLinq(["a", "b", "c"]).elementAtOrDefault("A", "default item"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index)
	.areEqual(an.next("index = -2"), "default item", new WpLinq(["a", "b", "c"]).elementAtOrDefault(-2, "default item"))
	.areEqual(an.next("index = -1"), "default item", new WpLinq(["a", "b", "c"]).elementAtOrDefault(-1, "default item"))
	.areEqual(an.next("index = 0"), "a", new WpLinq(["a", "b", "c"]).elementAtOrDefault(0, "default item"))
	.areEqual(an.next("index = 1"), "b", new WpLinq(["a", "b", "c"]).elementAtOrDefault(1, "default item"))
	.areEqual(an.next("index = 2"), "c", new WpLinq(["a", "b", "c"]).elementAtOrDefault(2, "default item"))
	.areEqual(an.next("index = 3"), "default item", new WpLinq(["a", "b", "c"]).elementAtOrDefault(3, "default item"))
	.areEqual(an.next("index = 4"), "default item", new WpLinq(["a", "b", "c"]).elementAtOrDefault(4, "default item"))
	.groupClose()

	/* G R O U P */

	.groupStart("empty() function")
	.areEqual(an.next(), 0, WpLinq.empty().count())
	.sequencesAreEqual(an.next(), [], WpLinq.empty())
	.groupClose()

	/* G R O U P */

	.groupStart("except() function")
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).except(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).except(12), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).except(undefined), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid equality comparer"), () => new WpLinq([2, 4, 6, 8, 10, 12]).except([4, 10], {}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.sequencesAreEqual(an.next(), [2, 6, 8, 12], new WpLinq([2, 4, 6, 8, 10, 12]).except([4, 10]))
	.sequencesAreEqual(an.next(), [2, 4, 6, 8, 10, 12], new WpLinq([2, 4, 6, 8, 10, 12]).except([]))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).except([2, 4, 6, 8, 10, 12]))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).except([]))
	.sequencesAreEqual(an.next(), [123], new WpLinq([123]).except([]))
	.sequencesAreEqual(an.next(), [123, 222], new WpLinq([123, 222]).except([]))
	.sequencesAreEqual(an.next(), [123], new WpLinq([123]).except([222]))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [4, 6, 8, 10, 12], new WpLinq([2, 4, 6, 8, 10, 12]).except([4, 10], (a, b) => a * 2 === b || a * 3 === b))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [8, 10, 12], new WpLinq([2, 4, 6, 8, 10, 12]).except([12, 4 /* reverse the variables!*/], (a, b) => a * 2 === b || a * 3 === b))
	.groupClose()

	/* G R O U P */

	.groupStart("first() function")
	.throws(an.next(), () => new WpLinq([]).first(), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.areEqual(an.next(), 2, new WpLinq([2, 4, 6, 8, 10, 12]).first())
	.throws(an.next("Invalid predicate"), () => new WpLinq([2, 3, 4, 6, 8, 10, 13]).first(7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate)
	.areEqual(an.next(), 3, new WpLinq([2, 3, 4, 6, 8, 10, 13]).first(a => dividedBy(a - 3, 5)))
	.throws(an.next(), () => new WpLinq([]).first(a => dividedBy(a - 3, 5)), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.throws(an.next(), () => new WpLinq([2, 3, 4, 6, 9, 13]).first(a => dividedBy(a - 1, 7)), e => e.message === WpLinq.ErrorMessage.NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate)
	.groupClose()

	/* G R O U P */

	.groupStart("firstOrDefault() function")
	.throws(an.next("Invalid predicate"), () => new WpLinq([2, 3, 4, 6, 8, 10, 13]).firstOrDefault(16, "invalid predicate"), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate)
	.areEqual(an.next(), 15, new WpLinq([]).firstOrDefault(15))
	.areEqual(an.next(), undefined, new WpLinq([]).firstOrDefault())
	.areEqual(an.next(), 2, new WpLinq([2, 4, 6, 8, 10, 12]).firstOrDefault(23))
	.areEqual(an.next(), 3, new WpLinq([2, 3, 4, 6, 8, 10, 13]).firstOrDefault(55, a => dividedBy(a - 3, 5)))
	.areEqual(an.next(), 37, new WpLinq([]).firstOrDefault(37, a => dividedBy(a - 3, 5)))
	.areEqual(an.next(), 122, new WpLinq([2, 3, 4, 6, 9, 13]).firstOrDefault(122, a => dividedBy(a - 1, 7)))
	.areEqual(an.next(), null, new WpLinq([2, 3, 4, 6, 9, 13]).firstOrDefault(null, a => dividedBy(a - 1, 7)))
	.areEqual(an.next(), undefined, new WpLinq([2, 3, 4, 6, 9, 13]).firstOrDefault(undefined, a => dividedBy(a - 1, 7)))
	.groupClose()

	/* G R O U P */

	.groupStart("forEach() function")
	.throws(an.next(), () => new WpLinq([]).forEach("hello"), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_callback)
	.throws(an.next(), () => new WpLinq([]).forEach(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_callback)
	.throws(an.next(), () => new WpLinq([]).forEach(7), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_callback)
	.throws(an.next(), () => new WpLinq([]).forEach(undefined), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_callback)
	.throws(an.next(), () => new WpLinq([]).forEach(), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_callback)
	.areEqual(an.next(), "", (tempString = "", new WpLinq([]).forEach((a, i) => tempString += (i.toString() + "->" + a.toString())), tempString))
	.areEqual(an.next(), "0-a;1-b;2-c;3-d;4-e;", (tempString = "", new WpLinq(["a", "b", "c", "d", "e"]).forEach((a, i) => tempString += (i.toString() + "-" + a.toString() + ";")), tempString))
	.areEqual(an.next(), "0-a;1-b;2-c;", (tempString = "", new WpLinq(["a", "b", "c", "d", "e"]).forEach(function (a, i) { tempString += (i.toString() + "-" + a.toString() + ";"); return a !== "c"; }), tempString))
	.areEqual(an.next(), "0-a;1-b;", (tempString = "", new WpLinq(["a", "b", "c", "d", "e"]).forEach(function (a, i) { if (a === "c") return false; tempString += (i.toString() + "-" + a.toString() + ";") }), tempString))
	.areEqual(an.next(), "", (tempString = "", new WpLinq(["a", "b", "c", "d", "e"]).forEach(function (a, i) { if (a === "a") return false; tempString += (i.toString() + "-" + a.toString() + ";") }), tempString))
	.areEqual(an.next(), "", (tempString = "", new WpLinq([]).forEach((a, i) => tempString += (i.toString() + "-" + a.toString() + ";")), tempString))
	.groupClose()

	/* G R O U P */

	.groupStart("groupBy() function")
	.throws(an.next(), () => new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(11, 12, 13, 14), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector)
	.throws(an.next(), () => new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(null, 12, 13, 14), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_elementSelector)
	.throws(an.next(), () => new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(null, null, 13, 14), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector)
	.throws(an.next(), () => new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(null, null, null, 14), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer)
	.throws(an.next(), () => new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(a => null).toArray(), e => e.message === WpLinq.ErrorMessage.ARGUMENT_MUST_NOT_BE_NULL_key)

	.sequencesAreEqual(an.next(), [
		{ key: 5, elements: [5, 5, 5, 5] },
		{ key: 2, elements: [2, 2] },
		{ key: 11, elements: [11, 11, 11] },
		{ key: 4, elements: [4, 4] },
		{ key: 6, elements: [6] },
		{ key: 1, elements: [1] },
		{ key: 7, elements: [7, 7] }
	], new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(),
		(a, b) => a.key === b.key && Array.from(b).every((element, index) => element === a.elements[index]))

	.sequencesAreEqual(an.next(), [
		{ key: 1, elements: [5, 11, 5, 1, 7, 5, 5, 7, 11, 11] },
		{ key: 0, elements: [2, 4, 6, 2, 4] }
	], new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(item => item % 2),
		(a, b) => a.key === b.key && Array.from(b).every((element, index) => element === a.elements[index]))

	.sequencesAreEqual(an.next(), [
		{ key: 5, count: 4 },
		{ key: 2, count: 2 },
		{ key: 11, count: 3 },
		{ key: 4, count: 2 },
		{ key: 6, count: 1 },
		{ key: 1, count: 1 },
		{ key: 7, count: 2 }
	], new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(null, null, function (a) { return { key: a.key, count: a.count() } }),
		(a, b) => a.key === b.key && a.count === b.count)

	.sequencesAreEqual(an.next(), [
		{ key: 5, count: 4, min: 5 + 0, max: 5 + 11, avg: ((5 + 0) + (5 + 4) + (5 + 10) + (5 + 11)) / 4 },
		{ key: 2, count: 2, min: 2 + 1, max: 2 + 8, avg: ((2 + 1) + (2 + 8)) / 2 },
		{ key: 11, count: 3, min: 11 + 2, max: 11 + 14, avg: ((11 + 2) + (11 + 13) + (11 + 14)) / 3 },
		{ key: 4, count: 2, min: 4 + 3, max: 4 + 9, avg: ((4 + 3) + (4 + 9)) / 2 },
		{ key: 6, count: 1, min: 6 + 5, max: 6 + 5, avg: (6 + 5) / 1 },
		{ key: 1, count: 1, min: 1 + 6, max: 1 + 6, avg: (1 + 6) / 1 },
		{ key: 7, count: 2, min: 7 + 7, max: 7 + 12, avg: ((7 + 7) + (7 + 12)) / 2 }
	], new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(null, function (item, index) { return item + index }, function (grp) { return { key: grp.key, count: grp.count(), min: grp.min(), max: grp.max(), avg: grp.average() } }),
		(a, b) => a.key === b.key && a.count === b.count && a.min === b.min && a.max === b.max && a.avg === b.avg)

	.sequencesAreEqual(an.next(), [
		{ key: "key_5", count: 4, min: 5 + 0, max: 5 + 11, avg: ((5 + 0) + (5 + 4) + (5 + 10) + (5 + 11)) / 4 },
		{ key: "key_2", count: 2, min: 2 + 1, max: 2 + 8, avg: ((2 + 1) + (2 + 8)) / 2 },
		{ key: "key_11", count: 3, min: 11 + 2, max: 11 + 14, avg: ((11 + 2) + (11 + 13) + (11 + 14)) / 3 },
		{ key: "key_4", count: 2, min: 4 + 3, max: 4 + 9, avg: ((4 + 3) + (4 + 9)) / 2 },
		{ key: "key_6", count: 1, min: 6 + 5, max: 6 + 5, avg: (6 + 5) / 1 },
		{ key: "key_1", count: 1, min: 1 + 6, max: 1 + 6, avg: (1 + 6) / 1 },
		{ key: "key_7", count: 2, min: 7 + 7, max: 7 + 12, avg: ((7 + 7) + (7 + 12)) / 2 }
	], new WpLinq([5, 2, 11, 4, 5, 6, 1, 7, 2, 4, 5, 5, 7, 11, 11]).groupBy(o => "key_" + o, function (item, index) { return item + index }, function (grp) { return { key: grp.key, count: grp.count(), min: grp.min(), max: grp.max(), avg: grp.average() } }),
		(a, b) => a.key === b.key && a.count === b.count && a.min === b.min && a.max === b.max && a.avg === b.avg)

	.groupClose()

	/* G R O U P */

	.groupStart("groupJoin() function")
	.throws(an.next(), () =>
		new WpLinq(peopleList2).groupJoin(null, p => p.occupation_id, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_rightIterator)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).groupJoin(occupations, 12, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_leftKeySelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).groupJoin(occupations, p => p.occupation_id, 13, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_rightKeySelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).groupJoin(occupations, p => p.occupation_id, o => o.id, 14),
		e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).groupJoin(occupations, p => p.occupation_id, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}, 12), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer)

	.sequencesAreEqual(an.next(), [
		[{ id: 1, name: "Actor" }, [{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation_id: 1 }, { Id: 205, first_name: "Eve", last_name: "Johnson", occupation_id: 1 } ]],
		[{ id: 2, name: "Business Broker" }, [{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation_id: 2 }, { Id: 11, first_name: "Ezra", last_name: "Davis", occupation_id: 2 }]],
		[{ id: 3, name: "Musician" }, [{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation_id: 3 }, { Id: 306, first_name: "Jack", last_name: "Garcia", occupation_id: 3 }]],
		[{ id: 4, name: "Composer" }, [{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation_id: 4 }]],
		[{ id: 5, name: "Accountant" }, [{ Id: 149, first_name: "Mark", last_name: "Brown", occupation_id: 5 }, { Id: 284, first_name: "Tom", last_name: "Smith", occupation_id: 5 }]],
		[{ id: 6, name: "Nurse" }, [{ Id: 85, first_name: "Dana", last_name: "Lee", occupation_id: 6 }]],
		[{ id: 7, name: "Journalist" }, [{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation_id: 7 }, { Id: 55, first_name: "Mason", last_name: "Martin", occupation_id: 7 }]],
		[{ id: 8, name: "Bitch" }, []],
		[{ id: 9, name: "Programmer" }, [{ Id: 266, first_name: "James", last_name: "Wilson", occupation_id: 9 }]],
		[{ id: 10, name: "Sucker" }, []],
		[{ id: 11, name: "Teacher" }, [{ Id: 408, first_name: "Levy", last_name: "Williams", occupation_id: 11 }, { Id: 181, first_name: "Mason", last_name: "Clark", occupation_id: 11 }, { Id: 77, first_name: "Ethan", last_name: "Harris", occupation_id: 11 }]],
		[{ id: 12, name: "Physicist" }, [{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation_id: 12 }]],
		[{ id: 13, name: "Farmer" }, [{ Id: 502, first_name: "Dana", last_name: "Jones", occupation_id: 13 }]],
		//skip 14 for test
		[{ id: 15, name: "Comedian" }, [{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation_id: 15 }]],
		[{ id: 16, name: "Pilot" }, [{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation_id: 16 }]],
		[{ id: 18, name: "Hairdresser" }, [{ Id: 608, first_name: "Henry", last_name: "Moore", occupation_id: 18 }]],
		[{ id: 22, name: "Engineer" }, [{ Id: 66, first_name: "Eve", last_name: "White", occupation_id: 22 }]]
	], new WpLinq(occupations).groupJoin(peopleList2, o => o.id, p => p.occupation_id),
		(a, b) => a[0].id === b[0].id && a[0].name === b[0].name && WpLinq.from(a[1]).sequenceEqual(b[1],
			(a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation_id === b.occupation_id)
	)

	.sequencesAreEqual(an.next(), [
		[{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, { Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }],
		[{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, { Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }],
		[{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, { Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }],
		[{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }],
		[{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, { Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }],
		[{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }],
		[{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, { Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }],
		[],
		[{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }],
		[],
		[{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, { Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, { Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }],
		[{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }],
		[{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }],
		//skip 14 for test
		[{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }],
		[{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }],
		[{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }],
		[{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }]
	], new WpLinq(occupations).groupJoin(peopleList2, o => o.id, p => p.occupation_id,
		(a, b) => b.select(x => new Object({ Id: x.Id, first_name: x.first_name, last_name: x.last_name, occupation: a.name }))
	),
		function (a, b) {
			//debugger;
			return WpLinq.from(a).sequenceEqual(b,
				function (x, y) {
					//debugger;
					return x.Id === y.Id && x.first_name === y.first_name && x.last_name === y.last_name && x.occupation === y.occupation;
				})
		}
	)

	.sequencesAreEqual(an.next(), [
		"Actors: Logan Anderson, Eve Johnson",
		"Business Brokers: Mason Lewis, Ezra Davis",
		"Musicians: Bob Dylan, Jack Garcia",
		"Composers: Ethan Thomas",
		"Accountants: Mark Brown, Tom Smith",
		"Nurses: Dana Lee",
		"Journalists: Ryan Miller, Mason Martin",
		"Bitchs: ",
		"Programmers: James Wilson",
		"Suckers: ",
		"Teachers: Levy Williams, Mason Clark, Ethan Harris",
		"Physicists: Eve Thompson",
		"Farmers: Dana Jones",
		//skip 14 for test
		"Comedians: Bob Sponge",
		"Pilots: Bryan Taylor",
		"Hairdressers: Henry Moore",
		"Engineers: Eve White"
	], new WpLinq(occupations).groupJoin(peopleList2, o => o.id, p => p.occupation_id,
		(a, b) => a.name + "s: " + b.select(e => e.first_name + " " + e.last_name).toArray().join(", ")
	))

	.groupClose()

	/* G R O U P */

	.groupStart("intersect() function")
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).intersect(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).intersect(12), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).intersect(undefined), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid equality comparer"), () => new WpLinq([2, 4, 6, 8, 10, 12]).intersect([4, 10], {}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.sequencesAreEqual(an.next(), [4, 6, 10], new WpLinq([2, 4, 6, 8, 10, 12]).intersect([4, 10, 31, 6, 7]))
	.sequencesAreEqual(an.next(), [], new WpLinq([2, 4, 6, 8, 10, 12]).intersect([]))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).intersect([2, 4, 6, 8, 10, 12]))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).intersect([]))
	.sequencesAreEqual(an.next(), [123], new WpLinq([123]).intersect([123]))
	.sequencesAreEqual(an.next(), [5, 4, 3, 2, 1], new WpLinq([5, 4, 3, 2, 1]).intersect([1, 2, 4, 3, 5]))
	.sequencesAreEqual(an.next(), "bc", new WpLinq("abc").intersect("dcb"))
	.sequencesAreEqual(an.next(), [], new WpLinq([123]).intersect([222]))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [2, 8, 4, 6, 12], new WpLinq([11, 2, 8, 15, 4, 6, 8, 10, 12]).intersect([24, 12, 12, 4], (a, b) => a * 2 === b || a * 3 === b))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [2, 8, 4, 6, 12], new WpLinq([11, 2, 8, 15, 4, 6, 8, 10, 12]).intersect([4, 12, 24], (a, b) => a * 2 === b || a * 3 === b))
	.groupClose()

	/* G R O U P */

	.groupStart("join() function")
	.throws(an.next(), () =>
		new WpLinq(peopleList2).join(null, p => p.occupation_id, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_rightIterator)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).join(occupations, 12, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_leftKeySelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).join(occupations, p => p.occupation_id, 13, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_rightKeySelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).join(occupations, p => p.occupation_id, o => o.id, 14),
		e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector)

	.throws(an.next(), () =>
		new WpLinq(peopleList2).join(occupations, p => p.occupation_id, o => o.id, function (p, o) {
			return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
		}, 12), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer)

	.sequencesAreEqual(an.next(), [
		[{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation_id: 1 }, { id: 1, name: "Actor" }],
		[{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation_id: 15 }, { id: 15, name: "Comedian" }],
		[{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation_id: 4 }, { id: 4, name: "Composer" }],
		[{ Id: 149, first_name: "Mark", last_name: "Brown", occupation_id: 5 }, { id: 5, name: "Accountant" }],
		[{ Id: 66, first_name: "Eve", last_name: "White", occupation_id: 22 }, { id: 22, name: "Engineer" }],
		[{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation_id: 2 }, { id: 2, name: "Business Broker" }],
		[{ Id: 85, first_name: "Dana", last_name: "Lee", occupation_id: 6 }, { id: 6, name: "Nurse" }],
		[{ Id: 266, first_name: "James", last_name: "Wilson", occupation_id: 9 }, { id: 9, name: "Programmer" }],
		[{ Id: 408, first_name: "Levy", last_name: "Williams", occupation_id: 11 }, { id: 11, name: "Teacher" }],
		[{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation_id: 2 }, { id: 2, name: "Business Broker" }],
		[{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation_id: 3 }, { id: 3, name: "Musician" }],
		[{ Id: 608, first_name: "Henry", last_name: "Moore", occupation_id: 18 }, { id: 18, name: "Hairdresser" }],
		[{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation_id: 7 }, { id: 7, name: "Journalist" }],
		[{ Id: 55, first_name: "Mason", last_name: "Martin", occupation_id: 7 }, { id: 7, name: "Journalist" }],
		[{ Id: 284, first_name: "Tom", last_name: "Smith", occupation_id: 5 }, { id: 5, name: "Accountant" }],
		[{ Id: 502, first_name: "Dana", last_name: "Jones", occupation_id: 13 }, { id: 13, name: "Farmer" }],
		[{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation_id: 1 }, { id: 1, name: "Actor" }],
		[{ Id: 181, first_name: "Mason", last_name: "Clark", occupation_id: 11 }, { id: 11, name: "Teacher" }],
		[{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation_id: 12 }, { id: 12, name: "Physicist" }],
		[{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation_id: 16 }, { id: 16, name: "Pilot" }],
		[{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation_id: 11 }, { id: 11, name: "Teacher" }],
		[{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation_id: 3 }, { id: 3, name: "Musician" }]
	],
		new WpLinq(peopleList2)
			.join(occupations, p => p.occupation_id, o => o.id),
		//(a, b) => a.Id === b[0].Id && a.first_name === b[0].first_name && a.last_name === b[0].last_name && a.occupation === b[1].name)
		(a, b) => a[0].Id === b[0].Id
			&&
			a[0].first_name === b[0].first_name
			&&
			a[0].last_name === b[0].last_name
			&&
			a[0].occupation_id === b[0].occupation_id
			&&
			a[1].id === b[1].id
			&&
			a[1].name === b[1].name)

	.sequencesAreEqual(an.next(), [
		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
	],
		new WpLinq(peopleList2)
			.join(occupations, p => p.occupation_id, o => o.id, function (p, o) {
				return { Id: p.Id, first_name: p.first_name, last_name: p.last_name, occupation: o.name }
			}),
		(a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)
	.groupClose()

	/* G R O U P */

	.groupStart("last() function")
	.throws(an.next(), () => new WpLinq([]).last(), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.areEqual(an.next(), 12, new WpLinq([2, 4, 6, 8, 10, 12]).last())
	.areEqual(an.next(), 13, new WpLinq([2, 3, 4, 6, 8, 10, 13]).last(a => dividedBy(a - 3, 5)))
	.throws(an.next(), () => new WpLinq([]).last(a => dividedBy(a - 3, 5)), e => e.message === WpLinq.ErrorMessage.SEQUENCE_IS_EMPTY)
	.throws(an.next(), () => new WpLinq([2, 3, 4, 6, 9, 13]).last(a => dividedBy(a - 1, 7)), e => e.message === WpLinq.ErrorMessage.NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate)
	.groupClose()

	/* G R O U P */

	.groupStart("lastOrDefault() function")
	.areEqual(an.next(), 15, new WpLinq([]).lastOrDefault(15))
	.areEqual(an.next(), undefined, new WpLinq([]).lastOrDefault())
	.areEqual(an.next(), 12, new WpLinq([2, 4, 6, 8, 10, 12]).lastOrDefault(23))
	.areEqual(an.next(), 13, new WpLinq([2, 3, 4, 6, 8, 10, 13]).lastOrDefault(55, a => dividedBy(a - 3, 5)))
	.areEqual(an.next(), 37, new WpLinq([]).lastOrDefault(37, a => dividedBy(a - 3, 5)))
	.areEqual(an.next(), 122, new WpLinq([2, 3, 4, 6, 9, 13]).lastOrDefault(122, a => dividedBy(a - 1, 7)))
	.areEqual(an.next(), null, new WpLinq([2, 3, 4, 6, 9, 13]).lastOrDefault(null, a => dividedBy(a - 1, 7)))
	.areEqual(an.next(), undefined, new WpLinq([2, 3, 4, 6, 9, 13]).lastOrDefault(undefined, a => dividedBy(a - 1, 7)))
	.groupClose()

	/* G R O U P */

	.groupStart("max() function")
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).max(11), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).max({}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).max("abc"), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.areEqual(an.next(), 11, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).max())
	.areEqual(an.next(), 11, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 100, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87, 100, 52, 33]).max())
	.areEqual(an.next(), 33, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87, 100, 52, 33]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 5, new WpLinq([2, 5]).max())
	.areEqual(an.next(), 5, new WpLinq([2, 5]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 12, new WpLinq([12, 5]).max())
	.areEqual(an.next(), 5, new WpLinq([12, 5]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 12, new WpLinq([12]).max())
	.areEqual(an.next(), 12, new WpLinq([12]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), undefined, new WpLinq([]).max())
	.areEqual(an.next(), undefined, new WpLinq([]).max((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.groupClose()

	/* G R O U P */

	.groupStart("min() function")
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).min(11), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).min({}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.throws(an.next(), () => new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).min("abc"), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.areEqual(an.next(), -87, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).min())
	.areEqual(an.next(), -6, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), -87, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87, 100, 52, 33]).min())
	.areEqual(an.next(), -6, new WpLinq([1, 3, 5, -6, 4, 3, 11, 0, -87, 100, 52, 33]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 2, new WpLinq([2, 5]).min())
	.areEqual(an.next(), 2, new WpLinq([2, 5]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 5, new WpLinq([12, 5]).min())
	.areEqual(an.next(), 12, new WpLinq([12, 5]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), 12, new WpLinq([12]).min())
	.areEqual(an.next(), 12, new WpLinq([12]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.areEqual(an.next(), undefined, new WpLinq([]).min())
	.areEqual(an.next(), undefined, new WpLinq([]).min((a, b, bIndex) => a % 2 === 0 && b % 2 !== 0 ? -1 : (a % 2 !== 0 && b % 2 === 0 ? 1 : a - b)))
	.groupClose()

	/* G R O U P */

	.groupStart("orderBy() function")
	.throws(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderBy(11, 10), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector)
	.throws(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderBy(null, 10), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.noThrows(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderBy(null, null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.sequencesAreEqual(an.next(), [1, 3, 4, 6, 9], new WpLinq([4, 6, 3, 1, 9]).orderBy())
	.sequencesAreEqual(an.next(), "  beeiltt", new WpLinq("let it be").orderBy())
	.sequencesAreEqual(an.next(), [4], new WpLinq([4]).orderBy())
	.sequencesAreEqual(an.next(), [1, 4], new WpLinq([1, 4]).orderBy())
	.sequencesAreEqual(an.next(), [1, 4], new WpLinq([4, 1]).orderBy())
	.sequencesAreEqual(an.next(), [], new WpLinq([]).orderBy())
	.sequencesAreEqual(an.next(),
		new WpLinq([
			{ key: 6, value: "bbb" },
			{ key: 1, value: "eee" },
			{ key: 4, value: "aaa" }
		]).orderBy(a => a.key), [
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" },
		{ key: 6, value: "bbb" }
	], (a, b) => a.key === b.key)
	.sequencesAreEqual(an.next(), [
		{ key: 4, value: "aaa" },
		{ key: 6, value: "bbb" },
		{ key: 1, value: "eee" },
		{ key: 3, value: "fff" }
	], new WpLinq([
		{ key: 6, value: "bbb" },
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" }
	]).orderBy(a => a.key, (a, b) => a % 2 === b % 2 ? (a - b) : (a % 2 - b % 2) /* in this comparer each odd is greater than an even number */),
		(a, b) => a.key === b.key && a.value === b.value)

	.areEqual(an.next(), 3,
		new WpLinq([
			{ key: 6, value: "bbb" },
			{ key: 1, value: "eee" },
			{ key: 4, value: "aaa" }
		]).orderBy(a => a.key)/*chain some additional operations */
			.select().orderBy(a => a.key).count())

	.sequencesAreEqual(an.next(), [
		{ key: 4, value: "aaa" },
		{ key: 6, value: "bbb" },
		{ key: 1, value: "eee" },
		{ key: 3, value: "fff" }
	], new WpLinq([
		{ key: 6, value: "bbb" },
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" }
	]).orderBy(a => a.key, (a, b) => a % 2 === b % 2 ? (a - b) : (a % 2 - b % 2) /* in this comparer each odd is greater than an even number */),
		(a, b) => a.key === b.key && a.value === b.value)
	.groupClose()

	/* G R O U P */

	.groupStart("orderByDescending() function")
	.throws(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderByDescending(11, 10), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector)
	.throws(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderByDescending(null, 10), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.noThrows(an.next(), () => new WpLinq([4, 6, 3, 1, 9]).orderByDescending(null, null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer)
	.sequencesAreEqual(an.next(), [9, 6, 4, 3, 1], new WpLinq([4, 6, 3, 1, 9]).orderByDescending())
	.sequencesAreEqual(an.next(), "ttlieeb  ", new WpLinq("let it be").orderByDescending())
	.sequencesAreEqual(an.next(), [4], new WpLinq([4]).orderByDescending())
	.sequencesAreEqual(an.next(), [4, 1], new WpLinq([1, 4]).orderByDescending())
	.sequencesAreEqual(an.next(), [4, 1], new WpLinq([4, 1]).orderByDescending())
	.sequencesAreEqual(an.next(), [], new WpLinq([]).orderByDescending())
	.sequencesAreEqual(an.next(), [
		{ key: 6, value: "bbb" },
		{ key: 4, value: "aaa" },
		{ key: 1, value: "eee" }
	], new WpLinq([
		{ key: 6, value: "bbb" },
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" }
	]).orderByDescending(a => a.key),
		(a, b) => a.key === b.key)
	.sequencesAreEqual(an.next(), [
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" },
		{ key: 6, value: "bbb" },
		{ key: 4, value: "aaa" }
	],
		new WpLinq([
			{ key: 6, value: "bbb" },
			{ key: 3, value: "fff" },
			{ key: 1, value: "eee" },
			{ key: 4, value: "aaa" }
		]).orderByDescending(a => a.key, (a, b) => a % 2 === b % 2 ? (a - b) : (a % 2 - b % 2) /* in this comparer each odd is greater than an even number */),
		(a, b) => a.key === b.key && a.value === b.value)
	.groupClose()

	/* G R O U P */

	.groupStart("prepend() function")
	.sequencesAreEqual(an.next(), [3], new WpLinq([]).prepend(3))
	.sequencesAreEqual(an.next(), [undefined], new WpLinq([]).prepend())
	.sequencesAreEqual(an.next(), ["a", "b"], new WpLinq(["b"]).prepend("a"))
	.sequencesAreEqual(an.next(), "ab", new WpLinq(["b"]).prepend("a"))
	.sequencesAreEqual(an.next(), "abc", new WpLinq(["b", "c"]).prepend("a"))
	.sequencesAreEqual(an.next(), ["a", "b", "c"], new WpLinq(["b", "c"]).prepend("a"))
	.groupClose()

	/* G R O U P */

	.groupStart("range() function")
	.throws(an.next(), () => WpLinq.range(1.2, 5.1), e => e.message === WpLinq.ErrorMessage.MUST_BE_INTEGER_start)
	.throws(an.next(), () => WpLinq.range(null, 5.1), e => e.message === WpLinq.ErrorMessage.MUST_BE_INTEGER_start)
	.throws(an.next(), () => WpLinq.range("1", 5.1), e => e.message === WpLinq.ErrorMessage.MUST_BE_INTEGER_start)
	.throws(an.next(), () => WpLinq.range(undefined, 5.1), e => e.message === WpLinq.ErrorMessage.MUST_BE_INTEGER_start)
	.throws(an.next(), () => WpLinq.range(-2, 5.1), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.range(-2, -5), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.range(-2, null), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.range(-2, undefined), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.range(-2, "1"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.sequencesAreEqual(an.next(), [1, 2, 3, 4, 5], WpLinq.range(1, 5))
	.sequencesAreEqual(an.next(), [-1, 0, 1, 2, 3], WpLinq.range(-1, 5))
	.sequencesAreEqual(an.next(), [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7], WpLinq.range(-3, 11))
	.sequencesAreEqual(an.next(), [], WpLinq.range(-3, 0))
	.sequencesAreEqual(an.next(), [-3], WpLinq.range(-3, 1))
	.groupClose()

	/* G R O U P */

	.groupStart("removeNullishes() function")
	.sequencesAreEqual(an.next(), [1, 2, 3], new WpLinq([1, null, 2, undefined, 3, undefined]).removeNullishes())
	.sequencesAreEqual(an.next(), [1, 2, 3], new WpLinq([1, 2, 3]).removeNullishes())
	.sequencesAreEqual(an.next(), [], new WpLinq([]).removeNullishes())
	.sequencesAreEqual(an.next(), [], new WpLinq([null, null, undefined, null, undefined]).removeNullishes())
	.sequencesAreEqual(an.next(), [], new WpLinq([undefined]).removeNullishes())
	.sequencesAreEqual(an.next(), [], new WpLinq([null]).removeNullishes())
	.groupClose()

	/* G R O U P */

	.groupStart("repeat() function")
	.throws(an.next(), () => WpLinq.repeat(1, 5.1), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.repeat("a", -5), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.repeat("paul", null), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.repeat(12, undefined), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.throws(an.next(), () => WpLinq.repeat("a", "1"), e => e.message === WpLinq.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count)
	.sequencesAreEqual(an.next(), [1, 1, 1, 1, 1], WpLinq.repeat(1, 5))
	.sequencesAreEqual(an.next(), [-1, -1, -1], WpLinq.repeat(-1, 3))
	.sequencesAreEqual(an.next(), ["a", "a"], WpLinq.repeat("a", 2))
	.sequencesAreEqual(an.next(), [null, null, null, null, null, null], WpLinq.repeat(null, 6))
	.sequencesAreEqual(an.next(), [undefined, undefined, undefined], WpLinq.repeat(undefined, 3))
	.sequencesAreEqual(an.next(), [], WpLinq.repeat("a", 0))
	.sequencesAreEqual(an.next(), ["a"], WpLinq.repeat("a", 1))
	.groupClose()

	/* G R O U P */

	.groupStart("reverse() function")
	.sequencesAreEqual(an.next(), [undefined, 3, undefined, 2, null, 1], new WpLinq([1, null, 2, undefined, 3, undefined]).reverse())
	.sequencesAreEqual(an.next(), [3, 2, 1], new WpLinq([1, 2, 3]).reverse())
	.sequencesAreEqual(an.next(), [3, 1], new WpLinq([1, 3]).reverse())
	.sequencesAreEqual(an.next(), [1], new WpLinq([1]).reverse())
	.sequencesAreEqual(an.next(), [], new WpLinq([]).reverse())
	.sequencesAreEqual(an.next(), [undefined, null], new WpLinq([null, undefined]).reverse())
	.sequencesAreEqual(an.next(), [null, undefined], new WpLinq([undefined, null]).reverse())
	.sequencesAreEqual(an.next(), [undefined], new WpLinq([undefined]).reverse())
	.sequencesAreEqual(an.next(), [null], new WpLinq([null]).reverse())
	.groupClose()

	/* G R O U P */

	.groupStart("sequenceEqual() function")
	.throws(an.next(), () => new WpLinq("abc").sequenceEqual(), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next(), () => new WpLinq("abc").sequenceEqual(["a", "b", "c"], 11), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.isTrue(an.next(), new WpLinq("abc").sequenceEqual(["a", "b", "c"]))
	.isFalse(an.next(), new WpLinq("abc").sequenceEqual(["a", "b"]))
	.isTrue(an.next(), new WpLinq("abc").sequenceEqual(["a", "b", "c"], (a, b) => a === b))
	.isFalse(an.next(), new WpLinq("ac").sequenceEqual(["a", "b", "c"], (a, b) => a === b))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual([]))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual([], (a, b) => a === b))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual(new Map(), (a, b) => a === b))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual(new Map()))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual(new Set(), (a, b) => a === b))
	.isTrue(an.next(), new WpLinq([]).sequenceEqual(new Set()))
	.isTrue(an.next(), new WpLinq(new Map()).sequenceEqual(new Set(), (a, b) => a === b))
	.isTrue(an.next(), new WpLinq(new Map()).sequenceEqual(new Set()))
	.isTrue(an.next(), new WpLinq([
		{ "id": 33, "name": "Albert" },
		{ "id": 12, "name": "Mark" },
		{ "id": 25, "name": "Paul" }
	]).sequenceEqual(new Map([
		[33, "Albert"],
		[12, "Mark"],
		[25, "Paul"]]
	), (a, b) => a.id === b[0] && a.name === b[1]))
	.groupClose()

	/* G R O U P */

	.groupStart("single() function")
	.throws(an.next(), () => new WpLinq([]).single(), e => e.message === "The sequence is empty")
	.throws(an.next(), () => new WpLinq([1, 2]).single(), e => e.message === "The input sequence contains more than one element")
	.throws(an.next(), () => new WpLinq([1]).single(17), e => e.message === "predicate must be a function or nullish")
	.areEqual(an.next(), 2, new WpLinq([2]).single())
	.throws(an.next(), () => new WpLinq([]).single(a => a % 2 === 0), e => e.message === "The sequence is empty")
	.throws(an.next(), () => new WpLinq([2, 4]).single(a => a % 2 === 0), e => e.message === "More than one element satisfies the condition in predicate")
	.throws(an.next(), () => new WpLinq([1, 3]).single(a => a % 2 === 0), e => e.message === "No element satisfies the condition in predicate")
	.areEqual(an.next(), 3, new WpLinq([4, 3, 6, 2]).single(a => a % 2 === 1))
	.areEqual(an.next(), 3, new WpLinq([3]).single(a => a % 2 === 1))
	.groupClose()

	/* G R O U P */

	.groupStart("singleOrDefault() function")
	.noThrows(an.next(), () => new WpLinq([]).singleOrDefault())
	.throws(an.next(), () => new WpLinq([1, 2]).singleOrDefault(), e => e.message === "The input sequence contains more than one element")
	.throws(an.next(), () => new WpLinq([1, 2]).singleOrDefault(12), e => e.message === "The input sequence contains more than one element")
	.throws(an.next(), () => new WpLinq([1]).singleOrDefault(null, 17), e => e.message === "predicate must be a function or nullish")
	.areEqual(an.next(), 2, new WpLinq([2]).singleOrDefault("default value"))
	.areEqual(an.next(), "default value", new WpLinq([]).singleOrDefault("default value"))
	.areEqual(an.next(), "default value", new WpLinq([1, 3]).singleOrDefault("default value", a => a % 2 === 0))
	.areEqual(an.next(), 6, new WpLinq([1, 5, 7, 6]).singleOrDefault("default value", a => a % 2 === 0))
	.throws(an.next(), () => new WpLinq([2, 4]).singleOrDefault("default value", a => a % 2 === 0), e => e.message === "More than one element satisfies the condition in predicate")
	.areEqual(an.next(), 3, new WpLinq([4, 3, 6, 2]).singleOrDefault("default value", a => a % 2 === 1))
	.areEqual(an.next(), 3, new WpLinq([3]).singleOrDefault("default value", a => a % 2 === 1))
	.groupClose()

	/* G R O U P */

	.groupStart("skip() function")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).skip(), e => e.message === "count must be an integer")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).skip(1.2), e => e.message === "count must be an integer")
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).skip(-1))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).skip(0))
	.sequencesAreEqual(an.next(), [2, 3], new WpLinq([4, 2, 3]).skip(1))
	.sequencesAreEqual(an.next(), [3], new WpLinq([4, 2, 3]).skip(2))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skip(3))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skip(4))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skip(5))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).skip(1))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).skip(2))
	.groupClose()

	/* G R O U P */

	.groupStart("skipLast() function")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).skipLast(), e => e.message === "count must be an integer")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).skipLast(1.2), e => e.message === "count must be an integer")
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).skipLast(-1))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).skipLast(0))
	.sequencesAreEqual(an.next(), [4, 2], new WpLinq([4, 2, 3]).skipLast(1))
	.sequencesAreEqual(an.next(), [4], new WpLinq([4, 2, 3]).skipLast(2))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skipLast(3))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skipLast(4))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).skipLast(5))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).skipLast(1))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).skipLast(2))
	.groupClose()

	/* G R O U P */

	.groupStart("skipWhile() function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(12), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(null), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(undefined), e => e.message === "predicate must be a function")
	.sequencesAreEqual(an.next(), [5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a <= 4))
	.sequencesAreEqual(an.next(), [2, 5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a % 4 === 0))
	.sequencesAreEqual(an.next(), [4, 2, 5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a < 0))
	.sequencesAreEqual(an.next(), [11], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a < 10))
	.sequencesAreEqual(an.next(), [4, 2, 5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a > 10))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a <= 11))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 5, 7, 8, 11]).skipWhile(a => a < 100))
	.groupClose()

	/* G R O U P */

	.groupStart("statistics() function")
	.throws(an.next(), () => new WpLinq([2, 3, 4, undefined]).statistics(), e => e.message === "At least one of the sequence's element is not a number")
	.throws(an.next(), () => new WpLinq([undefined]).statistics(), e => e.message === "At least one of the sequence's element is not a number")
	.areEqual(an.next(), {
			count: 0,
			minimum: undefined,
			maximum: undefined,
			summary: undefined,
			average: undefined,
			range: undefined,
			mode: undefined,
			median: undefined,
			variance: undefined,
			standardDeviation: undefined

	}, new WpLinq([]).statistics(), (a, b) => 
			a.count === b.count &&	
			a.minimum === b.minimum &&
			a.maximum === b.maximum &&
			a.summary === b.summary &&
			a.average === b.average &&
			a.range === b.range &&
			a.mode === b.mode &&
			a.median === b.median &&
			a.variance === b.variance &&
			a.standardDeviation === b.standardDeviation
	)
		.areEqual(an.next(), {
			count: 1,
			minimum: 15,
			maximum: 15,
			summary: 15,
			average: 15,
			range: 0,
			mode: undefined,
			median: undefined,
			variance: undefined,
			standardDeviation: undefined

		}, new WpLinq([15]).statistics(), (a, b) =>
			a.count === b.count &&
			a.minimum === b.minimum &&
			a.maximum === b.maximum &&
			a.summary === b.summary &&
			a.average === b.average &&
			a.range === b.range &&
			a.mode === b.mode &&
			a.median === b.median &&
			a.variance === b.variance &&
			a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 1,
		minimum: 15,
		maximum: 15,
		summary: 15,
		average: 15,
		range: 0,
		mode: 15,
		median: 15,
		variance: 0,
		standardDeviation: 0

	}, new WpLinq([15]).statistics(true), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

		.areEqual(an.next(), {
			count: 2,
			minimum: 11,
			maximum: 15,
			summary: 26,
			average: 13,
			range: 4,
			mode: undefined,
			median: undefined,
			variance: undefined,
			standardDeviation: undefined

		}, new WpLinq([15, 11]).statistics(false), (a, b) =>
			a.count === b.count &&
			a.minimum === b.minimum &&
			a.maximum === b.maximum &&
			a.summary === b.summary &&
			a.average === b.average &&
			a.range === b.range &&
			a.mode === b.mode &&
			a.median === b.median &&
			a.variance === b.variance &&
			a.standardDeviation === b.standardDeviation
	)

		.areEqual(an.next(), {
			count: 2,
			minimum: 11,
			maximum: 15,
			summary: 26,
			average: 13,
			range: 4,
			mode: undefined,
			median: 13,
			variance: 4,
			standardDeviation: 2

		}, new WpLinq([15, 11]).statistics(true), (a, b) =>
			a.count === b.count &&
			a.minimum === b.minimum &&
			a.maximum === b.maximum &&
			a.summary === b.summary &&
			a.average === b.average &&
			a.range === b.range &&
			a.mode === b.mode &&
			a.median === b.median &&
			a.variance === b.variance &&
			a.standardDeviation === b.standardDeviation
	)

		.areEqual(an.next(), {
			count: 3,
			minimum: 11,
			maximum: 19,
			summary: 45,
			average: 15,
			range: 8,
			mode: undefined,
			median: 15,
			variance: 32 / 3,
			standardDeviation: Math.sqrt(32 / 3)

		}, new WpLinq([15, 19, 11]).statistics(true), (a, b) =>
			a.count === b.count &&
			a.minimum === b.minimum &&
			a.maximum === b.maximum &&
			a.summary === b.summary &&
			a.average === b.average &&
			a.range === b.range &&
			a.mode === b.mode &&
			a.median === b.median &&
			a.variance === b.variance &&
			a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 4,
		minimum: 11,
		maximum: 19,
		summary: 56,
		average: 14,
		range: 8,
		mode: undefined,
		median: undefined,
		variance: undefined,
		standardDeviation: undefined

	}, new WpLinq([15, 19, 11, 11]).statistics(false), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 4,
		minimum: 11,
		maximum: 19,
		summary: 56,
		average: 14,
		range: 8,
		mode: 11,
		median: 13,
		variance: 11,
		standardDeviation: Math.sqrt(11)

	}, new WpLinq([15, 19, 11, 11]).statistics(true), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 4,
		minimum: 11,
		maximum: 19,
		summary: 56,
		average: 14,
		range: 8,
		mode: 11,
		median: 13,
		variance: 11,
		standardDeviation: Math.sqrt(11)

	}, new WpLinq([15, 19, 11, 11]).statistics(true), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 5,
		minimum: 11,
		maximum: 19,
		summary: 75,
		average: 15,
		range: 8,
		mode: undefined,
		median: undefined,
		variance: undefined,
		standardDeviation: undefined
	}, new WpLinq([15, 19, 11, 19, 11]).statistics(false), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 5,
		minimum: 11,
		maximum: 19,
		summary: 75,
		average: 15,
		range: 8,
		mode: undefined,
		median: 15,
		variance: 64 / 5,
		standardDeviation: Math.sqrt(64/5)
	}, new WpLinq([15, 19, 11, 19, 11]).statistics(true), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 8,
		minimum: 8,
		maximum: 19,
		summary: 99,
		average: 99 / 8,
		range: 11,
		mode: undefined,
		median: undefined,
		variance: undefined,
		standardDeviation: undefined
	}, new WpLinq([15, 19, 11, 8, 8, 19, 11, 8]).statistics(false), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	.areEqual(an.next(), {
		count: 8,
		minimum: 8,
		maximum: 19,
		summary: 96,
		average: 12,
		range: 11,
		mode: 8,
		median: 11,
		variance: 18.5,
		standardDeviation: Math.sqrt(18.5)
	}, new WpLinq([12, 19, 11, 8, 8, 19, 11, 8]).statistics(true), (a, b) =>
		a.count === b.count &&
		a.minimum === b.minimum &&
		a.maximum === b.maximum &&
		a.summary === b.summary &&
		a.average === b.average &&
		a.range === b.range &&
		a.mode === b.mode &&
		a.median === b.median &&
		a.variance === b.variance &&
		a.standardDeviation === b.standardDeviation
	)

	//.areEqual(an.next(), {
	//	count: 11,
	//	minimum: 8,
	//	maximum: 22,
	//	summary: 162,
	//	average: 162 / 11,
	//	range: 14,
	//	mode: undefined,
	//	median: 12,
	//	variance: (tempValue = 162 / 11, (3 * ((8 - tempValue) ** 2) + 2 * ((11 - tempValue) ** 2) + 1 * ((12 - tempValue) ** 2) + 2 * ((19 - tempValue) ** 2) + 3 * ((22 - tempValue) ** 2)) / 11),
	//	standardDeviation: Math.sqrt((3 * (8 - (162 / 11)) ** 2 + 2 * (11 - (162 / 11)) ** 2 + 1 * (12 - (162 / 11)) ** 2 + 2 * (19 - (162 / 11)) ** 2 + 3 * (22 - (162 / 11)) ** 2) / 11)
	//}, new WpLinq([12, 19, 11, 8, 8, 19, 11, 8, 22, 22, 22]).statistics(true), function (a, b) {
	//	debugger;

	//	return a.count === b.count &&
	//		a.minimum === b.minimum &&
	//		a.maximum === b.maximum &&
	//		a.summary === b.summary &&
	//		a.average === b.average &&
	//		a.range === b.range &&
	//		a.mode === b.mode &&
	//		a.median === b.median &&
	//		a.variance === b.variance &&
	//		a.standardDeviation === b.standardDeviation
	//})

	.groupClose()



	/* G R O U P */

	.groupStart("sum() function")
	.areEqual(an.next(), undefined, new WpLinq([]).sum())
	.areEqual(an.next(), undefined, new WpLinq([null]).sum())
	.areEqual(an.next(), undefined, new WpLinq([null, undefined, 5, 6]).sum())
	.areEqual(an.next(), undefined, new WpLinq([undefined, 5, 6]).sum())
	.areEqual(an.next(), undefined, new WpLinq([null, 5, 6]).sum())
	.areEqual(an.next(), 5, new WpLinq([5]).sum())
	.areEqual(an.next(), 11, new WpLinq([5, 6]).sum())
	.areEqual(an.next(), 14, new WpLinq([5, 6, 3]).sum())
	.areEqual(an.next(), undefined, new WpLinq(["a", 6]).sum())
	.areEqual(an.next(), undefined, new WpLinq(["a", "b"]).sum())
	.areEqual(an.next(), undefined, new WpLinq(["ilan", " ", "amoyal"]).sum())
	.areEqual(an.next(), undefined, new WpLinq(["ilan", " ", "amoyal"]).sum())
	.groupClose()

	/* G R O U P */

	.groupStart("take() function")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).take(), e => e.message === "count must be an integer")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).take(1.2), e => e.message === "count must be an integer")
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).take(-1))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).take(0))
	.sequencesAreEqual(an.next(), [4], new WpLinq([4, 2, 3]).take(1))
	.sequencesAreEqual(an.next(), [4, 2], new WpLinq([4, 2, 3]).take(2))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).take(3))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).take(4))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).take(5))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).take(1))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).take(2))
	.groupClose()

	/* G R O U P */

	.groupStart("takeLast() function")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).takeLast(), e => e.message === "count must be an integer")
	.throws(an.next(), () => new WpLinq([4, 2, 3]).takeLast(1.2), e => e.message === "count must be an integer")
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).takeLast(-1))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 3]).takeLast(0))
	.sequencesAreEqual(an.next(), [3], new WpLinq([4, 2, 3]).takeLast(1))
	.sequencesAreEqual(an.next(), [2, 3], new WpLinq([4, 2, 3]).takeLast(2))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).takeLast(3))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).takeLast(4))
	.sequencesAreEqual(an.next(), [4, 2, 3], new WpLinq([4, 2, 3]).takeLast(5))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).takeLast(1))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).takeLast(2))
	.groupClose()

	/* G R O U P */

	.groupStart("takeWhile() function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(12), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(null), e => e.message === "predicate must be a function")
	.throws(an.next(), () => new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(undefined), e => e.message === "predicate must be a function")
	.sequencesAreEqual(an.next(), [4, 2], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a <= 4))
	.sequencesAreEqual(an.next(), [4], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a % 4 === 0))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a < 0))
	.sequencesAreEqual(an.next(), [4, 2, 5, 7, 8], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a < 10))
	.sequencesAreEqual(an.next(), [], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a > 10))
	.sequencesAreEqual(an.next(), [4, 2, 5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a <= 11))
	.sequencesAreEqual(an.next(), [4, 2, 5, 7, 8, 11], new WpLinq([4, 2, 5, 7, 8, 11]).takeWhile(a => a < 100))
	.groupClose()

	/* G R O U P */

	.groupStart("thenBy()/thenByDescending functions")

	.sequencesAreEqual(an.next("with thenBy"), [
		{ key: 4, value: "aaa" },
		{ key: 6, value: "bbb" },
		{ key: 1, value: "eee" },
		{ key: 3, value: "fff" }
	], new WpLinq([
		{ key: 6, value: "bbb" },
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" }
	]).orderBy(a => a.key, (a, b) => (a % 2 - b % 2) /* in this comparer each odd is greater than an even number */)
		.thenBy(a => a.key, (a, b) => a - b),
		(a, b) => a.key === b.key && a.value === b.value)

	.sequencesAreEqual(an.next("with thenBy"), [
		{ key: 6, value: "bbb" },
		{ key: 4, value: "aaa" },
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" }
	], new WpLinq([
		{ key: 6, value: "bbb" },
		{ key: 3, value: "fff" },
		{ key: 1, value: "eee" },
		{ key: 4, value: "aaa" }
	]).orderBy(a => a.key, (a, b) => (a % 2 - b % 2) /* in this comparer each odd is greater than an even number */)
		.thenByDescending(a => a.key, (a, b) => a - b),
		(a, b) => a.key === b.key && a.value === b.value)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)"), [
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */),
		(a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenBy(last_name.length)"), [
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenBy(last_name.length)\n.thenBy(occupation.length)"), [
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */

		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */

		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length */)
		.thenBy(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenBy(last_name.length)\n.thenBy(occupation.length)\n.thenBy(Id-digit-sum)"), [
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */

		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */

		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */

		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */

		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */

		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */

		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */

		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */

		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 9 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length */)
		.thenBy(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length */)
		.thenBy(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)"), [
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)


	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)"), [
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */

		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */

		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)\n.thenByDescending(Id-digit-sum)"), [
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */

		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */

		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */

		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */

		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */

		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */

		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */

		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */

		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenByDescending(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)\n.thenByDescending(Id-digit-sum)\n.orderByDescending(first_name.length)"), [
		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenByDescending(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)
		.orderByDescending(a => a.first_name, (a, b) => a.length - b.length /* a new primary order - by first name length - descending */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)

	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)\n.thenByDescending(Id-digit-sum)\n.orderByDescending(first_name.length)\n.thenBy(last_name.length)"), [
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */
		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */
		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */
		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenByDescending(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)
		.orderByDescending(a => a.first_name, (a, b) => a.length - b.length /* a new primary order - by first name length - descending */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)


	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)\n.thenByDescending(Id-digit-sum)\n.orderByDescending(first_name.length)\n.thenBy(last_name.length)\n.thenBy(occupation.length)"), [
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */
		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */
		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */

		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */
		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */
		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */
		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */
		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */

		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */
		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */
		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenByDescending(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)
		.orderByDescending(a => a.first_name, (a, b) => a.length - b.length /* a new primary order - by first name length - descending */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenBy(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)
	///
	.sequencesAreEqual(an.next("peopleList\n.orderBy(first_name.length)\n.thenByDescending(last_name.length)\n.thenByDescending(occupation.length)\n.thenByDescending(Id-digit-sum)\n.orderByDescending(first_name.length)\n.thenBy(last_name.length)\n.thenBy(occupation.length)\n.thenBy(Id-digit-sum)"), [
		{ Id: 181, first_name: "Mason", last_name: "Clark", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 7, id_sum_digits = 10 */

		{ Id: 608, first_name: "Henry", last_name: "Moore", occupation: "Hairdresser" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 11, id_sum_digits = 14 */

		{ Id: 303, first_name: "Mason", last_name: "Lewis", occupation: "Business Broker" }, /* first_name.length = 5, last_name.length = 5, occupation.length = 15, id_sum_digits = 6 */

		{ Id: 227, first_name: "Bryan", last_name: "Taylor", occupation: "Pilot" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 5, id_sum_digits = 11 */

		{ Id: 77, first_name: "Ethan", last_name: "Harris", occupation: "Teacher" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 7, id_sum_digits = 14 */

		{ Id: 108, first_name: "Ethan", last_name: "Thomas", occupation: "Composer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 55, first_name: "Mason", last_name: "Martin", occupation: "Journalist" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 10 */
		{ Id: 266, first_name: "James", last_name: "Wilson", occupation: "Programmer" }, /* first_name.length = 5, last_name.length = 6, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 36, first_name: "Logan", last_name: "Anderson", occupation: "Actor" }, /* first_name.length = 5, last_name.length = 8, occupation.length = 5, id_sum_digits = 8 */

		{ Id: 85, first_name: "Dana", last_name: "Lee", occupation: "Nurse" }, /* first_name.length = 4, last_name.length = 3, occupation.length = 5, id_sum_digits = 13 */

		{ Id: 502, first_name: "Dana", last_name: "Jones", occupation: "Farmer" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 6, id_sum_digits = 7 */

		{ Id: 149, first_name: "Mark", last_name: "Brown", occupation: "Accountant" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 11, first_name: "Ezra", last_name: "Davis", occupation: "Business Broker" }, /* first_name.length = 4, last_name.length = 5, occupation.length = 15, id_sum_digits = 2 */

		{ Id: 306, first_name: "Jack", last_name: "Garcia", occupation: "Musician" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 8, id_sum_digits = 9 */

		{ Id: 349, first_name: "Ryan", last_name: "Miller", occupation: "Journalist" }, /* first_name.length = 4, last_name.length = 6, occupation.length = 10, id_sum_digits = 16 */

		{ Id: 408, first_name: "Levy", last_name: "Williams", occupation: "Teacher" }, /* first_name.length = 4, last_name.length = 8, occupation.length = 7, id_sum_digits = 12 */

		{ Id: 109, first_name: "Bob", last_name: "Dylan", occupation: "Musician" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 10 */
		{ Id: 66, first_name: "Eve", last_name: "White", occupation: "Engineer" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 8, id_sum_digits = 12 */

		{ Id: 284, first_name: "Tom", last_name: "Smith", occupation: "Accountant" }, /* first_name.length = 3, last_name.length = 5, occupation.length = 10, id_sum_digits = 14 */

		{ Id: 87, first_name: "Bob", last_name: "Sponge", occupation: "Comedian" }, /* first_name.length = 3, last_name.length = 6, occupation.length = 8, id_sum_digits = 15 */

		{ Id: 205, first_name: "Eve", last_name: "Johnson", occupation: "Actor" }, /* first_name.length = 3, last_name.length = 7, occupation.length = 5, id_sum_digits = 7 */

		{ Id: 163, first_name: "Eve", last_name: "Thompson", occupation: "Physicist" }, /* first_name.length = 3, last_name.length = 8, occupation.length = 9, id_sum_digits = 10 */
	], new WpLinq(peopleList)
		.orderBy(a => a.first_name, (a, b) => a.length - b.length /* order by first name length */)
		.thenByDescending(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenByDescending(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenByDescending(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)
		.orderByDescending(a => a.first_name, (a, b) => a.length - b.length /* a new primary order - by first name length - descending */)
		.thenBy(a => a.last_name, (a, b) => a.length - b.length /* sub-order by last name length - descending */)
		.thenBy(a => a.occupation, (a, b) => a.length - b.length /* sub-order by occupation length - descending */)
		.thenBy(a => new WpLinq(a.Id.toString()).select(ch => parseInt(ch)).sum(), (a, b) => a - b /* sub-order by digit-sum of the Id */)

		, (a, b) => a.Id === b.Id && a.first_name === b.first_name && a.last_name === b.last_name && a.occupation === b.occupation)
	.groupClose()

	/* G R O U P */

	.groupStart("select() function")
	.throws(an.next(), () => new WpLinq([10, 8, 6, 4, 3, 1, 5]).select(15), e => e.message === "selector must be a function or nullish")
	.throws(an.next(), () => new WpLinq([10, 8, 6, 4, 3, 1, 5]).select("dummy"), e => e.message === "selector must be a function or nullish")
	.sequencesAreEqual(an.next(), [], new WpLinq([]).select())
	.sequencesAreEqual(an.next(), [11], new WpLinq([11]).select())
	.sequencesAreEqual(an.next(), [], new WpLinq([]).select(a => a + 1))
	.sequencesAreEqual(an.next(), [12], new WpLinq([11]).select(a => a + 1))
	.sequencesAreEqual(an.next(), [10, 8, 6, 4, 3, 1, 5], new WpLinq([10, 8, 6, 4, 3, 1, 5]).select())
	.sequencesAreEqual(an.next(), [10, 8, 6, 4, 3, 1, 5], new WpLinq([10, 8, 6, 4, 3, 1, 5]).select(a => a))
	.sequencesAreEqual(an.next(), [11, 9, 7, 5, 4, 2, 6], new WpLinq([10, 8, 6, 4, 3, 1, 5]).select(a => a + 1))
	.sequencesAreEqual(an.next(), [10, 9, 8, 7, 7, 6, 11], new WpLinq([10, 8, 6, 4, 3, 1, 5]).select((a, i) => a + i))
	.sequencesAreEqual(an.next(), [
		{ index: 0, value: 10 },
		{ index: 1, value: 9 },
		{ index: 2, value: 8 },
		{ index: 3, value: 7 },
		{ index: 4, value: 7 },
		{ index: 5, value: 6 },
		{ index: 6, value: 11 }
	], new WpLinq([10, 8, 6, 4, 3, 1, 5]).select((a, i) => new Object({ index: i, value: a + i })),
		(a, b) => a.index === b.index && a.value === b.value
	)
	.groupClose()

	/* G R O U P */
	.groupStart("selectMany() function")
	.throws(an.next(), () => new WpLinq([[1, 2], [4, 7]]).selectMany(12), e => e.message === "collectionSelector must be a function or nullish")
	.throws(an.next(), () => new WpLinq([[1, 2], [4, 7]]).selectMany(null, 12), e => e.message === "resultSelector must be a function or nullish")
	.sequencesAreEqual(an.next(), [1, 2, 4, 7], new WpLinq([
		[1, 2],
		[4, 7]
	]).selectMany())
	.sequencesAreEqual(an.next(), [
		"Logan", "Anderson",
		"Bob", "Sponge", 
		"Ethan", "Thomas", 
		"Mark", "Brown", 
		"Eve", "White", 
		"Mason", "Lewis", 
		"Dana", "Lee", 
		"James", "Wilson", 
		"Levy", "Williams", 
		"Ezra", "Davis", 
		"Bob", "Dylan", 
		"Henry", "Moore", 
		"Ryan", "Miller", 
		"Mason", "Martin", 
		"Tom", "Smith", 
		"Dana", "Jones", 
		"Eve", "Johnson", 
		"Mason", "Clark", 
		"Eve", "Thompson", 
		"Bryan", "Taylor", 
		"Ethan", "Harris", 
		"Jack", "Garcia"
	], new WpLinq(peopleList)
		.selectMany(p => [p.first_name, p.last_name]))

	.sequencesAreEqual(an.next(), [1, 2, 4, 7], new WpLinq([
		[1, 2],
		[4, 7]
	]).selectMany())
	.sequencesAreEqual(an.next(), [
		"logan", "anderson",
		"bob", "sponge",
		"ethan", "thomas",
		"mark", "brown",
		"eve", "white",
		"mason", "lewis",
		"dana", "lee",
		"james", "wilson",
		"levy", "williams",
		"ezra", "davis",
		"bob", "dylan",
		"henry", "moore",
		"ryan", "miller",
		"mason", "martin",
		"tom", "smith",
		"dana", "jones",
		"eve", "johnson",
		"mason", "clark",
		"eve", "thompson",
		"bryan", "taylor",
		"ethan", "harris",
		"jack", "garcia"
	], new WpLinq(peopleList)
		.selectMany(p => [p.first_name, p.last_name], item => item.toLowerCase()))
	.groupClose()

	/* G R O U P */

	.groupStart("toArray() function")
	.isTrue(an.next(), Array.isArray(new WpLinq("hello world").toArray()))
	.sequencesAreEqual(an.next(), ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], new WpLinq("hello world").toArray())
	.isTrue(an.next(), Array.isArray(new WpLinq("hello, world").where((item, index) => index >= 2 && index <= 6).toArray()))
	.sequencesAreEqual(an.next(), ["l", "l", "o", " ", "w"], new WpLinq("hello world").where((item, index)=> index >= 2 && index <= 6).toArray())
	.areEqual(an.next(), 5, new WpLinq("hello world").where((item, index) => index >= 2 && index <= 6).toArray().length)
	.isTrue(an.next(), Array.isArray(new WpLinq("").toArray()))
	.sequencesAreEqual(an.next(), [], new WpLinq("").toArray())
	.areEqual(an.next(), 0, new WpLinq("").toArray().length)
	.groupClose()

	/* G R O U P */

	.groupStart("toMap() / toSet() functions")
	.throws(an.next(), () => new WpLinq(["this", "is", "a", "message"]).toMap("dummy key selector", item => item), e=>e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector)
	.throws(an.next(), () => new WpLinq(["this", "is", "a", "message"]).toMap(item => item.charAt(0), 15), e=>e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_valueSelector)
	.throws(an.next(), () => new WpLinq(["this", "is", "a", "message", "to", "you"]).toMap(item => item.charAt(0), item => item), e=>e.message === WpLinq.ErrorMessage.PRODUCES_DUPLICATE_KEYS_keySelector)
	.sequencesAreEqual(an.next(), [["t", "this"], ["i", "is"], ["a", "a"], ["m", "message"]], new WpLinq(["this", "is", "a", "message"]).toMap(item => item.charAt(0), item => item), (a, b) => a[0] === b[0] && a[1] === b[1])
	.sequencesAreEqual(an.next(), [["t", "his"], ["i", "s"], ["a", ""], ["m", "essage"]], new WpLinq(["this", "is", "a", "message"]).toMap(item => item.charAt(0), item => item.substr(1)), (a, b) => a[0] === b[0] && a[1] === b[1])
	.sequencesAreEqual(an.next(), [["this", "this"], ["is", "is"], ["a", "a"], ["message", "message"]], new WpLinq(["this", "is", "a", "message"]).toMap(), (a, b) => a[0] === b[0] && a[1] === b[1])

	.throws(an.next(), () => new WpLinq(["this", "is", "a", "message"]).toSet("dummy key selector"), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector)
	.throws(an.next(), () => new WpLinq(["this", "is", "a", "message", "to", "you"]).toSet(item => item.charAt(0)), e => e.message === WpLinq.ErrorMessage.PRODUCES_DUPLICATE_KEYS_keySelector)
	.sequencesAreEqual(an.next(), ["t", "i", "a", "m"], new WpLinq(["this", "is", "a", "message"]).toSet(item => item.charAt(0)))
	.sequencesAreEqual(an.next(), ["this", "is", "a", "message"], new WpLinq(["this", "is", "a", "message"]).toSet())
	.groupClose()

	/* G R O U P */

	.groupStart("where() function")
	.throws(an.next(), () => new WpLinq([1, null, 2, undefined, 3, undefined]).where(), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.throws(an.next(), () => new WpLinq([1, null, 2, undefined, 3, undefined]).where(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.throws(an.next(), () => new WpLinq([1, null, 2, undefined, 3, undefined]).where(undefined), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.throws(an.next(), () => new WpLinq([1, null, 2, undefined, 3, undefined]).where({}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.throws(an.next(), () => new WpLinq([1, null, 2, undefined, 3, undefined]).where(11), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_predicate)
	.sequencesAreEqual(an.next(), [1, 2, 3], new WpLinq([1, null, 2, undefined, 3, undefined]).where(i => i != null))
	.sequencesAreEqual(an.next(), [2, 6, 8], new WpLinq([1, 2, 3, 5, 6, 7, 8, 9]).where(i => i % 2 === 0))
	.sequencesAreEqual(an.next(), [5, 6, 7, 8, 9], new WpLinq([1, 2, 3, 5, 6, 7, 8, 9]).where((i, index) => (i + index) % 2 === 0))
	.sequencesAreEqual(an.next(), [2], new WpLinq([1, 2, 3]).where(i => i % 2 === 0))
	.sequencesAreEqual(an.next(), [], new WpLinq([1]).where(i => i % 2 === 0))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).where(i => i % 2 === 0))
	.groupClose()

	/* G R O U P */

	.groupStart("union() function")
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).union(null), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).union(12), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid second iterator"), () => new WpLinq([2, 4, 6, 8, 10, 12]).union(undefined), e => e.message === WpLinq.ErrorMessage.MUST_BE_ITERABLE_secondIterator)
	.throws(an.next("invalid equality comparer"), () => new WpLinq([2, 4, 6, 8, 10, 12]).union([4, 10], {}), e => e.message === WpLinq.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer)
	.sequencesAreEqual(an.next(), [2, 4, 6, 8, 10, 12, 31, 7], new WpLinq([2, 4, 6, 8, 10, 12]).union([4, 10, 31, 6, 7]))
	.sequencesAreEqual(an.next(), [2, 4, 6, 8, 10, 12], new WpLinq([2, 4, 6, 8, 10, 12]).union([]))
	.sequencesAreEqual(an.next(), [2, 4, 6, 8, 10, 12], new WpLinq([]).union([2, 4, 6, 8, 10, 12]))
	.sequencesAreEqual(an.next(), [], new WpLinq([]).union([]))
	.sequencesAreEqual(an.next(), [123], new WpLinq([123]).union([123]))
	.sequencesAreEqual(an.next(), [5, 4, 3, 2, 1], new WpLinq([5, 4, 3, 2, 1]).union([1, 2, 4, 3, 5]))
	.sequencesAreEqual(an.next(), "abcd", new WpLinq("abc").union("dcb"))
	.sequencesAreEqual(an.next(), [123, 222], new WpLinq([123]).union([222]))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [11, 2, 8, 15, 4, 6, 10, 12], new WpLinq([11, 2, 8, 15, 4, 6, 8, 10, 12]).union([24, 12, 12, 4], (a, b) => a * 2 === b || a * 3 === b))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [11, 2, 8, 15, 4, 6, 10, 12], new WpLinq([11, 2, 8, 15, 4, 6, 8, 10, 12]).union([4, 12, 24], (a, b) => a * 2 === b || a * 3 === b))
	.sequencesAreEqual(an.next("with custom equality comparer (non-commotative comparer)"), [11, 2, 8, 15, 4, 6, 10, 12, 7, 40], new WpLinq([11, 2, 8, 15, 4, 6, 8, 10, 12]).union([4, 7, 12, 40, 24], (a, b) => a * 2 === b || a * 3 === b))
	.groupClose()

	/* G R O U P */

	.groupStart("zip() function")
	.throws(an.next(), () => WpLinq.zip(8, 4, (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`).sequenceEqual(["Item 0 is 'one', whose numeric value is 1", "Item 1 is 'two', whose numeric value is 2", "Item 2 is 'three', whose numeric value is 3"]), e => e.message === "iterator1 must be iterable")
	.throws(an.next(), () => WpLinq.zip([1, 2, 3], 4, (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`).sequenceEqual(["Item 0 is 'one', whose numeric value is 1", "Item 1 is 'two', whose numeric value is 2", "Item 2 is 'three', whose numeric value is 3"]), e => e.message === "iterator2 must be iterable")
	.throws(an.next(), () => WpLinq.zip([1, 2, 3], "abc", 7), e => e.message === "transform must be a function")
	.sequencesAreEqual(an.next(), [
		"Item 0 is 'one', whose numeric value is 1",
		"Item 1 is 'two', whose numeric value is 2",
		"Item 2 is 'three', whose numeric value is 3"
	], WpLinq.zip([1, 2, 3], ["one", "two", "three"], (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`))
	.sequencesAreEqual(an.next(), [
		"Item 0 is 'a', whose numeric value is 1",
		"Item 1 is 'b', whose numeric value is 2",
		"Item 2 is 'c', whose numeric value is 3"
	], WpLinq.zip([1, 2, 3], "abc", (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`))
	.sequencesAreEqual(an.next(), [
		"Item 0 is 'a', whose numeric value is 1",
		"Item 1 is 'b', whose numeric value is 2"
	], WpLinq.zip([1, 2, 3], "ab", (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`))
	.sequencesAreEqual(an.next(), [], WpLinq.zip([], "abc", (a, b, idx) => `Item ${idx} is '${b}', whose numeric value is ${a}`))
	.groupClose();

linqTest.go(true);

