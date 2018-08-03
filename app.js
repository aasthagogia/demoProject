const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course =>  course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course not found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        res.status(400).send(result.error);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});
