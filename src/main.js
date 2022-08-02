class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.currentYear = new Date();
  }
  course() {
    return (
      super.fullName() +
      "-" +
      this.admissionYear +
      "," +
      (this.currentYear.getFullYear() - this.admissionYear)
    );
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }
  getInfo() {
    const sortData = this.studentsData;
    const res = [];
    sortData.sort((a, b) => (a.admissionYear > b.admissionYear ? -1 : 1));
    sortData.forEach((element) => {
      res.push(
        element.firstName +
          " " +
          element.lastName +
          "-" +
          element.courseName +
          "," +
          (2019 - element.admissionYear + 1) +
          " курс",
      );
    });
    return res;
  }
}

const user = new User("Григорий", "Лепс");
const student = new Student("Григорий", "Лепс", 2020);
console.log(user.fullName());
console.log(student.course());

const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2018,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Android",
  },
];

const students = new Students(studentsData);
console.log(students.getInfo());
