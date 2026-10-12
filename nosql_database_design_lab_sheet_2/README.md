# NoSQL Database Design – Lab Sheet 2

GitHub-ready learning examples for all 15 tasks in BCA305P-AS01.pdf.

## Contents
- MySQL and MongoDB student data comparison
- MongoDB CRUD and embedded order documents
- Redis key-value commands
- Cassandra CQL
- HBase shell commands
- Neo4j Cypher
- Database model comparison
- Local MongoDB CRUD
- Sharding, primary-secondary replication, and Cassandra peer-to-peer replication
- Sharding + replication architecture
- MapReduce-style aggregation
- Distribution model comparison

## Requirements
Use the appropriate client for each file: MySQL client, `mongosh`, `redis-cli`, `cqlsh`, HBase shell, or Neo4j Browser/Cypher Shell.

## Important
These are educational examples. Distributed database exercises require the corresponding cluster/services to be configured; the scripts do not automatically provision production clusters. Review destructive commands before running them against data you need to keep. Never commit passwords or database credentials to GitHub.

MongoDB's legacy `mapReduce` command is deprecated or unavailable in some versions; Exercise 14 provides a modern aggregation-pipeline alternative.
