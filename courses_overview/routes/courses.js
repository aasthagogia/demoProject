const express = require('express');
const routes = express.Router();
const mongodb = require('../mongodbServer');

routes.get('/:id', (req, res) => {
    let course = null
    mongodb.getCourseByID(req.params.id).then((course) => course = course);
    if(!course) res.status(404).send('Course not found.');
    res.send(course);
});

routes.get('/', (req, res) => {
    mongodb.displayCourses().then((courses) => res.send(courses));
    
});

routes.post('/', (req, res) => {
    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        res.status(400).send(result.error);
    }
    let course = {
        name: req.body.name,
        author : req.body.author,
        isPublished: req.body.isPublished,
        tags: req.body.tags,
        price: req.body.price
    };
    course = mongodb.saveCourse(course);
    res.send(course);
});

module.exports = routes;