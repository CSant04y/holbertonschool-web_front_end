function welcomeMessage (fullName) {
  return function () { alert(`welcome ${fullName}`); };
}
const guillaume = welcomeMessage('guillaume');
const alex = welcomeMessage('alex');
const fred = welcomeMessage('fred');
