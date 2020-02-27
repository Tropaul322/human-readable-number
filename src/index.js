module.exports = function toReadable (number) {
    var words = {
    0: 'zero', 
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
    100:'one hundred',
    200:'two hundred',
    300:'three hundred',
    400:'four hundred',
    500:'five hundred',
    600:'six hundred',
    700:'seven hundred',
    800:'eight hundred',
    900:'nine hundred',
    }

    if (number > 19 && number < 100){
        if(number.length = 2){
            var reminder = number%10;
            if (reminder == 0){
                return words[number]
            } else {
            var ten = number - reminder;
            return words[ten] + ' '+  words[reminder];
        }}
    } else if (number > 99){
        
        var rem = number%100;
        if (rem == 0){
            return words[number]
        } else if(rem > 0 && rem == 10 || rem == 20 || rem == 30 || rem == 40 || rem == 50 || rem == 60 || rem == 70 || rem == 80 || rem == 90 || rem < 20) {
            var houndred = number - rem;
            return words[houndred] + ' '+  words[rem]
        }else {
            console.log(rem);
            var houndred = number - rem;
            var tens = rem%10; 
            var  rem2 = rem - tens;
            return words[houndred] + ' '+  words[rem2]+ ' ' + words[tens]; 
        }
}else {
        return words[number]
    }
}
