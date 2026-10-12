# Exercise 11: MongoDB Primary-Secondary Replication

**Prerequisite:** Configure three MongoDB processes on separate ports/data directories with the same replica-set name before initializing.

```javascript
rs.initiate({_id:"rsLab",members:[
 {_id:0,host:"localhost:27017"},
 {_id:1,host:"localhost:27018"},
 {_id:2,host:"localhost:27019"}
]});
use ReplicationLab
db.Students.insertOne({Student_ID:"S101",Name:"Aarav",Course:"BCA"});
rs.status();
rs.printSecondaryReplicationInfo();
```
Read from a secondary using a connection configured for secondary read preference. If the primary fails, eligible members may elect a new primary. Replication is asynchronous; results depend on write concern and failure timing.
