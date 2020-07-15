const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb',{ useNewUrlParser: true });
const Schema =mongoose.Schema;

var NewUserSchema = new Schema({
                                    
                                    firstName : String,
                                    LastName : String,
                                    phoneNumber : Number,
                                    email : String,
                                    password : String
                                                                });
var UserData=mongoose.model('user', NewUserSchema);
module.exports=UserData;