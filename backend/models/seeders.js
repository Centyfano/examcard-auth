const fs = require("fs");
const Sequelize = require("sequelize");
const got = require("got");
require("dotenv").config({
  path: path.join(__dirname, "config", "config.env"),
});

console.log(path.join(__dirname, "..", "config", "config.env"));


// Connect to DB
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
try {
  sequelize.authenticate();
  console.log("SQL successfully connected");
} catch (error) {
  console.error(`Failed to connect: ${error.message}`);
}

// Models
const Student = require("./Student");
const Course = require("./Course");
const path = require("path");

// JSON data files
// const path_to = `${__dirname}/models/schemas/_data`;

// let students = JSON.parse(fs.readFileSync(`${path_to}/students.json`, "utf-8"));
let students, by;

const url = "http://localhost:5000/mock/students/all";
(async (req, res, next) => {
  try {
    students = await got.get(url, {
      responseType: "json",
    });

    students = JSON.parse(students.body); by = students;
    console.log(students);
  } catch (err) {
    console.log(err);
  }
})();

// students 
console.log('students are:',by);
// create Users from Students' and Lecturers' data files
const users = [];
// students.forEach((student) => {
//   const userId = student.studentId;
//   const userEmail = student.email;
//   const password = userId;
//   const role = "Student";
//   const stud = { userId, userEmail, role, password };
//   users.push(stud);
// });

// lecturers.forEach((lecturer) => {
//   const userId = lecturer.lecturerId;
//   const userEmail = lecturer.email;
//   const password = userId;
//   const role = "Lecturer";
//   const lec = { userId, userEmail, role, password };
//   users.push(lec);
// });

users.forEach((user) => {
  console.log(user);
});

// import data
const importData = async () => {
  try {
    await Course.sync()
    console.log("Courses schema created...");
    await Student.sync();
    console.log("Students schema created...");
    await Student.bulkCreate(students);
    console.log("Students imported...");

    // await User.sync();
    // console.log("Users schema created...".green.inverse);
    // users.forEach(async (user) => {
    //   try {
    //     await User.create(user);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // });

    process.exit();
  } catch (err) {
    console.log(err);
    // next(err)
  }
};

// Delete data from database
const deleteData = async () => {
  try {
    await RegisteredUnit.destroy({ truncate: true });
    console.log("RegisteredUnits deleted...");
    await StudentSession.destroy({ truncate: true });
    console.log("StudentSessions deleted...");
    await UnitSession.destroy({ truncate: true });
    console.log("UnitSessions deleted...");
    await CourseSession.destroy({ truncate: true });
    console.log("CourseSessions deleted...");
    await TimeStudy.destroy({ truncate: true });
    console.log("TimeStudies deleted...");
    await AcademicYear.destroy({ truncate: true });
    console.log("AcademicYears deleted...");
    await CourseUnit.destroy({ truncate: true });
    console.log("CourseUnits deleted...");
    await Unit.destroy({ truncate: true });
    console.log("Units deleted...");
    await Lecturer.destroy({ truncate: true });
    console.log("Lecturers deleted...");
    await Student.destroy({ truncate: true });
    console.log("Students deleted...");
    await Course.destroy({ truncate: true });
    console.log("Courses deleted...");
    await StudyLevel.destroy({ truncate: true });
    console.log("StudyLevels deleted...");
    await Department.destroy({ truncate: true });
    console.log("Departments deleted...");
    await School.destroy({ truncate: true });
    console.log("Schools deleted...");

    process.exit();
  } catch (err) {
    throw err;
  }
};

// Import data
// run "node seeder.js -i"
if (process.argv[2] === "-i") {
  importData();
}

// Delete data
// run "node seeder.js -d"
else if (process.argv[2] === "-d") {
  deleteData();
}
