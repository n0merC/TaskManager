(() => {
    const express = require("express");
    const router = express.Router();
    const taskController = require('./methods/index')
    
    router.post('/view',taskController.taskView);
    router.post('/add',taskController.taskAdd);
    router.post('/update',taskController.taskUpdate);
    module.exports = router;
})()