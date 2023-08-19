const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json( extended = false ));

app.listen(
    PORT,
    () => console.log("Server listing on : " + PORT)
);

app.get("/getRequest", (req, res) => {
    res.send("Hello bro")
});

app.post("/postRequest", (req, res) => {
    console.log("Logging request:");
    console.log(req);
    console.log("Logging body:");
    console.log(req.body);
    res.send("Hello post")
});
