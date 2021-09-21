// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.

var ownMap = function(){
  emit(1, this.price)
}

var ownReduce = function (key, prices){
  var sum = 0;
  return Array.sum(prices);

}

var tot = db.orders.mapReduce(ownMap, ownReduce, {out: "total"});
