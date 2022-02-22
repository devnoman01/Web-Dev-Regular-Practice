const dialogue = 'Hi guys. How are you?'
const search = 'are';

const userInput = 'blackPINK';
const savedUserName = 'BlackPink';

if(savedUserName == userInput){
    console.log('User found');
}
else{
    console.log('User not found');
}

if(savedUserName.toLocaleLowerCase() == userInput.toLocaleLowerCase()){
    console.log('User exist');
}