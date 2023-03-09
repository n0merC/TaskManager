const validationHelper = require('./../../../common/validationHelper');
(() => {
    module.exports = async (req, res, next) => {
        
        let test = await validationHelper.checkAccount(req);
        if(test==0){
            res.status(200).send("login unsuccessful")
        }else{
            res.status(200).send("Login successful")
        }
    }
})()