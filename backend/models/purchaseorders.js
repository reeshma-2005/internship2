const Mongoose=require("mongoose");
const PurchaseorderSchema=Mongoose.Schema(
    {
        customername:
        {
            type: String,
            // require: true
        },
        address:
        {
            type: String,
            // require: true
        },
        pid:
        {
            type: String
        },
        itemname:
        {
            type: String,
            // require: true
        },
        squantity:
        {
            type: String,
            // require: true
        },
        shipcost:
        {
            type: String,
            // require: true
        },
        amount:
        {
            type: String,
            // require: true
        },
        pamount:
        {
            type: String,
            // require: true
        },
        podate:
        {
            type: Date,
            // require: true
        },
        status:
        {
            type: String,
            // require: true
        }
      
      
    }
);
const PurchaseorderModel=Mongoose.model("purchaseorder",PurchaseorderSchema);
module.exports=PurchaseorderModel;