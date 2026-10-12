// Exercise 3: Orders with embedded customer and product data
const d = db.getSiblingDB("CollegeDB");
const o = d.Orders; o.deleteMany({});
o.insertMany([
 {Order_ID:"O1001",customer:{id:"C101",name:"Meera"},products:[{name:"Keyboard",qty:1,price:1200},{name:"Mouse",qty:2,price:500}],status:"Delivered"},
 {Order_ID:"O1002",customer:{id:"C102",name:"Ishaan"},products:[{name:"Monitor",qty:1,price:9000}],status:"Shipped"},
 {Order_ID:"O1003",customer:{id:"C101",name:"Meera"},products:[{name:"USB Drive",qty:3,price:450}],status:"Placed"},
 {Order_ID:"O1004",customer:{id:"C103",name:"Aarav"},products:[{name:"Webcam",qty:1,price:2200}],status:"Delivered"},
 {Order_ID:"O1005",customer:{id:"C104",name:"Diya"},products:[{name:"Headphones",qty:2,price:1600}],status:"Processing"}
]);
print("Customer C101 orders"); o.find({"customer.id":"C101"}).forEach(printjson);
o.updateOne({Order_ID:"O1001","products.name":"Mouse"}, {$set:{"products.$.qty":3}});
print("Totals"); o.aggregate([{$project:{_id:0,Order_ID:1,customer:1,total:{$sum:{$map:{input:"$products",as:"p",in:{$multiply:["$$p.qty","$$p.price"]}}}}}}]).forEach(printjson);
print("Orders over 2000"); o.aggregate([{$addFields:{total:{$sum:{$map:{input:"$products",as:"p",in:{$multiply:["$$p.qty","$$p.price"]}}}}}},{$match:{total:{$gt:2000}}}]).forEach(printjson);
