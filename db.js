const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/DB");

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    try {   
        await mongoose.connect (process.env.DB,connectionParams);
        console.log("Connected to Database Successfully");
    } catch (err)
    {
        console.log("Can't connect to Database");

    }

    
}