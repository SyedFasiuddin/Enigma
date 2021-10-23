const
    In = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // rotors input 
    R1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    R2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    R3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    R4 = "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    R5 = "VZBRGITYUPSDNHLXAWMJQOFECK",
    refI = "ABCDEFGIJKMTV", // reflector input
    refO = "YRUHQSLPXNOZW"; // reflector output

const usedRotorOne = rotor1,
    usedRotorTwo = rotor2,
    usedRotorThree = rotor3;

// 1 --> towards reflector
// 0 --> away from reflector

function rotor1(char, direction) {
    if (direction === 1) return R1.charAt(In.indexOf(char))
    if (direction === 0) return In.charAt(R1.indexOf(char))
}

function rotor2(char, direction) {
    if (direction === 1) return R2.charAt(In.indexOf(char))
    if (direction === 0) return In.charAt(R2.indexOf(char))
}

function rotor3(char, direction) {
    if (direction === 1) return R3.charAt(In.indexOf(char))
    if (direction === 0) return In.charAt(R3.indexOf(char))
}

function rotor4(char, direction) {
    if (direction === 1) return R4.charAt(In.indexOf(char))
    if (direction === 0) return In.charAt(R4.indexOf(char))
}

function rotor5(char, direction) {
    if (direction === 1) return R5.charAt(In.indexOf(char))
    if (direction === 0) return In.charAt(R5.indexOf(char))
}

function reflector(char) {
    let inIdx = refI.indexOf(char)
    if (inIdx !== -1) return refO.charAt(inIdx)
    let outIdx = refO.indexOf(char)
    if (outIdx !== -1) return refI.charAt(outIdx)
}

function encrypt(str) {
    let returnStr = ''
    for (let i = 0; i < str.length; i++) {
        let c1 = usedRotorOne(str[i], 1)
        let c2 = usedRotorTwo(c1, 1)
        let c3 = usedRotorThree(c2, 1)
        let ref = reflector(c3)
        c3 = usedRotorThree(ref, 0)
        c2 = usedRotorTwo(c3, 0)
        c1 = usedRotorOne(c2, 0)
        returnStr += c1
    }
    return returnStr
}

console.log(encrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZs"))
