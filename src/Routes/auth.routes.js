import { Router } from 'express';
import { login, regiter } from '../controllers/auth.js'

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World from root!')
})

router.get('/register', regiter)
router.get('/login', login);

export default router