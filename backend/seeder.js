const fs = require("fs"),
  path = require("path"),
  School = require("./models/School"),
  Course = require("./models/Course"),
  Student = require("./models/Student"),
  EligibleStudent = require("./models/EligibleStudent"),
  Examination = require("./models/Examination"),
  CurrentExam = require("./models/CurrentExam"),
  EligibleStudentId = require("./models/EligibleStudentId");

/**
 * School
 * Course
 * Student
 * Eligible
 * Examination
 * ExamQr
 */

const path_to = path.join(__dirname, "models/schema/_data");
const schools = JSON.parse(fs.readFileSync(`${path_to}/school.json`)),
  courses = JSON.parse(fs.readFileSync(`${path_to}/course.json`)),
  students = JSON.parse(fs.readFileSync(`${path_to}/students.json`)),
  eligibles = JSON.parse(fs.readFileSync(`${path_to}/eligibles.json`)),
  exams = JSON.parse(fs.readFileSync(`${path_to}/exams.json`)),
  current_exam = JSON.parse(fs.readFileSync(`${path_to}/current_exam.json`)),
  eligibles_id = [];

eligibles.forEach((eligible) => {
  eligibles_id.push({
    studentStudentRegNumber: eligible.eligibleStudentIdStudentStudentRegNumber,
  });
});

const test = () => {
  console.dir(current_exam);
  // console.log(nanoid());
};
// console.log(schools);

const importData = async () => {
  try {
    await School.sync({ force: true });
    console.log("School schema created");
    await School.bulkCreate(schools);
    console.log("School data imported");

    await Course.sync({ force: true });
    console.log("Course schema created");
    await Course.bulkCreate(courses);
    console.log("Course data imported");

    await Examination.sync();
    console.log("Examination schema created");
    await Examination.bulkCreate(exams);
    console.log("Examination data imported");

    await CurrentExam.sync();
    console.log("CurrentExam schema created");
    await CurrentExam.create(current_exam);
    console.log("CurrentExam data imported");

    await Student.sync({ force: true });
    console.log("Student schema created");
    await Student.bulkCreate(students);
    console.log("Student data imported");

    await EligibleStudentId.sync({ force: true });
    console.log("EligibleStudentId schema created");
    await EligibleStudentId.bulkCreate(eligibles_id);
    console.log("EligibleStudentId data imported");

    await EligibleStudent.sync({ force: true });
    console.log("EligibleStudent schema created");
    await EligibleStudent.bulkCreate(eligibles);
    console.log("EligibleStudent data imported");
  } catch (error) {
    console.error(error);
  }
};

const deleteData = async () => {
  try {
    await EligibleStudent.drop({ truncate: true });
    await EligibleStudentId.drop({ truncate: true });
    console.log("EligibleStudent deleted...");

    await Student.drop({ truncate: true });
    console.log("Student deleted...");

    await CurrentExam.drop({ truncate: true });
    console.log("Current Examination deleted...");

    await Examination.drop({ truncate: true });
    console.log("Examination deleted...");

    await Course.drop({ truncate: true });
    console.log("Course deleted...");

    await School.drop({ truncate: true });
    console.log("School deleted...");

    process.exit();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Import data from json to database
 * Run `node seeder.js -i`
 */
if (process.argv[2] === "-i") {
  importData();
  // test();
} else if (process.argv[2] === "-d") {
  /**
   * Delete all data from the database
   * Run `node seeder.js -d`
   */
  deleteData();
}
