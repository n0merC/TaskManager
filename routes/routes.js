
(() => {
    const express = require("express");
    const router = express.Router();
    const userRoute = require("./user/routes");
    const taskRoute = require("./task/routes")
    router.use('/user',userRoute);
    router.use('/task',taskRoute);
    
    module.exports = router;

})()
