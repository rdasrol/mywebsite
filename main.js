const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res) {

    res.render('raja');


});
app.get('/login', function (req, res) {

    res.render('login');


});
app.get('/signup', function (req, res) {


    res.render("signup");


});


app.post('/create', async (req, res) => {
    let { firstname, middlename, lastname, email, mobno, password, Cpassword, captchahere } = req.body;
    let createdUser = await userModel.create({
        firstname,
        middlename,
        lastname,
        email,
        mobno,
        password,
        Cpassword,
        captchahere

    });
    res.redirect("/");
})
app.post('/login', async (req, res) => {
    try {
        const check = await userModel.findOne({email:req.body.email})


        if(check.password === req.body.password){
            res.setHeader  ("content-type", "text/html")
            res.end("<h1> Login Successfully</h1>")
        }
        else{
            res.setHeader  ("content-type", "text/html")
            res.end("<h1> wrong password</h1>")
           
            
        }

    }
    catch {
        res.setHeader  ("content-type", "text/html")
        res.end("<h1> Invalid Information</h1>")
    }
})








app.listen(3000);