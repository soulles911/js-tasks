function concatenateStrings(str1, str2) {
    return str1.replace(/\s/g, '') + str2.replace(/\s/g, '');
}
function getStringLength(str) {
    return str.length;
}
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
function getChar(str, index) {
    return str[index - 1];
}
function removeFirstOccurrences(str, value) {
    const index = str.indexOf(value);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + value.length);
}
function getRectangleString(width, height) {
    let result = '';
    
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            result += '*'.repeat(width) + '\n';
        } else {
            if (width === 1) {
                result += '*\n';
            } else {
                result += '*' + ' '.repeat(width - 2) + '*\n';
            }
        }
    }
    
    return result.trimEnd();
}

