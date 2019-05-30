/*
Implement a method to perform basic string compression using the counts of
repeated characters. If compression to be performed, return original string.

'aaaabccc' => 'a5b1c3'
*/

function stringCompression (str) {
    let count = 1;
    let newStr = '';
    let changeBool = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            changeBool = true;
            count++;
        } else {
            newStr += str[i] + String(count);
            count = 1;
        }
    }
    return changeBool ? newStr : str;
}

console.log(stringCompression('aabbccddeeeeeeeeeeeffgggghhhhiijjkkllmmooppqqtttt'))