const { stat } = require("fs");
const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{    
        const taskName = req.body.task_name;
        
        // console.log(taskId==null)
        let updateRequest = `update tasks set status = "done" where task_name = "${taskName}"`;
        const response = await mysqlHelper.query(updateRequest);

        S

        res.status(200).send("Updated");
    }
})()