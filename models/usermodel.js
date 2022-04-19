const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type:String,
    required: true,
    unique: true,
    trim: true,
  },
  password:{
    type: String,
    required: true,
    minlength: 8
  },
  first_page:[{ type: Schema.Types.ObjectId, ref: 'UserMain' }]
   
},
{
  timestamps: true,
} );

const User = mongoose.model('User', userSchema);
module.exports = User;
//export default User;