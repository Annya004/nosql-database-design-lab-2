// Exercise 2: MongoDB CRUD
const d = db.getSiblingDB("CollegeDB");
const s = d.Students;
s.deleteMany({});
s.insertMany([
 {Student_ID:"S101",Name:"Aarav Sharma",Course:"BCA",Semester:4,Marks:86},
 {Student_ID:"S102",Name:"Diya Verma",Course:"BCA",Semester:4,Marks:91},
 {Student_ID:"S103",Name:"Kabir Singh",Course:"BSc IT",Semester:2,Marks:78},
 {Student_ID:"S104",Name:"Meera Joshi",Course:"BCA",Semester:2,Marks:88},
 {Student_ID:"S105",Name:"Ishaan Gupta",Course:"BSc IT",Semester:4,Marks:82}
]);
print("All students"); s.find({}, {_id:0}).forEach(printjson);
print("BCA students"); s.find({Course:"BCA"}, {_id:0}).forEach(printjson);
s.updateOne({Student_ID:"S103"}, {$set:{Marks:84}});
print("Updated student"); printjson(s.findOne({Student_ID:"S103"}, {_id:0}));
s.deleteOne({Student_ID:"S105"});
print("Total students: " + s.countDocuments({}));
