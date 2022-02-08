//  method-1
function handleEventMethod1() {
    const textValue = document.getElementById('textInput');
    const p = document.getElementById('new-paragraph');
    p.innerText = textValue.value + ' by Method-1';
    textValue.value = '';
}

//  method-2
document.getElementById('method-2').addEventListener('click', function() {
    const textValue = document.getElementById('textInput');
    const p = document.getElementById('new-paragraph');
    p.innerText = textValue.value + ' by Method-2';
    textValue.value = '';
})