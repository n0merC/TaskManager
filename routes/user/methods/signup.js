const { insert } = require("../sql");
const { validationHelper } = require("./../../../common");
(() => {
    // const helper = require("./../../../common/index")
    module.exports = async (req, res, next) => {
        validationHelper.valid(req.body);
        // console.log(req.body);
    }
})(module.exports)