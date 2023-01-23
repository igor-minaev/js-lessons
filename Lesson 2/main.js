const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 100
    }
]


const getStudentNames = (array) => {
    const result = []
    const getName = item => item.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getStudentNames(students))

const getStudentScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores(array[i])
    }
    return result
}

console.log(getStudentScores(students))

const getNewArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getNewArray(students, item => item.name))
console.log(getNewArray(students, item => item.age))

const addProperty = item => ({...item, isStudent: true})

console.log(getNewArray(students, addProperty))


/*const names = students.map(st => st.name)
console.log(names)*/

const itPush = (array, el) => {
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++)
        if (func(array[i])) {
            itPush(result, array[i])
        }
    return result
}

console.log(itFilter(students, item => item.scores > 90))

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}

console.log(itIncludes([1, 3, 6, 9], 3))

/*const nums = [1, 4, 5, 7]*/
const nums = new Array(1, 4, 5, 7)


const itUnShift = (array, el) => {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i]
    }
    array[0] = el
    return array.length
}

itUnShift(nums, 0)
console.log(nums)

const itShift = (array) => {
    const removedItem = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    return removedItem
}

itShift(nums)
console.log(nums)

const nums2 = [1, 2, 4, 5, 7]
/*const numsRes = nums2.map(el => el ** 2)
    .filter(el => el < 20)
    .reverse()

console.log(numsRes)*/

function getLength() {
    return this.length
}

Array.prototype.hey = getLength

console.log(nums.hey())

Array.prototype.getAllValues = function(key){
    for (let i = 0; i < this.length; i++) {
        console.log(this[i][key])
    }
}

students.getAllValues('name')








