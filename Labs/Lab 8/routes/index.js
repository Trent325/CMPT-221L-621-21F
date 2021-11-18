let express = require('express');
let router = express.Router();
let Student = require('../models/Student');

router.get("/", function (req, res) {
    res.render('HomePage');
});

router.get("/login", function(req, res) {
    res.render('login');
});

router.post("/login", function (req, res) {
    
    Student.create(req.body.person, function (err, Student) {
        if (err) {
            console.error(err);
        } else {
          
                
                res.send("item saved to database");
           

            
        }
    })
    
})

module.exports = router;
