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
console.log('Dibawah 55',gradeBelow55)