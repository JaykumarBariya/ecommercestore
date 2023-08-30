let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        name:{type:String,required:true},
        srno:{type:Number,required:true},
        imagepath:{type:String}
    }
);
let Productcategory = mongoose.model("productcategories",schema);
module.exports=Productcategory;