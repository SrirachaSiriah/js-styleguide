//**********************************
//Testing my script if it is linked.
//**********************************

console.log('js');

//*********************************************************
// Displaying details of user who lives in Wellington City.
//*********************************************************



var i = 0;

//loop is to repeat
for ( i=0; i<2; i++ ) {
 // prompt is to take input from the user
  var name = prompt('Enter your name: ');
  var place = prompt('Enter your place: ');

  if (place == 'Wellington') {
    alert('Name ' + name);
  }
}
