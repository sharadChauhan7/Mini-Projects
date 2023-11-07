const express=require("express");
const app=express();
const path=require("path");
const methodOverride = require('method-override');
const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

const { v4: uuidv4 } = require('uuid');

// Temporary DataBase 

let posts=[
    {   id:"1a",
        user:"sharad",
        tag:"Health",
        content :"I Workout 5 times a week",
        created:new Date()
    },
    {   id:uuidv4(),
        user:"rahul",
        tag:"Tech",
        content :"I Want to be a Web Dev",
        created:new Date()
    },
    {   id:uuidv4(),
        user:"prakhar",
        tag:"Tech",
        content :"I like to do Competive Coding",
        created:new Date()
    }
]

app.listen(port,()=>{
    console.log(`port is listening to ${port}`);
});
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});
app.post("/posts",(req,res)=>{
    req.body.id=uuidv4();
    req.body.created=new Date();
    posts.unshift(req.body);
    res.redirect("posts");
});
app.get("/posts/:id",(req,res)=>{
    let post=posts.find((p)=>
    req.params.id===p.id
    );
    res.render("show.ejs",{post});
})
app.get("/posts/:id/edit",(req,res)=>{
    // res.send("Edit response is working");
    let post=posts.find((p)=>
        req.params.id===p.id
    );
    console.log(post);
    res.render("edit.ejs",{post});
    // res.render("edit.ejs");
});
app.patch("/posts/:id",(req,res)=>{
    let post=posts.find((p)=>
        req.params.id===p.id
    );
    post.content=req.body.content;
    res.redirect("/posts");
})