import mongoose from 'mongoose'

export async function connnect() {
    try {
      mongoose.connect(process.env.DB_URL!) 
      const connection = mongoose.connection;

      connection.on("connected",()=>{
        console.log("mongodb connected successfully");
      })
    } catch (error) {
        console.log("something goes rong")
    }
}