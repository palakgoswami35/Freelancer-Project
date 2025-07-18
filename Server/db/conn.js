const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this is included if not already

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connection successful');
})
.catch((err) => {
    console.log('❌ Connection Unsuccessful :(');
    console.error('Error:', err.message);
});
