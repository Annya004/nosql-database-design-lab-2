# Exercise 15: Database Distribution Models

## 1. Single Server
```text
Application -> One Database Server -> Data
```
- Distribution: all data on one server.
- Failure: server outage can make database unavailable.
- Advantage: simple management.
- Limitation: capacity ceiling and single point of failure.
- Application: small internal system.

## 2. Sharding
```text
Application -> Router -> Shard A / Shard B / Shard C
```
- Distribution: records split by shard key.
- Failure: a shard outage affects its data unless replicated.
- Advantage: horizontal capacity.
- Limitation: shard-key and operational complexity.
- Application: large catalog or event platform.

## 3. Primary-Secondary Replication
```text
Application -> Primary -> Secondary 1 / Secondary 2
```
- Distribution: primary accepts writes and secondaries replicate.
- Failure: eligible secondary may be elected.
- Advantage: redundancy and suitable read scaling.
- Limitation: replication lag and failover complexity.
- Application: high-availability business database.

## 4. Peer-to-Peer Replication
```text
Node A <-> Node B
  ^          ^
  +---- Node C
```
- Distribution: nodes share responsibility according to database topology.
- Failure: requests may continue if enough replicas remain.
- Advantage: distributed availability and scale-out.
- Limitation: consistency and operations require careful design.
- Application: distributed high-write workloads.

## 5. Sharding + Replication
```text
Application -> Router -> Shard A Replica Set / Shard B Replica Set
```
- Distribution: data is partitioned across shards and replicated within each shard.
- Failure: replica sets may elect a new primary; losing all replicas for a shard causes unavailability.
- Advantage: horizontal scaling plus redundancy.
- Limitation: greater operational complexity.
- Application: large e-commerce or content platform.
