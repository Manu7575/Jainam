const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const router = express.Router();
require('dotenv').config();
const sendMail = require('../mail');

router.get('/', function (req, res) {
    res.render('index', {title: 'Jainam Solutions || Home'});
});

router.get('/about', function (req, res) {
    res.render('about', {title: 'Jainam Solutions || About'});
});

router.get('/services', function (req, res) {
    res.render('services', {title: 'Jainam Solutions || Service'});
});

router.get('/portfolio', function (req, res) {
    res.render('portfolio', {title: 'Jainam Solutions || Portfolio'});
});

router.get('/pricing', function (req, res) {
    res.render('pricing', {title: 'Jainam Solutions || Pricing'});
});

router.get('/contact', function (req, res) {
    res.render('contact', {title: 'Jainam Solutions || Contact'});
});

router.post('/contact', (req, res) => {
    const { email,message,subject } = req.body;
    console.log('Data: ', req.body);

    sendMail(email,message,subject, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email Sent Successfully');
        return res.json({ message: 'Email sent Successfully' });
    });
});



router.get('/confirmation', function (req, res) {
    res.render('confirmation', {title: 'Jainam Solutions'});
});


router.get('*', function(req, res) {  
    res.render('error', {title: 'Jainam Solutions || 404'});
});

module.exports = router;
