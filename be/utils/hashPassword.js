import bcrypt from 'bcrypt';

export const hashUserPassword = async (plaintextPassword) => {
    return bcrypt.hash(plaintextPassword, 10);
};

export const verifyPassword = async (plaintextPassword, hashPassword) => {
    return bcrypt.compare(plaintextPassword, hashPassword);
}