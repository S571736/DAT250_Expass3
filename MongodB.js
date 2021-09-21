// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.
use('myNewDB');


var mapFunction2 = function(){
  for (var idx = 0; idx < this.items.length; idx++){
    var key = this.items[idx].sku;
    var value = { count: 1, qty: this.items[idx].qty};

    emit(key, value);
  }
};

var reduceFunction2 = function(keySKU, countObjVals){
  reducedVal = {count: 0, qty: 0};

  for (let idx = 0; idx < countObjVals.length; idx++) {
    reducedVal.count += countObjVals[idx].count;
    reducedVal.qty += countObjVals[idx].qty;
 }

 return reducedVal;
};

var finalizeFunction2 = function(key, reducedVal){
  reducedVal.avg = reducedVal.qty/reducedVal.count;
  return reducedVal;
};

db.orders.mapReduce(
  mapFunction2,
  reduceFunction2,
  {
    out: { merge: "map_reduce_example2"},
    query: {ord_date: { $gte: new Date("2020-03-01")}},
    finalize: finalizeFunction2
  }
);

db.map_reduce_example2.find().sort({ _id : 1})
