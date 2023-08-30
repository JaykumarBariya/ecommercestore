let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        userid:{type:String,required:true},
        orderdate:{type:Date,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        pincode:{type:Number,required:true},
        totalamount:{type:Number,required:true},
        shipmentamount:{type:Number,required:true},
        billamount:{type:Number,required:true},
        status:{type:String,required:true},
        product:[]
    }
);
let Order = mongoose.model("orders",schema);
module.exports=Order;