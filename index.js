function sumItems(array) {

  let total = 0;
  array.forEach(function(item){
    if (typeof(item)==='number') {
      total += item;
    } else if(Array.isArray(item)) {
      total += sumItems(item)
    }
  })
  return total
  }


module.exports = sumItems;