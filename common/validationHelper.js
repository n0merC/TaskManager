
const insert = require("../routes/user/sql/insert");
const mysql = require('mysql2');
const mysqlHelper = require('./mysqlHelper');
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

    validationHelper.checkAccount = async function(req){
        
        let test = 0;
        const {username,password} = req.body;
        const result = await mysqlHelper.query(`SELECT * FROM login`);
        // console.log(result.length)
        for(let i = 0;i<result[0].length;i++){
            
            if((result[0][i].username==username)&&(result[0][i].password==password)){
                test = 1;
                break;
            }
        }
        return test;
    }
})(module.exports)