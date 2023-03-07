const { mysqlHelper } = require("./../../../common");

((insert) => {
    insert.put = async (req, res, next) => {
        const user = req.username;
        const pass = req.password;
        
        let request = `insert into login values('${user}','${pass}')`;
        const response = mysqlHelper.query(request);
        
    }
})(module.exports)