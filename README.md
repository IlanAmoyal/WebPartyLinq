# WebPartyLinq

*An implementation in javascript of Microsoft LINQ to objects.*

Notes:
* The sources here contains a copy of WebPartyTest which is a tiny test framework. The latest version of this unit test framework can be located in WebPartyTest repository.
* The code is written as modules. A regular javascript will be uploded later. Meanwhile, you may remove the "export" and "import' statements and adapt the code.

*How to use:*
1. Wrap your sequence with WpLinq object. (Iterable object might be Array, Map, Set string etc).
2. Chain your linq methods.
3. Thats it!
4. You can see all the example below and much more in WpLinq.test.js

*Ho to wrap iterable by Linq object*

	new WpLinq([4, 7, 1, 23])
	OR
	WpLinq.from([4, 7, 1, 23])

*Example 1: where -> sum*

	new WpLinq([4, 7, 1, 23, 12, 5, 6]).where(a => a % 2 === 0).sum()

	/* results:
	22
	*/

*Example 2: intersect -> toArray*

	WpLinq.from([2, 4, 6, 8, 10, 12]).intersect([4, 10, 31, 6, 7]).toArray()

	/* results:
	[4, 6, 10]
	*/

*Example 3: union -> select -> toArray*

	new WpLinq("Hello world").union("THIS world").select((a, idx) => `${idx}-` + a).toArray().join("|")

	/* results:
	0-H|1-e|2-l|3-o|4- |5-w|6-r|7-d|8-T|9-I|10-S
	*/

*Example 4: orderBy -> toArray*

	new WpLinq([4, 6, 3, 1, 9]).orderBy().toArray()

	/* results:
	[4, 6, 3, 1, 9]
	*/


*Example 5: orderBy -> thenBy -> select -> toArray*

	WpLinq.from([{ key: 6, value: "bbb" }, { key: 3, value: "fff" }, { key: 1, value: "eee" }, { key: 4, value: "aaa" }])
			.orderBy(a => a.key, (a, b) => (a % 2 - b % 2) /* the primary order: in this comparer each odd is greater than an even number */)
			.thenBy(a => a.key, (a, b) => a - b /* the secondary order: regular order */)
			.select(a => `${a.key}: ${a.value}`)
			.toArray()

	/* results:
	["6: bbb", "3: fff", "1: eee", "4: aaa"]
	*/

