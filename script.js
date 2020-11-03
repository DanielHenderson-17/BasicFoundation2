//1.
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {

            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1, 3, 5, 7, -5]));

//2.
function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([50, -1, 20, 12]));

//3.
function print2ndToLastReturnOdd(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}
console.log(print2ndToLastReturnOdd([0, 2, 1, 4, 3]));

//4.
function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(doubleVision([1, 2, 3]));

//5.
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
            arr[arr.length - 1] = count;
        }
    }
    console.log(arr);
}
countPositives([-1, 1, 1, 1])

//6.
function evensAndOdds(arr) {
    var evens = 0;
    var odds = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            odds++;
            evens = 0;
        } else {
            evens++;
            odds = 0;
        }

        if (odds === 3) {
            console.log("That's odd!");
            odds = 0;
        } else if (evens === 3) {
            console.log("Even more so!");
            evens = 0;
        }
    }
}
evensAndOdds([1, 2, 3, 5, 7]);
evensAndOdds([2, 4, 6, 1, 3]);

//7.
function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] += 1;
        }
    }
    console.log(arr);
    return arr;
}
incrementTheSeconds([1, 2, 3, 4, 5, 6, 7, 8])

//8.
function previousLengths(arr) {

    for (var i = arr.length - 1; i > 0; i--) {
        console.log(arr[i - 1].length);
    }
}
previousLengths(["hello", "dojo", "awesome", "python", "ruby"]);

//9.
function addSeven(arr) {
    var arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 7;
    }
    console.log(arr)
    return arr;
}
addSeven([1, 2, 3]);

//10.
function reverseArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.reverse();
    }

    console.log(arr);
    return arr;
}
reverseArray([3, 1, 6, 4, 2]);

//11.
function outlookNegative(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
        newarr.push(arr[i])
    }
    console.log(newarr);
    return newarr;
}
outlookNegative([1, -3, 5])

//12.
function alwaysHungry(arr) {
    var gotFood = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'food') {
            console.log("food")
            gotFood = true;
        }
    }
    if (gotFood === false) {
        console.log('Yummy')
        gotFood = false;
    }
}
alwaysHungry(['chicken', 'food', 'rice', 'food', 'carrots'])
alwaysHungry(['chicken', 'water', 'rice', 'carrots'])

//13.
function swapTowardTheCenter(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr;
}
swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]);

//14.
function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    console.log(arr)
    return arr;
}
scaleTheArray([1, 2, 3], 3);