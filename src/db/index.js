import mongoose from "mongoose"

const configDB = async () => {
    try {
        const connectionRes = await mongoose.connect(process.env.MONGO_DB_URI);

        console.log(`*** MONGODB Connected *** on host: ${connectionRes.connection.host}`)

    } catch (error) {
        console.log("*** MONGODB Connection Error *** ", error)
        process.exit(1)
    }
}

export default configDB;