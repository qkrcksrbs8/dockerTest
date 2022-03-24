const express = require('express');// npm i express
const bodyParser = require("body-parser");// npm i body-parser
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"resCode": "S0001", "resMsg": "정상 처리되었습니다."});
})

app.listen(3921,()=>console.log(`http://localhost:3921`));