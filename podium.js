const podium = (tab) => {
  let tmp = tab.map(x => x).sort()
  console.log(`1st: ${tmp[tmp.length - 1]}\n2st: ${tmp[tmp.length - 2]}\n3st: ${tmp[tmp.length - 3]}\n`)
}

//------------test--------------
let tab = [2, 5, 8, 3, 7, 0]
podium(tab)