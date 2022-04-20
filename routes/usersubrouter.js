const router = require('express').Router();
let UserMain = require('../models/usermainmodel'); 
let UserSub = require('../models/usersubmodel');
var multer=require('multer');
// import "../client/public/images"
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, 'C:/Users/riktam/Desktop/eventmngmnt/public/images')
     
      cb(null,'../backend/client/public/images')
      // C:\Users\riktam\Desktop\eventmngmnt\backend\client\public\images
      
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'_'+file.originalname)
    }
  })
  
  var upload = multer({ storage:storage})
  
  router.route('/info/cid/:cid').get((req, res) => {
    var cid = req.params.cid;
    UserMain.findById(cid).populate("second_page")
        .then(users => res.json(users.second_page))
        .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/addmail').post((req, res) => {
    const id=req.body.id;
    const mail=req.body.mail;
    UserSub.findById(id)
      .then((event) => {
        if(!event) {
            res.status(404).send();
        }
        event.reginfo.push(mail);
        event.save()
        .then(() => res.json("registered"))
         
      })
      .catch((e) => {
        res.send(e).status(404);
      })
    
  });

  router.route('/fid/:fid/eve/:eve').delete((req, res) => {
    var id = req.params.eve;
    var fid = req.params.fid;
    UserSub.findByIdAndDelete(id)
    .then(()=>{
      UserMain.findById(fid)
      .then((usermain) => {
        if(!usermain) {
            res.status(404).send();
        }
        const index = usermain.second_page.indexOf(id);
        if (index > -1) {
          usermain.second_page.splice(index, 1); 
        }
         
        usermain.save()
          .then(() => res.json("deleted"))
          // console.log(usermain)
          })
    })
    .catch(err => res.status(400).json('Error: ' + err));
     
    
  });

var uploadMultiple = upload.fields([{ name: 'backgroundPhoto'}, { name: 'profile' } ])
router.route('/add/:fid').post(uploadMultiple,(req, res) => {
   console.log("add")
	const  backgroundColor = req.body.backgroundColor;
    const  backgroundPhoto = (req.files)?req.files['backgroundPhoto'][0].filename:null;
    const  inf0 = req.body.inf0;
    const  inf1 = req.body.inf1;
    const  inf2 = req.body.inf2;
    const  inf3 = req.body.inf3;
    const  rl0 = req.body.rl0;
    const  rl1 = req.body.rl1;
    const  rl2 = req.body.rl2;
    const  rl3 = req.body.rl3;
    const  rl4 = req.body.rl4;
    const  einf0 = req.body.einf0;
    const  einf1 = req.body.einf1;
    const  einf2 = req.body.einf2;
    const  einf3 = req.body.einf3;
    const reginfo = req.body.reginfo;
	  const profile = (req.files)?req.files['profile'][0].filename:null;
     
    
    const newUserSub = new UserSub({backgroundColor,backgroundPhoto,information:[inf0,inf1,inf2,inf3],reglink:[rl0,rl1,rl2,rl3,rl4],eveinformation:[einf0,einf1,einf2,einf3] ,reginfo,profile});
    // console.log(newUserSub);
    newUserSub.save()
      .catch(err => res.status(400).json('Error: ' + err));
      var fid = req.params.fid;
      UserMain.findById(fid)
      .then((usermain) => {
        if(!usermain) {
            res.status(404).send();
        }
        usermain.second_page.push(newUserSub._id);
        usermain.save()
          .then(() => res.json(newUserSub ))
          // console.log(usermain)
          })
        .catch((e) => {
        res.send(e).status(404);
      })
  
});
router.route('/find/fid/:fid').post(uploadMultiple,(req, res) => {
  const  backgroundColor = req.body.backgroundColor;
    const  backgroundPhoto = (req.files)?req.files['backgroundPhoto'][0].filename:null;
    const  inf0 = req.body.inf0;
    const  inf1 = req.body.inf1;
    const  inf2 = req.body.inf2;
    const  inf3 = req.body.inf3;
    const  rl0 = req.body.rl0;
    const  rl1 = req.body.rl1;
    const  rl2 = req.body.rl2;
    const  rl3 = req.body.rl3;
    const  rl4 = req.body.rl4;
    const  einf0 = req.body.einf0;
    const  einf1 = req.body.einf1;
    const  einf2 = req.body.einf2;
    const  einf3 = req.body.einf3;
    // const reginfo = req.body.reginfo;
	  const profile = (req.files)?req.files['profile'][0].filename:null;
    var fid = req.params.fid;
    UserSub.findByIdAndUpdate(fid,{backgroundColor,backgroundPhoto,information:[inf0,inf1,inf2,inf3],reglink:[rl0,rl1,rl2,rl3,rl4],eveinformation:[einf0,einf1,einf2,einf3] ,profile})
    .then(res.json("updated"))
      .catch(err => res.status(400).json('Error: ' + err));


});

router.route('/info1/fid/:fid').get((req, res) => {
  var uid = req.params.fid;
  UserSub.findById(uid) 
      .then(users => res.json(users ))
      .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
//export default  router;