//Примитивы
//1. string => '', "", ``
//2. number => number, NaN, Infinity
//3. undefined => undefined
//4. null => null
//5. boolean => true, false

//6. symbol => Symbol
//7. bigint => BigInt

//Объекты
//8. object => object, array, function
// - составной тип данных
// - ссылочный тип данных

const user = {name: 'Bob'}  // #12
const user2 = user // {}. new Object() // #12
user2.name = 'Alex'

const arr = [1, 2, 3, 4] // #13
// arr.push(5)
// console.log(arr)
console.log(arr.concat(5)) // #14
console.log(arr)
console.log(arr === arr.concat(5)) // false

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    }
]

const newUser = {
    id: 5,
    name: 'Farid',
    isStudent: true
}

// CRUD