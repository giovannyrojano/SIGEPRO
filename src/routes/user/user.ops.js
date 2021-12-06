const User = require("../../models/user.model")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
    register(name,lastName,email,password,role){
        return new Promise(async (resolve,reject)=>{
            const newUser = new User({ name,lastName, email, password , role });
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
    },


    login(email,password){
      return new Promise(async (resolve,reject)=>{
        //verificar que el email este registrado en la base de datos
        const verifyMail = await User.findOne({ email });
        if (verifyMail) {
          //desencriptar la contraseña almacenada en la base de datos
          decryptPassword = CryptoJS.AES.decrypt(verifyMail.password,"A&G");
          //parsear a string la contraseña desencriptada
          utf8 = decryptPassword.toString(CryptoJS.enc.Utf8);
          //comparar la contraseña de la base de datos con la contraseña ingresada
          if(utf8 != password){
            reject("email y/o contraseña incorrectos");  
          }else{
            //generacion del jwt de la sesion del usuario
            const token = jwt.sign(
              {id:verifyMail._id,nombre:verifyMail.name,apellido:verifyMail.lastName,rol:verifyMail.role},
              process.env.SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE})
            resolve(token)
          }
          //reject si el email no esta registrado en la base de datos
          } else {
            reject("email y/o contraseña incorrectos");
          }
      })
    }
}