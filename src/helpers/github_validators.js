const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const { fileURLToPath } = require('url');



const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

const isValidPassword = (userDB,password)=>{
    return bcrypt.compareSync(password,userDB.password);
}

module.exports= {
    createHash,
    isValidPassword
}