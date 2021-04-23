const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET] /

    storeCourses(req, res, next) {
        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        courseQuery
            .then((courses) =>
                res.render('me/courses_store', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch((error) => next(error));
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/courses_trash', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch((error) => next(error));
    }
}

module.exports = new MeController();
