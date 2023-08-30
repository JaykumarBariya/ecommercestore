let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        pcid:{type:String,required:true},
        name:{type:String,required:true},
        description:{type:String,required:true},
        specification:{type:String,required:true},
        mrp:{type:Number,required:true},
        price:{type:Number,required:true},
        varieties:[],
        instock:{type:String,required:true},
        isactive:{type:String,required:true},
        imagepath:{type:String}
    }
);
let Product = mongoose.model("product",schema);
module.exports=Product;