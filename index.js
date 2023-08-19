const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/iap_rtn_endpoint', (req, res) => {
    try {
        console.log('Received IAP RTN notification:');
        console.log(req.body);
        res.status(200).send('OK');
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
