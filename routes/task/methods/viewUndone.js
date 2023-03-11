const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        let request = 'select task_name,task_description,due_date,status from tasks where status = "undone"';
        const response = await mysqlHelper.query(request);
        res.status(200).send(response[0]);
        
    }
})()