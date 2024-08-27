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

const verifyPassword = (plaintextPassword, hashPassword) => {
    bcrypt.compare(plaintextPassword, hashPassword, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return;
        }
    
        return result
    })
}

module.exports = {
  hashUserPassword: hashUserPassword,
  verifyPassword: verifyPassword
};