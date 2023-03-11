const { insert } = require("../sql");
const { validationHelper } = require("./../../../common");
(() => {
    module.exports = async (req, res, next) => {
        let result = await validationHelper.valid(req.body);
        res.status(200).send(result);
    }
})()