//сортирует  из коробки без параметров
const str1 = ['Bob', 'Alex', 'John']
console.log(str1.sort())

//сортирует по юникод
const str2 = ['Bob', 'Alex', 'John', 'john', '123', 'игорь', 'юрий']
console.log(str2.sort())

//работает мутабельно
console.log(str2)

//возвращает ссылку на исходный массив
console.log(str2 === str2.sort())

//для всех остальных случаев нужно передать функцию
const numbers = [1000, '+20', -500, 77, 9]
console.log(numbers.sort())
const compareFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 1
    } else {
        return -1
    }
}

console.log(numbers.sort(compareFn))
console.log(numbers.sort((a, b) => a - b))
console.log(numbers.reverse())


const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: false,
        scores: 89
    }
]

//сортировка массива объектов по строковым значениям
//регистрозависимая сортировка
const compareObjByName = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}

console.log(students.sort(compareObjByName))

//регистронезависимая сортировка
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

//сортировка по баллам
console.log(students.sort((a, b) => a.scores - b.scores))

const numbersJS = [34, 67, 12, 22]

for (let j = 0; j < numbersJS.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < numbersJS.length - 1 - j; i++) {
        if (numbersJS[i] > numbersJS[i + 1]) {
            isSorted = false;
            [numbersJS[i + 1], numbersJS[i]] = [numbersJS[i], numbersJS[i + 1]]
        }
    }
    if (isSorted) break
}

console.log(numbersJS)








