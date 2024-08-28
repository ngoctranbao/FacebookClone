// import pkg from 'bcryptjs';
// const { hash, compare, genSalt } = pkg;
import bcrypt from 'bcrypt';

export const hashUserPassword = async (plaintextPassword) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            if (err) throw err;
            
            return hash;
        });
    });
};

export const verifyPassword = async (plaintextPassword, hashPassword) => {
    return bcrypt.compare(plaintextPassword, hashPassword);
}