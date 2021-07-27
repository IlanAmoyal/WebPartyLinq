/*
 * WebPartyLinq - A full javascript implementation for the well known Microsoft LINQ, with some addition and adaptations
 * 
 * Version: 1.0.0.0.
 * 
 * GitHub repository: https://github.com/IlanAmoyal/WebPartyLinq
 * 
 * Copyright (C) 2021 Ilan Amoyal (http://www.webparty.org). All rights reserved.
 * 
 * Email; ilan.amoyal[guess...what]gmail.com
 * 
 * This project is licensed under the MIT License (see below). 
 * The text of license can also be found here: https://opensource.org/licenses/MIT
 * 
 * MIT license
 * ***********
 * > Begin license text <
 * 
 * Copyright 2021, Ilan Amoyal © All Rights Reserved
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of 
 * the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * > End license text <
 */

"use strict"; /* in case the file is used as regular javascript and not as a module! */

/* > Note < */

/* Comment one of the next two declaration and uncomment the other. */
 
/* the following line is for javascript module */
export default 

/* the following line is for regular javascript (chhose your desired name) */
//let WpLinq =

/* > End of note < */
	(function () {
		/*
		 *	Implemented (+)
		 *	Not implemented yet (-)
		 *	Static function (S)
		 *	Deferred execution (D)
		 *	Tested (T)
		 *	Extended (X), that is a function that is not included in Microsoft Linq library
		 *
		 *	+ aggregate (T)
		 *	+ all (T)
		 *	+ any (T)
		 *	+ append (T)
		 *	+ average (T)
		 *	+ concat (S, T)
		 *	+ contains (T)
		 *	+ count (T)
		 *	+ defaultIfEmpty (T)
		 *	+ distinct (T)
		 *	+ duplicate (X, T)
		 *	+ elementAt (T)
		 *	+ elementAtOrDefault (T)
		 *	+ empty (S, T)
		 *	+ except (T)
		 *	+ first (T)
		 *	+ firstOrDefault (T)
		 *	+ forEach (X, T)
		 *	+ groupBy (T)
		 *	+ groupJoin (T)
		 *	+ intersect (T)
		 *	+ join (T)
		 *	+ last (T)
		 *	+ lastOrDefault (T)
		 *	+ max (T)
		 *	+ min (T)
		 *	+ orderBy (T)
		 *	+ orderByDescending (T)
		 *	+ prepend (T)
		 *	+ range (S, T)
		 *	+ removeNullishes (X, T)
		 *	+ repeat (S, T)
		 *	+ reverse (T)
		 *	+ select (T)
		 *	+ selectMany (T)
		 *	+ sequenceEqual (T)
		 *	+ single (T)
		 *	+ singleOrDefault (T)
		 *	+ skip (T)
		 *	+ skipLast (T)
		 *	+ skipWhile (T)
		 *	+ statistics (X, partly tested, the last test must be checked again!)
		 *	+ sum (T)
		 *	+ take (T)
		 *	+ takeLast (T)
		 *	+ takeWhile (T)
		 *	+ thenBy (T)
		 *	+ thenByDescending (T)
		 *	+ toArray (T)
		 *	+ toMap (T)
		 *	+ toSet (T)
		 *	+ union (T)
		 *	+ where (T)
		 *	+ zip (S, T)
		 */

		let _entities = {};

		_entities.Linq = class {
			/**
			* This library version.
			*/
			get Version() { return "1.0.0.0"; }

			/*
			 * Error messages
			 */
			static #_errorMessages = Object.seal({
				ALL_MUST_BE_ITERABLE: "All arguments must be iterable",
				ARGUMENT_MUST_NOT_BE_NULL_key: "key argument MUST NOT be null",
				INPUT_SEQUENCE_CONTAINS_MORE_THAN_ONE_ELEMENT: "The input sequence contains more than one element",
				MORE_THAN_ELEMENT_SEQUENCE_SATISFIES_THE_CONDITION: "More than one element satisfies the condition in predicate",
				MSUT_BE_NON_NEGATIVE_INTEGER_count: "count must be a non negative integer",
				MSUT_BE_NON_NEGATIVE_INTEGER_factor: "factor must be a non negative integer",
				MSUT_BE_NON_NEGATIVE_INTEGER_index: "index must be a non negative integer",
				MUST_BE_FUNCTION_OR_NULLISH_collectionSelector: "collectionSelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_comparer: "comparer must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_elementSelector: "elementSelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_equalityComparer: "equalityComparer must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer: "keyEqualityComparer must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_keySelector: "keySelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_leftKeySelector: "leftKeySelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_predicate: "predicate must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_resultSelector: "resultSelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_rightKeySelector: "rightKeySelector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_selector: "selector must be a function or nullish",
				MUST_BE_FUNCTION_OR_NULLISH_valueSelector: "valueSelector must be a function or nullish",
				MUST_BE_FUNCTION_accumulator: "accumulator must be a function",
				MUST_BE_FUNCTION_callback: "callback must be a function",
				MUST_BE_FUNCTION_predicate: "predicate must be a function",
				MUST_BE_FUNCTION_transform: "transform must be a function",
				MUST_BE_INTEGER_count: "count must be an integer",
				MUST_BE_INTEGER_start: "start must be an integer",
				MUST_BE_ITERABLE_iterable: "'iterable' argument must be iterable",
				MUST_BE_ITERABLE_iterator1: "iterator1 must be iterable",
				MUST_BE_ITERABLE_iterator2: "iterator2 must be iterable",
				MUST_BE_ITERABLE_rightIterator: "rightIterator must be iterable",
				MUST_BE_ITERABLE_secondIterator: "secondIterator must be iterable",
				MUST_BE_NUMBER_all_sequence_elements: "At least one of the sequence's element is not a number",
				NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate: "No element satisfies the condition in predicate",
				OUT_OF_RANGE_index: "index is out of range",
				PRODUCES_DUPLICATE_KEYS_keySelector: "keySelector produces duplicate keys",
				SEQUENCE_IS_EMPTY: "The sequence is empty",
			});

			/**
			 * Exposes the error messages for better unit-test coding and other.
			 */
			static get ErrorMessage() { return this.#_errorMessages; }

			/* basics and defaults */
			static #_defaultComparer = (obj1, obj2) => obj1 > obj2 ? 1 : (obj1 < obj2 ? - 1 : 0);
			static #_defaultEqualityComparer = (obj1, obj2) => obj1 === obj2;
			static #_defaultSelector = (element) => element;
			static #_defaultResultSelector(...args) {
				if (args.length > 1) { return [...args]; }
				if (args.length === 1) { return args[0]; }
				return undefined;
			};
			static *#_createSimpleGenerator(iterable) { for (let item of iterable) { yield item; } }

			/*
			 * Instance implementation starts here.
			 */

			#_iterable = null;
			#_thisArg = null;

			/**
			 * Initialize an new instance of Linq object and wrap the specified iterable within it.
			 * @param {any} iterable - An interable object (e.g. Array, string, Map, Set...)
			 * @param {any} thisArg - A "this" pointer to be applied whenb calling user's callbacks.
			 * @throws 'iterable' argument must be iterable
			 */
			constructor(iterable, thisArg) {
				if (!_entities.TypeCheck.IsIterable(iterable)) { throw new Error(_entities.Linq.ErrorMessage.MUST_BE_ITERABLE_iterable); }
				this.#_iterable = iterable;
				this.#_thisArg = thisArg;
			}

			/**
			 * Makes this object iterable.
			 */
			*[Symbol.iterator]() {
				for (let item of this.#_iterable) {
					yield item;
				}
			}

			/**
			 * Wrap the specified iterable with Linq.
			 * @param {Iterable} iterable - An iterable object.
			 * @param {any} [thisArg] - An object to be used as "this" ponter in callback calls.
			 */
			static from(iterable, thisArg) { return new this(iterable, thisArg); }

			/**
			 * Applies an accumulator function over the sequence. The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
			 * @param {any} seed - The initial accumulator value. The first parameter is the current sequence item. The second parameter is the value accumulated so far. The third parameter is the index of the current item (the first parameter) in the sequence.
			 * @param {Function} accumulator - An accumulator function to be invoked on each element.
			 * @param {Function} [resultSelector] - An optional function to transform the final accumulator value into the result value.
			 * @returns {any} The transformed final accumulator value.
			 * @throws accumulator must be a function
			 * @throws resultSelector must be a function or nullish
			 */
			aggregate(seed, accumulator, resultSelector) { return _entities.Linq.#_aggregate(this.#_thisArg, seed, this, accumulator, resultSelector); }

			static #_aggregate(thisArg, seed, iterator, accumulator, resultSelector) {
				if (!_entities.TypeCheck.IsFunction(accumulator)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_accumulator); }
				if (resultSelector != null && !_entities.TypeCheck.IsFunction(resultSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector); }

				thisArg = thisArg ?? this;

				resultSelector = resultSelector ?? this.#_defaultResultSelector;
				let acumulatedSoFar = seed, index = 0;
				for (let item of iterator) {
					acumulatedSoFar = accumulator.call(thisArg, item, acumulatedSoFar, index);
					index++;
				}
				return resultSelector.call(thisArg, acumulatedSoFar);
			}

			/**
			 * Determines whether all elements of the sequence satisfy a condition.
			 * @param {Function} predicate - A function to test each source element for a condition; The first parameter is a source element, the second parameter represents the index of the source element in the sequence.
			 * @returns {boolean} true if every element of the sequence passes the test in the specified predicate, or if the sequence is empty; otherwise, false.
			 * @throws predicate must be a function.
			 */
			all(predicate) { return _entities.Linq.#_all(this.#_thisArg, this, predicate); }

			static #_all(thisArg, iterator, predicate) {
				if (!_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_predicate); }

				thisArg = thisArg ?? this;

				let index = 0;
				for (let item of iterator) {
					if (predicate.call(thisArg, item, index) !== true) { return false; }
					index++;
				}
				return true;
			}

			/**
			 * Determines whether any element of the sequence exists or satisfies a condition.
			 * @param {Function} [predicate] - A function to test each source element for a condition; The first parameter is a source element, the second parameter represents the index of the source element in the sequence.
			 * @returns {boolean} true if the sequence contains any elements; otherwise, false. BUT In case that a predicate was specified: true if the sequence is not empty and at least one of its elements passes the test in the specified predicate; otherwise, false.
			 * @throws predicate must be a function or nullish.
			 */
			any(predicate) { return _entities.Linq.#_any(this.#_thisArg, this, predicate); }

			static #_any(thisArg, iterator, predicate) {
				if (predicate != null && !_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate); }

				thisArg = thisArg ?? this;

				let index = 0;
				for (let item of iterator) {
					if (predicate == null || predicate.call(thisArg, item, index) === true) { return true; }
					index++;
				}
				return false;
			}

			/**
			 * Appends a value to the end of the sequence. The original sequence (the current) is not changed.
			 * @param {any} value - The value to be appended to the returned sequence.
			 * @returns {_entities.Linq} A sequence consist of the current sequence plus the specified value.
			 */
			append(value) { return _entities.Linq.#_append(this.#_thisArg, this, value); }

			static #_append(thisArg, iterator, value) { return new this(this.#_appendGen(thisArg, iterator, value)); }

			static *#_appendGen(thisArg, iterable, value) {
				for (let item of iterable) { yield item; }
				yield value;
			}

			/**
			 * Computes the average of the sequence of numeric values. 
			 * If the sequence is empty or at least one element of the sequence is not a number, the return value is undefined.
			 * @return {number | undefined} The numeric average of the sequence,or undefined if the sequence contains at least oneitem that is not a number.
			 */
			average() { return _entities.Linq.#_average(this.#_thisArg, this); }

			static #_average(thisArg, iterator) {
				let sum = 0, count = 0;
				for (let item of iterator) {
					if (_entities.TypeCheck.IsNumber(item)) {
						sum += item;
						count++;
					}
					else {
						sum = undefined;
						break;
					}
				}
				return (sum === undefined || count === 0) ? undefined : sum / count;
			}

			/**
			 * Concatenates the current sequence with the specified sequences. Note that the current sequence is not modified.
			 * @param {...Iterable} withIterables - Iterable sequences  be appended to the endof this sequence to form a single sequence.
			 * @returns {_entities.Linq} An iterable that contains the concatenated elements of the current sequence with all input sequences. 
			 * @throw At least one of the argument is not iterable.
			 */
			concat(...withIterables) { return _entities.Linq.#_concat(this.#_thisArg, this, ...withIterables); }

			static #_concat(thisArg, iterable, ...withIterables) {
				/* the validation took place here and NOT within #_concat, because that is a deferred execution generator function*/
				for (let iter of withIterables) {
					if (!_entities.TypeCheck.IsIterable(iter)) { throw new Error(this.ErrorMessage.ALL_MUST_BE_ITERABLE); }
				}
				return new this(this.#_concatGen(thisArg, ...[iterable, ...withIterables]), thisArg);
			}

			static *#_concatGen(thisArg, ...itrables) {
				for (let iter of itrables) {
					for (let item of iter) { yield item; }
				}
			}

			/**
			 * Determines whether the sequence contains the specified element using strict equality comparison (===) or the specified equality comparer.
			 * @param {any} value - The value to locate in the sequence.
			 * @param {Function} [equalityComparer] - An optional equality comparer to compare values. The first parameter to the comparer is the specified value. The second parameter is an item from the sequence. The third parameter is the index of the item in the sequence.
			 * @returns {boolean} true if the sequence contains the specified value using strict equality comparison (===) or the specified equality comparer; otherwise, false.
			 * @throws equalityComparer must be a function or nullish. 
			 */
			contains(value, equalityComparer = null) { return _entities.Linq.#_contains(this.#_thisArg, this, value, equalityComparer); }

			static #_contains(thisArg, iterator, value, equalityComparer) {
				if (equalityComparer != null && !_entities.TypeCheck.IsFunction(equalityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer); }

				equalityComparer = equalityComparer ?? this.#_defaultEqualityComparer;

				let index = 0;
				for (let item of iterator) {
					if (thisArg == null ? equalityComparer(value, item, index) === true : equalityComparer.call(thisArg, value, item, index)) {
						return true;
					}
					index++;
				}
				return false;
			}

			/**
			 * Returns the number of elements in a sequence.
			 * @returns {number} The number of elements in a sequence.
			 */
			count() { return _entities.Linq.#_count(this.#_thisArg, this); }

			static #_count(thisArg, iterator) {
				let c = 0;
				for (let item of iterator) {
					c++;
				}
				return c;
			}

			/**
			 * Returns the elements of the sequence, or a default valued singleton collection if the sequence is empty.
			 * @param {any} defaultSingletonValue - A default value to be used as a singleton in the returned sequence if the current sequence is empty.
			 * @returns {Iterable} The elements of the sequence, or a default valued singleton collection if the sequence is empty.
			 */
			defaultIfEmpty(defaultSingletonValue) { return _entities.Linq.#_defaultIfEmpty(this.#_thisArg, this, defaultSingletonValue); }

			static #_defaultIfEmpty(thisArg, iterator, defaultSingletonValue) {
				return new this(this.#_defaultIfEmptyGen(thisArg, iterator, defaultSingletonValue), thisArg);
			}

			static *#_defaultIfEmptyGen(thisArg, iterator, defaultSingletonValue) {
				let yielded = false;
				for (let item of iterator) {
					yielded = true;
					yield item;
				}
				if (!yielded) { yield defaultSingletonValue; }
			}

			/**
			 * Returns distinct elements from the sequence. 
			 * @param {Function} [equalityComparer] - An equality comparer to compare values. 
			 * @returns {_entities.Linq} Distinct elements from a sequence.
			 * @throws equalityComparer must be a function or nullish
			 */
			distinct(equalityComparer) { return _entities.Linq.#_distinct(this.#_thisArg, this, equalityComparer); }

			static #_distinct(thisArg, iterator, equalityComparer) {
				/* the validation took place here and NOT within #_distinctGen, because that is a deferred execution generator function*/
				if (equalityComparer != null && !_entities.TypeCheck.IsFunction(equalityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer); }
				return new this(this.#_distinctGen(thisArg, iterator, equalityComparer), thisArg);
			}

			static *#_distinctGen(thisArg, iterator, equalityComparer) {
				equalityComparer = equalityComparer ?? this.#_defaultEqualityComparer;
				let arr = [];

				for (let item of iterator) {
					let found = false;
					for (var i = 0; !found && i < arr.length; i++) {
						found = (thisArg == null ? equalityComparer(item, arr[i]) === true : equalityComparer.call(thisArg, item, arr[i]) === true);
					}
					if (!found) { arr.push(item); }
				}

				for (let item of arr) { yield item; }
			}

			/**
			 * Duplicate the sequence n number of times as specified factor parameter. 
			 * If the factor is non integral number, the integer value less than or equal to the factor is used.
			 * If factor is less than 1, an empty sequence returns. 
			 * This function does not modify the current sequence.
			 * otherwise the whole sequence is duplicated as 
			 * @param {number} factor - The number of times to duplicate the 
			 * @param {boolean} [inplace] - If set to true, duplicate each element and places the duplication right after this element, instead of duplicating the whole sequence and return them one after the other. The default is false.
			 * @returns {_entities.Linq} A sequence consist of duplication of the current sequence.
			 * @throws factor must be a non negative integer
			 */
			duplicate(factor, inplace) { return _entities.Linq.#_duplicate(this.#_thisArg, this, factor, inplace); }

			static #_duplicate(thisArg, iterator, factor, inplace) {
				if (!_entities.TypeCheck.IsNumber(factor) || Math.floor(factor) !== factor || factor < 0) { throw new Error(this.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_factor); }
				return new this(this.#_duplicateGen(thisArg, iterator, factor, inplace === true), thisArg);
			}

			static *#_duplicateGen(thisArg, iterator, factor, inplace) {
				if (factor >= 1.0) {
					if (inplace === true) {
						for (let item of iterator) {
							for (let i = 0; i < factor; i++) { yield item; }
						}
					}
					else {
						for (let i = 0; i < factor; i++) {
							for (let item of iterator) { yield item; }
						}
					}
				}
			}

			/**
			 * Returns the element at a specified index in the sequence.
			 * @param {number} index - The zero-based index of the element to retrieve.
			 * @returns {any} The element at a specified index in a sequence.
			 * @throws index must be a non negative integer
			 * @throws The sequence is empty
			 * @throws index is out of range
			 */
			elementAt(index) { return _entities.Linq.#_elementAt(this.#_thisArg, this, index, false, null); }

			/**
			 * Returns the element at a specified index in the sequence, or the specified default value if the specified index is negative or out of range.
			 * @param {number} index - The zero-based index of the element to retrieve.
			 * @param {any} defaultValue - The default value to be returned.
			 * @returns {any} The element at a specified index in the sequence, or the default value if the specified index is negative or out of range.
			 * @throws index must be a non negative integer
			 */
			elementAtOrDefault(index, defaultValue) { return _entities.Linq.#_elementAt(this.#_thisArg, this, index, true, defaultValue); }

			static #_elementAt(thisArg, iterator, index, hasDefaultValue, defaultValue) {
				if (!_entities.TypeCheck.IsNumber(index) || Math.floor(index) != index || (index < 0 && hasDefaultValue !== true)) {
					throw new Error(this.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_index);
				}
				let current = 0;
				for (let item of iterator) {
					if (current++ === index) { return item; }
				}

				if (hasDefaultValue === true) { return defaultValue; }

				throw new Error(current === 0 ? this.ErrorMessage.SEQUENCE_IS_EMPTY : this.ErrorMessage.OUT_OF_RANGE_index);
			}

			/**
			 * Returns an empty sequence.
			 * @param {any} thisArg - Optional object to be used as this argument in any call in the returned sequence.
			 * @returns {_entities.Linq} An empty sequence.
			 */
			static empty(thisArg) { return new this([], thisArg); }

			/**
			 * Produces a set of unique items from the current sequence that do not appear in the specified scond sequence.
			 * @param {Iterable} secondIterator - The second sequence.
			 * @param {Function} [equalityComparer] - An equality comparer to be used to compare two items.
			 * @returns {_entities.Linq} A set of unique items from the current sequence that do not appear in the specified scond sequence.
			 * @throws secondIterator must be iterable
			 * @throws equalityComparer must be a function or nullish
			 */
			except(secondIterator, equalityComparer) { return _entities.Linq.#_van(this.#_thisArg, this, secondIterator, equalityComparer, "except"); }

			static #_van(thisArg, sourceIterator, secondIterator, equalityComparer, algorithem) {
				/* #_van and #_vanGen are inner implementation of three functions:
				 * except
				 * intersect
				 * union
				 * 
				 * The implementation tak under considation the possibility that the specified equalityComparer is not commotative!
				 */
				if (!_entities.TypeCheck.IsIterable(secondIterator)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_secondIterator); }
				if (equalityComparer != null && !_entities.TypeCheck.IsFunction(equalityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer); }

				return new this(this.#_vanGen(thisArg, sourceIterator, secondIterator, equalityComparer, algorithem), thisArg);
			}

			static *#_vanGen(thisArg, sourceIterator, secondIterator, equalityComparer, algorithem) {
				let mask = algorithem === "except" ? false : (algorithem === "intersect" ? true : null /* union */);

				thisArg = thisArg ?? this;

				equalityComparer = equalityComparer ?? this.#_defaultEqualityComparer;
				let secondUnique = Array.from(this.#_distinctGen(thisArg, secondIterator
					/*, remove items that STRICTLY equal!!!
					 * Here i'm not using the specified equalityComparer to eliminate duplicate
					 * values from the secondIterator, because that comparer is not assured
					 * to be commutative (that is, while a === b it is possible that b !== a).
					 */
				));
				let skip, passed = [];
				for (let a of sourceIterator) {
					skip = null;
					for (let p of passed) {
						/* It is possible that the equality comparer is not commotative, so:
						 * 1. values that passed we place in passed array and not in the filter array.
						 * 2. we strict compare to what was already passed. */
						if (a === p) {
							skip = true;
							break;
						}
					}

					if (mask != null /* not union */) {
						if (skip == null /* not already passed, so there´s no need to check against secondUnique */) {
							skip = mask;
							for (let b of secondUnique) {
								if (equalityComparer.call(thisArg, a, b) === true) {
									skip = !mask; /* */
									break;
								}
							}
						}
					}
					else if (skip === null) { skip = false; }

					if (skip === false /*strict comparison!*/) {
						passed.push(a);
						yield a;
					}
				}

				if (mask === null /*union*/) {
					/* secondUnique contains unique items from the second iterator! */
					for (let b of secondUnique) {
						skip = false;
						for (let p of passed) {
							/* The 'passed' array contains the unique items that passed from the first sequence.
							 * Because the equality comparer might be a not commotative comparer, in the call 
							 * we pass the item from the first sequence as the first parameter! */
							if (equalityComparer.call(thisArg, p, b) === true) {
								skip = true;
								break;
							}
						}

						if (skip === false) {
							/* no need to add it to passed! */
							yield b;
						}
					}
				}
			}

			/**
			 * Returns the first element in the sequence, or the first element in the sequence that meets the specified condition, if a such one was specified.
			 * @param {Function} [predicate] - An optional function to test each element of the sequence for a condition; The first parameter is a source element, the second parameter is the index of the source element within the sequence.
			 * @returns {any} The first element in the sequence, or the first element in the sequence that satisfies a specified condition, if a such one was specified.
			 * @throws predicate must be a function, null or undefined.
			 * @throws The sequence is empty.
			 * @throws No element satisfies the condition in predicate.
			 */
			first(predicate) { return _entities.Linq.#_first(this.#_thisArg, this, predicate, false); }

			/**
			 * Returns the first element of the sequence, or the first one that meets the specified condition, if a such one was specified. A default value is returned if the sequence is empty or no element was found.
			 * @param {any} defaultValue - The default value to return in case that sequence is empty, or none of the sequence items meets the specified condition. 
			 * @param {Function} [predicate] - A function to test each source element for a condition; The first parameter is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {any} The first element of the sequence, or the first one that meets the specified condition, if a such one was specified. Or the specified default value if the sequence is empty or no element was found.
			 * @throws predicate must be a function, null or undefined.
			 */
			firstOrDefault(defaultValue, predicate) { return _entities.Linq.#_first(this.#_thisArg, this, predicate, true, defaultValue); }

			static #_first(thisArg, iterator, predicate, hasDefaultValue, defaultValue) {
				if (predicate != null && !_entities.TypeCheck.IsFunction(predicate)) {
					throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate);
				}

				thisArg = thisArg ?? this;

				let index = 0;
				for (let item of iterator) {
					if (predicate == null || predicate.call(thisArg, item, index) === true) { return item; }
					index++;
				}

				if (hasDefaultValue) { return defaultValue; }
				throw new Error(index > 0 && predicate != null ? this.ErrorMessage.NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate : this.ErrorMessage.SEQUENCE_IS_EMPTY);
			};

			/**
			 * Iterates through all elements in the sequence, and call the specified function for each.
			 * @param {Function} callback - A callback function to be called for each element of the sequence until all elements of the sequence processed, 
			 * or until a boolean false value was returned by the function; 
			 * The first parameter to the callback is an element of the sequence, the second parameter represents the index of the element within the sequence.
			 * The callback might return false to stop the iteration.
			 * @throws callback must be a function
			 */
			forEach(callback) { return _entities.Linq.#_forEach(this.#_thisArg, this, callback); }

			static #_forEach(thisArg, iterator, callback) {
				if (!_entities.TypeCheck.IsFunction(callback)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_callback); }

				thisArg = thisArg ?? this;

				let index = 0;
				for (let item of iterator) {
					let cont = callback.call(thisArg, item, index);
					index++;
					if (cont === false /* explicity stop the loop */) { break; }
				}
			}

			/**
			 * 
			 * @param {any} keySelector key creator
			 * @param {any} [elementSelector] source element to group element: groupElementType func (sourceElementType)
			 * @param {any} [resultSelector] resultType func(key, groupElementType)
			 * @param {any} [keyEqualityComparer] bool (a, b)
			 */
			groupBy(keySelector, elementSelector, resultSelector, keyEqualityComparer) {
				return _entities.Linq.#_groupBy(this.#_thisArg, this, keySelector, elementSelector, resultSelector, keyEqualityComparer);
			}

			static #_groupBy(thisArg, iterator, keySelector, elementSelector, resultSelector, keyEqualityComparer) {
				if (keySelector != null && !_entities.TypeCheck.IsFunction(keySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector); }
				if (elementSelector != null && !_entities.TypeCheck.IsFunction(elementSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_elementSelector); }
				if (resultSelector != null && !_entities.TypeCheck.IsFunction(resultSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector); }
				if (keyEqualityComparer != null && !_entities.TypeCheck.IsFunction(keyEqualityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer); }

				return new this(this.#_groupByGen(thisArg, iterator, keySelector, elementSelector, resultSelector, keyEqualityComparer), thisArg);
			}

			static *#_groupByGen(thisArg, iterator, keySelector, elementSelector, resultSelector, keyEqualityComparer) {
				keySelector = keySelector ?? this.#_defaultSelector;
				elementSelector = elementSelector ?? this.#_defaultSelector;
				resultSelector = resultSelector ?? this.#_defaultResultSelector;
				keyEqualityComparer = keyEqualityComparer ?? this.#_defaultEqualityComparer;

				thisArg = thisArg ?? this;
				let segments = []; /* Array and not map because the keys might be objects, and Map does not support getHashCode, there is no efficiency benefit in using Map. */
				let index = 0;
				for (let item of iterator) {
					let key = keySelector.call(thisArg, item, index);
					let element = elementSelector.call(thisArg, item, index);
					let appended = false;
					for (let seg of segments) {
						if (keyEqualityComparer.call(thisArg, key, seg.key, index) === true) {
							seg.elements.push(element);
							appended = true;
							break;
						}
					}
					if (!appended) {
						segments.push({ key: key, elements: [element] });
					}
					index++;
				}
				let groups = [];
				for (let seg of segments) {
					groups.push(resultSelector.call(thisArg, new _entities.LinqGroup(seg.key, seg.elements, thisArg)));
				}

				yield* groups;
			}

			/**
			 * Correlates the elements of two sequences based on matching keys: this sequence (which considered to be the left one) and the specified sequence (the right). 
			 * The result sequence contains each and every element from the left sequence along with its mached-key elements, group together, from the right.
			 * The order of the result sequence keeps the order of the left sequence (this sequence), and for each match from the right sequence the order is also maintained.
			 * It is possible to control the returned object by specifying a result selector which accepts the element from the left (this sequence) and its mached element from the right grouped as a single Linq object.
			 * @param {Iterable} rightIterator - The right side sequence to group-join to the left sequence (this one).
			 * @param {Function} [leftKeySelector] - An optional function to extract the join key from each element of the left sequence (this one). By default the element itself is used as both key and value.
			 * @param {Function} [rightKeySelector] - An optional function to extract the join key from each element of the right sequence. By default the element itself is used as both key and value.
			 * @param {Function} [resultSelector] - An optional function to create a result element from matching elements, a single element from the left (this sequence) and a group of elements from the right (the specified sequence). By default, the result element is an array of these two.
			 * @param {Function} [keyEqualityComparer] - An optional function to check the equality of two keys. By default a strict comparison is made (===).
			 * @returns {_entities.Linq} An iterator that has elements that are obtained by performing an group join on the two sequences.
			 * @throws rightIterator must be iterable.
			 * @throws leftKeySelector must be a function or nullish.
			 * @throws rightKeySelector must be a function or nullish
			 * @throws resultSelector must be a function or nullish
			 * @throws keyEqualityComparer must be a function or nullish
			 */
			groupJoin(rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				return _entities.Linq.#_groupJoin(this.#_thisArg, this, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer);
			}

			static #_groupJoin(thisArg, iterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				if (!_entities.TypeCheck.IsIterable(rightIterator)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_rightIterator); }
				if (leftKeySelector != null && !_entities.TypeCheck.IsFunction(leftKeySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_leftKeySelector); }
				if (rightKeySelector != null && !_entities.TypeCheck.IsFunction(rightKeySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_rightKeySelector); }
				if (resultSelector != null && !_entities.TypeCheck.IsFunction(resultSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector); }
				if (keyEqualityComparer != null && !_entities.TypeCheck.IsFunction(keyEqualityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer); }

				return new this(this.#_groupJoinGen(thisArg, iterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer), thisArg);
			}

			static *#_groupJoinGen(thisArg, leftIterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				leftKeySelector = leftKeySelector ?? this.#_defaultSelector;
				rightKeySelector = rightKeySelector ?? this.#_defaultSelector;
				resultSelector = resultSelector ?? this.#_defaultResultSelector;
				keyEqualityComparer = keyEqualityComparer ?? this.#_defaultEqualityComparer;
				thisArg = thisArg ?? this;

				for (let a of leftIterator) {
					let leftKey = leftKeySelector.call(thisArg, a);
					yield resultSelector.call(thisArg, a, new _entities.Linq(rightIterator).where(item => keyEqualityComparer.call(thisArg, leftKey, rightKeySelector.call(thisArg, item)) === true));
				}
			}

			/**
			 * Produces a sequence of UNIQUE items that appear in this sequence as well as the specified sequence. The order of the items remains the same as it was in this sequence.
			 * @param {Iterable} secondIterator - The second sequence.
			 * @param {Function} [equalityComparer] - An equality comparer to be used to compare two items.
			 * @returns {_entities.Linq} A sequence of UNIQUE items that ALSO appear in the specified sequence. The order of the items remains the same as it was in this sequence.
			 * @throws secondIterator must be iterable
			 * @throws equalityComparer must be a function or nullish
			 */
			intersect(secondIterator, equalityComparer) { return _entities.Linq.#_van(this.#_thisArg, this, secondIterator, equalityComparer, "intersect"); }

			/**
			 * Correlates the elements of two sequences based on matching keys: this sequence (which considered to be the left one) and the specified sequence (the right). 
			 * The result sequence contains each element from the left sequence along with its mached-key element from the right - and only these.
			 * The order of the result sequence keeps the order of the left sequence (this sequence), and for each match from the right sequence the order is also maintained.
			 * @param {Iterable} rightIterator - The right side sequence to join to the left sequence (this one).
			 * @param {Function} [leftKeySelector] - An optional function to extract the join key from each element of the left sequence (this one). By default the element itself is used as both key and value.
			 * @param {Function} [rightKeySelector] - An optional function to extract the join key from each element of the right sequence. By default the element itself is used as both key and value.
			 * @param {Function} [resultSelector] - An optional function to create a result element from two matching elements. By default, the result element is an array of the two matched elements.
			 * @param {Function} [keyEqualityComparer] - An optional function to check the equality of two keys. By default a strict comparison is made (===).
			 * @returns {_entities.Linq} An iterator that has elements that are obtained by performing an inner join on the two sequences.
			 * @throws rightIterator must be iterable.
			 * @throws leftKeySelector must be a function or nullish.
			 * @throws rightKeySelector must be a function or nullish
			 * @throws resultSelector must be a function or nullish
			 * @throws keyEqualityComparer must be a function or nullish
			 */
			join(rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				return _entities.Linq.#_join(this.#_thisArg, this, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer);
			}

			static #_join(thisArg, iterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				if (!_entities.TypeCheck.IsIterable(rightIterator)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_rightIterator); }
				if (leftKeySelector != null && !_entities.TypeCheck.IsFunction(leftKeySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_leftKeySelector); }
				if (rightKeySelector != null && !_entities.TypeCheck.IsFunction(rightKeySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_rightKeySelector); }
				if (resultSelector != null && !_entities.TypeCheck.IsFunction(resultSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector); }
				if (keyEqualityComparer != null && !_entities.TypeCheck.IsFunction(keyEqualityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keyEqualityComparer); }

				return new this(this.#_joinGen(thisArg, iterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer), thisArg);
			}

			static *#_joinGen(thisArg, leftIterator, rightIterator, leftKeySelector, rightKeySelector, resultSelector, keyEqualityComparer) {
				leftKeySelector = leftKeySelector ?? this.#_defaultSelector;
				rightKeySelector = rightKeySelector ?? this.#_defaultSelector;
				resultSelector = resultSelector ?? this.#_defaultResultSelector;
				keyEqualityComparer = keyEqualityComparer ?? this.#_defaultEqualityComparer;
				thisArg = thisArg ?? this;

				for (let a of leftIterator) {
					let leftKey = leftKeySelector.call(thisArg, a);
					for (let b of rightIterator) {
						let rightKey = rightKeySelector.call(thisArg, b);
						if (keyEqualityComparer.call(thisArg, leftKey, rightKey) === true) {
							yield resultSelector.call(thisArg, a, b);
						}
					}
				}
			}

			/**
			 * Returns the last element in a sequence, or the last element in the sequence that meets the specified condition, if specified.
			 * @param {Function} [predicate] - A function to test each source element for a condition; The first parameter is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {any} The last element in the specified sequence, or the last element in the sequence that satisfies a specified condition, if specified.
			 * @throws predicate must be a function or nullish
			 * @throws The sequence is empty
			 * @throws No element satisfies the condition in predicate
			 */
			last(predicate) { return _entities.Linq.#_last(this.#_thisArg, this, predicate, false); }

			/**
			 * Returns the last element of the sequence, or the last one that meets the specified condition, if a such one was specified. A default value is returned if the sequence is empty or no element was found.
			 * @param {any} defaultValue - The default value to return in case that sequence is empty, or none of the sequence items meets the specified condition.
			 * @param {Function} [predicate] - A function to test each source element for a condition; The first parameter is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {any} The last element of the sequence, or the last one that meets the specified condition, if a such one was specified. Or the specified default value if the sequence is empty or no element was found.
			 * @throws predicate must be a function or nullish
			 */
			lastOrDefault(defaultValue, predicate) { return _entities.Linq.#_last(this.#_thisArg, this, predicate, true, defaultValue); }

			static #_last(thisArg, iterator, predicate, hasDefaultValue, defaultValue) {
				if (predicate != null && !_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate); }
				thisArg = thisArg ?? this;
				let index = 0, lastSoFar, lastSoFarAssigned = false;
				for (let item of iterator) {
					if (predicate == null || predicate.call(thisArg, item, index) === true) {
						lastSoFarAssigned = true;
						lastSoFar = item;
					}
					index++;
				}

				if (lastSoFarAssigned) { return lastSoFar; }

				if (hasDefaultValue) { return defaultValue; }

				throw new Error(index > 0 && predicate != null ? this.ErrorMessage.NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate : this.ErrorMessage.SEQUENCE_IS_EMPTY);
			}

			/**
			 * Returns the maximum value in the sequence. If the sequence is empty, the return value is undefined. If it contains a single value, it will be the maximum value, no matter what it is.
			 * @param {Function} [comparer] - An optional function to compare two items from the sequence. The first parameter to this function is the first item, the second parameter is the second item, and the third parameter is the index of the SECOND item in the sequence.
			 * If no compare function is passed, a default compare is used (>= operator). In this default compare, if one of the arguments is null or undefined, the result is undefined.
			 * @returns {any} The maximum value of the sequence.
			 * @throws compare must be a function or nullish
			 */
			max(comparer) { return _entities.Linq.#_max(this.#_thisArg, this, comparer); }

			static #_max(thisArg, iterator, comparer) { return this.#_minMax(thisArg, iterator, comparer, 1); }

			/**
			 * Returns the minimum value in the sequence. If the sequence is empty, the return value is undefined. If it contains a single value, it will be the minimum value, no matter what it is.
			 * @param {Function} [comparer] - An optional function to compare two items from the sequence. The first parameter to this function is the first item, the second parameter is the second item, and the third parameter is the index of the SECOND item in the sequence.
			 * If no compare function is passed, a default compare is used (>= operator). In this default compare, if one of the arguments is null or undefined, the result is undefined.
			 * @returns {any} The minimum value of the sequence.
			 * @throws compare must be a function or nullish
			 */
			min(comparer) { return _entities.Linq.#_min(this.#_thisArg, this, comparer); }

			static #_min(thisArg, iterator, comparer) { return this.#_minMax(thisArg, iterator, comparer, -1); }

			static #_minMax(thisArg, iterator, comparer, compareFactor) {
				if (comparer != null && !_entities.TypeCheck.IsFunction(comparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer); }
				comparer = comparer ?? this.#_defaultComparer;

				let first = true, index = 0, soFar = undefined;
				thisArg = thisArg ?? this;
				for (let item of iterator) {
					if (first === true) {
						soFar = item;
						first = false;
					}
					else { soFar = compareFactor * comparer.call(thisArg, soFar, item, index) >= 0 ? soFar : item; }
					index++;
				}
				return soFar;
			}

			/**
			 * Sorts the elements of the sequence in ascending order, optionally by using the specified keySelector and comparer.
			 * This method performs a stable sort; that is, if the keys of two elements are equal, the order of the elements is preserved. In contrast, an unstable sort does not preserve the order of elements that have the same key.
			 * @param {Function} [keySelector] - An optional function to extract a key from an element. Ny default the element is used as the key.
			 * @param {Function} [comparer] - An optional comparer to compare keys. By default a simple comparison is made.
			 * @returns {_entities.Linq} The elements of the sequence in ascending order, optionally by using the specified keySelector and comparer.
			 * @throws keySelector must be a function or nullish
			 * @throws comparer must be a function or nullish
			 */
			orderBy(keySelector, comparer) { return new _entities.LinqOrder(this, keySelector, comparer, false, this.#_thisArg); }

			/**
			 * Sorts the elements of the sequence in descending order, optionally by using the specified keySelector and comparer.
			 * This method performs a stable sort; that is, if the keys of two elements are equal, the order of the elements is preserved. In contrast, an unstable sort does not preserve the order of elements that have the same key.
			 * @param {Function} [keySelector] - An optional function to extract a key from an element. Ny default the element is used as the key.
			 * @param {Function} [comparer] - An optional comparer to compare keys. By default a simple comparison is made.
			 * @returns {_entities.Linq} The elements of the sequence in descending order, optionally by using the specified keySelector and comparer.
			 * @throws keySelector must be a function or nullish
			 * @throws comparer must be a function or nullish
			 */
			orderByDescending(keySelector, comparer) { return new _entities.LinqOrder(this, keySelector, comparer, true, this.#_thisArg); }

			/**
			 * Adds a value to the beginning of the sequence. The original sequence (the current) is not changed.
			 * @param {any} value - The value to be added to the beginning of the returned sequence.
			 * @returns {_entities.Linq} A sequence consist of the specified element, and then the items from the current sequence.
			 */
			prepend(value) { return _entities.Linq.#_prepend(this.#_thisArg, this, value); }

			static #_prepend(thisArg, iterator, value) { return new this(this.#_prependGen(thisArg, iterator, value), thisArg); }

			static *#_prependGen(thisArg, iterable, value) {
				yield value;
				for (let item of iterable) { yield item; }
			}

			/**
			 * Generates a sequence of integral numbers within a specified range.
			 * @param {number} start - The value of the first integer in the sequence.
			 * @param {number} count - The number of sequential integers to generate.
			 * @param {any} [thisArg] - The object to be used as this pointer for subsequent LINQ calls.
			 * @returns {_entities.Linq} A sequence of integral numbers within a specified range.
			 * @throws start must be an integer
			 * @throws count must be a non negative integer
			 */
			static range(start, count, thisArg) {
				if (!_entities.TypeCheck.IsNumber(start) || Math.floor(start) !== start) { throw new Error(this.ErrorMessage.MUST_BE_INTEGER_start); }
				if (!_entities.TypeCheck.IsNumber(count) || Math.floor(count) !== count || count < 0) { throw new Error(this.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count); }
				return new this(this.#_rangeGen(start, count), thisArg);
			};

			static *#_rangeGen(start, count) {
				while (count-- > 0) yield start++;
			}

			/**
			 * Return a copy of this sequence without the nullish values (null or undefined).
			 * @returns {_entities.Linq} A copy of this sequence without the nullish values (null or undefined).
			 */
			removeNullishes() { return _entities.Linq.#_removeNullishes(this.#_thisArg, this); }

			static #_removeNullishes(thisArg, iterator) {
				return new this(this.#_removeNullishesGen(thisArg, iterator), thisArg);
			}

			static *#_removeNullishesGen(thisArg, iterator) {
				for (let item of iterator) {
					if ((item ?? null) === null) { continue; }
					yield item;
				}
			}

			/**
			 * Generates a sequence that contains one repeated value.
			 * @param {any} value - The value to be repeated.
			 * @param {number} count - The number of times to repeat the value in the generated sequence.
			 * @param {any} [thisArg] - The object to be used as this pointer for subsequent LINQ calls.
			 * @returns {_entities.Linq} A sequence consist of the specified value repeated the specified count of times.
			 * @throws count must be a non negative integer
			 */
			static repeat(value, count, thisArg) {
				if (!_entities.TypeCheck.IsNumber(count) || Math.floor(count) !== count || count < 0) { throw new Error(this.ErrorMessage.MSUT_BE_NON_NEGATIVE_INTEGER_count); }
				return new this(this.#_repeat(thisArg, value, count), thisArg);
			}

			static *#_repeat(thisArg, value, count) {
				for (let i = 0; i < count; i++) { yield value; }
			}

			/**
			 * Inverts the order of the elements in a sequence.
			 * @returns {_sel.Linq} A copy of this sequence in reserve order.
			 */
			reverse() { return _entities.Linq.#_reverse(this.#_thisArg, this); }

			static #_reverse(thisArg, iterator) { return new this(this.#_reverseGen(thisArg, iterator), thisArg); }

			static *#_reverseGen(thisArg, iterator) {
				let arr = [];
				for (let item of iterator) { arr.splice(0, 0, item); }
				for (let item of arr) { yield item; }
			}

			/**
			 * Projects each element of this sequence into a new form.
			 * @param {Function} [selector] - A n optional transform function to apply to each source element; The first parameter is the element, the second parameter represents the index of the source element. The default selctor simply return the item that passed as parameter.
			 * @returns {_self.Linq} A new sequence whose elements are the result of invoking the transform function on each element this sequence.
			 * @throws selector must be a function or nullish
			 */
			select(selector) { return _entities.Linq.#_select(this.#_thisArg, this, selector); }

			static #_select(thisArg, iterator, selector) {
				if (selector != null && !_entities.TypeCheck.IsFunction(selector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_selector); }
				return new this(this.#_selectGen(thisArg, iterator, selector), thisArg);
			}

			static *#_selectGen(thisArg, iterator, selector) {
				thisArg = thisArg ?? this;
				selector = selector ?? this.#_defaultSelector;
				let index = 0;
				for (let item of iterator) {
					yield selector.call(thisArg, item, index);
					index++;
				}
			}

			/**
			 * Projects each element as inner sequence, then flattens the resulting sequences into one sequence, and invokes a result selector function on each element therein. 
			 * @param {Function} [collectionSelector] - A transform function to apply to each source element and SHOULD return an iterable object (the inner sequence). In this function:
			 * The first parameter is the source element from this sequence. 
			 * The second parameter represents the index of the source element within this sequence. 
			 * The default selctor simply returns the source element that passed as the first parameter.
			 * @param {Function} [resultSelector] - A transform function to apply to each item of each inner sequence. In this function:
			 * The first parameter is a item itself. 
			 * The second parameter represents the index of this item within the inner sequence which is currently scanned. 
			 * The third parameter is a reference to the inner sequence which is currently scanned. 
			 * The forth parameter represents the index of the this inner sequence within the current sequence.* 
			 * By default the selctor simply returns the item that passed as parameter.
			 * @returns {_entities.Linq} A sequence whose elements are the result of invoking the transform functions on each inner sequence and on each element of each inner sequence.
			 * @throws collectionSelector must be a function or nullish
			 * @throws resultSelector must be a function or nullish
			 */
			selectMany(collectionSelector, resultSelector) { return _entities.Linq.#_selectMany(this.#_thisArg, this, collectionSelector, resultSelector); }

			static #_selectMany(thisArg, iterator, collectionSelector, resultSelector) {
				if (collectionSelector != null && !_entities.TypeCheck.IsFunction(collectionSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_collectionSelector); }
				if (resultSelector != null && !_entities.TypeCheck.IsFunction(collectionSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_resultSelector); }
				return new this(this.#_selectManyGen(thisArg, iterator, collectionSelector, resultSelector), thisArg);
			}

			static *#_selectManyGen(thisArg, iterator, collectionSelector, resultSelector) {
				collectionSelector = collectionSelector ?? this.#_defaultSelector;
				resultSelector = resultSelector ?? this.#_defaultSelector;
				thisArg = thisArg ?? this;
				let index = 0;
				for (let outerItem of iterator) {
					let collection = collectionSelector.call(thisArg, outerItem, index);

					let innerIndex = 0;
					for (let innerItem of collection) {
						yield resultSelector.call(thisArg, innerItem, innerIndex, outerItem, index);
						innerIndex++;
					}

					index++;
				}
			}

			/**
			 * Determines whether the current sequence is equal to the specified, according to an equality comparer.
			 * @param {Iterable} secondIterable - The second sequence to compare to.
			 * @param {Function} [equalityComparer] - An equality comparer to compare two items. The first parameter is the first item, the second parameter is the second item, and the third is the index of these items whithin the sequences.
			 * @returns {boolean} true if the two sequences are of equal length and their corresponding elements are equal according to the equality comparer; otherwise, false.
			 * @throws secondIterator must be iterable
			 * @throws equalityComparer must be a function or nullish
			 */
			sequenceEqual(secondIterable, equalityComparer) { return _entities.Linq.#_sequenceEqual(this.#_thisArg, this, secondIterable, equalityComparer); }

			static #_sequenceEqual(thisArg, firstIterator, secondIterator, equalityComparer) {
				if (!_entities.TypeCheck.IsIterable(secondIterator)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_secondIterator); }
				if (equalityComparer != null && !_entities.TypeCheck.IsFunction(equalityComparer)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_equalityComparer); }

				equalityComparer = equalityComparer ?? this.#_defaultEqualityComparer;

				let iter1 = this.#_createSimpleGenerator(firstIterator);
				let iter2 = this.#_createSimpleGenerator(secondIterator);
				thisArg = thisArg ?? this;
				let index = 0, f, s;
				do {
					f = iter1.next();
					s = iter2.next();

					if (
						(f.done ^ s.done)
						||
						(f.done === false && s.done === false && equalityComparer.call(thisArg, f.value, s.value, index) !== true)
					) {
						return false;
					}
					index++;
				} while (!f.done /* same as !s.done*/);
				return true;
			}

			/**
			 * Returns the only element of the sequence, and throws an exception if there is not exactly one element in the sequence.
			 * OR
			 * Returns the only element of the sequence that satisfies a specified condition, and throws an exception if more than one such element exists.
			 * @param {Function} [predicate] - An optional function to test each source element for a condition; The first parameter is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {any} The single element of the input sequence OR The single element of the input sequence that satisfies the specified predicate.
			 * @throws predicate must be a function or nullish
			 * @throws The input sequence contains more than one element
			 * @throws More than one element satisfies the condition in predicate
			 * @throws The sequence is empty
			 * @throws No element satisfies the condition in predicate
			 */
			single(predicate) { return _entities.Linq.#_single(this.#_thisArg, this, predicate, false); }

			/**
			 * Returns the only element of the sequence. If there is no element in the sequence, the specified defaultValue is returned. If the sequence contains more that a single element, an error is thrown.
			 * OR
			 * Returns the only element of the sequence, using the specified predicate to match the value. If no element mached, the specified defaultValue is returned. If more than a single element mached, an error is thrown.
			 * @param {any} defaultValue - The defaultValue.
			 * @param {Function} [predicate] - An optional function to test each source element for a condition; The first parameter is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {any} The single element of the input sequence OR The single element of the input sequence that satisfies the specified predicate, or the defaultValue.
			 * @throws predicate must be a function or nullish
			 * @throws The input sequence contains more than one element
			 * @throws More than one element satisfies the condition in predicate
			 */
			singleOrDefault(defaultValue, predicate) { return _entities.Linq.#_single(this.#_thisArg, this, predicate, true, defaultValue); }

			static #_single(thisArg, iterator, predicate, hasDefaultValue, defaultValue) {
				if (predicate != null && !_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_predicate); }

				let result, resultCount = 0, index = 0;

				thisArg = thisArg ?? this;

				for (let item of iterator) {
					if (predicate == null || predicate.call(thisArg, item, index) === true) {
						resultCount++;
						if (resultCount > 1) {
							throw new Error(predicate == null ? this.ErrorMessage.INPUT_SEQUENCE_CONTAINS_MORE_THAN_ONE_ELEMENT : this.ErrorMessage.MORE_THAN_ELEMENT_SEQUENCE_SATISFIES_THE_CONDITION);
						}
						result = item;
					}
					index++;
				}

				if (resultCount === 0) {
					if (hasDefaultValue === true) { result = defaultValue; }
					else {
						throw new Error(index === 0 ? this.ErrorMessage.SEQUENCE_IS_EMPTY : this.ErrorMessage.NO_ELEMENT_SATISFIES_THE_CONDITION_IN_predicate);
					}
				}

				return result;
			}

			/**
			 * Bypasses a specified number of elements in the sequence and then returns the remaining elements.
			 * @param {number} count - The number of elements to skip before returning the remaining elements.
			 * @returns {_entities.Linq} A new sequence that contains the elements that occur after the specified index in the sequence.
			 * @throws count must be an integer
			 */
			skip(count) { return _entities.Linq.#_skip(this.#_thisArg, this, count) }

			static #_skip(thisArg, iterator, count) {
				if (!_entities.TypeCheck.IsIntegal(count)) { throw new Error(this.ErrorMessage.MUST_BE_INTEGER_count); }
				return new this(this.#_skipGen(thisArg, iterator, count), thisArg);
			}

			static *#_skipGen(thisArg, iterator, count) {
				let i = 0;
				for (let item of iterator) {
					if (i++ < count) { continue; }
					else { yield item; }
				}
			}

			/**
			 * Returns a new sequence that contains the elements from the current sequence with the last count elements omitted.
			 * @param {number} count - Number of element from the end of this sequence to omit.
			 * @returns {_entities.Linq} A new sequence that contains the elements from the current sequence with the last count elements omitted.
			 * @throws count must be an integer
			 */
			skipLast(count) { return _entities.Linq.#_skipLast(this.#_thisArg, this, count); }

			static #_skipLast(thisArg, iterator, count) {
				if (!_entities.TypeCheck.IsIntegal(count)) { throw new Error(this.ErrorMessage.MUST_BE_INTEGER_count); }
				return new this(this.#_skipLastGen(thisArg, iterator, count), thisArg);
			}

			static *#_skipLastGen(thisArg, iterator, count) {
				if (count <= 0) { yield* iterator; }
				else {
					let all = Array.from(iterator);
					for (let i = 0; i < all.length - count; i++) {
						yield all[i];
					}
				}
			}

			/**
			 * Bypasses elements in the sequence as long as a specified condition is true and then returns the remaining elements.
			 * @param {Function} predicate - A function to test each source element for a condition; The first parameter to this predicate is the source element, the second parameter represents the index of the source element.
			 * @returns {_entities.Linq} A new sequence that contains the elements from the sequence starting at the first element in the sequence that does not pass the test specified by predicate.
			 * @throws predicate must be a function
			 */
			skipWhile(predicate) { return _entities.Linq.#_skipWhile(this.#_thisArg, this, predicate); }

			static #_skipWhile(thisArg, iterator, predicate) {
				if (!_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_predicate); }
				return new this(this.#_skipWhileGen(thisArg, iterator, predicate), thisArg);
			}

			static *#_skipWhileGen(thisArg, iterator, predicate) {
				let skip = true, index = 0;
				thisArg = thisArg ?? this;
				for (let item of iterator) {
					if (!skip) { yield item; }
					else if (predicate.call(thisArg, item, index++) !== true) {
						skip = false;
						yield item;
					}
				}
			}

			/**
			 * Calculates the following statistic measurements for the sequence of numbers: 
			 * - count: The count numbers.
			 * - minimum: The minimal number in the sequence.
			 * - maximum: The maximal number in the sequence.
			 * - range: The range of the sequence, that is the difference between the maximal value and the minimal value.
			 * - average: The average number of the sequence.
			 * - summry: The summey of the sequence.
			 * 
			 * If extended was set to true, an internal sort will took place and the following measurements will be included as well:
			 * - mode: The value that appears most frequently in the sequence. If more than a single value have the sa repetition count, the mode will be se to undefined.
			 * - median: A numeric value that "splits" the sequence to two, so half of the elements comes before it, and half of the elements comes after it.
			 * - variance: The variance of the sequence
			 * - standard deviation: The standard deviation of the sequence (which is a square root of the variation).
			 * 
			 * @param {any} extended
			 */
			statistics(extended) {
				return _entities.Linq.#_statistics(this.#_thisArg, this, extended === true);
			}

			static #_statistics(thisArg, iterator, extended) {
				/* 
				 * basic calculations:
				 * - count
				 * - minimum
				 * - maximum
				 * - summary
				 * - average
				 * - range
				 * 
				 * extended calculations:
				 * - mode
				 * - median
				 * - variance
				 * - standard deviation
				 */

				let arr = Array.from(iterator);
				let result = {
					count: arr.length,
					minimum: undefined,
					maximum: undefined,
					summary: undefined,
					average: undefined,
					range: undefined,
					mode: undefined,
					median: undefined,
					variance: undefined,
					standardDeviation: undefined
				}

				if (arr.length === 0) { return result; }
				//debugger;
				if (extended === true) { arr.sort((a, b) => a - b); /* for median and mode */ }

				let minimum = arr[0], maximum = extended ? arr[arr.length - 1] : arr[0];
				let summary = 0;

				let mode = arr[0];
				let modeCount = 0 /* it will be incremented once within the loop */;
				let potentialMode = undefined;
				let potentialModeCount = 0;
				let modeDuplicated = false;

				let pos = 0;
				let value;
				do {
					if (!_entities.TypeCheck.IsNumber(value = arr[pos])) {
						/* this also validates the value of the first element! */
						throw new Error(this.ErrorMessage.MUST_BE_NUMBER_all_sequence_elements);
					}

					summary += value;

					if (!extended) {
						minimum = Math.min(minimum, value);
						maximum = Math.max(maximum, value);
					}
					else {
						/* mode */
						//debugger;
						if (value === mode) {
							modeCount++;
						}
						else {
							if (value === potentialMode) {
								potentialModeCount++;
							}
							else { // potentialMode === undefined || potentialMode !== value
								potentialMode = value;
								potentialModeCount = 1;
							}

							if (potentialModeCount == modeCount) {
								modeDuplicated = true;
							}
							else if (potentialModeCount > modeCount) {
								mode = potentialMode;
								modeCount = potentialModeCount;
								potentialMode = undefined;
								potentialModeCount = 0;
								modeDuplicated = false;
							}
						}
					}
				} while (++pos < arr.length);

				/* sets the results so far */
				result.minimum = minimum;
				result.maximum = maximum;
				result.summary = summary;
				result.average = summary / result.count;
				result.range = maximum - minimum;

				if (extended) {
					/* mode */
					if (!modeDuplicated) { result.mode = mode; }

					/* median */
					result.median = (arr[Math.floor((arr.length + 1) / 2) - 1] + arr[Math.ceil((arr.length + 1) / 2) - 1]) / 2;

					/* variance, standardDeviation */
					let variance = 0;
					for (value of arr) {
						variance += (value - result.average) ** 2;
					}
					variance /= result.count;
					result.variance = variance;
					result.standardDeviation = Math.sqrt(variance);
				}
				return result;
			}

			/**
			 * Computes the sum of the sequence of numeric values. 
			 * If at least one element of the sequence is not a number, the return value is undefined.
			 * If the sequence is empty, the returned value is undefined.
			 * @return {number | undefined}
			 */
			sum() { return _entities.Linq.#_sum(this.#_thisArg, this); }

			static #_sum(thisArg, iterator) {
				let sum = 0, result = undefined /* in case that the sequence is empty, the returned value is undefined */;

				for (let item of iterator) {
					if (_entities.TypeCheck.IsNumber(item)) { result = sum += item; }
					else { return undefined; }
				}
				return result;
			}

			/**
			 * Returns a specified number of contiguous elements from the start of this sequence.
			 * @param {number} count - The number of elements to return.
			 * @return {_entities.Linq} A new sequence that contains the specified number of elements from the start of this sequence.
			 * @throws count must be an integer
			 */
			take(count) { return _entities.Linq.#_take(this.#_thisArg, this, count); }

			static #_take(thisArg, iterator, count) {
				if (!_entities.TypeCheck.IsIntegal(count)) { throw new Error(this.ErrorMessage.MUST_BE_INTEGER_count); }
				return new this(this.#_takeGen(thisArg, iterator, count), thisArg);
			}

			static *#_takeGen(thisArg, iterator, count) {
				let index = 0;
				for (let item of iterator) {
					if (index++ < count) { yield item; }
					else { break; }
				}
			};

			/**
			 * Returns a new sequence that contains the last count elements from this sequence.
			 * @param {number} count - The number of last elements to return.
			 * @return {_entities.Linq} A new sequence that contains the specified number of last elements from this sequence.
			 * @throws count must be an integer
			 */
			takeLast(count) { return _entities.Linq.#_takeLast(this.#_thisArg, this, count); }

			static #_takeLast(thisArg, iterator, count) {
				if (!_entities.TypeCheck.IsIntegal(count)) { throw new Error(this.ErrorMessage.MUST_BE_INTEGER_count); }
				return new this(this.#_takeLastGen(thisArg, iterator, count), thisArg);
			}

			static *#_takeLastGen(thisArg, iterator, count) {
				if (count > 0) {
					let all = Array.from(iterator);
					let start = Math.max(0, all.length - count);
					for (let i = start; i < all.length; i++) {
						yield all[i];
					}
				}
			}

			/**
			 * Returns elements from this sequence as long as a specified condition is true, and then skips the remaining elements.
			 * @param {Function} predicate - A function to test each source element for a condition; The first parameter is the element, the second parameter represents the index of the element within this sequence.
			 * @returns {_entities.Linq} A new sequence that contains the elements from this sequence that occur before the element at which the test no longer passes.
			 * @throws predicate must be a function
			 */
			takeWhile(predicate) { return _entities.Linq.#_takeWhile(this.#_thisArg, this, predicate); }

			static #_takeWhile(thisArg, iterator, predicate) {
				if (!_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_predicate); }
				return new this(this.#_takeWhileGen(thisArg, iterator, predicate), thisArg);
			}

			static *#_takeWhileGen(thisArg, iterator, predicate) {
				let index = 0;
				thisArg = thisArg ?? this;
				for (let item of iterator) {
					if (predicate.call(thisArg, item, index) !== true) { break; }
					yield item;
					index++;
				}
			}

			/**
			 * Creates an array from the currrent enumerable.
			 * @return {Array} An array that contains the elements from of the current sequence.
			 */
			toArray() { return _entities.Linq.#_toArray(this.#_thisArg, this); }

			static #_toArray(thisArg, iterator) {
				let result = [];
				for (let item of iterator) { result.push(item); }
				return result;
			}


			/**
			 * Creates a map from the current sequence according to a specified key selector function, and an element selector function.
			 * @param {Function} [keySelector] An optional function to extact out of each element in th sequence the key for each corresponding element in the map.
			 * The first parameter to the function is the elemnt in the sequence, and the second parameter represents the index of the element in the sequence.
			 * @param {Function} [valueSelector] An optional function to extact out of each element in th sequence the value for each corresponding element in the map.
			 * The first parameter to the function is the elemnt in the sequence, and the second parameter represents the index of the element in the sequence.
			 * @returns {Map} A map from the current sequence according to a specified key selector function, and the value selector function.
			 * @throws keySelector must be a function or nullish
			 * @throws valueSelector must be a function or nullish
			 * @throws keySelector produces duplicate keys
			 */
			toMap(keySelector, valueSelector) { return _entities.Linq.#_toMapOrSet(this.#_thisArg, this, keySelector, valueSelector, false); }

			/**
			 * Creates a set from the current sequence.
			 * @param {Function} [keySelector] An optional function to extact out of each element in th sequence the key (which is also the value) for each corresponding element in the set.
			 * The first parameter to the function is the elemnt in the sequence, and the second parameter represents the index of the element in the sequence.
			 * @returns {Set} A set from the current sequence according to a specified key selector.
			 * @throws keySelector must be a function or nullish
			 * @throws keySelector produces duplicate keys
			 */
			toSet(keySelector) { return _entities.Linq.#_toMapOrSet(this.#_thisArg, this, keySelector, null, true); }

			static #_toMapOrSet(thisArg, iterator, keySelector, valueSelector, set, weak) {
				if (keySelector != null && !_entities.TypeCheck.IsFunction(keySelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector); }
				if (valueSelector != null && !_entities.TypeCheck.IsFunction(valueSelector)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_valueSelector); }

				/*
				 * This implementation does not contain key comparer because Javascript map does not support key comparer for Map, and so is for Set.
				 * Implementing such will not benefit high performance, because of the luck of GetHashCode native support.
				 */
				keySelector = keySelector ?? this.#_defaultSelector;
				valueSelector = valueSelector ?? this.#_defaultSelector;

				let result = set === true ? new Set() : new Map();
				let index = 0;
				thisArg = thisArg ?? this;
				for (let item of iterator) {
					let key = keySelector.call(thisArg, item, index);
					if (result.has(key)) {
						throw new Error(this.ErrorMessage.PRODUCES_DUPLICATE_KEYS_keySelector);
					}

					if (set === true) { result.add(key); }
					else {
						result.set(key, valueSelector.call(thisArg, item, index));
					}
					index++;
				}
				return result;
			}

			/**
			 * Filters the sequence of values based on a predicate.
			 * @param {Function} predicate - A function to test each source element for a condition; The first parameter to this test function is a source element, the second parameter of the function represents the index of the source element.
			 * @returns {_entities.Linq} An enumerable that contains elements from the sequence that satisfy the condition.
			 * @throws predicate must be a function
			 */
			where(predicate) { return _entities.Linq.#_where(this.#_thisArg, this, predicate); }

			static #_where(thisArg, iterator, predicate) {
				if (!_entities.TypeCheck.IsFunction(predicate)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_predicate); }
				return new this(this.#_whereGen(thisArg, iterator, predicate), thisArg);
			}

			static *#_whereGen(thisArg, iterator, predicate) {
				let index = 0;
				thisArg = thisArg ?? this;
				for (let item of iterator) {
					if (predicate.call(thisArg, item, index) === true) { yield item; }
					index++;
				}
			}

			/**
			 * Produces a set union of the current sequence with the specified sequences. 
			 * The sequence contains only the UNIQUE items.
			 * @param {Iterable} secondIterator - The second sequence.
			 * @param {Function} [equalityComparer] - An equality comparer to be used to compare two items.
			 * @returns {_entities.Linq} A set union of the current sequence with the specified sequences.
			 * @throws secondIterator must be iterable
			 * @throws equalityComparer must be a function or nullish
			 */
			union(secondIterator, equalityComparer) { return _entities.Linq.#_van(this.#_thisArg, this, secondIterator, equalityComparer, "union"); }

			/**
			 * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results. The iteration stops when right after the last item of one of the sequences has reached.
			 * @param {Iterable} iterator1 - The first sequence
			 * @param {Iterable} iterator2 - The second sequence.
			 * @param {Function} transform - The transform function. The first parameter is the item from the first sequence, The second parameter is the item from the second sequence. The third parameter is the index of these items within the sequences.
			 * @param {any} thisArg - Th object that will be used as this pointer in the transform function.
			 * @returns {_entities.Linq} A result sequence.
			 * @throws iterator1 must be iterable
			 * @throws iterator2 must be iterable
			 * @throws transform must be a function
			 */
			static zip(iterator1, iterator2, transform, thisArg) {
				if (!_entities.TypeCheck.IsIterable(iterator1)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_iterator1); }
				if (!_entities.TypeCheck.IsIterable(iterator2)) { throw new Error(this.ErrorMessage.MUST_BE_ITERABLE_iterator2); }
				if (!_entities.TypeCheck.IsFunction(transform)) { throw new Error(this.ErrorMessage.MUST_BE_FUNCTION_transform); }

				return new this(this.#_zip(thisArg, iterator1, iterator2, transform), thisArg);
			}

			static *#_zip(thisArg, iterator1, iterator2, transform) {
				let g1 = this.#_createSimpleGenerator(iterator1);
				let g2 = this.#_createSimpleGenerator(iterator2);
				let item1, item2, index = 0;

				thisArg = thisArg ?? this;
				item1 = g1.next();
				item2 = g2.next();
				while (!item1.done && !item2.done) {
					yield transform.call(thisArg, item1.value, item2.value, index);
					item1 = g1.next();
					item2 = g2.next();
					index++;
				}

				/* closes the generators */
				g1.return();
				g2.return();
			};
		}

		_entities.TypeCheck = class {
			/**
			* This library version.
			*/
			get Version() { return "1.0.0.0"; }

			/* Independent type checking ability */
			static IsNumber(obj) { return typeof obj === "number" || Object.prototype.toString.call(obj) === "[object Number]"; }
			static IsBigInt(obj) { return typeof obj === "bigint" || Object.prototype.toString.call(obj) === "[object BigInt]"; }
			static IsIntegal(obj, additionalPredicate) { return (this.IsBigInt(obj) || (this.IsNumber(obj) && Math.floor(obj) === obj)) && (additionalPredicate == null || additionalPredicate(obj) === true); }
			static IsIterable(obj) {
				return this.IsFunctionOrGeneratorFunction(obj?.[Symbol.iterator]);
			}
			static IsFunction(obj) {
				let too = typeof obj;
				return (too === "object" || too === "function") && Object.prototype.toString.call(obj) === "[object Function]";
			}
			static IsFunctionOrGeneratorFunction(obj) {
				let too = typeof obj;
				let name = Object.prototype.toString.call(obj);
				return (too === "object" || too === "function") && (name === "[object Function]" || name === "[object GeneratorFunction]");
			}
		}

		_entities.LinqOrder = class extends _entities.Linq {
			static #_defaultComparer = (obj1, obj2) => obj1 > obj2 ? 1 : (obj1 < obj2 ? - 1 : 0);

			#_thisArg = null;
			#_iterable = null;
			#_orderByChain = [];

			/**
			 * Initializes a new instance of Linq to be used for ordering.
			 * This kind of object is returned when calling OrderBy or ThenBy.
			 * @param {Iterable} iterable - An iterable object to be wrapped.
			 * @param {Function} keySelector - A key selector for the OrderBy root function.
			 * @param {any} comparer - A comparer between to keys to be used by the Oreder by root function in the chain.
			 * @param {any} desc - True to make the root ordering function descending.
			 * @param {any} thisArg - A 'this' ponter to be used when calling user's callbacks.
			 * @throws keySelector must be a function or nullish
			 * @throws comparer must be a function or nullish
			 */
			constructor(iterable, keySelector, comparer, desc, thisArg) {
				super(iterable, thisArg);
				if (keySelector != null && !_entities.TypeCheck.IsFunction(keySelector)) { throw new Error(super.constructor.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector); }
				if (comparer != null && !_entities.TypeCheck.IsFunction(comparer)) { throw new Error(super.constructor.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer); }

				this.#_iterable = iterable;
				this.#_thisArg = thisArg;
				this.#_orderByChain = [_entities.LinqOrder.#_createOrderByPredicate(keySelector, comparer, desc ? -1 : 1)];
			}

			static #_injectThenBy(instance, keySelector, comparer, desc) {
				if (keySelector != null && !_entities.TypeCheck.IsFunction(keySelector)) { throw new Error(super.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_keySelector); }
				if (comparer != null && !_entities.TypeCheck.IsFunction(comparer)) { throw new Error(super.ErrorMessage.MUST_BE_FUNCTION_OR_NULLISH_comparer); }
				instance.#_orderByChain.push(this.#_createOrderByPredicate(keySelector, comparer, desc ? -1 : 1));
				return instance;
			}

			static #_createOrderByPredicate(keySelector, comparer, factor) {
				/* no need for this arg because "this" pointer already set properly */
				comparer = comparer ?? this.#_defaultComparer;
				return keySelector == null ? function (a, b) { return factor * comparer(a, b); } : function (a, b) { return factor * comparer(keySelector(a), keySelector(b)) };
			}

			#_createPredicateForOrderByChain(thisArg, predicateChain) {
				return function (a, b) {
					for (let p of predicateChain) {
						let res = p.call(thisArg, a, b);
						if (res != 0) { return res; }
					}
					return 0;
				}
			}

			/**
			 * Overrides the parent implementation of the iterable protocol, by applying the order by chain within it.
			 */
			*[Symbol.iterator]() {
				/* we have to sort, optionally using predicate of OrderBy and optionally multiple ThenBy  */
				yield* Array.from(this.#_iterable).sort(this.#_createPredicateForOrderByChain(this.#_thisArg ?? this, this.#_orderByChain));
			}

			/**
			 * Performs a subsequent ordering of the elements in this sequence in ascending order, optionally by using the specified keySelector and comparer.
			 * A call to orderBy/orderByDescending must be made before chaning other calls to thenBy/thenByDescending.
			 * This method performs a stable sort; that is, if the keys of two elements are equal, the order of the elements is preserved. In contrast, an unstable sort does not preserve the order of elements that have the same key.
			 * @param {Function} [keySelector] - An optional function to extract a key from an element. Ny default the element is used as the key.
			 * @param {Function} [comparer] - An optional comparer to compare keys. By default a simple comparison is made.
			 * @returns {_entities.Linq} The elements of the sequence in ascending subsequent order, optionally by using the specified keySelector and comparer.
			 * @throws A call to orderBy/orderByDescending must come before calling to thenBy/thenByDescending.
			 * @throws keySelector must be a function or nullish
			 * @throws comparer must be a function or nullish
			 */
			thenBy(keySelector, comparer) { return _entities.LinqOrder.#_injectThenBy(this, keySelector, comparer, false); }

			/**
			 * Performs a subsequent ordering of the elements in this sequence in descending order, optionally by using the specified keySelector and comparer.
			 * A call to orderBy/orderByDescending must be made before chaning other calls to thenBy/thenByDescending.
			 * This method performs a stable sort; that is, if the keys of two elements are equal, the order of the elements is preserved. In contrast, an unstable sort does not preserve the order of elements that have the same key.
			 * @param {Function} [keySelector] - An optional function to extract a key from an element. Ny default the element is used as the key.
			 * @param {Function} [comparer] - An optional comparer to compare keys. By default a simple comparison is made.
			 * @returns {_entities.Linq} The elements of the sequence in descending subsequent order, optionally by using the specified keySelector and comparer.
			 * @throws A call to orderBy/orderByDescending must come before calling to thenBy/thenByDescending.
			 * @throws keySelector must be a function or nullish
			 * @throws comparer must be a function or nullish
			 */
			thenByDescending(keySelector, comparer) { return _entities.LinqOrder.#_injectThenBy(this, keySelector, comparer, true); }
		}

		_entities.LinqGroup = class extends _entities.Linq {
			#_key = null;

			/**
			 * Initializes a new instance of Linq object that wrapos a group with a specific key.
			 * This Linq object is used by groupJoin function.
			 * @param {any} key = The key that is common to the sequence's element.
			 * @param {Iterable} iterable - An iterable object.
			 * @param {any} thisArg - A 'this' pointer to be applied when calling the user's callbacks.
			 */
			constructor(key, iterable, thisArg) {
				if (key == null) { throw new Error(_entities.Linq.ErrorMessage.ARGUMENT_MUST_NOT_BE_NULL_key); }
				super(iterable, thisArg);
				this.#_key = key;
			}

			/**
			 * The key that is common to all element within this sequence (group).
			 * @returns {any}
			 */
			get key() { return this.#_key; }
		}

		return _entities.Linq;

	}());
