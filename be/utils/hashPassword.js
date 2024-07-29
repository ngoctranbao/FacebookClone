import bcrypt from "bcryptjs";

let hashUserPassword = (plaintextPassword) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            if (err) throw err;
            
            return hash;
        });
    });
};

module.exports = {
  hashUserPassword: hashUserPassword,
};