const average = (tab) => {
  let nb = 0
  for (const elem of tab) {
    nb += elem
  }
  return nb / tab.length
}

//------------test--------------
console.log(average([10,5,0]))