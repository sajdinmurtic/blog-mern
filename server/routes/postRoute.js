import express from 'express'
import { createPost} from '../controllers/Post.js'

const router = express.Router()
import verifyToken from '../middleware/verifyToken.js'

router.post('/', verifyToken, createPost)

export default router