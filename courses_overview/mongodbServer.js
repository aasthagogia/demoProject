const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to DB..'))
    .catch((err) => console.log('the connection couldnot be made.'));

const schema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', schema);

async function saveCourse(params) {
    const course = new Course({
        name: params.name,
        author: params.author,
        tags: params.tags,
        isPublished: params.isPublished
    });
    
    course.save()
        .then((result) => result)
        .catch((err) => console.log(err));
}

async function getCourseByID(id){
    return await Course.findById({_id: id})
    .select('name author isPublished tags price date id');
}

async function displayCourses(){
    const coursesFound= await Course
    .find({ isPublished: true })
    .select('name author isPublished tags price date id');
    return coursesFound;
}

module.exports.displayCourses = displayCourses;
module.exports.saveCourse = saveCourse;
module.exports.getCourseByID = getCourseByID;

