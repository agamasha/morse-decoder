const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = Array(expr.length / 10);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(10);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i][0] = expr[(i * 10) + 0];
        arr[i][1] = expr[(i * 10) + 1];
        arr[i][2] = expr[(i * 10) + 2];
        arr[i][3] = expr[(i * 10) + 3];
        arr[i][4] = expr[(i * 10) + 4];
        arr[i][5] = expr[(i * 10) + 5];
        arr[i][6] = expr[(i * 10) + 6];
        arr[i][7] = expr[(i * 10) + 7];
        arr[i][8] = expr[(i * 10) + 8];
        arr[i][9] = expr[(i * 10) + 9];
    }
    
    let func = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i][0] === '0') {
                array[i].splice(0, 1);
                func(array);
            }
        }
        return array;
    }
    
    func(arr);
    
    let dotsArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        dotsArr[i] = '';
        for (let j = 0; j < arr[i].length; j = j + 2) {
            if ((arr[i][j] === '1') && (arr[i][j + 1] === '0')) {
                dotsArr[i] = dotsArr [i] + '.';
            }
            else if ((arr[i][j] === '1') && (arr[i][j + 1] === '1')) {
                dotsArr[i] = dotsArr [i] + '-';
            }
            else if (arr[i][j] === '*') {
                dotsArr[i] = ' ';
            }
        }
        
    }
    
    keysArr = Object.keys(MORSE_TABLE);
    lettersArr = Object.values(MORSE_TABLE);
    
    console.log(keysArr);
    
    let result = '';
    for (let i = 0; i < dotsArr.length; i++) {
        if (dotsArr[i] === ' ') {
            result = result + ' ';
        }
        for (let j = 0; j < keysArr.length; j++) {
            if (dotsArr[i] === keysArr[j]) {
                result = result + lettersArr[j];
            }
        }
    }
    return result;
}

module.exports = {
    decode
}