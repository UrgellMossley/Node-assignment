const express = require(`express`);

const router = express.Router();

const userList = [];

router.get(`/add-users`,(req,res,next)=>{
    res.render(`users`,{
        users: userList,
        pageTitle: `users`,
        path: `/users`,
        formsCss: true  
    });
});

router.post(`/`,(req,res,next)=>{
    userList.push({name: req.body.userInput})
    console.log(userList)
    res.redirect(`/display`)
});

exports.routes = router;
exports.users = userList;