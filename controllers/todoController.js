const { user, todo } = require('../models');

module.exports = {

// to make new task

async createTask(req,res) {
    try {
        const foreignKey = req.body.foreignKey
        const id_todo = req.body.id_todo
        const title = req.body.title
        const userExist = await user.findOne({
            where: {
                id: foreignKey
            }
        });
        if(userExist === false){
            return res.status(400).json({
                message: "log in first"
            })
        }
        else{
            const taskCreate = todo.create({
                foreignKey: foreignKey,
                id_todo:  id_todo,
                title: title
            })
            return res.status(200).json({
                message:  "new task has been created",
                data: {
                    foreignKey: foreignKey,
                    id_todo:  id_todo,
                    title: title
                }
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "ERROR",
            error: error,
        });

    }
},

// to get task

async getTask(req,res) {
    try {
        const foreignKey = req.body.foreignKey
        const userExist = await user.findOne({
            where: {
                id: foreignKey
            }
        });
        if(userExist === false){
            return res.status(400).json({
                message: "error, need to log in first"
            })
        }
        else{
            const allTask = todo.findAll({
                where: {
                    foreignKey: id
                }
            })
            allTask.then(function(result){
                console.log(result)
                return res.status(200).json({
                    message:  "this is all the tasks you need to do",
                    data: {
                        taskData: result
                    }
                })
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "ERROR",
            error: error,
    });
 }
},

// to delete task

async deleteTask(req,res) {
    try {
        const id_todo = req.params.id_todo
        const taskExist = await todo.findOne({
            where: {
                id_todo: id_todo
            }
        });
        if(taskExist === false){
            return res.status(400).json({
                message: "Didn't found the task"
            })
        }
        else{
            const destroyTask = todo.destroy({
                where: {
                    id_todo: id_todo
                }
            })
            return res.status(200).json({
                message: "Task already deleted"
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "ERROR",
            error: error,
        });
    }
}
}
