(() => {
    module.exports = {
        taskView: require('./view'),
        taskAdd: require('./add'),
        taskUpdate: require('./update'),
        taskViewDone: require('./viewDone'),
        taskViewUndone: require('./viewUndone'),
        taskRecord: require('./record')
    };
})();