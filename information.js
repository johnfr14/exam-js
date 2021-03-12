const information = (name, surname, age) => {
  console.log(`prenom: ${name}\nnom: ${surname}\nage: ${age}`)
  age >= 18 ? console.log(`vous êtes majeur depuis ${age - 18} ans\n`) : console.log(`vous serez majeur dans ${18 - age} ans\n`)
}

//------------test--------------
information ('Sofiane', 'Akermoun', 39)
information('Alice', 'Liddell', 7)