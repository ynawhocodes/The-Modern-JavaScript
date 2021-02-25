// 1번
let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

ask("동의하십니까", function() {alert("동의하셨습니다");}, function() {alert("취소 버튼을 누르셨습니다")});

//2번
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask("동의하십니까", () => alert("동의하셨습니다"), () => alert("취소 버튼을 누르셨습니다"));

//3번
let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

ask("동의하십니까", () => alert("동의하셨습니다"), () => alert("취소 버튼을 누르셨습니다"));


//4번
let ask = () => {confirm("동의하십니까") ? () => alert("동의하셨습니다") : () => alert("취소 버튼을 누르셨습니다")}
ask();//꼭 함수 호출하기