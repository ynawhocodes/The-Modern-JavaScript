let user = {
    name: "John Smith",
    age: 35
  };

//1번
let json = JSON.stringify(user);//인코딩
alert(json);

let instance = JSON.parse(json);//디코딩
alert(instance);//[object Object]
alert(instance.name);//John Smith


//2번
let json = JSON.stringify(user);
let instance = JSON.parse(json);
alert(instance)


//3번
let instance = JSON.parse(JSON.stringify(user));
alert(instance);//[object Object]
//객체 내용을 보여줄 순 없나
