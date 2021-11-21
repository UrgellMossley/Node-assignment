const express = require(`express`);

const router = express.Router();

const userData = require(`./users`);



router.get(`/display`,(req,res,next)=>{
    const userList = userData.users
    res.render(`display`,{
        userList: userList,
        pageTitle: `display`,
        path: `/`,
        productCss: true
    });
});

module.exports = router;