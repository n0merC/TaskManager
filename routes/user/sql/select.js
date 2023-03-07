const { mysqlHelper } = require("./../../../common");

((select) => {
    select.isAvailable = async (req, res, next) => {
        const user = req.username;
        const pass = req.password;
        
        // console.log(user);
        
        const mysql = require('mysql2');

        // create the connection to database
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'taskmanager'
        });

        // simple query
        connection.query(
            'SELECT * FROM `login` where `username` = "'+user+'"' ,
            function (err, results, fields) {
                if(results == null){
                    return "true"
                } else
                    return "false"
            
            }
        );
        
    }
})(module.exports)