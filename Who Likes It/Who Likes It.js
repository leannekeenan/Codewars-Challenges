//Implement the function which takes an array containing the names of people that like an item.

function likes(names) {
  // TODO
  if(names.length === 0) {
    console.log( `no one likes this`)
  }
  else if(names.length === 1) {
    console.log( `${names[0]} likes this`)
  }
  else if(names.length === 2) {
    console.log( `${names[0]} and ${names[1]} like this`)
  }
  else if(names.length === 3) {
    console.log( `${names[0]}, ${names[1]} and ${names[2]} like this`)
  }
  else if(names.length >= 4) {
    console.log( `${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
  }

}
  likes(['Alex', 'Jacob', 'Mark', 'Max'])
  likes(['Jacob', 'Mark', 'Max'])
  likes(['Mark', 'Max'])
  likes(['Max'])