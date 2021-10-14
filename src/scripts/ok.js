// 10 q in 1 hour
function sum(n)
{
  var i, s = 0.0;
  for (i = 1; i <= n; i++)
      s = s + 1/i;
  return s;
}
    
// Driven Program
var n = 10000;
console.log(sum(n).toFixed(10000));
