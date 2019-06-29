let string1= "this is a string";
let string2="another string";
let string3=`${string1} and ${string2}`;
console.log('string3\' valueis', string3);

let info=["first",100,200,true,"last"];

result= Math.PI;
console.log(result);

result= Math.round(4.7);
console.log(result);

result= Math.round(4.4);
console.log(result);

result=new Date();
console.log(result);
let year= result.getFullYear();

let alphabet=["a", "b", "c", "d"];

let bigValue= numeral('1,000,000,000,200.00');
let intergerValue = bigValue.value();
console.log(intergerValue);
console.log('the value is',numeral(intergerValue).format('$0,0.00'));

let secondValue = numeral('$ 200,500,000');
console.log('second\'s value is ', secondValue.value());

moment.locale('id');//mengubah bahasa indonesia
let today = moment();
console.log('today is', today.format('dddd, MMMM Do YYYY'))

console.log('next week is ',moment().add(1, 'weeks').format('DD MMMM YYYY'))

console.log(moment([2019, 5, 5]).fromNow());

let grade = window.prompt("what's your grade");
let myGrade= "";

if(grade>= 90){
    myGrade= "A";
}else if(grade>="90"){
    myGrade="B";
}else if (grade>="70"){
    myGrade="C";
}else if (grade>="60"){
    myGrade="D";
}else{
    myGrade="F";
}

window.alert(`my grade is ${myGrade}`);

let textNumber = "";

for (let counter = 0; counter <5; counter++){
    textNumber += counter + ",";
}
console.log(textNumber)