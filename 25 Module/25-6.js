document.getElementById('deleteText').addEventListener('keyup', function(event) {
    if(event.target.value == 'delete'){
        document.getElementById('deleteButton').removeAttribute('disabled');
    }
    else{
        document.getElementById('deleteButton').setAttribute('disabled');
    }
})

document.getElementById('deleteText').addEventListener('change', function() {
    const text = document.getElementById('comment-3').innerText;
    
})

document.getElementById('deleteButton').addEventListener('click', function() {
    document.getElementById('comment-3').style.display = 'none';
})