const mongoose = require('mongoose') //importing mongoose

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) //connect with MONGO URI in env

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan. //calling on conn cariable above to use connection and host objects to connect
        underline) //also using colors here to style the console
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB