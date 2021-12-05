const User = require("../../models/user.model")
const CryptoJS = require("crypto-js");

module.exports = {
    register(name,lastName,email,password){
        return new Promise(async (resolve,reject)=>{
            const newUser = new User({ name,lastName, email, password });
            //verificar que no exista el correo
            const verifyMail = await User.findOne({ email });
            if (verifyMail) {
                reject("este correo ya esta registrado");
              } else {
                //encriptar la contraseña
                let passHash = CryptoJS.AES.encrypt(password, "A&G").toString();
                newUser.password = passHash
                //guardar en bd
                await newUser.save();
                resolve("usuario registrado");
              }
        
        })
    }
}