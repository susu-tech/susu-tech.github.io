let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/red-panda-505148_960_720.jpg') {
        myImage.setAttribute('src', 'images/Antu_firefox.svg');
    } else {
        myImage.setAttribute('src', 'images/red-panda-505148_960_720.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}