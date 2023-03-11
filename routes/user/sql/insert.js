const { mysqlHelper, hashHelper } = require("./../../../common");
((insert) => {
    insert.put = async (req, res, next) => {
        const user = req.username;
        const pass = req.password;
        const salt = await hashHelper.createSalt();
        let hashed = await hashHelper.computeHash(pass.toString(), salt);
        let request = `insert into login values('${user}','${hashed}')`;
        const response = mysqlHelper.query(request);
        
    }
})(module.exports)