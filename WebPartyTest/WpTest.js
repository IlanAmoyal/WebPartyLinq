/*
 * WebPartyLINQ - A tiny javascript testing framework.
 *
 * Version: 1.0.0.0.
 *
 * GitHub repository: https://github.com/IlanAmoyal/WebPartyTest
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
 * Begin license text->
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
 * -> End license text.
 */

class WpTest {
    /**
     * This library version.
     */
    get Version() { return "1.0.0.0"; }

    /* Independent type checking ability */
    static IsString(obj) { return typeof obj === "string" || Object.prototype.toString.call(obj) === "[object String]"; }
    static IsIterable(obj) { return this.IsFunctionOrGeneratorFunction(obj?.[Symbol.iterator]); }
    static IsFunction(obj) {
        let too = typeof obj;
        return (too === "object" || too === "function") && Object.prototype.toString.call(obj) === "[object Function]";
    }
    static IsFunctionOrGeneratorFunction(obj) {
        let too = typeof obj;
        let name = Object.prototype.toString.call(obj);
        return (too === "object" || too === "function") && (name === "[object Function]" || name === "[object GeneratorFunction]");
    }

    static *SequentialText(textFormat, startValue) {
        textFormat = textFormat ?? "{0}";
        startValue = startValue ?? 1;

        while (true) {
            yield textFormat.replace("{0}", startValue++)
        };
    }
}

WpTest.SequentialText = class {
    static *#_sequentialTextGen(textFormat, startValue) {
        while (true) {
            yield textFormat.replace("{0}", startValue++)
        };
    }

    #_textFormat = null;
    #_startValue = null;
    #_gen = null;
    constructor(textFormat, startValue) {
        this.#_textFormat = textFormat ?? "{0}";
        this.#_startValue = startValue ?? 1;
    }

    reset() {
        this.#_gen = WpTest.SequentialText.#_sequentialTextGen(this.#_textFormat, this.#_startValue);
    }

    next() {
        if (this.#_gen == null) {
            this.reset();
		}
        return this.#_gen.next().value;
    }

    close() {
        this.#_gen.return();
        this.#_gen = null;
	}

    *[Symbol.iterator]() {
        let gen = WpTest.SequentialText.#_sequentialTextGen(this.#_textFormat, this.#_startValue);
        for (let item of gen) {
            yield item;
        }
    }
}

WpTest.AutoNumbering = class extends WpTest.SequentialText {
    constructor(startValue, numberingTextFormat) {
        super(numberingTextFormat?? "{0}. ", startValue ?? 1);
    }

    next(text) {
        return super.next() + (text ?? "");
    }
}

WpTest.BaseTest = class {
    #_testName = null;
    #_successMessage = null;
    #_failureMessage = null;
    #_additionalData = null;
    constructor(testName, successMessage, failureMessage, additionalData) {
        if (!WpTest.IsString(testName)) { throw new Error("testName must be string"); }
        if (successMessage != null && !WpTest.IsString(successMessage)) { throw new Error("successMessage must be string, null or undefined"); }
        if (failureMessage != null && !WpTest.IsString(failureMessage)) { throw new Error("failureMessage must be string, null or undefined"); }
        this.#_testName = testName;
        this.#_successMessage = successMessage ?? "success";
        this.#_failureMessage = failureMessage ?? "failure";
        this.#_additionalData = additionalData;
	}

    get name() { return this.#_testName; }
    get successMessage() { return this.#_successMessage; }
    get failureMessage() { return this.#_failureMessage; }
    get elapsed() { return 0; } /* milliseconds*/
    get succeeded() { return true; }
    get failed() { return this.succeeded !== true; }
    get errors() { return []; }
    get errorCount() { return this.errors.length; } /* might be the count of inner tests' errors, so in derived class might be positive even though the errors collection is null! */
    get addtionalData() { return this.#_additionalData; }

    go(write) {
        if (write === true) {
            this.write();
		}
        return this.succeeded;
    }

    write() {
        let label = `%c${this.name}: ${(this.succeeded ? this.successMessage : this.failureMessage)} (${this.elapsed} ms`
        let css = this.succeeded ? "color: green" : "color: red";
        if (this.errorCount === 0) {
            label += ")";
        }
        else {
            let errorStr = (this.succeeded ? "" : "un") + "expected " + (this.errorCount > 1 ? "errors" : "error");
            label += `, ${this.errorCount} ${errorStr})`;
        }

        if (this.errorCount == 0 && this.#_additionalData == null) {
            console.log(label, css);
        }
        else {
            //debugger;
            console.groupCollapsed(label, css);

            if (this.errorCount > 0) {
                if (this.#_additionalData != null) {
                    console.groupCollapsed("errors");
                }
                //console.log(this.errors);
                for (let err of this.errors) {
                    console.error(err);
                }
                if (this.#_additionalData != null) {
                    console.groupEnd();
                }
            }

            if (this.#_additionalData != null) {
                if (this.errorCount > 0) {
                    console.groupCollapsed("errors");
                }
                console.log(this.#_additionalData);
                if (this.errorCount > 0) {
                    console.groupEnd();
                }
            }

            console.groupEnd();
        }
    }
}

WpTest.Assert = class extends WpTest.BaseTest {
    #_test = null;
    #_res = false;
    #_thisArg = null;
    #_err = null;
    #_elapsed = 0;
    constructor(testName, test, successMessage, failureMessage, additionalData, thisArg) {
        super(testName, successMessage, failureMessage, additionalData);
        this.#_test = test;
        this.#_thisArg = thisArg ?? window;
    }

    go(write) {
        if (this.#_test === true) {
            this.#_res = true;
        }
        else if (WpTest.IsFunction(this.#_test)) {
            let t0 = performance.now();
            try {
                this.#_res = this.#_test.call(this.#_thisArg) === true;
            }
            catch (e) {
                this.#_res = false;
                this.#_err = e;
            }
            let t1 = performance.now();
            this.#_elapsed = t1 - t0;
        }

        if (write === true) {
            this.write();
        }
        return this.#_res;
    }
    get elapsed() { return this.#_elapsed; }
    get succeeded() { return this.#_res; }
    get errors() { return this.#_err === null ? [] : [this.#_err]; }
};

WpTest.AreEqual = class extends WpTest.Assert {
    constructor(testName, expected, actual, comparer) {
        
        super(testName, comparer != null ? comparer(expected, actual) : expected === actual, `Actual value equals to the expected (${actual} === ${expected})`, `Actual value (${actual}) does not equal to the expected (${expected})`, { "expected": expected, "actual": actual });
    }
}

WpTest.SequencesAreEqual = class extends WpTest.Assert {
    constructor(testName, expected, actual, itemComparer, thisArg) {
        let expectedArr = null, actualArr = null;
        let additionalData = {};
        let equal = true;
        if (!WpTest.IsIterable(expected)) {
            additionalData["expected"] = "ERROR: 'expected' argument is not itarable!"
            equal = false;
        }
        else {
            expectedArr = additionalData["expected"] = Array.from(expected)
        }
        if (!WpTest.IsIterable(actual)) {
            additionalData["actual"] = "ERROR: 'actual' argument is not itarable!"
            equal = false;

        }
        else {
            actualArr = additionalData["actual"] = Array.from(actual)
        }

        if (equal && expectedArr.length !== actualArr.length) {
            additionalData["Problem found"] = "expected.length !== actual.length";
            equal = false;
        }

        let indecesDifferent = [];
        if (equal) {
            for (var i = 0; i < expectedArr.length; i++) {
                let res = itemComparer != null ? itemComparer.call(thisArg ?? undefined, expectedArr[i], actualArr[i]) : expectedArr[i] === actualArr[i];
                if (res !== true) {
                    indecesDifferent.push(i);
                }
            }
        }

        if (indecesDifferent.length > 0) {
            equal = false;
            additionalData["Problem found"] = "Different element indeces are: {" + indecesDifferent.join(", ") + "}";
        }

        super(testName, equal, `Actual sequence equals to the expected sequence`, `Actual sequence does not equal to the expected sequence)`, additionalData, thisArg);
    }
}

WpTest.IsTrue = class extends WpTest.Assert {
    constructor(testName, actual) {
        super(testName, true === actual, `Actual value is true as expected`, `Actual value (${actual}) is not true (which is the expected value)`);
    }
}

WpTest.IsFalse = class extends WpTest.Assert {
    constructor(testName, actual) {
        super(testName, false === actual, `Actual value is false as expected`, `Actual value (${actual}) is not false (which is the expected value)`);
    }
}

WpTest.ThrowsBase = class extends WpTest.Assert {
    #_checkErrorFn = null;
    #_res = false;
    #_thisArg = null;
    #_expected = true;
    constructor(testName, expected, fn, checkErrorFn, thisArg) {
        expected = (expected === true);
        let msg1 = "An error WAS NOT thrown, or it was thrown but WAS NOT PASSED the error predicate.";
        let msg2 = "An error WAS NOT thrown.";
        let msg3 = "An error WAS thrown.";
        super(testName, fn, expected ? msg3 : msg2, expected ? msg1 : msg3, thisArg);
        if (!WpTest.IsFunction(fn)) { throw new Error("fn paremeter must be a function"); }
        if (expected && checkErrorFn != null && !WpTest.IsFunction(checkErrorFn)) { throw new Error("checkErrorFn parameter must be a function, null or undefined"); }
        this.#_expected = expected;
        this.#_thisArg = thisArg;
        this.#_checkErrorFn = checkErrorFn;
    }

    go(write) {
        super.go(false);

        if (this.errors.length === 1) {
            this.#_res = this.#_expected && (this.#_checkErrorFn == null || this.#_checkErrorFn.call(this.#_thisArg, this.errors[0]) === true);
        }
        else { this.#_res = !this.#_expected; }

        if (write) { this.write(); }

        return this.#_res;
    }

    get succeeded() { return this.#_res; }
}

WpTest.Throws = class extends WpTest.ThrowsBase {
    constructor(testName, fn, checkErrorFn, thisArg) {
        super(testName, true, fn, checkErrorFn, thisArg);
    }
}

WpTest.NoThrows = class extends WpTest.ThrowsBase {
    constructor(testName, fn, checkErrorFn, thisArg) {
        super(testName, false, fn, null, thisArg);
    }
}

WpTest.TestGroup = class extends WpTest.BaseTest {
    #_tests = [];
    #_directFailureCount = 0;
    #_totalFailureCount = 0;
    #_totalErrorCount = 0;
    #_unexpectedErrorCount = 0;
    #_parentGroup = null;

    constructor(testName, ...tests) {
        super(testName);
        this.add(...tests);
    }

    clear() { this.#_tests.clear(); }
    get succeeded() { return this.#_directFailureCount === 0; }
    get errorCount() { return this.#_totalErrorCount; }

    go(write) {
        this.#_directFailureCount = 0;
        this.#_totalErrorCount = 0;
        this.#_unexpectedErrorCount = 0;
        for (let t of this.#_tests) {
            t.go(false /* postpone writing */);

            this.#_directFailureCount += t.succeeded ? 0 : 1;

            if (t instanceof WpTest.TestGroup) {
                this.#_totalFailureCount += t.#_totalFailureCount;
                this.#_unexpectedErrorCount += t.#_unexpectedErrorCount;
            }
            else {
                this.#_totalFailureCount = this.#_directFailureCount;
                this.#_unexpectedErrorCount += t.succeeded ? 0 : t.errorCount;
            }

            this.#_totalErrorCount += t.errorCount;
        }
        if (write) {
            this.write();
        }
        return this.succeeded;
    }

    write() {
        let label = `%c${this.name}: (${this.elapsed}ms, `;
        let css;
        if (this.#_directFailureCount === 0) {
            css = "color: green";
            label += "all passed"
        }
        else {
            css = "color: red";
            if (this.#_directFailureCount > 0) {
                label += `${this.#_directFailureCount} direct failure${(this.#_directFailureCount === 1 ? "" : "s")}, ${this.#_totalFailureCount} total failure${(this.#_totalFailureCount === 1 ? "" : "s")}`;
            }
        }

        if (this.#_unexpectedErrorCount> 0) {
            label += `, ${this.#_unexpectedErrorCount} unexpected error${(this.#_unexpectedErrorCount > 1 ? "s" : "")}`;
        }

        label += ")";

        if (this.succeeded) {
            console.groupCollapsed(label, css);
        }
        else {
            console.group(label, css);
		}
        for (let t of this.#_tests) {
            t.write()
        }
        
        console.groupEnd();
    }

    add(...tests) {
        this.#_tests.push(...tests);
        for (let t of tests) {
            if (t instanceof WpTest.TestGroup) {
                t.#_parentGroup = this;
			}
		}
    }

    groupStart(testName) {
        let grp = new WpTest.TestGroup(testName);
        this.add(grp);
        return grp;
    }

    groupClose() {
        return this.#_parentGroup ?? this;
    }

    areEqual(testName, expected, actual, comparer) { this.add(new WpTest.AreEqual(testName, expected, actual, comparer)); return this; }
    sequencesAreEqual(testName, expected, actual, itemComparer) { this.add(new WpTest.SequencesAreEqual(testName, expected, actual, itemComparer)); return this; }
    isTrue(testName, actual) { this.add(new WpTest.IsTrue(testName, actual)); return this; }
    isFalse(testName, actual) { this.add(new WpTest.IsFalse(testName, actual)); return this; }
    throws(testName, fn, checkErrorFn, thisArg) { this.add(new WpTest.Throws(testName, fn, checkErrorFn, thisArg)); return this; }
    noThrows(testName, fn, thisArg) { this.add(new WpTest.NoThrows(testName, fn, thisArg)); return this; }
}

export default WpTest;