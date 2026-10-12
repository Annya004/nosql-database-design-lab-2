// Exercise 9: Run after starting local MongoDB:
// mongosh "mongodb://127.0.0.1:27017" exercises/09_local_mongodb_crud.js
const d = db.getSiblingDB("LocalNoSQLLab");
const s = d.Students; s.deleteMany({});
s.insertMany([{Student_ID:"S101",Name:"Aarav",Course:"BCA",Marks:86},{Student_ID:"S102",Name:"Diya",Course:"BCA",Marks:91},{Student_ID:"S103",Name:"Kabir",Course:"BSc IT",Marks:78}]);
print("READ"); s.find({}, {_id:0}).forEach(printjson);
s.updateOne({Student_ID:"S103"}, {$set:{Marks:84}});
print("UPDATED"); printjson(s.findOne({Student_ID:"S103"}, {_id:0}));
s.deleteOne({Student_ID:"S102"});
print("FINAL RECORDS"); s.find({}, {_id:0}).forEach(printjson);
print("Count = " + s.countDocuments({}));
