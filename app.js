const express = require("express");
const app = express();
const indexRouter = require("./routes/index.js");
const cabanasRouter = require("./routes/cabanas");
const fotosRouter = require("./routes/fotos.js");
const ubicacionRouter = require("./routes/ubicacion.js");
const contactoRouter = require("./routes/contacto.js");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/cabanas", cabanasRouter);
app.use("/fotos", fotosRouter);
app.use("/ubicacion", ubicacionRouter);
app.use("/contacto", contactoRouter);

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`)
});