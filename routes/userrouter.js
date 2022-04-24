const router = require('express').Router();
let User = require('../models/usermodel');
 
router.route('/info').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
	const email = req.body.email;
	const password= req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({email:email },(err,user)=>{
  if(user)
    return res.json("User already existed");
  else{
    if(password.length<=8)
      return  res.json("Password length should be greater than 8");
    else{
      if(password === confirmPassword){
        const newUser = new User({email,password});

        newUser.save()
          .then(() => res.json(newUser._id))
          .catch(err => res.status(400).json('Error: ' + err));
      }
      else{
          return res.json("Please check conform password")
      }
    }
  }
})});
 
router.route('/checkuser').post((req, res) => {
  // const email1= req.body.email;
	// const password1= req.body.password;
  // User.findOne({email:email1  })
  //   .then(res.json("successfully login"))
  //   .catch(err => res.status(450).json('Error:333333' + err));
   
    
    try {
      
      const { uemail, upassword } = req.body;
      if (!uemail || !upassword)
          return res.json(  "Not all fields have been entered." );
      User.findOne({email:uemail },(err,user)=>{
        if(!user)
         return res.json('There is no email registerd with this email');
        else
        {
          // console.log("email there")
          User.findOne({ email:uemail,password: upassword },(err,user)=>{
            if(!user)
              return res.json('You have entered wrong password');
            else
              return res.json(user._id)
          });
        }
      });
      

          //return res.json("Not account with this email." );
      // const isMatch =  User.findOne({password: password });
      // console.log(isMatch,"444444444");
      // if (isMatch.password!==password) return res.json(  "Invalid credentials." );
      
      // else return res.json(  "valid credentials." );
      
  } catch (err) {
      res.status(500).json({ err });
  }
});
module.exports = router;
//export default  router;