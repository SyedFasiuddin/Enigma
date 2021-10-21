/* TODO
 * 1: Create the server and listen
 * 2: When post method is called take the passed json object
 * 3: consider all the rotat and plug board settings and pass the message into functions
 * 4: Take the output of the functions and send it back to the client and complete the promise
 * 5: when the app is deployed we also have to serve the html css and js
*/

const express = require('express')
const app = express()


const PORT = 5000
app.listen(PORT, () => console.log("listening on port 5000"))