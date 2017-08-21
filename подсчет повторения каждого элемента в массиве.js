var arr = [1, 3, 4, 1, 1, 3, 4, 5];
var result = {};
arr.forEach(function(a){
    result[a] = result[a] + 1 || 1;
});
for (var key in result)
    document.write('число ' + key + ' == ' + result[key] + ' раз(а) <br>');


//------------------------------------------------------------
var result = [1, 3, 4, 1, 1, 3, 4, 5].reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});