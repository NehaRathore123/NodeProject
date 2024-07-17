import  express from "express";
import bodyParser from "body-parser";

const app = express();

//to link router
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';

//to extract body data from request
//(post,put,delete,patch)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//route level middleware for url routing
app.use("/user",userRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");