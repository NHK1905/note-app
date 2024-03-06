import express from 'express'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { getAuth } from 'firebase-admin/auth'

import { resolvers } from './resolvers/index.js'
import { typeDefs } from './schemas/index.js'
import './firebaseConfig.js'
import 'dotenv/config'

const app = express()
const httpServer = http.createServer(app)




// Connect to MongoDB
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lbgpg1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

const authorizationJWT = async (req, res, next) => {
    console.log({authorization: req.headers.authorization})
    const authorizationHeader = req.headers.authorization

    if (authorizationHeader) {
        const accessToken = authorizationHeader.split(' ')[1];

        getAuth()
      .verifyIdToken(accessToken)
      .then((decodedToken) => {
        console.log({ decodedToken });
        res.locals.uid = decodedToken.uid;
        next();
      })
      .catch((err) => {
        console.log({ err });
        return res.status(403).json({ message: 'Forbidden', error: err });
      });
  } else {
    next();
    // return res.status(401).json({ message: 'Unauthorized' });
  }

}

app.use(cors(), authorizationJWT,bodyParser.json(), expressMiddleware(server, {
    context: async ({req, res}) => {
        return { uid: res.locals.uid }
    }
}))

mongoose.set('strictQuery', false)
mongoose.connect(URI).then(async () => {
    console.log('Connected to database')
    await new Promise((resolve) => httpServer.listen({port: PORT}, resolve))
    console.log('Server ready at http://localhost:4000')
})
