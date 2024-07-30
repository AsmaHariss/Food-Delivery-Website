import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'


//using this router can create get, post and many other methodss
const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

// for storage configuration we used above disk storage configuration
const upload = multer({ storage: storage })

// use middleware to upload images that we created using the multer package
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood);





export default foodRouter;