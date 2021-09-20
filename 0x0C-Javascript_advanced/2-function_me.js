function welcomeMessage(fullName) {
    return function() {alert(`welcome ${fullName}`);}
}
let guillaume = welcomeMessage("guillaume");
let alex = welcomeMessage("alex");
let fred = welcomeMessage("fred");

