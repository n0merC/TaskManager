const { stat } = require("fs");
const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        const taskName = req.body.task_name;
        const taskDescription = req.body.task_description;
        const dueDate = req.body.due_date;
        const status = req.body.status;

        let request = `insert into tasks (task_name,task_description,due_date,status) values
            ("${taskName}","${taskDescription}","${dueDate}","${status}")`;
        
        const response = await mysqlHelper.query(request);

        res.status(200).send("Task Added");
    }
})()