const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config()


app.listen(process.env.PORT)


mongoose.connect(process.env.MONGO_URI)
   .then(console.log('DB connected'))
   .catch((err) => console.log(err))