const path = require('path');
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json());

const m3enigmaClass = require('./api/m3Enigma')
const m3enigma = new m3enigmaClass()

const PORT = process.env.PORT || 5000


app.use(express.static(path.resolve(__dirname, '.', 'client', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'client', 'build', 'index.html'));
});

app.post('/api', (req, res) => {

    let plugStart = '';
    let plugEnd = '';

    for (let i = 1; i <= 10; i++) {
        plugStart += req.body.plugboardSideState[`plugStart${i}`]
    }
    for (let i = 1; i <= 10; i++) {
        plugEnd += req.body.plugboardSideState[`plugEnd${i}`]
    }

    m3enigma.initialize(
        req.body.rotorSideState.inputMsg,
        req.body.rotorSideState.rotorSettings.rotor1,
        req.body.rotorSideState.rotorSettings.rotor2,
        req.body.rotorSideState.rotorSettings.rotor3,
        req.body.rotorSideState.rotorSettings.rotorSet2,
        req.body.rotorSideState.rotorSettings.rotorSet3,
        plugStart,
        plugEnd
    )

    let enigmaMsg = m3enigma.encrypt()
    res.send({ enigmaMsg: enigmaMsg })
    res.end()
})

app.listen(PORT, () => PORT)