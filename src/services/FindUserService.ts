import { User } from '../models/User';

async function findUserById(id: string) {
    const user = await User.findById(id);
    return user;
}

async function findUserByEmail(email: string) {
    const user = await User.find({email});
    return user;
}

export { findUserByEmail, findUserById };