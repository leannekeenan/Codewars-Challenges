/*
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/


function chromosomeCheck(sperm) {
    if(sperm.includes('Y')) {
      return "Congratulations! You're going to have a son."
    }
    else if(!sperm.includes('Y')) {
      return "Congratulations! You're going to have a daughter."
    }
  }


  /********************************************/
  function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
  }