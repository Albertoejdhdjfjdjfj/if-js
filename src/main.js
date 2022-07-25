class User{
  constructor(firstName,lastName){
      this.firstName=firstName;
      this.lastName=lastName;
  }
  fullName(){
    return this.firstName+' '+this.lastName;
  }
}

class Student extends User{
  constructor(firstName,lastName,admissionYear,courseName){
   super(firstName,lastName);
   this.admissionYear=admissionYear;
   this.courseName=courseName;
  }
  course(){
    
    return super.fullName()+'-'+ this.admissionYear+','+this.courseName;
  }

}

class Students{
  constructor(studentsData){
  this.studentsData=studentsData;    
}
getInfo(){
  let sortdata=this.studentsData;
  let res=[]
  sortdata.sort((a, b) => a.admissionYear > b.admissionYear ? -1 : 1);
  sortdata.forEach(element => {
    res.push(element.firstName+' '+element.lastName+'-'+element.courseName+','+(2019-element.admissionYear+1)+' курс');
  });
  return res
}
}
let user=new User('Григорий','Лепс');
let student=new Student('Григорий','Лепс',1982,4)
console.log(user.fullName())
console.log(student.course())
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

const students=new Students(studentsData);
console.log(students.getInfo())