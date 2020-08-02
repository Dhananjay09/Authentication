const User = require("../models/auth");
const _ = require("lodash");
const Post = require("../models/post_auth");
const Calender = require("../models/calender");
const { default: Axios } = require("axios");
const { resolveHostname } = require("nodemailer/lib/shared");
exports.listUsers = (__, res) => {
  User.find({}, { hashed_password: 0, salt: 0, resetPasswordLink: 0 }).exec(
    (err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong. Please try again.",
        });
      }
      return res.json({
        result: users,
      });
    }
  );
};
exports.listPosts =(req, res)=>{
  Post.find({}).exec((err, posts)=>{
    if(err){
      return res.status(400).json({
        error : "Something Went Wrong"
      });
    }
    return res.json({
      result: posts 
    });
  });
}
exports.likePost = (req, res) => {
  console.log("Reached the server");
  const { id } = req.body;
  console.log(id);
   Post.findOneAndUpdate({ _id : id }, { $inc : { "likes" : 1}}).exec((err, user)=>{
     if(err){
       return res.status(400).json({
         error : err
       })
     }
    console.log("Updated Succesfully");
})
}
exports.addPost = (req, res) => {
  const {name, email, address, pin , product}= req.body;
  const newPost=new Post({name, email, address, pin , product });
  newPost.save((err,userData)=>{
    if(err){
      console.log("Error Occured");
    }
    else{
      console.log("Succesfully created");
    }
  })
}
exports.addcalenderEvent = (req, res) => {
  const { date, title, detail }= req.body;
  const newCalenderEvent= new Calender({date, title, detail});
  console.log(newCalenderEvent);
  newCalenderEvent.save((err, message)=>{
    if(err){
      res.status(400).json({
        "error": "Error Occured"
      })
    }
    return res.json({
      "message": "Succesfully Created"
    })
  })
}
exports.getcalenderEvents=(req, res)=>{
  Calender.find({}).exec( (err,user) =>{
    if(err){
      return res.status(4).json({
        "error": "Error Occured"
      })
    }
    return res.json({
      "details": user
    })
  })
}
exports.updateevent=(req, res)=>{
  const {id, new_date}=req.body;
  console.log("Id recived IS "+ id);
  Calender.findByIdAndUpdate({_id: id}, { date : new_date}).exec((err, user)=>{
    if(err){
      return res.status(400).json({
        "error": "Error Occured"
      }
      )
    }
    return res.json({
      "detail": user
    })
  })
}