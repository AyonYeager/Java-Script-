// import {a,b,c} from "./export.js"
// console.log(a,b,c)

// import obj from "./export.js"
// console.log(obj)

// const a = require("./export.js")
// console.log(a)


// const fs = require("fs")

// fs.writeFile("yo2.txt","should have listen to them" ,()=>{
//     console.log("im good")
//     fs.readFile("yo2.txt" , (error ,data)=> {
//         console.log("once more")
//     })
// })

// fs.appendFile("yo2.txt" , "  , I'm back again" , (e,d)=>{
//     console.log(d)
// })

// import fs from "fs/promises"

// let a = await fs.readFile("yo2.txt")

// let b = await fs.appendFile("yo2.txt", "\n\n\n\nthis is amazing promise")
// console.log(a.toString(), b)

// import path from "path"

// let myPath = "C:\\Users\\HP\\OneDrive\\New folder (2)\\yo2.txt"
// console.log(path.extname(myPath))
// console.log(path.dirname(myPath))
// console.log(path.basename(myPath))
// console.log(path.join("/c","\\programs\\yo2.txt"))




// const express = require("express")
// const app = express()
// const port = 3001 // Running on port 3001 now

// // FIXED: Changed (res, req) to (req, res)
// app.get("/", (req, res) => {
//     res.send("hello world")
// })

// // CORRECT: This one was already right
// app.get("/blog", (req, res) => {
//     res.send("hello")
// })

// // FIXED: Changed (res, req) to (req, res)
// app.get("/blog/:slug", (req, res) => {
//     res.send(`hello ${req.params.slug}`)
// })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })



// const express = require("express")
// const app = express() 
// const port = 7839
// const blog = require('./routes/blog')

// app.use(express.static("public"))
// app.use('/blog', blog)

// app.get("/", (req, res) => {
//     res.send("hello this get")
//     console.log("get req")
// })

// app.post("/", (req, res) => {
//     res.send("hello this post")
//     console.log("post req")
// })
// app.get("/index", (req, res) => {
//     console.log("Hey its index")
//     res.sendFile("temp/index.html" , {root:__dirname})
// })

// app.get("/api", (req, res) => {
//     res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
// })


// app.put("/", (req, res) => {
//     res.send("hello this put") 
//     console.log("put req")
// })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })




// const express = require("express")
// const app = express() 
// const port = 7839
// const blog = require("./routes/blog")
// const fs = require("fs")


// app.use(express.static("public"))
// app.use('/blog', blog)

// app.use((req,res,next) => {
//     console.log(req.header)
//     req.hrr = "yeap"
//     fs.appendFileSync("file.txt",`${Date.now()} is a ${req.method}\n`);
//     console.log(`${Date.now()} is a ${req.method}\n`);
//     next();
// })
// app.use((req, res, next) => {
//     console.log('m1')
//     next()
// })
// app.use((req, res, next) => {
//     console.log('m2')
//     next()
// })

// app.get('/about', (req, res) => {
//     res.send('Hello about!' )
// })

// app.get("/", (req, res) => {
//     res.send("hello this is get module")
//     console.log("get req")
// })

// app.get("/blog", (req, res) => {
//     res.send("hello this is route blog")
//     console.log("blog")
// })





// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })


// const express = require('express')
// const path = require("path")
// const app = express()
// const port = 9000

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// app.get('/', (req, res) => {
//     let siteName = "Adidas"
//     let searchText = "Search Now"
//     let arr = ["pure", 54, 65]
//     res.render("index", { siteName: siteName, searchText: searchText, arr })
// })

// app.get('/blog/:slug', (req, res) => {
//     let blogTitle = "Adidas why and when?"
//     let blogContent = "Its a very good brand"
//     res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })





// const express = require('express')
// const app = express()
// const port = 9000
// const mongoose = require('mongoose');



// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
//   .then(() => console.log('Successfully connected to MongoDB!'))
//   .catch((err) => console.error('MongoDB connection error:', err))
// app.get("/",(req,res)=>{
//     res.sendFile("mongodb server running on compass")
// })


// app.listen(port,()=>{
//     console.log(`server running on port ${port}`);
// })


// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://nmd327828_db_user:ATomicgasthussi091cluster0.c9et3zu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
// )
// .then(() => {
//     console.log("Connected to MongoDB!");
// })
// .catch((err) => {
//     console.log(err);
// });


// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const User = mongoose.model("User", userSchema);

// async function createUser() {
//     const user = new User({
//         name: "Ay On",
//         age: 20
//     });

//     await user.save();
//     console.log("User saved!");
// }

// createUser();



