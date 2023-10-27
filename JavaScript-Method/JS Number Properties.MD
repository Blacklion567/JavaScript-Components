JavaScript Number Properties
Property	Description
EPSILON	The difference between 1 and the smallest number > 1.
MAX_VALUE	The largest number possible in JavaScript
MIN_VALUE	The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	A "Not-a-Number" value
JavaScript EPSILON
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

Example
let x = Number.EPSILON;
Note
Number.EPSILON is an ES6 feature.

It does not work in Internet Explorer.

JavaScript MAX_VALUE
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

Example
let x = Number.MAX_VALUE;
Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.

These properties can only be accessed as Number.MAX_VALUE.

Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

Example
let x = 6;
x.MAX_VALUE
JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

Example
let x = Number.MIN_VALUE;
JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

Number.MAX_SAFE_INTEGER is (253 - 1).

Example
let x = Number.MAX_SAFE_INTEGER;
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER is -(253 - 1).

Example
let x = Number.MIN_SAFE_INTEGER;
Note
MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are ES6 features.

They do not work in Internet Explorer.

ADVERTISEMENT

JavaScript POSITIVE_INFINITY
Example
let x = Number.POSITIVE_INFINITY;
POSITIVE_INFINITY is returned on overflow:

let x = 1 / 0;
JavaScript NEGATIVE_INFINITY
Example
let x = Number.NEGATIVE_INFINITY;
NEGATIVE_INFINITY is returned on overflow:

let x = -1 / 0;
JavaScript NaN - Not a Number
NaN is a JavaScript reserved word for a number that is not a legal number.

Examples
let x = Number.NaN;
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x = 100 / "Apple";

