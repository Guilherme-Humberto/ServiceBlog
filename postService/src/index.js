import 'dotenv/config'
import grpc from 'grpc'
import { loadSync } from '@grpc/proto-loader'
import path from 'path'
import loaderConfig from './config/proto'
import implementation from './implementation'
import './database/index'

const packageDefinition = loadSync(
    path.resolve(__dirname, "proto", "message.proto"),
    loaderConfig
)

const proto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()
server.addService(proto.PostService.service, implementation)
server.bind("0.0.0.0:3334", grpc.ServerCredentials.createInsecure())

if(server) {
    server.start()
    console.log("Conectado ao Post Service 3334")
}