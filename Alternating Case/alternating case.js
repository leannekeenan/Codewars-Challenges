/*
Instructions:

Define 'String.prototype.toAlternatingCase' so that each lower case letter becomes upper case and each upper case letter becomes lower case.
*/

/*
How to:

1.  set empty array to hold each the passed strings

2. create a for loop to iterate through the length of the string passed through the toAlternatingCase function
 - you can use a this function to refer back to the function name to keep from having to repeat the function name

3. Within the loop, create a variable to hold each individual character from the passed string as array objects

4. within the loop, below the character declaration, create an if / statement that will set charcter equal to upper case or lower case and return the characters set to equal the opposite

5.  below the if / else statement, push the characters to the empty array above the loop

6. outside of the for loop, but within the function return characters as a joined string
*/

String.prototype.toAlternatingCase = function () {
    /*1.*/ let arr = []
    
    /*2. */for(let i = 0; i < (this.length); i++) {
        /*3. */let characters = this[i]
        /*4. */if(characters == characters.toUpperCase()) characters = characters.toLowerCase();
                else if(characters == characters.toLowerCase()) characters = characters.toUpperCase();
        /*5. */arr.push(characters)
    }

    /*6. */return arr.join("");

}

console.log("1a2b3c4d5e".toAlternatingCase());


/*
Levels of complexity: 

1. Function expression
2. For loop
3. if statement
4. else if statement
5. return
*/