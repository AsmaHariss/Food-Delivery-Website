import mongoose from "mongoose";


// the required fields should fill up in the database
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})

//fi there is a model it will use it else it created a new model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;