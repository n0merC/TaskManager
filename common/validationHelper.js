
const insert = require("../routes/user/sql/insert");
const mysql = require('mysql2');
const mysqlHelper = require('./mysqlHelper');
const jwt = require('jsonwebtoken');
const hashHelper = require('./hashHelper');
((validationHelper) => {
    validationHelper.valid = async function (loginIn) {
        let x = true;
        const user = loginIn.username;
        const pass = loginIn.password;
        const passCheck = new RegExp(/^[a-zA-Z0-9]{6,20}$/);
        

        if (pass == null || user == null) {
            x = false;
        }

        if (passCheck.test(pass) == false) {
            x = false;
        }

        const result = await mysqlHelper.query('SELECT username from login where username = "'+user+'"');
        if(result[0].length!=0)
          x = false;
        if (x) {
            await insert.put(loginIn);   
            return "User added"; 
        } else {
            return "Username already exists";
        }
    }

    validationHelper.checkAccount = async function(req,res){
        let token = "";
        let msg = "Login unsuccessful";
        const {username,password} = req.body;
        const result = await mysqlHelper.query(`SELECT * FROM login`);
        // console.log(result.length)
        for(let i = 0;i<result[0].length;i++){
            
            if((result[0][i].username==username)&&(hashHelper.comparePassword(result[0][i].password,password))){
                token = jwt.sign({username},'the-super-strong-secret',{expiresIn: '1h'});
                msg = "Login successful";
                break;
            }
        }
        return res.status(200).send({msg,token});
    }
})(module.exports)