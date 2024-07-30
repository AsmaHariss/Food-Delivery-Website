import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:12123422123@cluster0.kofqwmo.mongodb.net/food-del').then(() => console.log("DB Connected"));


}