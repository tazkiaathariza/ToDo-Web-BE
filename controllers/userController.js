const { user } = require('../models');

module.exports = {

async userLogin(req,res) {
    try {
        const id_user = req.body.id_user
        const availability = await user.findOne({
            where: {
                id_user: id_user
            }
        });
        if(/\D/.test(id_user)){
            return res.status(400).json({
                message: "it has to be number only!"
            })
        }
        if(id_user.length != 4){
            return res.status(400).json({
                message: "it has to be 4 character"
            })
        }
        if(availability === true){
            return res.status(400).json({
                message:  "try another name" 
            })
        } 
        else{
            const newUser = user.create({
                id_user: id_user,
            })
            return res.status(200).json({
                    message:  "login successful and user created",
                    data: {
                    id_user: id_user
                }
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "ERROR",
            errors: error
        });
    }
}

}