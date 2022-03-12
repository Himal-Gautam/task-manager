import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        console.log(token)
    } catch (error) {
        res.status(401).send({error: 'please authenticate'})
    }
}

export default auth