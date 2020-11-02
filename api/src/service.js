import grpc from 'grpc'
import { loadSync } from '@grpc/proto-loader'
import loaderConfig from './config/proto'
import path from 'path'

const packageUserDefiniton = loadSync(
    path.resolve(__dirname, "proto", "messageUser.proto"),
    loaderConfig
)

const packagePostDefiniton = loadSync(
    path.resolve(__dirname, "proto", "messagePost.proto"),
    loaderConfig
)

const protoUser = grpc.loadPackageDefinition(packageUserDefiniton)
const protoPost = grpc.loadPackageDefinition(packagePostDefiniton)

const UserService = new protoUser.UserService(
    "localhost:3333",
    grpc.credentials.createInsecure()
)

const PostService = new protoPost.PostService(
    "localhost:3334",
    grpc.credentials.createInsecure()
)

export { UserService, PostService }