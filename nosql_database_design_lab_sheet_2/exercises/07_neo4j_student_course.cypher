// Exercise 7: Neo4j Student-Course graph
CREATE CONSTRAINT student_id IF NOT EXISTS FOR (s:Student) REQUIRE s.studentId IS UNIQUE;
CREATE CONSTRAINT course_id IF NOT EXISTS FOR (c:Course) REQUIRE c.courseId IS UNIQUE;
UNWIND [{id:'S101',name:'Aarav'},{id:'S102',name:'Diya'},{id:'S103',name:'Kabir'},{id:'S104',name:'Meera'},{id:'S105',name:'Ishaan'}] AS row
MERGE (:Student {studentId:row.id,name:row.name});
UNWIND [{id:'C1',name:'BCA'},{id:'C2',name:'BSc IT'},{id:'C3',name:'MCA'}] AS row
MERGE (:Course {courseId:row.id,name:row.name});
MATCH (s:Student {studentId:'S101'}),(c:Course {courseId:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {studentId:'S102'}),(c:Course {courseId:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {studentId:'S103'}),(c:Course {courseId:'C2'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {studentId:'S104'}),(c:Course {courseId:'C1'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {studentId:'S105'}),(c:Course {courseId:'C3'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student) RETURN s ORDER BY s.studentId;
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'}) RETURN s.name,c.name;
MATCH (s:Student {studentId:'S101'})-[:ENROLLED_IN]->(c:Course) RETURN c.name;
// Add then remove a relationship:
MATCH (s:Student {studentId:'S103'}),(c:Course {courseId:'C3'}) MERGE (s)-[:ENROLLED_IN]->(c);
MATCH (s:Student {studentId:'S103'})-[r:ENROLLED_IN]->(c:Course {courseId:'C3'}) DELETE r;
