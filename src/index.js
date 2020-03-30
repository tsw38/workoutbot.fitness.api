const cors = require('cors');
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require("express-graphql");
const fbAdmin = require('./firebase/firebase');
const expressPlayground = require("graphql-playground-middleware-express").default;


dotenv.config();

import schema from './graphql/Root';

const app = express();

app
    .use(cors({
        credentials: true,
        origin: true,
        methods: ['GET', 'POST']
    }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(cookieParser())
    .use(compression())
    .use('/playground', expressPlayground({ endpoint: '/api' }))
    .get('/', (req,res,next) => {
        res.send('HELLO!!!!!')
    })
    .use('/api',
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        cookieParser(),
        graphqlHTTP((req, res) => ({
            schema,
            context: {req, res},
            customFormatErrorFn: error => ({
                message: error.message,
                locations: error.locations,
                stack: error.stack ? error.stack.split('\n') : [],
                path: error.path,
            })
        }))
    )
    .listen(process.env.HTTP_PORT, () => {
        console.log(`Now browse to localhost:${process.env.HTTP_PORT}`)
    })