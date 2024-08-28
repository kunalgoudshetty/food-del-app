import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kunal:kunal123@cluster0.9v5f2.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}