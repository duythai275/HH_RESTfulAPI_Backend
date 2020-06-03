import express from 'express';
import routes from './src/routes/hhRoutes';
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
// import User from './src/models/userModel';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise =  global.Promise;
mongoose.connect('mongodb://localhost/hhdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Enable All CORS Requests
app.use(cors());

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// JWT setup 
app.use((req, res, next) => {
    if ( req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT' ) {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTfulAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
})

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);