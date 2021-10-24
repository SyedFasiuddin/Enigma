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
    }

    setAlphabets = () => {
        this.alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    setInputMsg = (inputMsg) => {
        this.inputMsg = inputMsg;
    }

    setUsedRotorOne = (usedRotorOne) => {
        this.usedRotorOne = usedRotorOne
    }

    getUsedRotorOne = () => {
        return usedRotorOne;
    }

    setUsedRotorTwo = (usedRotorTwo) => {
        this.usedRotorTwo = usedRotorTwo;
    }

    setUsedRotorTwoIndex = (usedRotorTwoIdx) => {
        this.usedRotorTwoIdx = usedRotorTwoIdx;
    }

    getUsedRotorTwo = () => {
        return usedRotorTwo;
    }

    setUsedRotorThree = (usedRotorThree) => {
        this.usedRotorThree = usedRotorThree;
    }

    setUsedRotorThreeIndex = (usedRotorThreeIdx) => {
        this.usedRotorThreeIdx = usedRotorThreeIdx;
    }

    getUsedRotorThree = () => {
        return usedRotorThree;
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

    checkForRotationAndRotate() {
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
        let enigmaOutputMsg = ''
        for (let i = 0; i < this.inputMsg.length; i++) {
            let c = this.substitution(this.inputMsg[i], this.alphabets, this.usedRotorOne)
            c = this.substitution(c, this.alphabets, this.usedRotorTwo)
            c = this.substitution(c, this.alphabets, this.usedRotorThree)
            c = this.reflector(c)
            c = this.substitution(c, this.usedRotorThree, this.alphabets)
            c = this.substitution(c, this.usedRotorTwo, this.alphabets)
            c = this.substitution(c, this.usedRotorOne, this.alphabets)
            enigmaOutputMsg += c
            this.checkForRotationAndRotate()
        }
        return enigmaOutputMsg
    }

    initialize(msg, r1, r2, r3, ri2, ri3) {
        this.setAlphabets()
        this.setReflectorIn()
        this.setReflectorOut()
        this.setInputMsg(msg);
        this.setUsedRotorOne(r1);
        this.setUsedRotorTwo(r2);
        this.setUsedRotorThree(r3);
        this.setUsedRotorTwoIndex(ri2);
        this.setUsedRotorThreeIndex(ri3);
    }

    checkInputMsg(str) {
        if (str.match(/[0-9]/) === null) {
            str = str.toUpperCase()
            return str;
        } else return str = null;
    }
}

// test cases
let test = new M3EnigmaRotorsAndEncryption()
let ab = test.defineRotorsUsed(1)
let cd = test.defineRotorsUsed(2)
let ef = test.defineRotorsUsed(3)
test.initialize("NEVRDWDXJXEEKNWWCRYCJYQQQEJSOW", ab, cd, ef, 1, 1)
console.log(test.encrypt())
