import grpc from 'grpc'
import path from 'path'
import { loadSync } from '@grpc/proto-loader'

import implementation from './implementation'
import loaderConfig from './config/protoConfig'
import './database/connection'

const packageUserDefinition = loadSync(
    path.resolve(__dirname, "proto", "messageUser.proto"),
    loaderConfig
)
const protoUser = grpc.loadPackageDefinition(
    packageUserDefinition
)

const server = new grpc.Server()
server.addService(protoUser.UserService.service, implementation)
server.bind('0.0.0.0:3333', grpc.ServerCredentials.createInsecure());
if(server) {
    server.start()
    console.log("Conectado User-Service 3333")
}