let express = require("express");
let bodyparser = require("body-parser");
let Order = require("../models/Order");

let router = express.Router();

//order place karva matenu function
router.post("/place",async(req,res)=>{
    try{
        let body = req.body;
        let order = new Order();
        order.userid = body.data.userid;
        order.orderdate = new Date();
        order.address = body.data.address;
        order.city = body.data.city;
        order.state = body.data.state;
        order.pincode = body.data.pincode;
        order.totalamount= body.data.totalamount;
        order.shipmentamount = body.data.shipmentamount;
        order.billamount = body.data.billamount;
        order.status = "pending..."
        order.product = body.data.product;
        order.save().then(result=>{
            res.end(JSON.stringify({status:"success",data:result}));
        },err=>{
            res.end(JSON.stringify({status:"failed",data:err}));
        })
    }catch{
        res.end(JSON.stringify({status:"failed",data:"something went wrong"}));
    }
});

//mark paid nu logic ahiye
router.post("/markpaid", async(req,res)=>{
    try{
        let body = req.body;
        let order = await Order.findByIdAndUpdate(
            body.data.id,{$set:{status:"paid"}},
            {new:true}
        );
        //send email to user of order success
        //send email to admin(xyz@gamil.com)
        res.end(JSON.stringify({status:"success",data:order}));
    }catch{
        res.end(JSON.stringify({status:"failed",data:"something went wrong"}));
    }
});

module.exports = router;