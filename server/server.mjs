import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from  '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './schemas/index.js';
import './firebaseConfig.js'
import { getAuth } from 'firebase-admin/auth'
import { decode } from 'punycode';

const app = express();
const httpServer = http.createServer(app);   

// Connect to DB
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@note-app.t6us4.mongodb.net/?retryWrites=true&w=majority&appName=note-app`
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start();

const authorizationJWT = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const accessToken = authorizationHeader.split(' ')[1];

        getAuth().verifyIdToken(accessToken)
        .then(decodedToken => {
            res.locals.uid = decodedToken.uid;
            next();
        })
        .catch(err => {
            console.log(err);
            return res.status(403).json({message: 'Forbidden', error: err});
        })
    } else {
        return res.status(401).json({message: 'Unauthorized'});
    }
}

app.use(cors(), authorizationJWT, bodyParser.json(), expressMiddleware(server, {
    context: async ({req, res}) => {
        return { uid: res.locals.uid}
    }
}));

mongoose.connect(URL).then(async () => {
    console.log('Connected to DB');
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
    console.log('Server ready at http://localhost:4000');
})




