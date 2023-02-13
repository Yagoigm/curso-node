import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from "hbs";
import dotenv from "dotenv"


dotenv.config()
const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});



app.use(express.static( "public" ) );

app.get('/', (req, res) => {
  res.render("home", {
    nombre: "Johnny Checoto",
    titulo: "Curso de Node"
  })
});
app.get('/generic', (req, res) => {
  res.render("generic", {
    nombre: "Johnny Checoto",
    titulo: "Curso de Node"
  })
});
app.get('/elements', (req, res) => {
  res.render("elements", {
    nombre: "Johnny Checoto",
    titulo: "Curso de Node"
  })
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
})


app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})