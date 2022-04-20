const router = require('express').Router();
 
let UserMain = require('../models/usermainmodel');
let User=require('../models/usermodel');
let UserSub = require('../models/usersubmodel');
var multer=require('multer');
var path=require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, 'C:/Users/riktam/Desktop/eventmngmnt/public/images')
      // cb(null,'../backend/client/public/images')
      cb(null,path.join(__dirname,'../client/public/images'))
      // app.use('/image', express.static(path.join(__dirname, '/image')));
       
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+'_'+file.originalname)
    }
  })
  
  var upload = multer({ storage:storage});
   
  //   fileFilter :function(req,file,callback){
  //     if(file.mimetype ==="image/png" || file.mimetype==="image/jpg"){
  //       callback(null,true)
  //     }
  //     else{
  //       console.log("only jpg and png is allowed")
  //       callback(null,false)
  //     }
  //   } ,
  //   limits:1024*1024*4
  //})
  var uploadMultiple = upload.fields([{ name: 'backgroundPhoto'}, { name: 'headerLogo' }, { name: 'profilepic', maxCount: 5 }])
router.route('/info/uid/:uid').get((req, res) => {
  var uid = req.params.uid;
  User.findById(uid).populate("first_page")
      .then(users => res.json(users.first_page))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/info1/fid/:fid').get((req, res) => {
  var uid = req.params.fid;
  UserMain.findById(uid) 
      .then(users => res.json(users ))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/del/uid/:uid/fid/:fid').delete((req, res) => {
  var uid = req.params.uid;
  var fid = req.params.fid;
  UserMain.findById(fid) 
    .then(users => { console.log(users.second_page)
       
        UserSub.deleteMany( { _id: { $in: users.second_page }  })
        .then(()=>{
           
            UserMain.findByIdAndDelete(fid)
            .then(()=>{
              User.findById(uid)
              .then((user) => {
                if(!user) {
                    res.status(404).send();
                }
                const index = user.first_page.indexOf(fid);
                if (index > -1) {
                  user.first_page.splice(index, 1); 
                }
                
                user.save()
                  .then(() => res.json("deleted"))
                  .catch(err => res.status(400).json('Error1: ' + err));
                  // console.log(usermain)
                  })
                  .catch(err => res.status(400).json('Error2: ' + err));
          })
          .catch(err => res.status(400).json('Error3: ' + err));
      })
      .catch(err => res.status(400).json('Error4: ' + err));
  })
  .catch(err => res.status(400).json('Error5: ' + err));
   
  
});
router.route('/fid/:fid/uid/:uid').get((req, res) => {
  var fid = req.params.fid;
  var uid = req.params.uid;
  // console.log(fid,uid);
  UserMain.findById(fid) 
      .then(users =>
         {
            var use=users
            var arr=[]
             
            var user= JSON.parse(JSON.stringify(use));
            arr=users.second_page
            delete  user["_id"];
            user.second_page=[];
            // console.log(user)
             
            const newUserMain = new UserMain(user)
            newUserMain.save()
            .then(()=>{
            // .then(() => res.json('user main added'))
            // res.json(user)
            // console.log(newUserMain._id)
              var i;
              for( i=0;i<arr.length;i++)
              {
                UserSub.findById(arr[i])
                .then(subs=>{
                    var sub=subs
                    var subuser=JSON.parse(JSON.stringify(sub));
                    delete  subuser["_id"];
                    const newUserSub = new UserSub(subuser);
                    newUserSub.save()
                    UserMain.findById(newUserMain._id) 
                    .then((usermains)=>{
                      
                      
                      if(newUserSub._id)
                      {
                        usermains.second_page.push(newUserSub._id);
                        usermains.save()
                    }
                    // console.log(usermains.second_page)
                     
                  })
                })
              }
              User.findById(uid)
              .then((user) => {
                if(!user) {
                    res.status(404).send();
                }
                user.first_page.push( newUserMain._id);
                user.save()
                .then(() => res.json("added"))
                
              })
            })
         })
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add/uid/:uid').post(uploadMultiple,(req, res) => {
   console.log("entered")
     var s=""
     if(req.files['profilepic']){
       for(var i=0;i<req.files['profilepic'].length;i++){ 
         s=s+req.files['profilepic'][i].filename+[',']
       
     }
     s=s.slice(0,-1);
    }
     
	  const  backgroundColor = req.body.backgroundColor;
    const  backgroundPhoto = (req.files)?req.files['backgroundPhoto'][0].filename:null;
    //const  backgroundPhoto =  null;
    const headerBottom= req.body.headerBottom;
    const headercolor= req.body.headercolor;
    const  hC0 = req.body.hC0;
    const  hC1 = req.body.hC1;
    const  hC2 = req.body.hC2;
    const  hC3 = req.body.hC3;
    const  iF0 = req.body.iF0;
    const  iF1 = req.body.iF1;
    const  iF2 = req.body.iF2;
    const  iF3 = req.body.iF3;
    const headerLogo = (req.files)?req.files['headerLogo'][0].filename:null;
	  const profile = (req.files)? s:null;
    // const headerLogo =  null;
	  // const profile =  null;
    const newUserMain = new UserMain({backgroundColor,backgroundPhoto,headerBottom,headercolor,headerContent:[hC0,hC1,hC2,hC3],infContent:[iF0,iF1,iF2,iF3],headerLogo, profile});
     
    newUserMain.save()
      // .then(() => res.json('user main added'))
      .catch(err => res.status(400).json('Error: ' + err));
      var uid = req.params.uid;
    User.findById(uid)
      .then((user) => {
        if(!user) {
            res.status(404).send();
        }
        user.first_page.push( newUserMain._id);
        user.save()
        .then(() => res.json(newUserMain._id))
         console.log("saved")
      })
      .catch((e) => {
        res.send(e).status(404);
      })
});
 
router.route('/find/fid/:fid').post(uploadMultiple,(req, res) => {
  var s=""
  if(req.files['profilepic']){
    for(var i=0;i<req.files['profilepic'].length;i++){ 
      s=s+req.files['profilepic'][i].filename+[',']
    
      }
      s=s.slice(0,-1);
    } 
    const  backgroundColor = req.body.backgroundColor;
    const  backgroundPhoto = (req.files)?req.files['backgroundPhoto'][0].filename:null;
    //const  backgroundPhoto =  null;
    const headerBottom= req.body.headerBottom;
    const headercolor= req.body.headercolor;
    const  hC0 = req.body.hC0;
    const  hC1 = req.body.hC1;
    const  hC2 = req.body.hC2;
    const  hC3 = req.body.hC3;
    const  iF0 = req.body.iF0;
    const  iF1 = req.body.iF1;
    const  iF2 = req.body.iF2;
    const  iF3 = req.body.iF3;
    const headerLogo = (req.files)?req.files['headerLogo'][0].filename:null;
    const profile = (req.files)? s:null;
    var fid = req.params.fid;
    UserMain.findByIdAndUpdate(fid,{backgroundColor,backgroundPhoto,headerBottom,headercolor,headerContent:[hC0,hC1,hC2,hC3],infContent:[iF0,iF1,iF2,iF3],headerLogo, profile})
    .then(res.json("updated"))
      .catch(err => res.status(400).json('Error: ' + err));


});
module.exports = router;
//export default  router;