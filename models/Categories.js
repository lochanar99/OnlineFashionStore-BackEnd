const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    menCategories: {
            type: Array,
    },

    womenCategories: {
        type: Array,
    },
    kidsCategories: {
        type: Array,
    },
    sportsCategories: {
        type: Array,
    },
    discountCategories: {
        type: Array,
    },


});

var Category = mongoose.model("Categories", CategorySchema);

// Export model
module.exports = Category;
