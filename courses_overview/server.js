// const startupDebugger = require('debug')('app:startup');
// const config= require('config');
// const morgan = require('morgan');
// const pug = require('pug');
// app.set('view engine', 'pug');
// app.set('views', './views');

const Joi = require('joi');
const express = require('express');
const app = express();
const course = require('./routes/courses');
const root = require('./routes/root');

app.use(express.json());
app.use('/api/courses', course);
app.use('/', root);

// if(app.get('env') === 'development'){
//     app.use(morgan('tiny'));
//     startupDebugger('development mode on.')
// }
// console.log('calling get user');
// async function callingAsync(){
//     const user = await getUser(1);
//     console.log(user);
//     console.log('calling get repos');
//     const repositories = await getRepositories(12);
//     console.log(repositories);
// }

// callingAsync();

// function getUser(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('fetching the data from databse');
//             resolve({id: id, name: 'aastha'});
//         }, 2000);
//     })
   
// }

// function getRepositories(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(['repo1', 'repo2', 'repo3']);
//         }, 2000);
//     })
    
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});
