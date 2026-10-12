# Exercise 8: MongoDB vs Cassandra vs Neo4j

| Aspect | MongoDB | Cassandra | Neo4j |
|---|---|---|---|
| Data model | Document | Wide-column | Graph |
| Storage | BSON documents in collections | Partitioned rows and columns | Nodes, relationships, properties |
| Query | MQL and aggregation | CQL | Cypher |
| Scalability | Horizontal sharding | Distributed scale-out design | Depends on graph deployment architecture |
| Suitable applications | Catalogs, content, flexible records | High-volume distributed writes | Relationship-heavy networks and recommendations |

The same student dataset can be modeled differently depending on application access patterns.
