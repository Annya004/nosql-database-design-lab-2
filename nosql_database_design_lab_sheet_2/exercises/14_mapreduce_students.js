// Exercise 14: MapReduce-style student counts and average marks.
// The legacy MongoDB mapReduce command is deprecated/removed in some versions.
// Aggregation is the modern alternative.
const d = db.getSiblingDB("MapReduceLab");
const s = d.Students; s.deleteMany({});
s.insertMany([{Student_ID:"S101",Name:"Aarav",Course:"BCA",Marks:86},{Student_ID:"S102",Name:"Diya",Course:"BCA",Marks:91},{Student_ID:"S103",Name:"Kabir",Course:"BSc IT",Marks:78},{Student_ID:"S104",Name:"Meera",Course:"BCA",Marks:88},{Student_ID:"S105",Name:"Ishaan",Course:"BSc IT",Marks:82}]);
s.aggregate([{$group:{_id:"$Course",studentCount:{$sum:1},averageMarks:{$avg:"$Marks"}}},{$project:{_id:0,Course:"$_id",studentCount:1,averageMarks:{$round:["$averageMarks",2]}}},{$sort:{Course:1}}]).forEach(printjson);
// Conceptual map: emit(course, {count:1, marks:Marks}); reduce: sum counts and marks by course.
