const express = require("express")
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1964",
    database: "crudgames"
})

app.use(cors())
app.use(express.json())

app.post('/register', (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    console.log(name)
})

app.get('/', (req, res)=>{
    res.send('heelooo')

    let SQL = "INSERT INTO games (name, cost, category) VALUES ('Pokemon Scarlet', '300', 'RPG');"
    /*
    db.query(SQL, (err, result) => {
        console.log(err)
    })
    */
})

app.listen(3001, () => {
    console.log("rodando servidor")
})