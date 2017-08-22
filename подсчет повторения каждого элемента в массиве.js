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

//------------------------------------------------------------
(a%2==0) == (a&1)//проверка на четность, если крайний правый бит И 1 = 0, то а - четное
//------------------------------------------------------------
//транспонирование матрицы
class Matrix {
  constructor (arr, transposed) {
    this._arr = arr
    this._transposed = !!transposed
  },

  get (i, j) {
    return this._transposed
      ? this._arr[j][i]
      : this._arr[i][j]
  },
  transpose () {
    return new Matrix(this._arr.map(row => row.slice()), true)
  }
}

var matrixA = new Matrix([[1,2],[3,4],[5,6]])
matrixA.get(1, 0) // 3
var matrixB = matrixA.transpose()
matrixB.get(0, 1) // 3
//-----аналогично
var matrix  = [[false, true, true], [true, false, true]], 
    grid = matrix[0].map((col, i) => matrix.map(row => row[i]));  

console.log(grid);
