
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const uri = process.env.URI;
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(uri);

        if(connect){
            console.log(`Hey! You are connected to the database`);
        }else{
            console.log(`Hurray!You are not connected to the datbase`);
        }

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;