//  method-1
function bgLightGreen() {
    document.body.style.backgroundColor = 'lightgreen';
}

//  method-2
const bgLightBlueButton = document.getElementById('bgLightBlue');

bgLightBlueButton.onclick = function () {
    document.body.style.backgroundColor = 'lightblue';
}

//  method-3
const bgLightYellowButton = document.getElementById('bgLightYellow');

bgLightYellowButton.addEventListener('click', bgLightYellow);

function bgLightYellow() {
    document.body.style.backgroundColor = 'lightyellow';
}

//  method-4
const bgLightGrayButton = document.getElementById('bgLightGray');

bgLightGrayButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgray';
});

//  method-5
document.getElementById('bgLightPink').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightpink';
});