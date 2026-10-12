# Exercise 1: RDBMS vs NoSQL Student Data

## MySQL (run in MySQL client)
```sql
CREATE DATABASE IF NOT EXISTS CollegeDB;
USE CollegeDB;
DROP TABLE IF EXISTS Student;
CREATE TABLE Student (
  Student_ID VARCHAR(10) PRIMARY KEY,
  Name VARCHAR(80) NOT NULL,
  Course VARCHAR(50) NOT NULL,
  Semester INT NOT NULL,
  Marks DECIMAL(5,2) NOT NULL
);
INSERT INTO Student VALUES
('S101','Aarav Sharma','BCA',4,86.50),
('S102','Diya Verma','BCA',4,91.00),
('S103','Kabir Singh','BSc IT',2,78.50),
('S104','Meera Joshi','BCA',2,88.00),
('S105','Ishaan Gupta','BSc IT',4,82.00);
SELECT * FROM Student;
```

## MongoDB (`mongosh`)
```javascript
const d = db.getSiblingDB("CollegeDB");
const students = d.Students;
students.deleteMany({});
students.insertMany([
 {Student_ID:"S101",Name:"Aarav Sharma",Course:"BCA",Semester:4,Marks:86.5},
 {Student_ID:"S102",Name:"Diya Verma",Course:"BCA",Semester:4,Marks:91},
 {Student_ID:"S103",Name:"Kabir Singh",Course:"BSc IT",Semester:2,Marks:78.5},
 {Student_ID:"S104",Name:"Meera Joshi",Course:"BCA",Semester:2,Marks:88},
 {Student_ID:"S105",Name:"Ishaan Gupta",Course:"BSc IT",Semester:4,Marks:82}
]);
students.find({}, {_id:0}).forEach(printjson);
```

| Aspect | MySQL | MongoDB |
|---|---|---|
| Schema | Tables with predefined columns | Flexible BSON documents |
| Storage | Rows in tables | Documents in collections |
| Flexibility | Structured schema and constraints | Fields can vary between documents |
| Scalability | Often vertical; distributed options exist | Horizontal sharding supported |
| Suitable use | Relational data and joins | Nested or evolving document-shaped data |
