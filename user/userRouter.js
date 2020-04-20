require('dotenv').config();
const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
const user = require('./userModel.js')

const router = express.Router();


function generateToken(id){
    const payload = {
        subject: id,
    };
    const secret = process.env.JSON_SECRET;
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;