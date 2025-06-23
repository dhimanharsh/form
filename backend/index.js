const express = require('express');
const connectdb = require('./connectdb/connectdb');
const app = express()
const bodyParser  =require('body-parser');
const cors =require('cors')
const AuthRouter = require('./routes/auth.route')
const ProductRouter = require('./routes/product.route')
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


connectdb().then(
    app.listen(PORT,(req,res)=>{
        console.log('Server started...')
        console.log(`serve at http://localhost:${PORT}`)
    })
)
