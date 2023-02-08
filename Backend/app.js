const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cloudinary = require("cloudinary")
const fileupload = require("express-fileupload")


const errorMiddleWares = require("./middleWares/errors")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

//setting up cloudinarg config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



//import all routes
const products = require("./routes/product")
const authUsers = require("./routes/authUser")
const order = require("./routes/order")


app.use("/api/v1", products)

app.use("/api/v1", authUsers)
app.use("/api/v1", order)

//middleWare to handle errors
app.use(errorMiddleWares)


module.exports = app


