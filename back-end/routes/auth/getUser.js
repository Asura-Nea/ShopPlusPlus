import moment from 'moment';
import { getFlaggedUser } from '../../controller/user.js';

export default async (req, res) => {
    try {
        const getUser = await getFlaggedUser();
        res.send(user), {
            user: req.session.user.name,
            lastLoggedIn: moment(req.session.user.lastLoggedIn).format('MMMM Do YYYY, h:mm:ss a'),
            posts: getPosts,
        };
    } catch (error) {
        res.send('There was an error rendering the page!');
    }
};
