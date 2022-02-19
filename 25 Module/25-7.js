// ul eventhandler
document.getElementById('second-item').addEventListener('click', function(event){
    alert("2nd item clicked");
    event.stopImmediatePropagation();
});
document.getElementById('second-item').addEventListener('click', function(event){
    alert("2nd item clicked");
});
document.getElementById('second-item').addEventListener('click', function(event){
    alert("2nd item clicked");
});

// ul eventhandler
document.getElementById('list-container').addEventListener('click', function(event){
    alert("ul clicked");
    event.stopPropagation();
});

// section eventhandler
document.getElementById('section-container').addEventListener('click', function(){
    alert("section clicked");
});