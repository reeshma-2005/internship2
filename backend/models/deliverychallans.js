const Mongoose=require("mongoose");
const DeliveryChallanSchema=Mongoose.Schema(
    {
        refno: {
            type: String,
            required: true,
          },
          deliverydate: {
            type: Date,
            required: true,
          },
          salesid: {
            type: String,
            required:true,
          },
          
    }
);
const DeliveryChallanModel=Mongoose.model("deliverychalan",DeliveryChallanSchema);
module.exports=DeliveryChallanModel;