# Exercise 13: Sharding + Replication Architecture

```text
                  Application
                       |
                     mongos
                       |
                Config Server RS
                       |
            +----------+----------+
            |                     |
        Shard A RS             Shard B RS
        Primary A              Primary B
         /    \                /    \
     Secondary Secondary   Secondary Secondary
```

- Sharding partitions data between shards.
- Replication keeps copies within each shard's replica set.
- If a primary fails, an eligible secondary may be elected.
- The combination improves horizontal capacity and redundancy.
- Limitation: operational complexity, network overhead, and shard-key constraints.

This is a conceptual architecture; actual cluster services must be configured separately.
