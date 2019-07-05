const students=[{
    id:1,
    name:'Budi',
    grade:90
},{
    id: 2,
    name: 'George',
    grade:74
},{
    id:3,
    name:'Shiva',
    grade:24
},{
    id:4,
    name:'James',
    grade:50
}]
let gradeBelow55=students.filter(students => students.grade<55);
console.log('Dibawah 55',gradeBelow55);

let gender="male";
const newData = students.map(students.push=gender=>gender);//Mengubah item" ke array yang baru
console.log(newData);

students.forEach(element=>{
    text += element + ",";
});
console.log('text is: ',text)
// tampilkata();
// console.log(`Hi i'm ${name}, i'm in ${grade} grade`)


// let array1 = [1,4,9,16];
// const newArray = array1.map(x => x *2);//Mengubah item" ke array yang baru
// console.log('new array are: ', newArray);

// const object={
//     name: ' Budi',
//     gender:'Male',
//     live : 'Batam'
// }
// // console.log(object);

// // const{ name,live}= object;
// // console.log(name,live)

// // const simpleFunction = ({name,gender})=>`hi my name is ${name} with gender ${gender}`
// // const greeting= simpleFunction(object)
// // console.log(greeting)

// const {name,...newObject}= object;
// console.log(name);
// console.log(newObject);

// const person1={
//     name: 'Omni Knight',
//     class:'Suppport',
//     level: 21
// };

// const person2={
//     ...person1,
//     name:'Tide Hunter'
// };

// console.log('person1 is', person1)
// console.log('person1 is', person2)

// const App={
//     start(){
//         console.log('running')
//     },
//     end(){
//         console.log('stop')
//     }
// }
// App.start();