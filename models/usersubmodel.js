const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSubSchema = new Schema({
  backgroundColor:{
    type: String,
  },
  backgroundPhoto:{
    type: String,
  },
  
  information:[{
    type: String,
  }], 
  reglink:[{
    type: String,
  }], 
  eveinformation:[{
    type: String,
  }], 
  reginfo:[{
    type: String,
  }], 
  profile:{
    type: String,
  },
  
  
} );

const UserSub = mongoose.model('UserSub', userSubSchema);
module.exports = UserSub;