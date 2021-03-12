const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log(`\n\nBoucle for :`)
console.log(`${'-'.repeat(30)}`)

for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length:${tab[i].length}`)
}
//-----------------------------------------------------------------------------
console.log(`\n\nBoucle for of :`)
console.log(`${'-'.repeat(30)}`)

for (const elem of tab) {
  console.log(`${elem}, length:${elem.length}`)
}
//-----------------------------------------------------------------------------
console.log(`\n\nBoucle forEach :`)
console.log(`${'-'.repeat(30)}`)

tab.forEach(elem => {
  console.log(`${elem}, length:${elem.length}`)
})
//-----------------------------------------------------------------------------
console.log(`\n\nBoucle do-while :`)
console.log(`${'-'.repeat(30)}`)

let i = 0
do {
  console.log(`${tab[i]}, length:${tab[i].length}`)
  i++
} while (i < tab.length)
//------------------------------------------------------------------------------
console.log(`\n\nBoucle while :`)
console.log(`${'-'.repeat(30)}`)

i = 0
while (i < tab.length) {
  console.log(`${tab[i]}, length:${tab[i].length}`)
  i++
}