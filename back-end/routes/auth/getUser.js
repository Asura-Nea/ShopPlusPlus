import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    address: String,
    phoneNumber: Number,
});
const users = mongoose.model('users', userSchema);

export default async (req, res) => {
    try {
        console.log('users');
        const Users = await users.find({}).exec();
        res.send(Users);
        // res.redirect('/motors');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');

    }
}