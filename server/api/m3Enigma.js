const Entry = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    I = "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    II = "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    III = "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    IV = "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    V = "VZBRGITYUPSDNHLXAWMJQOFECK",
    reflector = ["AY", "BR", "CU", 'DH', 'EQ', 'FS', 'GL', 'IP', 'JX', 'KN', 'MO', 'TZ', 'VW']


function rotor1(str, rotorStartPos) {
    let rotorOneOutput = ''
    for (let i = 0; i < str.length; i++) {
        if (rotorStartPos > 26) rotorStartPos = 1
        let charIdx = Entry.indexOf(str[i]) + rotorStartPos - 1
        rotorOneOutput += I.charAt(charIdx)
        rotorStartPos++;
    }
    return rotorOneOutput
}


function rotor2(str, rotorStartPos) {
    let rotorTwoOutput = ''
    for (let i = 0; i < str.length; i++) {
        if (rotorStartPos > 26) rotorStartPos = 1
        let charIdx = Entry.indexOf(str[i]) + rotorStartPos - 1
        rotorTwoOutput += II.charAt(charIdx)
        rotorStartPos++
    }
    return rotorTwoOutput
}

function rotor3(str, rotorStartPos) {
    let rotorThreeOutput = ''
    for (let i = 0; i < str.length; i++) {
        if (rotorStartPos > 26) rotorStartPos = 1
        let charIdx = Entry.indexOf(str[i]) + rotorStartPos - 1
        rotorThreeOutput += III.charAt(charIdx)
        rotorStartPos++
    }
    return rotorThreeOutput
}

function rotor4(str, rotorStartPos) {
    let rotorFourOutput = ''
    for (let i = 0; i < str.length; i++) {
        if (rotorStartPos > 26) rotorStartPos = 1
        let charIdx = Entry.indexOf(str[i]) + rotorStartPos - 1
        rotorFourOutput += IV.charAt(charIdx)
        rotorStartPos++
    }
    return rotorFourOutput
}

function rotor5(str, rotorStartPos) {
    let rotorFiveOutput = ''
    for (let i = 0; i < str.length; i++) {
        if (rotorStartPos > 26) rotorStartPos = 1
        let charIdx = Entry.indexOf(str[i]) + rotorStartPos - 1
        rotorFiveOutput += V.charAt(charIdx)
        rotorStartPos++
    }
    return rotorFiveOutput
}
console.log(rotor1("AAAAA", 25))
console.log(rotor2("AAAAA", 25))
console.log(rotor3("AAAAA", 25))
console.log(rotor4("AAAAA", 25))
console.log(rotor5("AAAAA", 25))
