function megaFriend(friends){

    // check if input is array or not
    if(Array.isArray(friends) == false){
        return 'Input not array';
    }
    let mega = [];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['karim', 'rahim', 'shahriar'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);