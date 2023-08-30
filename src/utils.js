
const bcrypt = require('bcrypt');
const path = require('path');
const { fileURLToPath } = require('url');

 const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

const isValidPassword = (userDB,password)=>{
    return bcrypt.compareSync(password,userDB.password);
}

module.exports = {
    createHash,
    isValidPassword
};