/* TODO
 * 1: Create the server and listen
 * 2: When post method is called take the passed json object
 * 3: consider all the rotat and plug board settings and pass the message into functions
 * 4: Take the output of the functions and send it back to the client and complete the promise
 * 5: when the app is deployed we also have to serve the html css and js
*/

const express = require('express')
const m3enigmaClass = require('./api/m3Enigma')
const app = express()

const m3enigma = new m3enigmaClass()

const PORT = 5000

app.use(express.json());

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

app.listen(PORT, () => console.log("listening on port 5000"))