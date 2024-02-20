import { Router } from 'express';
import { account, login, postLogin, postRegister, profile, regiter, setting } from '../controllers/auth.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World from root!');
})

router.get('/register', regiter);
router.post('/register',postRegister);

router.get('/login', login);
router.post('/login',postLogin);

router.get('/profile',profile);
router.get('/account',account)
router.get('/setting',setting);

export default router