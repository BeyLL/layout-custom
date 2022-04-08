// const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//   [1, 10, 3].filter((item) => {
//     if (item === arr[i]) {
//       console.log(arr[i])
//     }
//   })
// }
const arr = [
  { name: '1' },
  { name: '3' },
  { name: '4' },
  { name: '8' },
  { name: '2' }
]
const arr1 = []

for (const attr in arr) {
  ;['1', '4', '5', '6', '2'].filter(item => {
    if (item === arr[attr].name) {
      arr1.push(arr[attr])
    }
  })
}
console.log(arr1)

const arr2 = ['1', '4', '5', '6', '2', '9']
  .concat(arr1)
  .filter((item, i, Arr) => {
    return Arr.indexOf(item) === Arr.lastIndexOf(item)
  })
console.log(arr2)

const one = [1, 3, 5, 7, 9]
const tow = [1, 3, 8, 8, 2, 9]
const result = []
for (let i = 0; i < one.length; i++) {
  for (let j = 0; j < tow.length; j++) {
    if (tow[j] === one[i]) {
      result.push(tow[j])
    }
  }
}
console.log(result)
