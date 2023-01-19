const user = {    //#123
    name: 'Bob',
    age: 34
}

// 1. new Object()
// 2. {}

const user2 = user  //#123
user2.name = 'Alex'
console.log(user)

const copyUser = {}
copyUser.name = user.name
copyUser.age = user.age

const copyUser2 = {...user}

console.log(user === user2)  //true
console.log(user === copyUser) //false

const arr = [1, 2, 3, 4, 5]
const copyArr = [...arr]


const students = [
    {name: 'Bob', age: 34},
    {name: 'Alex', age: 32}
]

// students[0] => link #234
// students[1] => link #235

const copyStudents = [...students]  //shallow
console.log(students[0] === copyStudents[0]) //true
console.log(students === copyStudents)  //false

const deepCopy = [{...students[0]}, {...students[1]}]

console.log(students[0] === deepCopy[0]) //false
console.log(students === deepCopy)  //false

const deepCopyWithMap = students.map(student => ({...student}))

//CRUD
const addSt = [...students, {name: 'Ann', age: 23}]
const updateBobAge = students.map(st => st.name === 'Bob' ? {...st, age: 35} : st)
const removeSt = students.filter(st => st.name !== 'Bob')

const students2 = [
    {
        name: 'Bob',
        age: 34,
        friends: [
            {name: 'John'},
            {name: 'Vasya'}
        ]
    },
    {
        name: 'Alex',
        age: 32,
        friends: [
            {name: 'Oleg'},
            {name: 'Petr'}
        ]
    }
]

const newStudents2 = students2.map(st => st.name === 'Bob' ? {
    ...st,
    friends: st.friends.map(f => f.name === 'Vasya' ? {...f, name: 'Vasilisa'} : f)
} : st)

console.log(newStudents2)