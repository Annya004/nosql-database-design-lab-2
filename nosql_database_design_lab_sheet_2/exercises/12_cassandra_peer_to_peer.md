# Exercise 12: Cassandra Peer-to-Peer Replication

**Prerequisite:** At least two, preferably three, Cassandra nodes in the same cluster.

```sql
CREATE KEYSPACE IF NOT EXISTS PeerLab WITH replication={'class':'NetworkTopologyStrategy','datacenter1':3};
USE PeerLab;
CREATE TABLE IF NOT EXISTS student_by_id (student_id text PRIMARY KEY, name text, course text, marks double);
INSERT INTO student_by_id (student_id,name,course,marks) VALUES ('S101','Aarav','BCA',86.5);
SELECT * FROM student_by_id;
```
Verify nodes with `nodetool status`. The replication factor should fit the available nodes. Cassandra nodes can accept requests according to consistency/routing settings without a single permanent primary; primary-secondary systems generally route writes through the primary.
