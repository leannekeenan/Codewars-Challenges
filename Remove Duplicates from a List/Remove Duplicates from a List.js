/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    let duplicateRemove = [...new Set(a)];
    return duplicateRemove;
}