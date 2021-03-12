const isMagicSquare = (tab) => {
  let tmp = []

  for (let i = 0; i < tab.length; i++) {
    tmp.push(tab[i].reduce((x , y) => {return x + y})) 
  }
  for (let i = 0; i < tab.length; i++) {
    let tmp2 = 0
    for (let j = 0; j < tab.length; j++) {
      tmp2 += tab[j][i]
    }
    tmp.push(tmp2) 
  }
  let tmp3 = 0
  for (let i = 0; i < tab.length; i++) {
    tmp3 += tab[i][i]
  }
  tmp.push(tmp3) 
  let tmp4 = 0
  for (let i = tab.length - 1; i >= 0; i--) {
    tmp4 += tab[i][i]
  }
  tmp.push(tmp4) 

  if(tmp.reduce((x , y) => {return x + y}) / tmp.length === tmp3) {
    console.log('C\'est un carré magique')
  } else {
    console.log('Ce n\'est pas un carré magique')
  }
}

const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

isMagicSquare(square)