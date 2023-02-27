const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];


//1. Создайте поверхностную копию объекта user
const copyUser = {...user}

//Проверка:
console.log(copyUser === user)
console.log(copyUser.age === user.age)
console.log(copyUser.friends === user.friends)


//2. Полная (глубокая) копия объекта user
const deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
console.log(deepCopyUser === user)
console.log(deepCopyUser.name === user.name)
console.log(deepCopyUser.friends === user.friends)

//3. Поверхностная копия массива students
const copyStudents = [...students]

//Проверка:
console.log(copyStudents === students)
console.log(copyStudents[0] === students[0])
console.log(copyStudents[0].name === students[0].name)

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}))

//Проверка:
console.log(deepCopyStudents === students)
console.log(deepCopyStudents[0] === students[0])
console.log(deepCopyStudents[0].name === students[0].name)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// const sortedByName = deepCopyStudents.sort((a, b) => a.name.localeCompare(b.name))
// console.log(sortedByName)


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log(sortedByScores)


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let bestStudents = students.filter(s => s.scores >= 100)
// console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3)
console.log(topStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(s => !s.isMarried)
console.log(notMarriedStudents)


//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name)
console.log(studentsNames)


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ')
console.log(namesWithSpace)

let namesWithComma = studentsNames.join(',')
console.log(namesWithComma)


//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick)


//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann')
console.log(ann)


// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, st) => acc.scores > st.scores ? acc : st)
console.log(bestStudent)


//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, st) => acc + st.scores, 0)
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.


const addFriends = (stArray) => {
    return stArray.map(s => ({...s, friends: stArray.map(el => el.name).filter(name => name !== s.name)}))
}

console.log(addFriends(students))


// 15. Напишите функцию getBestStudents, которая принимает параметром массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10)

/*const getBestStudents = (arr, num = 1) => {
    let result = [...arr].sort((a, b) => b.scores - a.scores)
    if (num < arr.length) {
        result = result.splice(0, num)
    } else {
        for (let i = arr.length; i < num; i++) {
            result[i] = null
        }
    }
    return result
}*/

const getBestStudents = (arr, num ) => {
    return new Array(num).fill(null).map((s,i)=>i<arr.length?[...arr].sort((a, b) => b.scores - a.scores)[i]:s)
}

console.log(getBestStudents(students))
console.log(getBestStudents(students, 3))
console.log(getBestStudents(students, 10))
