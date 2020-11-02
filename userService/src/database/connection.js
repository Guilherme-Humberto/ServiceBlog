import { connect } from 'mongoose'
import 'dotenv/config'

connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(`Erro ao conetar o banco de dados ${err}`))