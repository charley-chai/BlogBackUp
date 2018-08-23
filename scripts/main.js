var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/microsoft-logo.png') {
        myImage.setAttribute('src', 'images/office-logo.png');
    } else {
        myImage.setAttribute('src', 'images/microsoft-logo.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Microsoft is cool, ' + myName;
}
myButton.onclick = function () {
    setUserName();
}

setUserName();
