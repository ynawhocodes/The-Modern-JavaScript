'''javascript
var matrix = [1,2,3,4,5,6,7,8,9,10];

var ans = matrix.reduce((a, b, c, d) => {
var multiply = b * 2;
if(multiply % 4 === 0)
    a.push(multiply);
return a;
}, []);

console(ans);
```