function changeBg(){
    document.body.style.backgroundColor = "lightgreen";
}

document.getElementById('text-input'),addEventListener('keyup', function(event){
    console.log(event.target.value);
});

// mousemove event
// document.getElementById('mouse-move').addEventListener('mousemove', function(){
//     console.log("mouse is moving");
// });

// mouseenter event
// document.getElementById('mouse-move').addEventListener('mouseenter', function(){
//     console.log("mouse entered");
// });

// mouseout event
document.getElementById('mouse-move').addEventListener('mouseout', function(){
    console.log("mouse out");
});