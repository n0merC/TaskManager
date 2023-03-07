// const signup = require("../routes/user/methods/signup");
const insert = require("../routes/user/sql/insert");

((validationHelper) => {
    validationHelper.valid = async function (loginIn) {
        let x = true;
        const user = loginIn.username;
        const pass = loginIn.password;
        

        if (pass == null || user == null) {
            x = false;
        }

        if (x) {
            await insert.put(loginIn);
        }else{
            console.log("failed");
        }
    }
})(module.exports)