import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/bidme";
mongoose.connect(url);
console.log("successfully connected to mongodb database....");