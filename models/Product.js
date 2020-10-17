const mongoose = require("mongoose");

// Get the Schema constructor
const Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
const ProductSchema = new Schema({
  itemID: {
    type: Number,
    
  },
  name: {
    type: String,
   
  },
  price: {
    type: Number,
   
  },
  discount:{
    type : Number,
    default:0,
  },
  description: {
    type: String,
   
  },
  mainCategory:{
    type: String,
  },
  subCategory:{
    type: String,
  },
  quantityInCart:{
    type: Number,
  },
  cartIn:{
      type : Boolean,
  },
  
  ratings: [{
    userName: {type: String},
    rate : {type: Number},
    comment : {type : String},
    date : {type: Date}
     }],

 images :[
       {
        productImage : {type:String}
       }
      
      ],

      quantity:{
          sQuantity :{
            red : {type:Number , default: 0},
            black : {type:Number , default: 0},
            white : {type:Number , default: 0},
            green : {type:Number , default: 0},
            pink : {type:Number , default: 0},
            blue : {type:Number , default: 0},
            multi : {type:Number , default: 0},
          },
          mQuantity:{
            red : {type:Number , default: 0},
            black : {type:Number , default: 0},
            white : {type:Number , default: 0},
            green : {type:Number , default: 0},
            pink : {type:Number , default: 0},
            blue : {type:Number , default: 0},
            multi : {type:Number , default: 0},
          },
          lQuantity:{
            red : {type:Number , default: 0},
            black : {type:Number , default: 0},
            white : {type:Number , default: 0},
            green : {type:Number , default: 0},
            pink : {type:Number , default: 0},
            blue : {type:Number , default: 0},
            multi : {type:Number , default: 0},
          },
          xlQuantity:{
            red : {type:Number , default: 0},
            black : {type:Number , default: 0},
            white : {type:Number , default: 0},
            green : {type:Number , default: 0},
            pink : {type:Number , default: 0},
            blue : {type:Number , default: 0},
            multi : {type:Number , default: 0},
          }
      }
  
});

// Create model from the schema
var Product = mongoose.model("Products", ProductSchema);

// Export model
module.exports = Product;

