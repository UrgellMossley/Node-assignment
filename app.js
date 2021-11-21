const express = require(`express`);

const path = require(`path`);

const app = express();

app.set(`view engine`, `ejs`);
app.set(`views`,`views`);

const userRoutes = require(`./routes/users`)
const displayRoutes = require(`./routes/display`)
const {extname} = require("path")

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static(path.join(__dirname,`public`)))

app.use(`/user`,userRoutes.routes)
app.use(displayRoutes)


app.use((req,res,next)=>{
    res.status(404).render(`404`,{pageTitle: `error 404 Not Found`, path: `error 404` })
});

app.listen(3000);

