// const words =[
//     "spray",
//     "Limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present",
//     "happy"

// ];
// let longWords = words.filter(word => word.length > 6);// memfilter jumlah karakter yang lebih dari 6 karakter
// console.log('long words are : ', longWords);

let array1 = [1,4,9,16];
const newArray = array1.map(x => x *2);//Mengubah item" ke array yang baru
console.log('new array are: ', newArray);

// //find mencari hanya satu item

// let array3= ["a","b","c"];
// let text ="";

// array3.forEach( element => {
//     text += element + ",";
// });
// console.log('text is: ',text);

// let stringIBBatam="Impact Byte Batam";
// console.log('char At 0 : ',stringIBBatam.charAt(0))
// console.log('char At 7 : ', stringIBBatam.charAt(7))

// let resultLength = stringIBBatam.length;
// console.log('resultLength is ',resultLength)
// console.log('huruf terakhir', stringIBBatam.charAt(resultLength -1))

// let resultToUpperCase= stringIBBatam.toUpperCase();
// console.log('huruf besar',resultToUpperCase)

// let resultToLowerCase = stringIBBatam.toLocaleLowerCase();
// console.log('Huruf Kecil',resultToLowerCase)

// let resultSplit = stringIBBatam.split(" ");
// console.log('resultsplit :',resultSplit);
// resultSplit= stringIBBatam.split(" ",2);
// console.log('Kedua hasil :', resultSplit);

// let resultReplace= stringIBBatam.replace("a", "i");
// console.log('hasil ganti kata', resultReplace);

// let resultSubstr = stringIBBatam.substr( 3,6);
// console.log('resultSubstr is', resultSubstr);
// resultSubstr= stringIBBatam.substr(0,3);
// console.log('second result:',resultSubstr);

// let iBBatamArray= stringIBBatam.split(" ");
// console.log('hasil split',iBBatamArray);

// iBBatamArray.sort();
// console.log(`iBBatamArray.sort() is`, iBBatamArray);

let object1 = { fname: "John" };
let object2 = { lname: "Doe" };
let object3 = { age : 30 };

let object4 = {...object1, ...object2, ...object3}
console.log(`object4 value is`, object4)

let object5 = { object1, object2, object3}
console.log(`object value is ` ,object5)

let resultObjectKeys = Object.keys(object4);
console.log(`resultObjectKeys is`, resultObjectKeys)

// function firstFuntion(){
//     let count = 0;
//     setInterval(() =>{
//         count++;
//         alert(`this is setInterval & already show in ${count} times`);
//     }, 3000);
// }
// firstFuntion();

// function secondFuntion(){
//     setTimeout(() => {
//         alert("this is settimeout");
//     },3000)
// }
// secondFuntion();

let names= [ "Budi", "Joni", "Tono", "Jaka"];
let modifiedName = names.map(name =>"Mr."+ name);
console.log(`modifieldName value are`, modifiedName)

const funt = name => "Mrs." +name;//conttanta biar ga dirubah sama orang di delevoper tools
modifiedName=names.map(funt);
console.log('Second modifieldName value are', modifiedName)

const myFunction = (totalPrice=0, name="none") => {//argument
    const totalTax = totalPrice * 0.1;
    const detailTax = `pajak untuk: ${name}, adalah:${totalTax}`;

    return detailTax;
}
const barangdanpajax = myFunction(10000, `shirt`); //ini parameter fungtion () mengurangi duplikasi koding
console.log(barangdanpajax)
console.log(myFunction)

// let carName='BMW';
// console.log('carName 1', carName)
// function myFunction2(){
//     let carName= "Volvo";
//     console.log('carName2', carName)
// }
// console.log('carNmme3', carName)
// myFunction2();
// console.log('carName 4', carName)

// myFunction3();
// console.log(`carName 1 is ${carName}`)

// function myFunction3(){
//     carName3 = "volvo";
// }
// console.log(`carName2 is ${carName3}`)

// let person ={
//     firstName: "John",
//     lastName : "Doe",
//     id: 5566,
//     fulname: function(){
//        // debugger;
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(`person fullname is ${person.fullName}`)

let person1= {
    fullName: function(){
      //  debugger;
        return this.firstName + " " +this.lastName;
    }
}
var person2 = {
    firstName:"john",
    lastName:"Doe",
}

console.log(person1.fullName.bind(person2)())//bind itu supaya bisa manggil this buat person 1 dari person 2
console.log(person1.fullName())
