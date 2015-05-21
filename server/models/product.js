var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
     pName : String,
  tName : String,
  date1 : Date,
  date2 : Date,
  phase : String
});
var ProductModel = mongoose.model('Product', ProductSchema);
