import express from 'express'
const router = express()
import UserController from '../controller/UserController'
import PostController from '../controller/PostController'

router.post("/register", UserController.registerUser)
router.get("/user/:id", UserController.getUserById)
router.post("/login", UserController.loginUser)

router.post("/create/:id", PostController.createPost)
router.get("/post/:id", PostController.getPostById)

export { router }