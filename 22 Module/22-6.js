//  if divisible by 3 then print 'foo'
//  if divisible by 5 then print 'bar'
//  if divisible by 3 & 5 both then print 'foobar'

function checkFooBar(number) {
    for(let i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('foobar')
        }
        else if(i % 3 == 0){
            console.log('foo')
        }
        else if(i % 5 == 0){
            console.log('bar')
        }
        else{
            console.log(i);
        }
    }
}

const result = checkFooBar(30);
console.log(result);