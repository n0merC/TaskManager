const { mysqlHelper } = require("./../../../common");

(() => {
    module.exports = async (req, res, next) => {
        const user = req.user;
        const pass = req.pass;
        

        let request = `select * from login`;
        const response = mysqlHelper.query(request);
        console.log(req.body);
    }
})()