const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        let taskRequest = 'select * from tasks';
        let taskDoneRequest = 'select * from tasks where status = "done"';
        const taskResponse = await mysqlHelper.query(taskRequest);
        const taskDoneResponse = await mysqlHelper.query(taskDoneRequest);

        let totalTasks = taskResponse[0].length;
        let doneTasks = taskDoneResponse[0].length;

        let userRecord = doneTasks/totalTasks * 100;

        res.status(200).send("Completion Record: "+userRecord+"%")
        // res.status(200).send(response[0 ]);
    }
})()