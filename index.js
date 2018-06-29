let express = require("express")
let app = express()
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"))
app.listen(port, e => console.log(`app listening on port ${port}!`))

module.exports = app;