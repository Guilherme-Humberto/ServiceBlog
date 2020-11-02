import mongoose from 'mongoose'

mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(`Erro ao conectar o banco de dados ${err}`))