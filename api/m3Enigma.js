let R0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let R1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
let R2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
let R3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
let R4 = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
let R5 = "VZBRGITYUPSDNHLXAWMJQOFECK";

class M3EnigmaRotorsAndEncryption {
    constructor() {
        let alphabets;
        let inputMsg;
        let usedRotorOne;
        let usedRotorTwo;
        let usedRotorThree;
        let usedRotorTwoIdx;
        let usedRotorThreeIdx;
        let reflectorIn;
        let reflectorOut;
        let plugBoardStartChars;
        let plugBoardEndChars;
    }

    setAlphabets = () => {
        this.alphabets = this.defineRotorsUsed(0);
    }

    setInputMsg = (inputMsg) => {
        this.inputMsg = inputMsg;
    }

    setUsedRotorOne = (str) => {
        this.usedRotorOne = str;
    }

    getUsedRotorOne = () => {
        return usedRotorOne;
    }

    setUsedRotorTwo = (str) => {
        this.usedRotorTwo = str;
    }

    setUsedRotorTwoIndex = (usedRotorTwoIdx) => {
        this.usedRotorTwoIdx = usedRotorTwoIdx;
    }

    getUsedRotorTwo = () => {
        return usedRotorTwo;
    }

    setUsedRotorThree = (str) => {
        this.usedRotorThree = str;
    }

    setUsedRotorThreeIndex = (usedRotorThreeIdx) => {
        this.usedRotorThreeIdx = usedRotorThreeIdx;
    }

    getUsedRotorThree = () => {
        return usedRotorThree;
    }

    setPlugBoardStartChars = (plugBoardStartChars) => {
        this.plugBoardStartChars = plugBoardStartChars;
    }

    setPlugBoardEndChars = (plugBoardEndChars) => {
        this.plugBoardEndChars = plugBoardEndChars;
    }

    setReflectorIn = () => {
        this.reflectorIn = "ABCDEFGIJKMTV";
    }

    setReflectorOut = () => {
        this.reflectorOut = "YRUHQSLPXNOZW";
    }

    defineRotorsUsed = (n) => {
        let str = '';
        switch (n) {
            case 0:
                str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            case 1:
                str = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
                break;
            case 2:
                str = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
                break;
            case 3:
                str = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
                break;
            case 4:
                str = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
                break;
            case 5:
                str = "VZBRGITYUPSDNHLXAWMJQOFECK";
                break;
            default:
                str = null;
                break;
        }
        return str;
    }

    substitution(c, from, to) {
        let fromArr = from.split('');
        let toArr = to.split('');
        for (let i = 0; i < 26; i++) {
            if (c == fromArr[i]) {
                c = toArr[i];
                break;
            }
        }
        return c;
    }

    plugBoardSubstitution(char) {
        let idx1 = this.plugBoardStartChars.indexOf(char);
        let idx2 = this.plugBoardEndChars.indexOf(char);
        if (idx1 == -1 && idx2 == -1) return char;
        if (idx1 != -1) return this.plugBoardEndChars.charAt(idx1);
        if (idx2 != -1) return this.plugBoardStartChars.charAt(idx2);
    }

    reflector(char) {
        let inIdx = this.reflectorIn.indexOf(char)
        if (inIdx !== -1) return this.reflectorOut.charAt(inIdx)
        let outIdx = this.reflectorOut.indexOf(char)
        if (outIdx !== -1) return this.reflectorIn.charAt(outIdx)
    }

    rotateRotors(str, n) {
        let rotor = '';
        let c = '';
        if (n == 0 || n == 26) {
            rotor = S;
            return rotor;
        }
        for (let i = 0; i < 26; i++) {
            if ((n + i) < 26) {
                c = str.charAt((n + i));
                rotor += c;
            } else {
                c = str.charAt((n + i - 26));
                rotor += c;
            }
        }
        return rotor;
    }

    checkForRotationAndRotate = () => {
        this.setUsedRotorOne(this.rotateRotors(this.usedRotorOne, 1))
        let usedRotorOneArr = this.usedRotorOne.split('')
        let usedRotorTwoArr;
        let didRotate = false;
        switch (this.usedRotorTwoIdx) {
            case 1:
                if (usedRotorOneArr[0] == 'R') {
                    this.setUsedRotorTwo(this.rotateRotors(this.usedRotorTwo, 1));
                    didRotate = true;
                }
                break;
            case 2:
                if (usedRotorOneArr[0] == 'F') {
                    this.setUsedRotorTwo(this.rotateRotors(this.usedRotorTwo, 1));
                    didRotate = true;
                }
                break;
            case 3:
                if (usedRotorOneArr[0] == 'W') {
                    this.setUsedRotorTwo(this.rotateRotors(this.usedRotorTwo, 1));
                    didRotate = true;
                }
                break;
            case 4:
                if (usedRotorOneArr[0] == 'K') {
                    this.setUsedRotorTwo(this.rotateRotors(this.usedRotorTwo, 1));
                    didRotate = true;
                }
                break;
            case 5:
                if (usedRotorOneArr[0] == 'A') {
                    this.setUsedRotorTwo(this.rotateRotors(this.usedRotorTwo, 1));
                    didRotate = true;
                }
                break;
        }
        if (didRotate) {
            usedRotorTwoArr = this.usedRotorTwo.split('');
            switch (this.usedRotorThreeIdx) {
                case 1:
                    if (usedRotorTwoArr[0] == 'R') {
                        this.setUsedRotorThree(this.rotateRotors(this.usedRotorThree, 1));
                    }
                    break;
                case 2:
                    if (usedRotorTwoArr[0] == 'F') {
                        this.setUsedRotorThree(this.rotateRotors(this.usedRotorThree, 1));
                    }
                    break;
                case 3:
                    if (usedRotorTwoArr[0] == 'W') {
                        this.setUsedRotorThree(this.rotateRotors(this.usedRotorThree, 1));
                    }
                    break;
                case 4:
                    if (usedRotorTwoArr[0] == 'K') {
                        this.setUsedRotorThree(this.rotateRotors(this.usedRotorThree, 1));
                    }
                    break;
                case 5:
                    if (usedRotorTwoArr[0] == 'A') {
                        this.setUsedRotorThree(this.rotateRotors(this.usedRotorThree, 1));
                    }
                    break;
            }
        }
    }

    encrypt = () => {
        let msg = this.checkInputMsg(this.inputMsg)
        let enigmaOutputMsg = ''
        if (msg === null) {
            return "Invalid Input"
        } else {
            for (let i = 0; i < msg.length; i++) {
                if (msg[i] === '0') {
                    enigmaOutputMsg += ' '
                } else {
                    let c = this.plugBoardSubstitution(msg[i])
                    c = this.substitution(c, this.alphabets, this.usedRotorOne)
                    c = this.substitution(c, this.alphabets, this.usedRotorTwo)
                    c = this.substitution(c, this.alphabets, this.usedRotorThree)
                    c = this.reflector(c)
                    c = this.substitution(c, this.usedRotorThree, this.alphabets)
                    c = this.substitution(c, this.usedRotorTwo, this.alphabets)
                    c = this.substitution(c, this.usedRotorOne, this.alphabets)
                    c = this.plugBoardSubstitution(c)
                    enigmaOutputMsg += c
                    this.checkForRotationAndRotate()
                }
            }
        }
        return enigmaOutputMsg
    }

    initialize = (msg, r1, r2, r3, ri2, ri3, plugStart, plugEnd) => {
        this.setAlphabets()
        this.setReflectorIn()
        this.setReflectorOut()
        this.setInputMsg(msg);
        this.setUsedRotorOne(this.defineRotorsUsed(r1));
        this.setUsedRotorTwo(this.defineRotorsUsed(r2));
        this.setUsedRotorThree(this.defineRotorsUsed(r3));
        this.setUsedRotorTwoIndex(ri2);
        this.setUsedRotorThreeIndex(ri3);
        this.setPlugBoardStartChars(plugStart);
        this.setPlugBoardEndChars(plugEnd);
    }

    checkInputMsg(str) {
        if (str.match(/[0-9]/) === null) {
            str = str.toUpperCase()
            str = str.replace(/ /g, "0")
            str = str.replace(/\n/g, "0")
            str = str.replace(/\t/g, "0")
            return str;
        } else return str = null;
    }
}


module.exports = M3EnigmaRotorsAndEncryption;