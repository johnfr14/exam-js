const guess = (userGuess, secret) => {
  if (userGuess === secret) {
    return console.log('You win')
  } else {
    return console.log(`${userGuess > secret ? 'Too big!' : 'Too small!'}`)
  }
}

//------------test--------------
guess(50,50)
guess(40,50)
guess(60,50)