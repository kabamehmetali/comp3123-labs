// I could use switch case too but if condition was easier for me.
// I did not implemet strict types or strict conditions so even user enters string it will work.
// It also works with float numbers like 90.2

var angle_Type = function(angle){ // defined an function expression
    if(angle >= 0 && angle < 90){ // first condition if angle between 0 and smaller than  90, it will return acute angle
    return "Acute angle"
    } else if(angle == 90){ // second condition if the angle equals 90 it will return right angle.
    return "Right angle"
    } else if (angle > 90 && angle < 180){ // third condition if angle is between or equal 90 and 180, it will return Obtuse angle. 
    return "Obtuse angle"
    } else if(angle == 180 ){ // if angle equal 180, it will return straight angle.
    return "Straight angle"
    } else {
    return 'Please Enter a Valid angle between 0-180' // if the user enters invalid input it will return this line.
    }
};



console.log(angle_Type(47)); // test data
console.log(angle_Type(90)); // test data
console.log(angle_Type(145)); // test data
console.log(angle_Type(180)); // test data
