class Users {
     constructor(arrchanger, arr) {
       this.arrchanger = arrchanger;
       this.arr = arr;
     }
     getUsers() {
       this.arrchanger.forEach((element) => {
         element.role = this.arr.filter(
           (item) => item.name.toUpperCase() == element.role.toUpperCase(),
         );
       });
       return this.arrchanger;
     }
   }
   
   class Admins extends Users {
     constructor(arrchanger, arr) {
       super(arrchanger, arr);
     }
     getAdmins() {
       const res = this.arrchanger.filter((item) => item.role.toUpperCase() == "admin".toUpperCase());
       res.forEach((element) => {
         element.role = this.arr.filter(
           (item) => item.name.toUpperCase() == element.role.toUpperCase(),
         );
       });
       return res;
     }
   }
   
   class Teachers extends Users {
     constructor(arrchanger, arr) {
       super(arrchanger, arr);
     }
     getTeachers() {
       const res = this.arrchanger.filter(
         (item) => item.role.toUpperCase() == "teacher".toUpperCase(),
       );
       res.forEach((element) => {
         element.role = this.arr.filter(
           (item) => item.name.toUpperCase() == element.role.toUpperCase(),
         );
       });
       return res;
     }
   }
   
   class Students extends Users {
     constructor(arrchanger, arr) {
       super(arrchanger, arr);
     }
     getStudents() {
       const res = this.arrchanger.filter(
         (item) => item.role.toUpperCase() == "student".toUpperCase(),
       );
       res.forEach((element) => {
         element.role = this.arr.filter(
           (item) => item.name.toUpperCase() == element.role.toUpperCase(),
         );
       });
       return res;
     }
   }
   
   const roles = [
     {
       id: "f7259abc-702a-4c26-99e4-ff596e7e3a4b",
       name: "admin",
     },
     {
       id: "180e3ce7-ac3b-43a8-9c56-569a8c4493c8",
       name: "teacher",
     },
     {
       id: "550a3276-c51f-465c-971f-ab4e34e9f02a",
       name: "student",
     },
   ];
   
   const users = [
     {
       id: "35172b2b-fb3d-4d8b-ac13-61351513dc5a",
       userName: "Nick",
       email: "nick@intellectfox.by",
       role: "teacher",
       students: ["2e6667e8-0352-48f0-8d6d-e38bf30338a5", "649dc9a5-d788-49b6-bfc3-6716b97e66ad"],
     },
     {
       id: "104acaf4-0255-4c02-bd71-9f68759a9d09",
       userName: "Andrew",
       email: "andrew@intellectfox.by",
       role: "Admin",
     },
     {
       id: "9cf9e18f-2510-4011-90ef-ce690c4f7a66",
       userName: "Stas",
       email: "stas@intellectfox.by",
       role: "admin",
     },
     {
       id: "3962c9f6-e152-4dbb-a6ac-6269879c942a",
       userName: "Mike",
       email: "mike@intellectfox.by",
       role: "Teacher",
       students: ["dc4e0a6d-fb2f-40c2-a57e-11cea1d82d47", "0d337cf2-a172-4422-a4a1-716baf05cc0b"],
     },
     {
       id: "6bed7b98-e40e-49ca-8826-fd1f8f0eaba6",
       userName: "Dan",
       email: "dan@intellectfox.by",
       role: "Teacher",
       students: ["292bda95-3018-4ca1-bf73-67737efe1b25", "1730c5ac-e7ee-4f1a-b92a-2d59d23f78c2"],
     },
     {
       id: "2e6667e8-0352-48f0-8d6d-e38bf30338a5",
       userName: "Charlie",
       email: "charlie@intellectfox.by",
       role: "student",
       teachers: ["35172b2b-fb3d-4d8b-ac13-61351513dc5a", "2dfd5d40-0c21-4150-9b8c-58e52a146670"],
     },
     {
       id: "649dc9a5-d788-49b6-bfc3-6716b97e66ad",
       userName: "Charlie",
       email: "charlie@intellectfox.by",
       role: "student",
       teachers: ["35172b2b-fb3d-4d8b-ac13-61351513dc5a"],
     },
     {
       id: "dc4e0a6d-fb2f-40c2-a57e-11cea1d82d47",
       userName: "Rebecca",
       email: "rebecca@intellectfox.by",
       role: "STUDENT",
       teachers: ["3962c9f6-e152-4dbb-a6ac-6269879c942a", "2dfd5d40-0c21-4150-9b8c-58e52a146670"],
     },
     {
       id: "0d337cf2-a172-4422-a4a1-716baf05cc0b",
       userName: "Jessica",
       email: "jessica@intellectfox.by",
       role: "Student",
       teachers: ["3962c9f6-e152-4dbb-a6ac-6269879c942a"],
     },
     {
       id: "292bda95-3018-4ca1-bf73-67737efe1b25",
       userName: "Chris",
       email: "chris@intellectfox.by",
       role: "student",
       teachers: ["6bed7b98-e40e-49ca-8826-fd1f8f0eaba6"],
     },
     {
       id: "1730c5ac-e7ee-4f1a-b92a-2d59d23f78c2",
       userName: "Kevin",
       email: "kevin@intellectfox.by",
       role: "student",
       teachers: ["6bed7b98-e40e-49ca-8826-fd1f8f0eaba6", "2dfd5d40-0c21-4150-9b8c-58e52a146670"],
     },
     {
       id: "2dfd5d40-0c21-4150-9b8c-58e52a146670",
       userName: "Deborah",
       email: "deborah@intellectfox.by",
       role: "TEACHER",
       students: [
         "2e6667e8-0352-48f0-8d6d-e38bf30338a5",
         "dc4e0a6d-fb2f-40c2-a57e-11cea1d82d47",
         "1730c5ac-e7ee-4f1a-b92a-2d59d23f78c2",
       ],
     },
   ];
   
   const adm = new Admins(users, roles);
   console.log(adm.getAdmins());
   
   const teacher = new Teachers(users, roles);
   console.log(teacher.getTeachers());
   
   const student = new Students(users, roles);
   console.log(student.getStudents());