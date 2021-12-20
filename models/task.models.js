const mongoose = require('mongoose');
const Joi = require('joi');

// This is our MODEL: TASK
const taskSchema = new mongoose.Schema({
    Title : {type : String},
    Description : {type :String},
    Adresse : {type:String},
    date : {type : String},
    Image: {type : String}
});

// Verification Function when trying to type the attributes of TASK
let task_validation_schema = Joi.object({
    Title : Joi.string().min(4).max(12).required(),
    Description : Joi.string().min(4).max(50).required(),
    Adresse : Joi.string().max(20).required(),
    Image : Joi.string(),
    date: Joi.string
})
function task_validation(body) {
    return task_validation_schema.validate(body);
}


// Verification Function when trying to update the attributes of TASK

let task_validation_update_schema = Joi.object({
    Title : Joi.string().min(4).max(12),
    Description : Joi.string().min(4).max(50),
    Adresse : Joi.string().max(20),
    Image : Joi.string(),
    date: Joi.string()
})
function task_validation_update(body) {
    return task_validation_update_schema.validate(body);
}
const Task = mongoose.model('Task', taskSchema);

module.exports.Task = Task;
module.exports.task_validation = task_validation;
module.exports.task_validation_update = task_validation_update;