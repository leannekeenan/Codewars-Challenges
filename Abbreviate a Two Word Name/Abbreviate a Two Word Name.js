
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
*/
function abbrevName(name){
    for(let i = 0; i < name.length; i++) {
      let split = name.split(" ")
      return split[0][i] + "." + split[1][i];
    }
    
    }

    console.log(abbrevName("Sam Harris"));
    console.log(abbrevName("Patrick Feenan"));
    console.log(abbrevName("Evan Cole"));
    console.log(abbrevName("P Favuzzi"));
    console.log(abbrevName("David Mendieta"));