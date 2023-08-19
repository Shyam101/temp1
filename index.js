const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json()); // Use bodyParser.json() without arguments

app.listen(
    PORT,
    () => console.log("Server listening on : " + PORT)
);

app.post("/postRequest", (req, res) => {
    console.log("Logging request:");
    console.log(req.body); // Log the parsed body
    res.send("Hello post");
});
