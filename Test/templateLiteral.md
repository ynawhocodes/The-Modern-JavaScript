##### ES6 이후 템플릿 리터럴
```js

const prefix = 'https://...';
const queries = '?point=y&hello=world';
 
const url = `${prefix}/api/search${queries}#here`;
console.log(url); // https://.../api/search?point=y&hello=world#here
```

##### 템플릿 리터럴의  %{}안에서는 함수도 사용 가능
```js
function returnWorld() {
  return 'world';
}
 
console.log(`Hello, ${returnWorld()}!`); // Hello, world!
```

##### 삼항 연산자 사용 가능
```js
// 삼항 연산자 가능
const me = '나';
console.log(`Hi! ${me ? '나원' : '누구'}?`); // Hi! 나원?
```

=> **+로 잇지 말고 템플릿 리터럴 사용하기**

참고 링크
[MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
