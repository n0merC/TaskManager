
const insert = require("../routes/user/sql/insert");

((validationHelper) => {
    validationHelper.valid = async function (loginIn) {
        let x = true;
        const user = loginIn.username;
        const pass = loginIn.password;
        const passCheck = new RegExp(/^[a-zA-Z0-9]{6,20}$/);

    
        if (pass == null || user == null) {
            x = false;
        }

        if(passCheck.test(pass) == false){
            x = false;
        }
        if (x) {
            await insert.put(loginIn);
        }else{
            console.log("failed");
        }
    }
})(module.exports)