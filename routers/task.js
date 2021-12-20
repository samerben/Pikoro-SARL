const router = require('express').Router();
const { date } = require('joi');
const _ = require('lodash')
const {Task, task_validation, task_validation_update} = require('../models/task.models');


// Display All Task
router.get('', async (req,res)=>{
    res.send(await Task.find());
});


// Adding a Task
router.post('', async (req,res) => {
  
    let task = new Task(_.pick(req.body,['Title','Description','Adresse','date','Image']));

    try {
        task = await task.save();
    } catch (error) {
        return res.status(400).send(error.message)
    }
    
    res.status(201).send(task);
});

// Modify a Task
router.put('/:id', async (req,res)=>{
    
    let task = await Task.findById(req.params.id);
    if(!task)
        return res.status(404).send(`Task with this id=${id} not found`)
        task = _.merge(task,req.body);
        task = await task.save();
    res.status(200).send("updated successfully...");
});


//Deleting a Task with ID
router.delete('/:id', async (req,res)=>{
    let task = await Task.findByIdAndDelete(req.params.id);
    if(!task){return res.status(404).send(`Task with this id=${id} not found`)}
    res.status(200).send("has been deleted successfully...")
})



module.exports = router