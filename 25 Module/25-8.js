// item eventhandler
const items = document.getElementsByClassName('item');

let count = 1;
document.getElementById('add-item').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = "New Item " + count;
    count++;
    document.getElementById('item-container').appendChild(li);
});


document.getElementById('item-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});