import { User } from '../models/User';

class findUserById{
    async execute(id: string){
        const user = await User.findById(id);
        return user;

    }
}

class findUserByEmail {
    async execute(email:String){
        const user = await User.find(email);
        return user;

    }
}

export { findUserByEmail, findUserById };