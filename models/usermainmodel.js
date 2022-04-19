const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userMainSchema = new Schema({
  backgroundColor:{
    type: String,
  },
  backgroundPhoto:{
    type: String,
  },
  headerBottom:{
    type: String,
  },
  headercolor:{
    type: String,
  },
  headerContent:[{
    type: String,
  }], 
  infContent:[{
    type: String,
  }], 
  headerLogo:{
    type: String,
  },
  profile:{
    type:String
  },
  second_page:[{ type: Schema.Types.ObjectId, ref: 'UserSub' }]
});

const UserMain = mongoose.model('UserMain', userMainSchema);
module.exports = UserMain;