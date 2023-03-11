(() => {
    const auth = require('../../middleware/authentication');
    const express = require("express");
    const router = express.Router();
    const taskController = require('./methods/index')
    
    router.post('/record',auth,taskController.taskRecord);
    router.post('/viewUndone',auth,taskController.taskViewUndone);
    router.post('/viewDone',auth,taskController.taskViewDone);
    router.post('/view',auth,taskController.taskView);
    router.post('/add',auth,taskController.taskAdd);
    router.post('/update',auth,taskController.taskUpdate);
    module.exports = router;
})()