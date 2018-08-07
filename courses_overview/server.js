const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let courses = [
    {id: 1, name: 'course1', details: 'the selected course is Course 1.'},
    {id: 2, name: 'course2', details: 'the selected course is Course 2.'},
    {id: 3, name: 'course3', details: 'the selected course is Course 3.'}
];

app.use(bodyParser.urlencoded({extended:true}));
// express doesn't give the
// response body in form of Json, so to do that we use body parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course =>  course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course not found.');
    res.send(course);
});

app.get('/api/courses', (req, res) => {
    // const course = courses.find(course =>  course.id === parseInt(req.params.id));
    // if(!course) res.status(404).send('Course not found.');
    res.send(courses);
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});
