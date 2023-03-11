const validationHelper = require('./../../../common/validationHelper');
(() => {
    module.exports = async (req, res, next) => {
        
        let test = await validationHelper.checkAccount(req,res);
        
    }
})()