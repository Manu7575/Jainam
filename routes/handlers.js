const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const router = express.Router();
require('dotenv').config();
const sendMail = require('../mail');

router.get('/', function (req, res) {
    res.render('index', {title: 'Jainam Solutions || home'});
});

router.get('/about', function (req, res) {
    res.render('about', {title: 'Jainam Solutions || about'});
});

router.get('/services', function (req, res) {
    res.render('services', {title: 'Jainam Solutions || service'});
});

router.get('/contact', function (req, res) {
    res.render('contact', {title: 'Jainam Solutions || contact'});
});

router.post('/contact', (req, res) => {
    const { email,text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email,text, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});



router.get('/confirmation', function (req, res) {
    res.render('confirmation', {title: 'Jainam Solutions'});
});


router.get('*', function(req, res) {  
    res.render('error', {title: 'Jainam Solutions || 404'});
});

module.exports = router;
