const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get("/", function (req,res) {
    res.render("contacto");
});

router.post("/",async function (req, res) {
    const { name, email, message } = req.body;
    //res.redirect("Gracias");
  
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "leandrojuan88@gmail.com",
        pass: "wbww opmo lkgf fams",
      },
    });
  
    const mailOptions = {
      from: "leandrojuan88@gmail.com",
      to: email,
      subject: name,
      text: `Nombre y Apellido: ${name}. <br>
      Mensaje: ${message}`,
      html: `Nombre y Apellido: ${name}. <br>
      Mensaje: ${message}`,
    };
  
    
      try {
        const sendMail = await transport.sendMail(mailOptions)
        let statusMessage = ""
        if(sendMail.rejected.lenght) {
          statusMessage = " * -  No pudimos enviar el Email. Intente mas tarde  - * "
        } else {
          statusMessage = " * -  Gracias. En breve te lo comunicaremos  - * "
        }
        res.render("contacto", {statusMessage})
      } catch(error) {
        res.render("contacto", {statusMessage: "Servidor fuera de servicio"})
      }
      
    
  });

module.exports = router;