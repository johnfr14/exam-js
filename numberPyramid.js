const numberPyramid = (nbBase) => {
  for (let i = 0; i <= nbBase; i++) {
    console.log(`${String.fromCharCode(i + 48).repeat(i)}`)
  }
}

//------------test--------------
numberPyramid(9)