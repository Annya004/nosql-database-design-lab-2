# Exercise 10: MongoDB Sharding Demonstration

**Prerequisite:** Connect `mongosh` to a configured `mongos` router with at least two shards. These commands do not provision the cluster.

```javascript
sh.enableSharding("ShardingLab");
const d = db.getSiblingDB("ShardingLab");
d.largeStudents.drop();
for (let i=1; i<=30; i++) d.largeStudents.insertOne({Student_ID:"S"+String(i).padStart(3,"0"),Name:"Student "+i,Course:["BCA","BSc IT","MCA"][i%3],Marks:50+(i%51)});
d.largeStudents.createIndex({Student_ID:"hashed"});
sh.shardCollection("ShardingLab.largeStudents",{Student_ID:"hashed"});
sh.status();
d.largeStudents.countDocuments({});
```
Hashed `Student_ID` can distribute IDs. A small dataset may not immediately split or balance across shards. Sharding increases horizontal capacity but adds shard-key and operational complexity.
