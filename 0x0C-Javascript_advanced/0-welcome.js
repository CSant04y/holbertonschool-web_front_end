
function welcome (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName () {
    return alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}
