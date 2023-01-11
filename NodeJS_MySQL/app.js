

const express = require('express')
const bodyParser =require('body-parser') 
const app =express() 
const port = 3307
app.use(express.static('../library'))
var mysql=require('mysql')
app.engine('pug', require('pug').__express)
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({
    extended:true
}))
const connection = mysql.createConnection({
    host: "localhost",
    user: "user1",
    password: "",
    database: "nodeDB",
    connectionLimit: 10
})

app.set('view engine', 'pug')


app.get('/', function (req, res) {

res.sendFile('index.html', { root: __dirname })
});

connection.connect(function(err){ if (err) throw err;
    console.log('Connected..');})

app.post('/submit', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="insert into user_details(username,email,phone,age,gender) values('"+req.body.name +"','"+req.body.email +"','"+req.body.phone +"','"+req.body.age +"','"+req.body.gender +"')"
    connection.query(sql, function (err) {
    if (err) throw err
    return res.redirect('signup_success.html')
    })
    
})

app.post('/update', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="UPDATE user_details SET "+req.body.al_field+" = "+req.body.al_value+ " WHERE username='"+req.body.al_name+"';"
    connection.query(sql, function (err) {
    if (err) throw err
    return res.redirect('signup_success.html')
    })
})

app.post('/delete', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="delete from user_details WHERE username='"+req.body.del_name+"';"
    connection.query(sql, function (err) {
    if (err) throw err
        return res.redirect('signup_success.html')
    })
})

app.post('/Search', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="select * from user_details WHERE username='"+req.body.sea_name+"';"
    connection.query(sql, function (err,result) {
    if (err) throw err
        res.send(result)
    })
})

app.post('/display', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="select * from user_details;"
    connection.query(sql, function (err,result1) {
    if (err) throw err
        res.send(result1)
    })
})
app.post('/return', function (req, res) { console.log(req.body);
    return res.redirect('index.html')
})


app.listen(port, () => console.log('listening on port 3307'))