/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/


/*
set a value for the sum of all the games won (sum).  Set to 0 to start
create a for loop that uses the length of the game array as a condition
create two if statements:
    - first is to check if the first value of the array is greater than the third 
        + the colon counts as an array element and is therefore games[i][1]
    -second is to check if the first value of the array is less than the third
return the sum
*/

function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; ++i) {
      if(games[i][0] > games[i][2])
        sum += 3;
      if(games[i][0] == games[i][2])
        sum += 1;
    }
    return sum;
    return 0;
  }