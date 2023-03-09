const {mysqlHelper} = require("./../../../common");

(()=>{
    module.exports = async(req,res,next)=>{      
        let request = 'select task_name,task_description,due_date,status from tasks';
        const response = await mysqlHelper.query(request);
        for(let i = 0;i<response[0].length;i++){
            console.log((i+1)+".\nTask name: "+response[0][i].task_name+"\n   Description: "+response[0][i].task_description+
            "\n   Due Date: "+response[0][i].due_date+"\n   Status: "+response[0][i].status+"\n\n");
        }
    }
})()