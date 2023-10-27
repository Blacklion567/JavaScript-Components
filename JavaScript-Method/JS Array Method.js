/* # Converting Arrays to Strings

## The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

/*
Result:
Banana,Orange,Apple,Mango
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
 */

// Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.join(" * ");

/*
Result:
Banana * Orange * Apple * Mango
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.
 */
// ### ADVERTISEMENT
/*
JavaScript Array pop()
The pop() method removes the last element from an array: */

// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
// The pop() method returns the value that was "popped out":

// Example
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits3.pop();
/* JavaScript Array push()
The push() method adds a new element to an array (at the end): */

// Example
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.push("Kiwi");
// The push() method returns the new array length:

// Example
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits6.push("Kiwi");

/* Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last. */
/*
### JavaScript Array shift()
>> The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/

// Example
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.shift();
// The shift() method returns the value that was "shifted out":

// Example
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits8.shift();
/* JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: */

// Example
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.unshift("Lemon");
// The unshift() method returns the new array length:

// Example
const fruits0 = ["Banana", "Orange", "Apple", "Mango"];
fruits0.unshift("Lemon");
/* Changing Elements
Array elements are accessed using their index number: */

/* Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...
 */

// Example
const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
fruits01[0] = "Kiwi";
/* JavaScript Array length
The length property provides an easy way to append a new element to an array: */

// Example
const fruits02 = ["Banana", "Orange", "Apple", "Mango"];
fruits02[fruits02.length] = "Kiwi";
/* JavaScript Array delete()
Warning !
Array elements can be deleted using the JavaScript operator delete. */
/*
Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
 */
// Example
const fruits03 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits03[0];
/* Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays: */

// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
/* The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments: */

// Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
// The concat() method can also take strings as arguments:

// Example (Merging an Array with Values)
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr4.concat("Peter");
// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// Example
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
/* Browser Support
JavaScript Array flat() is supported in all modern browsers since January 2020: */

/* Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

JavaScript Array splice()
The splice() method can be used to add new items to an array: */

// Example
const fruits04 = ["Banana", "Orange", "Apple", "Mango"];
fruits04.splice(2, 0, "Lemon", "Kiwi");
/* The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items: */

// Example
const fruits05 = ["Banana", "Orange", "Apple", "Mango"];
fruits05.splice(2, 2, "Lemon", "Kiwi");
/* Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: */

// Example
const fruits06 = ["Banana", "Orange", "Apple", "Mango"];
fruits06.splice(0, 1);

/* The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

JavaScript Array slice()
The slice() method slices out a piece of an array into a new array. */

// This example slices out a part of an array starting from array element 1 ("Orange"):

// Example
const fruits07 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits07.slice(1);
/* Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array. */

// This example slices out a part of an array starting from array element 3 ("Apple"):

// Example
const fruits08 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits08.slice(3);
/* The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument. */

// Example
const fruits09 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits09.slice(1, 3);
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

// Example
const fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits10.slice(2);
/* Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array. */

// These two examples will produce the same result:

// Example
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits11.toString();
// Example
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits12;