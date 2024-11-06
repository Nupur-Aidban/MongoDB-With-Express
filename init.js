const mongoose = require('mongoose');
const Chat = require("./models/chat.js");



main()
.then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [{
    from:"neha",
    to:"priya",
    msg:"Send me your exam sheets",
    created_at:new Date()
  },{
    from:"nupur",
    to:"aryan",
    msg:"we will meet soon",
    created_at:new Date()
  },{
    from:"aryan",
    to:"nupur",
    msg:"yes nupur.",
    created_at:new Date()
  },{
    from:"appu",
    to:"mumma",
    msg:"give me food",
    created_at:new Date()
  },{
    from:"mumma",
    to:"appu",
    msg:"take it by yourself",
    created_at:new Date()
  }];

Chat.insertMany(allChats);

