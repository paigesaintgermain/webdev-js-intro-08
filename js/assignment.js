'use strict';

const submissionBtn = document.getElementById('submission-btn');
const smallestNumberElement = document.getElementById('smallest-number');
const largestNumberElement = document.getElementById('largest-number');
const averageNumberElement = document.getElementById('average-number');

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

const findSmallestNumber = (myNumbers) => {
    let smallest = undefined;

    myNumbers.forEach((element) => {
        if (smallest == undefined || smallest > element) {
            smallest = element;
        }
    });

    return smallest;
};

const findLargestNumber = (myNumbers) => {
    let largest = 0;

    myNumbers.forEach((element) => {
        if (largest < element) {
            largest = element;
        }
    });

    return largest;
};

const findAverage = (myNumbers) => {
    let sum = 0;

    myNumbers.forEach((element) => {
        sum = sum + element;
    });

    let average = sum / myNumbers.length;

    return average;
};

const render = () => {
    smallestNumberElement.innerHTML = findSmallestNumber(myNumbers);
    largestNumberElement.innerHTML = findLargestNumber(myNumbers);
    averageNumberElement.innerHTML = findAverage(myNumbers);
};

submissionBtn.addEventListener('click', function () {
    render();
});
