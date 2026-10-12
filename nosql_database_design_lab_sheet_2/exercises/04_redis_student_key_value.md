# Exercise 4: Redis Student Key-Value System

Run in `redis-cli`:
```text
SET student:S101 "Aarav Sharma"
SET student:S102 "Diya Verma"
SET student:S103 "Kabir Singh"
SET student:S104 "Meera Joshi"
SET student:S105 "Ishaan Gupta"
GET student:S101
SET student:S102 "Diya V."
GET student:S102
DEL student:S105
SCAN 0 MATCH student:* COUNT 100
```
`SCAN` is preferable to `KEYS *` for larger databases because it iterates through keys.
