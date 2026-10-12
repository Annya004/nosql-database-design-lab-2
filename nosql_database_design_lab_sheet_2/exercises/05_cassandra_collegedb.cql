-- Exercise 5: Cassandra Students
CREATE KEYSPACE IF NOT EXISTS CollegeDB WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE CollegeDB;
CREATE TABLE IF NOT EXISTS Students (Student_ID text PRIMARY KEY, Name text, Course text, Semester int, Marks double);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES ('S101','Aarav Sharma','BCA',4,86.5);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES ('S102','Diya Verma','BCA',4,91.0);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES ('S103','Kabir Singh','BSc IT',2,78.5);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES ('S104','Meera Joshi','BCA',2,88.0);
INSERT INTO Students (Student_ID,Name,Course,Semester,Marks) VALUES ('S105','Ishaan Gupta','BSc IT',4,82.0);
SELECT * FROM Students;
-- For this small lab only; filtering by a non-key column is not generally efficient:
SELECT * FROM Students WHERE Course='BCA' ALLOW FILTERING;
UPDATE Students SET Marks=90.0 WHERE Student_ID='S101';
DELETE FROM Students WHERE Student_ID='S105';
