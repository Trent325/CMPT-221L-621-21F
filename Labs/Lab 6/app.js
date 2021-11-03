const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.render('index');

})

app.post("/login", function(req, res) {
    console.log(req.body.login);
    res.redirect('/')
})

app.get('/signup', function(req, res){
    res.render('login')
    
})
app.post("/signup", function(req, res) {
    console.log(req.body.singup);
    res.redirect('/signup')
})



app.listen(port, ()=> 
                    console.log("listening 3000"));


