// program-4: find first odd length name in an array

function oddFriend(friendNames){
    var checkString = 0;
    var oddFriendName;

    // input type (array) validation
    if(Array.isArray(friendNames) !=0){
        // empty array validation
        if(friendNames.length > 0){
            for(let i=0; i<friendNames.length; i++){
                // string item validation in array
                if(typeof(friendNames[i]) == "string"){
                    checkString++;
                }
                else{
                    // validation message if item isn't string
                    return "All names in array must be string";
                }
            }

            if(checkString == friendNames.length){
                var oddNameCount = 0;

                for(let i = 0; i < friendNames.length; i++){
                    // searchning odd length name in array
                    if(friendNames[i].length % 2 != 0){
                        oddNameCount += 1;
                    }
                }

                if(oddNameCount != 0){
                    for(let i = 0; i < friendNames.length; i++){
                        // checking odd length name
                        if(friendNames[i].length % 2 != 0){
                            oddFriendName = friendNames[i];
                            return oddFriendName;
                        }
                    }
                }
                else{
                    // validation message if there is no odd length name in array
                    return "No odd length name in array";
                }
            }
        }
        else{
            // validation message if there is no item in array
            return "Check array elements and try again";
        }
    }
    else{
        // validation message if input is not an array
        return "Input must be an array.";
    }
}
