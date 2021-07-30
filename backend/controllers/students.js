const got = require("got");
const Student = require("../models/Student");


/**
 * @description Get all students
 * @method GET
 * @access private
 * @param {*} req request
 * @param {*} res response
 * @param {*} next error
 */
exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).json({
      length: students.length,
      students,
    });
  } catch (error) {
    console.error(error);
  }
};

// Method   GET
// Desc     Get a single student
exports.getStudent = async (req, res, next) => {};

// Method   GET/POST
// Desc     Get all students, post them in db
exports.createStudents = async (req, res, next) => {
  try {
    let users;

    // Fetch students from API
    const students = await got.get(studentsurl, {responseType: "json",});
    // const students = await Student.get

    const eachUser = {
      studentRegNumber: "",
      firstName: "",
      middleName: "",
      lastName: "",
      course: "",
    };

    users = JSON.parse(students.body);
    // console.log(users.length);
    const student = [];

    // Sync students table
    await Student.sync();


    users.forEach(async (user) => {
      eachUser.studentRegNumber = user.studentRegNumber;
      eachUser.firstName = user.firstName;
      eachUser.middleName = user.middleName;
      eachUser.lastName = user.lastName;
      eachUser.course = user.course;

      // student.push(eachUser);

      // Create students
      await Student.upsert(eachUser);
      // studlen = stud.length;
    });
    console.log(student);

    res.status(201).json({
      success: true,
      message: `Students imported successfuly`,
    });
  } catch (error) {
    console.error(error);
  }
};
