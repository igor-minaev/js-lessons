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

const copyUsers = [
    // users[0],
    // users[1],
    // users[2],
    // users[3],
    ...users,
    newUser
]

const updatedUsers = users.map(u => u.id === 2 ? {...u, isStudent: false} : u)
console.log(updatedUsers)

const deletedUsers = updatedUsers.filter(u => u.id !== 4)
console.log(deletedUsers)
console.log(deletedUsers === updatedUsers)
console.log(copyUsers === updatedUsers)

const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: 'hello'}}

const superUserCopy2 = {
    ...superUser,
    address: {
        ...superUser.address,
        "geo": {
            ...superUser.address.geo, "lng": "85"
        }
    }
}

const superUserCopy3 = {...superUser, email: 'njdfjsdj'}