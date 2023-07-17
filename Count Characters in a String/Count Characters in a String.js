/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
*/
function count(string) {
    let count = {};

    for(let i = 0; i < string.length; i++) {
        let character = string[i];

        if(count[character]) {
            count[character] ++
        }
        else if(count[character] === 0) {
            return `{:}`
        }
        else {
            count[character] = 1
        }
    }
    return count;
}