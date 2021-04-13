#### 한눈에 보는 sample code
```javascript
var matrix = [1,2,3,4,5,6,7,8,9,10];

var ans = matrix.reduce((a, b, c, d) => {
var multiply = b * 2;
if(multiply % 4 === 0)
    a.push(multiply);
return a;
}, []);

console(ans);
```

#### 연산 횟수 감소
```js
var arr = [1,2,3,4,5];
```
이렇게 원소가 5개인 배열이 있다고 하자.
arr원소들을 모두 2배하고 4로 나누어지는 원소를 배열로 다시 담는다고 할 때,
map과 filter를 이용하면 모든 원소를 다 순회해야하므로 연산횟수가 2n번이다

이를 줄이기 위해 있는 함수가 `reduce`

#### reduce의 첫번째 파라미터인 함수의 파라미터
파라미터는 총 4개로, `reduce((a, b, c, d) => ...)`라고 할 때 매개변수는 다음과 같다
<br>
`
a = 초기값
b = 값
c = 인덱스
d = 원본 객체 혹은 배열
`

#### reduce의 두번째 파라미터
```js
reduce((a, b, c, d) => {    }, A)
```
두번째 인자인 A는 초기값이다
A는 함수 인자인 a의 초기값을 설정해준다
처음 a의 값은 당연히 undefined이므로 함수 안에서 a를 return 해야한다
```js
reduce((a, b, c, d) => {  ... return a; }, A)
```
