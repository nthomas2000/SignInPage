const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();
const authRoute = require("./Routes/AuthRoute");
const {MONGO_URL, PORT} = process.env;

mongoose.connect(MONGO_URL, {useNewUrlParser: true,
useUnifiedTopology:true,}).then(() => console.log("MongoDB is connected successffully"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log('Server is listneing on port ${PORT}');
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,

    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);