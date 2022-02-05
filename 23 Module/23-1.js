// program-1: ana to vori conversion program

function anaToVori(ana) {
    // input type validation
    if(typeof ana == "number"){
        // negative input validation
        if(ana >= 0){
            // vori calculation
            var vori = ana / 16;
            return vori;
        }
        else{
            // showing message if input is negative
            return "Value of ana must be a positive number";
        }
    }
    else{
        // showing message if input type is wrong
        return "Enter number value as input";
    }
}