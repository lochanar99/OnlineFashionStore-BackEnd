const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({

   
   
    firstName : {  type : String   },
    lastName : {  type : String  },
    email : {  type : String,  required: true},
    password : {  type : String ,  required: true  },
    isVerified: {type: Boolean, default: false}, //will be true after email verification
    role : {  type : String  , default : 'user' },

    wishlist: [{
        itemID: {type: String},
        itemName: {type: String},
        mainCategory : {type: String},
        price : {type: Number},
        image :  {type: String},
        date : {type: Date}
        }],
  

    cart: [{
            id : {type: String},
            itemName: {type: String},
            price : {type: Number},
            quantity : {type : Number},
           
        }],

});

const User = mongoose.model('testUsers',UserSchema);


module.exports = User;