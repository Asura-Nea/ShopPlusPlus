import { Router } from 'express';
import login from './login.js';
import signup from './signup.js';
import getUser from './getUser.js';

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/user', getUser);

export default router