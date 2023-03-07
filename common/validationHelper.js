
const insert = require("../routes/user/sql/insert");
const select = require("./../routes/user/sql/select");
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

        result = await select.isAvailable(loginIn);
        console.log(result)

        if (x) {
            // await insert.put(loginIn);
            console.log("success")
        } else {
            console.log("failed");
        }


    }
})(module.exports)