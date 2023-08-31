let express = require("express");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");

let app = express();
app.use(express.static("assets"));//our folder uses pictures thats why static
app.use(express.json());//our website uses json data
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));

//for calling angular we have to open our api..
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") 
    {
        res.header("Access Control-Allow-Methods","POST,GET,PUT,PATCH,DELETE");
        res.status(200).json({});    
    }
    next();
});

//for creating the databse 
mongoose.connect("mongodb://localhost:27017/ecommerceprojects");
let db = mongoose.connection;
db.on("error", error=>console.log(error));
db.on("open",()=> console.log("connection established"));

app.get("/",function(req,res){
    res.send("Welcome to E-commerce Backend");
    res.end();
});

app.use("/admin",require("./routes/admin"));
app.use("/productcategory",require("./routes/productcategory"));
app.use("/product",require("./routes/product"));
app.use("/user",require("./routes/user"));
app.use("/order",require("./routes/order"));

app.listen(8081,function(){
    console.log("Backend running on http://localhost:8081/");
});
